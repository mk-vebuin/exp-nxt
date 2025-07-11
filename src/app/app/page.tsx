"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  Plus,
  Receipt,
  BarChart3,
  User,
  Settings,
  Bell,
  WifiOff,
  RefreshCcw,
  Save,
  ShoppingCart,
  Car,
  Utensils,
  Gamepad2,
  HeartHandshake,
  DollarSign,
  CreditCard,
  Wallet,
  Smartphone,
  Calendar,
  Clock,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Search,
  Eye,
  Zap,
} from "lucide-react";

// Enhanced Add Expense Form
function AddExpenseForm() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(
    new Date().toTimeString().split(" ")[0].slice(0, 5),
  );

  const categories = [
    {
      id: "food",
      name: "Food & Dining",
      icon: Utensils,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      id: "transport",
      name: "Transport",
      icon: Car,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: ShoppingCart,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: "entertainment",
      name: "Entertainment",
      icon: Gamepad2,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: HeartHandshake,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: "income",
      name: "Income",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const paymentMethods = [
    { id: "cash", name: "Cash", icon: Wallet },
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "upi", name: "UPI", icon: Smartphone },
    { id: "bank", name: "Bank Transfer", icon: DollarSign },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      amount,
      category,
      description,
      paidBy,
      date,
      time,
    });
    // Reset form
    setAmount("");
    setCategory("");
    setDescription("");
    setPaidBy("");
  };

  return (
    <div className="p-4 pb-24 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Add Expense</h2>
        <p className="text-muted-foreground">
          Track your spending and stay on budget
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount Input */}
        <Card className="border-2 border-primary/20">
          <CardContent className="p-4">
            <label
              htmlFor="amount"
              className="text-base font-medium block mb-3"
            >
              Amount *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-primary">
                ₹
              </span>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-12 text-2xl font-bold h-16 border-0 bg-transparent focus:ring-0"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Selection */}
        <div className="space-y-3">
          <label className="text-base font-medium">Category *</label>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    category === cat.id
                      ? "border-primary bg-primary/10 shadow-lg"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.bgColor}`}
                    >
                      <IconComponent className={`h-6 w-6 ${cat.color}`} />
                    </div>
                    <span className="text-sm font-medium text-center">
                      {cat.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="text-base font-medium">
            Description
          </label>
          <Input
            id="description"
            placeholder="What did you spend on?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Payment Method */}
        <div className="space-y-3">
          <label className="text-base font-medium">Paid By *</label>
          <Select value={paidBy} onValueChange={setPaidBy} required>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select payment method" />
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

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="date" className="text-base font-medium">
              Date
            </label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12 pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="text-base font-medium">
              Time
            </label>
            <div className="relative">
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-12 pl-10"
              />
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-lg shadow-lg"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Expense
          </Button>
        </div>
      </form>

      {/* Quick Amount Buttons */}
      <Card>
        <CardContent className="p-4">
          <label className="text-sm font-medium text-muted-foreground block mb-3">
            Quick amounts
          </label>
          <div className="grid grid-cols-4 gap-2">
            {["100", "500", "1000", "2000"].map((quickAmount) => (
              <Button
                key={quickAmount}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setAmount(quickAmount)}
                className="h-10"
              >
                ₹{quickAmount}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Enhanced Dashboard Component
function Dashboard() {
  const todayExpenses = [
    {
      icon: "🛒",
      title: "Groceries",
      category: "Food",
      amount: "-₹1,250",
      time: "2 hours ago",
      color: "text-expense",
    },
    {
      icon: "⛽",
      title: "Fuel",
      category: "Transport",
      amount: "-₹2,000",
      time: "Yesterday",
      color: "text-expense",
    },
    {
      icon: "💰",
      title: "Salary",
      category: "Income",
      amount: "+₹55,000",
      time: "3 days ago",
      color: "text-secondary",
    },
  ];

  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground shadow-2xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Balance</div>
              <div className="text-3xl font-bold">₹45,250</div>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Eye className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm opacity-90">
              <TrendingUp className="h-4 w-4" />
              <span>+12% this month</span>
            </div>
            <div className="text-sm opacity-90">₹2,430 spent today</div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-secondary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">This Month</div>
              <ArrowUpRight className="h-4 w-4 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-primary">₹12,450</div>
            <div className="text-xs text-secondary">+8% from last month</div>
          </CardContent>
        </Card>
        <Card className="border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">This Week</div>
              <ArrowDownRight className="h-4 w-4 text-warning" />
            </div>
            <div className="text-2xl font-bold text-secondary">₹3,280</div>
            <div className="text-xs text-warning">Budget limit: ₹5,000</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Expenses */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Today&apos;s Expenses</CardTitle>
            <Badge variant="secondary" className="bg-expense/10 text-expense">
              ₹3,250
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {todayExpenses.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  {transaction.icon}
                </div>
                <div>
                  <div className="font-medium">{transaction.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.category} • {transaction.time}
                  </div>
                </div>
              </div>
              <div className={`font-bold ${transaction.color}`}>
                {transaction.amount}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-primary h-14 text-lg font-semibold shadow-lg">
          <Plus className="h-5 w-5 mr-2" />
          Add Expense
        </Button>
        <Button variant="outline" className="h-14 text-lg border-2">
          <BarChart3 className="h-5 w-5 mr-2" />
          View Reports
        </Button>
      </div>

      {/* Weekly Overview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Weekly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Utensils className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-sm font-medium">Food</div>
              <div className="text-xs text-muted-foreground">₹4,200</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium">Transport</div>
              <div className="text-xs text-muted-foreground">₹2,800</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <ShoppingCart className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">Shopping</div>
              <div className="text-xs text-muted-foreground">₹1,900</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// History View with better mobile design
function HistoryView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const expenses = [
    {
      id: 1,
      icon: "🛒",
      title: "Groceries",
      category: "Food",
      amount: -1250,
      date: "Today",
      paymentMethod: "UPI",
    },
    {
      id: 2,
      icon: "⛽",
      title: "Fuel",
      category: "Transport",
      amount: -2000,
      date: "Yesterday",
      paymentMethod: "Card",
    },
    {
      id: 3,
      icon: "💰",
      title: "Salary",
      category: "Income",
      amount: 55000,
      date: "3 days ago",
      paymentMethod: "Bank",
    },
  ];

  return (
    <div className="p-4 space-y-6 pb-24">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Transaction History</h2>

        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Expense List */}
      <div className="space-y-3">
        {expenses.map((expense) => (
          <Card key={expense.id} className="border border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                    {expense.icon}
                  </div>
                  <div>
                    <div className="font-medium">{expense.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {expense.category} • {expense.date}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      via {expense.paymentMethod}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-lg font-bold ${
                      expense.amount >= 0 ? "text-secondary" : "text-expense"
                    }`}
                  >
                    {expense.amount >= 0 ? "+" : ""}₹
                    {Math.abs(expense.amount).toLocaleString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function MobileAppPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOffline, setIsOffline] = useState(false);
  const [pendingSync, setPendingSync] = useState(4);

  const renderScreen = () => {
    switch (activeTab) {
      case "add":
        return <AddExpenseForm />;
      case "history":
        return <HistoryView />;
      case "reports":
        return (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Reports & Analytics</h3>
            <p className="text-muted-foreground">
              Detailed spending insights and charts coming soon
            </p>
          </div>
        );
      case "profile":
        return (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <User className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Profile Settings</h3>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto border-x border-border/50 relative">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold">
            Expensiq
          </Link>
          <div className="flex items-center gap-3">
            {isOffline && (
              <Badge variant="secondary" className="bg-warning/20 text-warning">
                <WifiOff className="h-3 w-3 mr-1" />
                Offline
              </Badge>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Offline Banner */}
        {isOffline && (
          <div className="bg-warning/20 border-t border-warning/30 p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-warning-foreground">
                Offline mode. {pendingSync} expenses waiting to sync.
              </span>
              <RefreshCcw className="h-4 w-4 text-warning-foreground animate-spin" />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{renderScreen()}</main>

      {/* Bottom Navigation */}
      <nav className="bg-background border-t border-border/50 sticky bottom-0 z-50">
        <div className="grid grid-cols-5 p-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              activeTab === "dashboard"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              activeTab === "history"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Receipt className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">History</span>
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className="flex flex-col items-center p-2 mx-2"
          >
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg mb-1">
              <Plus className="h-6 w-6 text-primary-foreground" />
            </div>
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              activeTab === "reports"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Reports</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              activeTab === "profile"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>

      {/* Quick Action Floating Button (optional alternative) */}
      {activeTab !== "add" && (
        <button
          onClick={() => setActiveTab("add")}
          className="fixed bottom-20 right-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-105 transition-transform"
        >
          <Zap className="h-6 w-6 text-secondary-foreground" />
        </button>
      )}
    </div>
  );
}
