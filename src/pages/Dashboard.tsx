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
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  MessageSquare,
  TrendingUp,
  Upload
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  avatar_url: string | null;
  cv_url: string | null;
  bio: string | null;
}

interface UserRole {
  role: string;
}

const Dashboard = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      const { data: rolesData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id);

      const { data: notificationsData } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(5);

      setProfile(profileData);
      setRoles(rolesData || []);
      setNotifications(notificationsData || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCVUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    toast({
      title: "Upload en cours...",
      description: "Votre CV est en cours de téléchargement.",
    });

    // Simulation d'upload - en production, utiliser Supabase Storage
    setTimeout(() => {
      toast({
        title: "CV téléchargé!",
        description: "Votre CV a été mis à jour avec succès.",
      });
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Sidebar Profile */}
          <div className="md:col-span-3">
            <Card className="glass border-2 p-6 sticky top-24">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24 border-4 border-primary">
                  <AvatarFallback className="bg-gradient-primary text-white text-2xl">
                    {profile?.full_name?.split(" ").map(n => n[0]).join("") || "U"}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <h2 className="text-xl font-bold">{profile?.full_name || "Utilisateur"}</h2>
                  <p className="text-sm text-muted-foreground">{profile?.email}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {roles.map((role, index) => (
                    <Badge key={index} variant="secondary" className="capitalize">
                      {role.role}
                    </Badge>
                  ))}
                </div>

                {profile?.bio && (
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    {profile.bio}
                  </p>
                )}

                <div className="w-full space-y-2 mt-4">
                  <label htmlFor="cv-upload">
                    <Button variant="outline" className="w-full" asChild>
                      <span className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        {profile?.cv_url ? "Mettre à jour CV" : "Télécharger CV"}
                      </span>
                    </Button>
                  </label>
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleCVUpload}
                  />
                  
                  <Link to="/profile/edit">
                    <Button variant="energy" className="w-full">
                      Modifier Profil
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Aperçu</TabsTrigger>
                <TabsTrigger value="notifications">
                  Notifications
                  {notifications.filter(n => !n.is_read).length > 0 && (
                    <Badge variant="destructive" className="ml-2 px-1.5 py-0.5 text-xs">
                      {notifications.filter(n => !n.is_read).length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="activity">Activité</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="glass border-2 p-6 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">Formations</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="glass border-2 p-6 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <Users className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-sm text-muted-foreground">Sessions</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="glass border-2 p-6 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-energy/10 rounded-lg">
                        <Award className="w-6 h-6 text-energy" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">5</p>
                        <p className="text-sm text-muted-foreground">Badges</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="glass border-2 p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Prochains Événements
                    </h3>
                    <div className="space-y-3">
                      <Link to="/evenements">
                        <div className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                          <p className="font-semibold">Atelier IA et Data Science</p>
                          <p className="text-sm text-muted-foreground">15 Nov 2025 • 14:00</p>
                        </div>
                      </Link>
                      <Link to="/mentorat">
                        <div className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                          <p className="font-semibold">Session Mentorat</p>
                          <p className="text-sm text-muted-foreground">18 Nov 2025 • 10:00</p>
                        </div>
                      </Link>
                    </div>
                  </Card>

                  <Card className="glass border-2 p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Recommandations
                    </h3>
                    <div className="space-y-3">
                      <Link to="/formations">
                        <div className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                          <p className="font-semibold">Master en IA</p>
                          <p className="text-sm text-muted-foreground">95% de compatibilité</p>
                        </div>
                      </Link>
                      <Link to="/opportunites">
                        <div className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors">
                          <p className="font-semibold">Stage Data Scientist</p>
                          <p className="text-sm text-muted-foreground">Google Paris</p>
                        </div>
                      </Link>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4">
                {notifications.length === 0 ? (
                  <Card className="glass border-2 p-12 text-center">
                    <Bell className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucune notification</p>
                  </Card>
                ) : (
                  notifications.map((notification) => (
                    <Card key={notification.id} className={`glass border-2 p-4 ${!notification.is_read ? 'border-primary' : ''}`}>
                      <div className="flex items-start gap-3">
                        <Bell className={`w-5 h-5 mt-1 ${!notification.is_read ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <h4 className="font-semibold">{notification.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {new Date(notification.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="activity">
                <Card className="glass border-2 p-6">
                  <h3 className="text-lg font-bold mb-4">Activité Récente</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Nouveau message sur le forum</p>
                        <p className="text-sm text-muted-foreground">Il y a 2 heures</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="badges">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="glass border-2 p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-3 text-energy" />
                    <h4 className="font-bold">Participant Actif</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Participé à 10+ événements
                    </p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;