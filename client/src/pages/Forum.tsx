/**
 * Forum Page - Regnard Medical
 * Espace de discussion pour le personnel médical
 */

import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MessageSquare, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Forum() {
  const { user, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [newTopicDescription, setNewTopicDescription] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  // Queries
  const { data: topics, isLoading: topicsLoading, refetch: refetchTopics } = trpc.forum.getTopics.useQuery();
  const { data: currentTopic } = trpc.forum.getTopic.useQuery(
    { topicId: selectedTopic || 0 },
    { enabled: !!selectedTopic }
  );
  const { data: posts, refetch: refetchPosts } = trpc.forum.getPosts.useQuery(
    { topicId: selectedTopic || 0 },
    { enabled: !!selectedTopic }
  );

  // Mutations
  const createTopicMutation = trpc.forum.createTopic.useMutation({
    onSuccess: () => {
      setNewTopicTitle("");
      setNewTopicDescription("");
      refetchTopics();
      toast.success(t('forum.topic_created'));
    },
    onError: (error) => {
      toast.error(error.message || t('common.error'));
    },
  });

  const createPostMutation = trpc.forum.createPost.useMutation({
    onSuccess: () => {
      setNewPostContent("");
      refetchPosts();
      toast.success(t('forum.message_posted'));
    },
    onError: (error) => {
      toast.error(error.message || t('common.error'));
    },
  });

  const deletePostMutation = trpc.forum.deletePost.useMutation({
    onSuccess: () => {
      refetchPosts();
      toast.success(t('forum.message_deleted'));
    },
    onError: (error) => {
      toast.error(error.message || t('common.error'));
    },
  });

  const handleCreateTopic = async () => {
    if (!newTopicTitle.trim()) {
      toast.error(t('forum.title_required'));
      return;
    }
    await createTopicMutation.mutateAsync({
      title: newTopicTitle,
      description: newTopicDescription,
    });
  };

  const handleCreatePost = async () => {
    if (!selectedTopic) {
      toast.error(t('forum.topic_required'));
      return;
    }
    if (!newPostContent.trim()) {
      toast.error(t('forum.content_required'));
      return;
    }
    await createPostMutation.mutateAsync({
      topicId: selectedTopic,
      content: newPostContent,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <div className="container py-12">
          <div className="mb-12">
            <h1 className="font-bold text-foreground mb-2">{t('forum.title.heading')}</h1>
            <p className="text-muted-foreground">
              {t('forum.title.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Topics List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    {t('forum.topics')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {topicsLoading ? (
                    <div className="flex justify-center py-4">
                      <Loader2 className="animate-spin h-5 w-5" />
                    </div>
                  ) : topics && topics.length > 0 ? (
                    topics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedTopic === topic.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80 text-foreground"
                        }`}
                      >
                        <div className="font-medium text-sm truncate">{topic.title}</div>
                        {topic.description && (
                          <div className="text-xs opacity-75 truncate">{topic.description}</div>
                        )}
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">{t('forum.no_topics')}</p>
                  )}
                </CardContent>
              </Card>

              {/* Create Topic */}
              {isAuthenticated && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">{t('forum.create_topic')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder={t('forum.topic_title')}
                      value={newTopicTitle}
                      onChange={(e) => setNewTopicTitle(e.target.value)}
                    />
                    <Textarea
                      placeholder={t('forum.topic_description')}
                      value={newTopicDescription}
                      onChange={(e) => setNewTopicDescription(e.target.value)}
                      rows={3}
                    />
                    <Button
                      onClick={handleCreateTopic}
                      disabled={createTopicMutation.isPending}
                      className="w-full"
                    >
                      {createTopicMutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          {t('forum.creating')}
                        </>
                      ) : (
                        t('forum.create_topic_button')
                      )}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Posts */}
            <div className="lg:col-span-2">
              {selectedTopic ? (
                <div className="space-y-6">
                  {currentTopic && (
                    <Card>
                      <CardHeader>
                        <CardTitle>{currentTopic.title}</CardTitle>
                        {currentTopic.description && (
                          <CardDescription>{currentTopic.description}</CardDescription>
                        )}
                      </CardHeader>
                    </Card>
                  )}

                  {/* Posts List */}
                  <div className="space-y-4">
                    {posts && posts.length > 0 ? (
                      posts.map((post) => (
                        <Card key={post.id}>
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-3">
                              <div className="text-sm text-muted-foreground">
                                {t('forum.message_number')}{post.id}
                              </div>
                              {(user?.role === 'moderator' || user?.role === 'admin' || user?.role === 'superadmin') && (
                                <button
                                  onClick={() => deletePostMutation.mutate({ postId: post.id })}
                                  className="text-destructive hover:text-destructive/80 transition-colors"
                                  title="Supprimer ce message"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                            <p className="text-foreground whitespace-pre-wrap">{post.content}</p>
                            <div className="text-xs text-muted-foreground mt-3">
                              {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-8">{t('forum.no_messages')}</p>
                    )}
                  </div>

                  {/* Create Post */}
                  {isAuthenticated && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{t('forum.add_message')}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Textarea
                          placeholder={t('forum.your_message')}
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                          rows={4}
                        />
                        <Button
                          onClick={handleCreatePost}
                          disabled={createPostMutation.isPending}
                          className="w-full"
                        >
                          {createPostMutation.isPending ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              {t('forum.sending')}
                            </>
                          ) : (
                            t('forum.post_message')
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <Card>
                  <CardContent className="pt-12 pb-12 text-center">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">{t('forum.select_topic')}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {!isAuthenticated && (
            <Card className="mt-8 bg-secondary/50">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground mb-4">
                  {t('forum.login_required')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
