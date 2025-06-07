
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2, Building, Upload } from "lucide-react";

interface Client {
  id: number;
  name: string;
  logo: string;
  imageUrl?: string;
}

export const ClientManager = () => {
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: "Pakistan Institute of Fashion", logo: "PIF" },
    { id: 2, name: "Superior University", logo: "SU" },
    { id: 3, name: "Govt. MAO College", logo: "GMC" },
    { id: 4, name: "Beaconhouse", logo: "BH" },
    { id: 5, name: "COMSATS", logo: "CU" },
    { id: 6, name: "Allied Bank", logo: "AB" }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    imageUrl: ""
  });

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      logo: client.logo,
      imageUrl: client.imageUrl || ""
    });
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingClient) {
      // Update existing client
      setClients(clients.map(client => 
        client.id === editingClient.id 
          ? { ...client, ...formData }
          : client
      ));
    } else {
      // Add new client
      const newClient: Client = {
        id: Math.max(...clients.map(c => c.id), 0) + 1,
        ...formData
      };
      setClients([...clients, newClient]);
    }

    // Reset form
    setFormData({ name: "", logo: "", imageUrl: "" });
    setIsEditing(false);
    setEditingClient(null);
  };

  const handleCancel = () => {
    setFormData({ name: "", logo: "", imageUrl: "" });
    setIsEditing(false);
    setEditingClient(null);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>{editingClient ? "Edit Client" : "Add New Client"}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Client Name
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Pakistan Institute of Fashion"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Logo Abbreviation
                </label>
                <Input
                  type="text"
                  placeholder="e.g., PIF"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Logo Image URL (Optional)
              </label>
              <Input
                type="url"
                placeholder="https://example.com/logo.png"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
              />
              <p className="text-xs text-gray-400 mt-1">
                If no image URL is provided, the logo abbreviation will be displayed
              </p>
            </div>
            <div className="flex space-x-3">
              <Button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700"
              >
                {editingClient ? "Update Client" : "Add Client"}
              </Button>
              {isEditing && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={handleCancel}
                  className="border-gray-600 text-gray-300"
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">Current Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300">Logo</TableHead>
                <TableHead className="text-gray-300">Client Name</TableHead>
                <TableHead className="text-gray-300">Logo Text</TableHead>
                <TableHead className="text-gray-300">Image URL</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id} className="border-gray-700">
                  <TableCell>
                    <div className="bg-gradient-to-br from-purple-600 to-red-600 w-10 h-10 rounded-lg flex items-center justify-center">
                      {client.imageUrl ? (
                        <img 
                          src={client.imageUrl} 
                          alt={client.name}
                          className="w-8 h-8 object-contain rounded"
                        />
                      ) : (
                        <span className="text-white font-bold text-xs">{client.logo}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{client.name}</TableCell>
                  <TableCell className="text-gray-300">{client.logo}</TableCell>
                  <TableCell className="text-gray-300">
                    {client.imageUrl ? (
                      <span className="text-green-400">✓ Set</span>
                    ) : (
                      <span className="text-gray-500">Not set</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(client)}
                        className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(client.id)}
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
