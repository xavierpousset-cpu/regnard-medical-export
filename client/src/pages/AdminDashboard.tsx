/**
 * Admin Dashboard - Gestion des demandes de devis
 * Page protégée accessible uniquement aux administrateurs
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Search, Download, Loader2, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";

function AdminDashboardContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProduct, setFilterProduct] = useState<string>("all");

  // Récupérer les demandes de devis
  const { data: quotes, isLoading, error } = trpc.quotes.list.useQuery();

  // Filtrer et chercher
  const filteredQuotes = useMemo(() => {
    if (!quotes) return [];
    
    return quotes.filter((quote: any) => {
      const matchesSearch = 
        quote.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.establishment.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesProduct = filterProduct === "all" || quote.function === filterProduct;
      
      return matchesSearch && matchesProduct;
    });
  }, [quotes, searchTerm, filterProduct]);

  // Exporter en CSV
  const handleExport = useCallback(() => {
    if (!quotes || quotes.length === 0) {
      toast.error("Aucune demande à exporter");
      return;
    }

    const headers = ["Nom", "Fonction", "Établissement", "Type Structure", "Email", "Téléphone", "Besoin Estimé", "Message", "Date"];
    const rows = quotes.map((quote: any) => [
      quote.name,
      quote.function,
      quote.establishment,
      quote.structureType,
      quote.email,
      quote.phone,
      quote.estimatedNeed || "-",
      quote.message || "-",
      new Date(quote.createdAt).toLocaleDateString("fr-FR"),
    ]);

    const csv = [
      headers.join(","),
      ...rows.map(row => row.map((cell: string) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `demandes-devis-${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Fichier exporté avec succès");
  }, [quotes]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              Erreur
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Impossible de charger les demandes de devis. Veuillez réessayer.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const products = quotes ? Array.from(new Set(quotes.map((q: any) => q.function))) : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="font-bold text-foreground mb-2">Tableau de bord Admin</h1>
          <p className="text-muted-foreground">Gérez et visualisez toutes les demandes de devis</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total des demandes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{quotes?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Demandes filtrées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{filteredQuotes.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Produits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{products.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres et recherche */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Rechercher</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Nom, email, établissement..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Produit</label>
                <select
                  value={filterProduct}
                  onChange={(e) => setFilterProduct(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  <option value="all">Tous les produits</option>
                  {products.map((product: string) => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <Button onClick={handleExport} variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Exporter en CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tableau des demandes */}
        <Card>
          <CardHeader>
            <CardTitle>Demandes de devis ({filteredQuotes.length})</CardTitle>
            <CardDescription>Liste complète des demandes reçues</CardDescription>
          </CardHeader>
          <CardContent>
            {filteredQuotes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Aucune demande ne correspond à vos critères</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Nom</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Fonction</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Établissement</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Téléphone</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQuotes.map((quote: any, index: number) => (
                      <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-medium text-foreground">{quote.name}</div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{quote.function}</Badge>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{quote.establishment}</td>
                        <td className="py-3 px-4">
                          <a href={`mailto:${quote.email}`} className="text-primary hover:underline">
                            {quote.email}
                          </a>
                        </td>
                        <td className="py-3 px-4">
                          <a href={`tel:${quote.phone}`} className="text-primary hover:underline">
                            {quote.phone}
                          </a>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary">{quote.structureType}</Badge>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {new Date(quote.createdAt).toLocaleDateString("fr-FR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();

  // Rediriger si non authentifié ou non admin
  useEffect(() => {
    if (!loading && (!isAuthenticated || user?.role !== "admin")) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user?.role, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "admin") {
    return null;
  }

  return <AdminDashboardContent />;
}
