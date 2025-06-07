
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

interface AdminLoginProps {
  onLogin: () => void;
}

export const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      alert("Invalid credentials! Use admin/admin123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 bg-gray-800 border-purple-500/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Wifi className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">McSOL Admin</span>
          </div>
          <p className="text-gray-300">Sign in to manage your ISP</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-4 text-sm text-gray-400 text-center">
          Demo credentials: admin / admin123
        </div>
      </Card>
    </div>
  );
};
