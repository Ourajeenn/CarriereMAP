import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Users,
  TrendingUp,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Mail,
  Phone
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  sector: string;
  type: "Particulier" | "Entreprise";
  status: "Nouveau" | "En cours" | "Validé" | "Refusé";
  date: string;
}

const mockLeads: Lead[] = [
  { id: "1", name: "Jean Dupont", email: "j.dupont@tech.fr", phone: "06 12 34 56 78", sector: "Atlas (Informatique)", type: "Particulier", status: "Nouveau", date: "02/04/2026" },
  { id: "2", name: "Sarah Martin", email: "s.martin@pme-elec.com", phone: "07 88 99 00 11", sector: "Constructys (BTP)", type: "Entreprise", status: "En cours", date: "01/04/2026" },
  { id: "3", name: "Marc Leroy", email: "m.leroy@gmail.com", phone: "06 55 44 33 22", sector: "OPCO Santé", type: "Particulier", status: "Validé", date: "28/03/2026" },
  { id: "4", name: "Lucie Bernard", email: "lucie.b@distribution.fr", phone: "01 22 33 44 55", sector: "Opcommerce", type: "Entreprise", status: "Refusé", date: "25/03/2026" },
];

const Dashboard = () => {
  const [profile, setProfile] = useState<any>(null);
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        setProfile(profileData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Nouveau": return <Badge className="bg-blue-500 hover:bg-blue-600">Nouveau</Badge>;
      case "En cours": return <Badge className="bg-yellow-500 hover:bg-yellow-600">En cours</Badge>;
      case "Validé": return <Badge className="bg-green-500 hover:bg-green-600">Validé</Badge>;
      case "Refusé": return <Badge className="bg-red-500 hover:bg-red-600">Refusé</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50/20">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50/10">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
              Dashboard <span className="text-primary italic">Conseiller</span>
            </h1>
            <p className="text-gray-500 font-medium">Gestion et aiguillage des leads entrants.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full shadow-sm">
              <Bell className="w-4 h-4 mr-2" /> Notifications
            </Button>
            <Avatar className="w-10 h-10 border-2 border-primary shadow-sm">
              <AvatarFallback className="bg-primary text-white font-bold">
                {profile?.full_name?.split(" ").map((n: string) => n[0]).join("") || "AD"}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="p-6 bg-white border-none shadow-sm flex items-center gap-4 group hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900 uppercase italic">154</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Leads</p>
            </div>
          </Card>
          <Card className="p-6 bg-white border-none shadow-sm flex items-center gap-4 group hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900 uppercase italic">12</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">À traiter</p>
            </div>
          </Card>
          <Card className="p-6 bg-white border-none shadow-sm flex items-center gap-4 group hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900 uppercase italic">78%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Conversion</p>
            </div>
          </Card>
          <Card className="p-6 bg-white border-none shadow-sm flex items-center gap-4 group hover:shadow-md transition-shadow">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900 uppercase italic">5</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">En attente OPCO</p>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-xl shadow-sm border-none mb-4">
            <TabsTrigger value="leads" className="rounded-lg font-bold uppercase tracking-wider text-xs">Liste des Leads</TabsTrigger>
            <TabsTrigger value="stats" className="rounded-lg font-bold uppercase tracking-wider text-xs">Statistiques</TabsTrigger>
            <TabsTrigger value="settings" className="rounded-lg font-bold uppercase tracking-wider text-xs">Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <Card className="border-none shadow-sm bg-white overflow-hidden">
              <div className="p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un lead (nom, email, sector)..."
                    className="w-full bg-blue-50/50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 ring-primary/20 outline-none font-medium"
                  />
                </div>
                <Button variant="ghost" className="text-primary font-bold">
                  <Filter className="w-4 h-4 mr-2" /> Filtrer
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-blue-50/30 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <tr>
                      <th className="px-6 py-4">Nom / Contact</th>
                      <th className="px-6 py-4">Secteur / OPCO</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-900">{lead.name}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-2 mt-1">
                            <Mail className="w-3 h-3" /> {lead.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-600">{lead.sector}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${lead.type === "Entreprise" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`}>
                            {lead.type}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(lead.status)}
                        </td>
                        <td className="px-6 py-4 text-gray-500">{lead.date}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 shrink-0">
                            <Button size="icon" variant="outline" className="w-8 h-8 rounded-full hover:bg-primary hover:text-white transition-all">
                              <Mail className="w-3.5 h-3.5" />
                            </Button>
                            <Button size="icon" variant="outline" className="w-8 h-8 rounded-full hover:bg-green-500 hover:text-white transition-all">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50/50 border-t flex justify-center">
                <Button variant="ghost" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-primary">
                  Charger plus de leads
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-none shadow-sm bg-white">
                <h3 className="text-lg font-black text-gray-900 uppercase italic mb-6">Distribution par Secteur</h3>
                <div className="space-y-4">
                  {[
                    { name: "Atlas (Tech)", value: 45, color: "bg-primary" },
                    { name: "Santé", value: 30, color: "bg-green-500" },
                    { name: "BTP", value: 15, color: "bg-yellow-500" },
                    { name: "Autres", value: 10, color: "bg-gray-300" }
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                        <span>{stat.name}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-8 border-none shadow-sm bg-white flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 uppercase">Objectif Atteint</h3>
                  <p className="text-gray-500 text-sm">Vous avez traité 95% des leads de la semaine. Excellent travail !</p>
                </div>
                <Button className="bg-gray-900 text-white rounded-full px-8 h-12 shadow-lg">Générer Rapport PDF</Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;