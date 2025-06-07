
import { useState } from "react";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Back to home arrow */}
      <Link to="/" className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          className="bg-gray-800/80 backdrop-blur-sm border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-200 shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </Link>

      {!isAuthenticated ? (
        <AdminLogin onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <AdminDashboard onLogout={() => setIsAuthenticated(false)} />
      )}
    </div>
  );
};

export default Admin;
