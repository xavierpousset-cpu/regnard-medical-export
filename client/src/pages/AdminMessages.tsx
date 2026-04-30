/**
 * Admin Messages - Dashboard pour gérer les messages de contact
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Mail, Archive, Trash2, Eye, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function AdminMessages() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  // Vérifier les permissions
  if (!isAuthenticated || (user?.role !== 'admin' && user?.role !== 'superadmin')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Accès refusé</h1>
          <p className="text-muted-foreground mb-6">
            Vous n'avez pas les permissions pour accéder à cette page.
          </p>
          <Button onClick={() => setLocation("/")} className="w-full">
            Retour à l'accueil
          </Button>
        </Card>
      </div>
    );
  }

  // Récupérer les messages
  const { data: messages, isLoading, refetch } = trpc.contact.list.useQuery();

  // Mutations
  const markAsReadMutation = trpc.contact.markAsRead.useMutation({
    onSuccess: () => {
      toast.success("Message marqué comme lu");
      refetch();
    },
  });

  const markAsRepliedMutation = trpc.contact.markAsReplied.useMutation({
    onSuccess: () => {
      toast.success("Message marqué comme répondu");
      refetch();
    },
  });

  const archiveMutation = trpc.contact.archive.useMutation({
    onSuccess: () => {
      toast.success("Message archivé");
      setSelectedMessage(null);
      refetch();
    },
  });

  const deleteMutation = trpc.contact.delete.useMutation({
    onSuccess: () => {
      toast.success("Message supprimé");
      setSelectedMessage(null);
      refetch();
    },
  });

  const newMessages = messages?.filter(m => m.status === 'new') || [];
  const readMessages = messages?.filter(m => m.status === 'read') || [];
  const repliedMessages = messages?.filter(m => m.status === 'replied') || [];
  const archivedMessages = messages?.filter(m => m.status === 'archived') || [];

  const selectedMsg = messages?.find(m => m.id === selectedMessage);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Messages de contact</h1>
          <p className="text-muted-foreground">
            Gérez les messages reçus via le formulaire de contact
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Chargement des messages...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 border-b border-border">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    selectedMessage === null
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Nouveaux ({newMessages.length})
                </button>
                <button
                  className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lus ({readMessages.length})
                </button>
                <button
                  className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Répondus ({repliedMessages.length})
                </button>
                <button
                  className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Archivés ({archivedMessages.length})
                </button>
              </div>

              {/* Messages List */}
              <div className="space-y-3">
                {newMessages.length === 0 ? (
                  <Card className="p-8 text-center">
                    <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Aucun nouveau message</p>
                  </Card>
                ) : (
                  newMessages.map((msg) => (
                    <Card
                      key={msg.id}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedMessage === msg.id
                          ? 'bg-primary/10 border-primary'
                          : 'hover:bg-secondary'
                      }`}
                      onClick={() => setSelectedMessage(msg.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{msg.nom}</h3>
                          <p className="text-sm text-muted-foreground">{msg.email}</p>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                            {msg.message}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                          {format(new Date(msg.createdAt), 'dd MMM yyyy', { locale: fr })}
                        </span>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-1">
              {selectedMsg ? (
                <Card className="p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Détails du message</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Nom</label>
                      <p className="text-foreground">{selectedMsg.nom}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="text-foreground break-all">{selectedMsg.email}</p>
                    </div>

                    {selectedMsg.fonction && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Fonction</label>
                        <p className="text-foreground">{selectedMsg.fonction}</p>
                      </div>
                    )}

                    {selectedMsg.etablissement && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Établissement</label>
                        <p className="text-foreground">{selectedMsg.etablissement}</p>
                      </div>
                    )}

                    {selectedMsg.telephone && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Téléphone</label>
                        <p className="text-foreground">{selectedMsg.telephone}</p>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Date</label>
                      <p className="text-foreground">
                        {format(new Date(selectedMsg.createdAt), 'dd MMMM yyyy à HH:mm', { locale: fr })}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Statut</label>
                      <p className="text-foreground capitalize">
                        {selectedMsg.status === 'new' && '🔴 Nouveau'}
                        {selectedMsg.status === 'read' && '🟡 Lu'}
                        {selectedMsg.status === 'replied' && '🟢 Répondu'}
                        {selectedMsg.status === 'archived' && '⚪ Archivé'}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mb-6">
                    <label className="text-sm font-medium text-muted-foreground block mb-2">Message</label>
                    <p className="text-foreground whitespace-pre-wrap">{selectedMsg.message}</p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    {selectedMsg.status === 'new' && (
                      <Button
                        onClick={() => markAsReadMutation.mutate({ messageId: selectedMsg.id })}
                        disabled={markAsReadMutation.isPending}
                        variant="outline"
                        className="w-full"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Marquer comme lu
                      </Button>
                    )}

                    {selectedMsg.status !== 'replied' && (
                      <Button
                        onClick={() => markAsRepliedMutation.mutate({ messageId: selectedMsg.id })}
                        disabled={markAsRepliedMutation.isPending}
                        variant="outline"
                        className="w-full"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Marquer comme répondu
                      </Button>
                    )}

                    {selectedMsg.status !== 'archived' && (
                      <Button
                        onClick={() => archiveMutation.mutate({ messageId: selectedMsg.id })}
                        disabled={archiveMutation.isPending}
                        variant="outline"
                        className="w-full"
                      >
                        <Archive className="h-4 w-4 mr-2" />
                        Archiver
                      </Button>
                    )}

                    <Button
                      onClick={() => deleteMutation.mutate({ messageId: selectedMsg.id })}
                      disabled={deleteMutation.isPending}
                      variant="destructive"
                      className="w-full"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground">Sélectionnez un message pour voir les détails</p>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
