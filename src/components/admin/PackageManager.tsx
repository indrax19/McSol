
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";

interface Package {
  id: string;
  name: string;
  speed: string;
  price: string;
  features: string[];
  popular: boolean;
}

export const PackageManager = () => {
  const [packages, setPackages] = useState<Package[]>([
    {
      id: "1",
      name: "Home Basic",
      speed: "25 Mbps",
      price: "Rs. 2,500",
      features: ["Download: 25 Mbps", "Upload: 5 Mbps", "Unlimited Data", "24/7 Support", "Free Installation"],
      popular: false
    },
    {
      id: "2",
      name: "Home Premium",
      speed: "50 Mbps",
      price: "Rs. 4,000",
      features: ["Download: 50 Mbps", "Upload: 10 Mbps", "Unlimited Data", "Priority Support", "Free Installation", "WiFi Router Included"],
      popular: true
    },
    {
      id: "3",
      name: "Business Pro",
      speed: "100 Mbps",
      price: "Rs. 8,000",
      features: ["Download: 100 Mbps", "Upload: 20 Mbps", "Unlimited Data", "Dedicated Support", "Static IP Address", "SLA Guarantee"],
      popular: false
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    speed: "",
    price: "",
    features: "",
    popular: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const featuresArray = formData.features.split(",").map(f => f.trim());
    
    if (editingPackage) {
      setPackages(packages.map(pkg => 
        pkg.id === editingPackage.id 
          ? { ...editingPackage, ...formData, features: featuresArray }
          : pkg
      ));
    } else {
      const newPackage: Package = {
        id: Date.now().toString(),
        ...formData,
        features: featuresArray
      };
      setPackages([...packages, newPackage]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", speed: "", price: "", features: "", popular: false });
    setEditingPackage(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (pkg: Package) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      speed: pkg.speed,
      price: pkg.price,
      features: pkg.features.join(", "),
      popular: pkg.popular
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this package?")) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  return (
    <Card className="p-6 bg-gray-800 border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Package Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Package
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-purple-500/20">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingPackage ? "Edit Package" : "Add New Package"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Package Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <Input
                placeholder="Speed (e.g., 25 Mbps)"
                value={formData.speed}
                onChange={(e) => setFormData({ ...formData, speed: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <Input
                placeholder="Price (e.g., Rs. 2,500)"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <Input
                placeholder="Features (comma separated)"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="checkbox"
                  checked={formData.popular}
                  onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                  className="rounded"
                />
                <span>Mark as Popular</span>
              </label>
              <div className="flex space-x-2">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  {editingPackage ? "Update" : "Add"} Package
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-purple-500/20">
            <TableHead className="text-purple-300">Name</TableHead>
            <TableHead className="text-purple-300">Speed</TableHead>
            <TableHead className="text-purple-300">Price</TableHead>
            <TableHead className="text-purple-300">Popular</TableHead>
            <TableHead className="text-purple-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((pkg) => (
            <TableRow key={pkg.id} className="border-purple-500/20">
              <TableCell className="text-white">{pkg.name}</TableCell>
              <TableCell className="text-white">{pkg.speed}</TableCell>
              <TableCell className="text-white">{pkg.price}</TableCell>
              <TableCell className="text-white">{pkg.popular ? "Yes" : "No"}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(pkg)}
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(pkg.id)}
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
