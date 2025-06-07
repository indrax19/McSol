
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  package: string;
  status: "Active" | "Inactive" | "Suspended";
  joinDate: string;
}

export const CustomerManager = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+92 300 1234567",
      package: "Home Premium",
      status: "Active",
      joinDate: "2024-01-15"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      phone: "+92 321 9876543",
      package: "Business Pro",
      status: "Active",
      joinDate: "2024-02-10"
    },
    {
      id: "3",
      name: "Ahmed Khan",
      email: "ahmed.khan@email.com",
      phone: "+92 333 5555555",
      package: "Home Basic",
      status: "Inactive",
      joinDate: "2024-03-05"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    status: "Active" as Customer["status"]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCustomer) {
      setCustomers(customers.map(customer => 
        customer.id === editingCustomer.id 
          ? { ...editingCustomer, ...formData }
          : customer
      ));
    } else {
      const newCustomer: Customer = {
        id: Date.now().toString(),
        ...formData,
        joinDate: new Date().toISOString().split('T')[0]
      };
      setCustomers([...customers, newCustomer]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", package: "", status: "Active" });
    setEditingCustomer(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      package: customer.package,
      status: customer.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  const getStatusColor = (status: Customer["status"]) => {
    switch (status) {
      case "Active": return "text-green-400";
      case "Inactive": return "text-yellow-400";
      case "Suspended": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <Card className="p-6 bg-gray-800 border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Customer Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-purple-500/20">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingCustomer ? "Edit Customer" : "Add New Customer"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Customer Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <Input
                placeholder="Package Name"
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Customer["status"] })}
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
              <div className="flex space-x-2">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  {editingCustomer ? "Update" : "Add"} Customer
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
            <TableHead className="text-purple-300">Email</TableHead>
            <TableHead className="text-purple-300">Phone</TableHead>
            <TableHead className="text-purple-300">Package</TableHead>
            <TableHead className="text-purple-300">Status</TableHead>
            <TableHead className="text-purple-300">Join Date</TableHead>
            <TableHead className="text-purple-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id} className="border-purple-500/20">
              <TableCell className="text-white font-medium">{customer.name}</TableCell>
              <TableCell className="text-white">{customer.email}</TableCell>
              <TableCell className="text-white">{customer.phone}</TableCell>
              <TableCell className="text-white">{customer.package}</TableCell>
              <TableCell className={getStatusColor(customer.status)}>
                {customer.status}
              </TableCell>
              <TableCell className="text-white">{customer.joinDate}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(customer)}
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(customer.id)}
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
