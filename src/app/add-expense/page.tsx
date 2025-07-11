"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Save,
  Calculator,
  Calendar,
  Clock,
  Tag,
  Receipt,
  Utensils,
  Car,
  ShoppingCart,
  Gamepad2,
  HeartHandshake,
  DollarSign,
  CreditCard,
  Wallet,
  Smartphone,
  Building,
  Camera,
  MapPin,
  Users,
  Plus,
} from "lucide-react";

export default function AddExpensePage() {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    subcategory: "",
    description: "",
    paymentMethod: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().split(" ")[0].slice(0, 5),
    location: "",
    tags: "",
    notes: "",
    isRecurring: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    {
      id: "food",
      name: "Food & Dining",
      icon: Utensils,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      subcategories: [
        "Restaurant",
        "Groceries",
        "Coffee",
        "Fast Food",
        "Delivery",
      ],
    },
    {
      id: "transport",
      name: "Transport",
      icon: Car,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      subcategories: [
        "Fuel",
        "Public Transport",
        "Taxi/Uber",
        "Parking",
        "Maintenance",
      ],
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: ShoppingCart,
      color: "text-green-500",
      bgColor: "bg-green-50",
      subcategories: [
        "Clothing",
        "Electronics",
        "Home & Garden",
        "Books",
        "Personal Care",
      ],
    },
    {
      id: "entertainment",
      name: "Entertainment",
      icon: Gamepad2,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      subcategories: ["Movies", "Gaming", "Sports", "Music", "Events"],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: HeartHandshake,
      color: "text-red-500",
      bgColor: "bg-red-50",
      subcategories: ["Doctor", "Pharmacy", "Dental", "Insurance", "Wellness"],
    },
    {
      id: "bills",
      name: "Bills & Utilities",
      icon: Building,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      subcategories: ["Electricity", "Internet", "Phone", "Rent", "Insurance"],
    },
    {
      id: "income",
      name: "Income",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      subcategories: ["Salary", "Freelance", "Investment", "Gift", "Other"],
    },
  ];

  const paymentMethods = [
    { id: "cash", name: "Cash", icon: Wallet },
    { id: "debit", name: "Debit Card", icon: CreditCard },
    { id: "credit", name: "Credit Card", icon: CreditCard },
    { id: "upi", name: "UPI Payment", icon: Smartphone },
    { id: "netbanking", name: "Net Banking", icon: Building },
    { id: "wallet", name: "Digital Wallet", icon: Smartphone },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const selectedCategory = categories.find(
    (cat) => cat.id === formData.category,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect back to dashboard or show success message
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleQuickAmount = (amount: string) => {
    setFormData((prev) => ({ ...prev, amount }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <Receipt className="h-4 w-4" />
            </div>
            <h1 className="text-xl font-bold">Add Expense</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Section */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <label className="text-lg font-medium block">
                  How much did you spend?
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-primary">
                    ₹
                  </span>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) =>
                      handleInputChange("amount", e.target.value)
                    }
                    className="pl-16 text-3xl font-bold h-20 border-0 bg-transparent focus:ring-0 text-center"
                    required
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-2 pt-4">
                  {["100", "500", "1000", "2000"].map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAmount(amount)}
                      className="h-10"
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Category
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        handleInputChange("category", category.id);
                        handleInputChange("subcategory", "");
                      }}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.category === category.id
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-border hover:border-primary/50 bg-card"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${category.bgColor}`}
                        >
                          <IconComponent
                            className={`h-6 w-6 ${category.color}`}
                          />
                        </div>
                        <span className="text-sm font-medium text-center">
                          {category.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Subcategory */}
              {selectedCategory && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subcategory</label>
                  <Select
                    value={formData.subcategory}
                    onValueChange={(value) =>
                      handleInputChange("subcategory", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCategory.subcategories.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Description and Details */}
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <Input
                  id="description"
                  placeholder="What did you spend on?"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Payment Method</label>
                <Select
                  value={formData.paymentMethod}
                  onValueChange={(value) =>
                    handleInputChange("paymentMethod", value)
                  }
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="How did you pay?" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethods.map((method) => {
                      const IconComponent = method.icon;
                      return (
                        <SelectItem key={method.id} value={method.id}>
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4" />
                            <span>{method.name}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Date
                  </label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      className="h-12 pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Time
                  </label>
                  <div className="relative">
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        handleInputChange("time", e.target.value)
                      }
                      className="h-12 pl-10"
                    />
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Location{" "}
                  <span className="text-muted-foreground">(Optional)</span>
                </label>
                <div className="relative">
                  <Input
                    id="location"
                    placeholder="Where did you spend?"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="h-12 pl-10"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium">
                  Tags{" "}
                  <span className="text-muted-foreground">
                    (Optional, comma-separated)
                  </span>
                </label>
                <Input
                  id="tags"
                  placeholder="work, lunch, weekend..."
                  value={formData.tags}
                  onChange={(e) => handleInputChange("tags", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">
                  Notes{" "}
                  <span className="text-muted-foreground">(Optional)</span>
                </label>
                <Input
                  id="notes"
                  placeholder="Additional notes..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="h-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6">
            <Button
              type="submit"
              disabled={
                isLoading ||
                !formData.amount ||
                !formData.category ||
                !formData.paymentMethod
              }
              className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg"
            >
              {isLoading ? (
                "Saving..."
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Save Expense
                </>
              )}
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.history.back()}
                className="h-12"
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  // Save and add another
                  console.log("Save and add another");
                }}
                className="h-12"
              >
                <Plus className="h-4 w-4 mr-2" />
                Save & Add More
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
