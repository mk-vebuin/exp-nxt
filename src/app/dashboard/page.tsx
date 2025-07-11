"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Search,
  Calendar,
  DollarSign,
  ArrowUpDown,
  Home,
  Receipt,
  FileText,
  Settings,
  User,
  LogOut,
  Plus,
  Calculator,
  Menu,
  X,
} from "lucide-react";

const expenses = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Grocery Shopping",
    category: "Food",
    amount: -1250,
    paymentMethod: "UPI",
    tags: ["groceries", "weekly"],
  },
  {
    id: 2,
    date: "2024-01-15",
    description: "Fuel",
    category: "Transport",
    amount: -2000,
    paymentMethod: "Card",
    tags: ["fuel", "car"],
  },
  {
    id: 3,
    date: "2024-01-14",
    description: "Office Lunch",
    category: "Food",
    amount: -450,
    paymentMethod: "Cash",
    tags: ["lunch", "office"],
  },
  {
    id: 4,
    date: "2024-01-01",
    description: "Monthly Salary",
    category: "Income",
    amount: 55000,
    paymentMethod: "Bank",
    tags: ["salary", "income"],
  },
  {
    id: 5,
    date: "2024-01-12",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: -1899,
    paymentMethod: "Card",
    tags: ["electronics", "online"],
  },
];

const categoryBreakdown = [
  { category: "Food", amount: 4250, percentage: 35, color: "#F59E0B" },
  { category: "Transport", amount: 3200, percentage: 26, color: "#3B82F6" },
  { category: "Shopping", amount: 2100, percentage: 17, color: "#10B981" },
  { category: "Utilities", amount: 1500, percentage: 12, color: "#8B5CF6" },
  {
    category: "Entertainment",
    amount: 1200,
    percentage: 10,
    color: "#F97316",
  },
];

const paymentBreakdown = [
  { method: "UPI", amount: 5800, percentage: 48 },
  { method: "Credit Card", amount: 3650, percentage: 30 },
  { method: "Cash", amount: 1850, percentage: 15 },
  { method: "Bank Transfer", amount: 950, percentage: 7 },
];

function MobileSidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "expenses", label: "Expenses", icon: Receipt },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "profile", label: "Profile", icon: User },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-80 px-0">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calculator className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Expensiq Web</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* User Info */}
          <div className="p-6 border-t">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                RS
              </div>
              <div className="flex-1">
                <div className="font-medium">Rahul Sharma</div>
                <div className="text-sm text-muted-foreground">
                  Premium User
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DesktopSidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "expenses", label: "Expenses", icon: Receipt },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="hidden lg:flex w-64 bg-background border-r border-border h-screen flex-col">
      {/* Logo */}
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Calculator className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">Expensiq Web</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
            RS
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Rahul Sharma</div>
            <div className="text-xs text-muted-foreground">Premium User</div>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

function TodaysExpenses() {
  const todaysExpenses = expenses.filter(
    (e) => e.date === new Date().toISOString().split("T")[0],
  );

  const totalToday = todaysExpenses
    .filter((e) => e.amount < 0)
    .reduce((sum, e) => sum + Math.abs(e.amount), 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Today&apos;s Expenses</span>
          <Badge variant="secondary">₹{totalToday.toLocaleString()}</Badge>
        </CardTitle>
        <CardDescription>
          {todaysExpenses.length} transactions today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {todaysExpenses.length > 0 ? (
            todaysExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Receipt className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{expense.description}</div>
                    <div className="text-sm text-muted-foreground">
                      {expense.category} • {expense.paymentMethod}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-expense">
                    -₹{Math.abs(expense.amount).toLocaleString()}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Receipt className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No expenses recorded today</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardView() {
  const totalExpenses = expenses
    .filter((e) => e.amount < 0)
    .reduce((sum, e) => sum + Math.abs(e.amount), 0);

  const totalIncome = expenses
    .filter((e) => e.amount > 0)
    .reduce((sum, e) => sum + e.amount, 0);

  const netAmount = totalIncome - totalExpenses;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold text-secondary">
              ₹{totalIncome.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-expense" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold text-expense">
              ₹{totalExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div
              className={`text-xl lg:text-2xl font-bold ${
                netAmount >= 0 ? "text-secondary" : "text-expense"
              }`}
            >
              ₹{Math.abs(netAmount).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {netAmount >= 0 ? "Surplus" : "Deficit"} this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold">
              {expenses.length}
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Expenses and Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Today's Expenses */}
        <div className="xl:col-span-1">
          <TodaysExpenses />
        </div>

        {/* Charts */}
        <div className="xl:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <PieChart className="h-4 lg:h-5 w-4 lg:w-5" />
                Category Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {categoryBreakdown.map((item) => (
                  <div key={item.category} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1 flex justify-between">
                      <span className="text-sm">{item.category}</span>
                      <span className="text-sm font-medium">
                        ₹{item.amount.toLocaleString()} ({item.percentage}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <BarChart3 className="h-4 lg:h-5 w-4 lg:w-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentBreakdown.map((item) => (
                  <div key={item.method} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.method}</span>
                      <span>₹{item.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest expense entries</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Mobile view */}
          <div className="lg:hidden space-y-3">
            {expenses.slice(0, 5).map((expense) => (
              <div key={expense.id} className="p-3 border rounded-lg space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{expense.description}</div>
                    <div className="text-sm text-muted-foreground">
                      {expense.date}
                    </div>
                  </div>
                  <div
                    className={`font-bold ${
                      expense.amount >= 0 ? "text-secondary" : "text-expense"
                    }`}
                  >
                    {expense.amount >= 0 ? "+" : ""}₹
                    {Math.abs(expense.amount).toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{expense.category}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {expense.paymentMethod}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden lg:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.slice(0, 5).map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{expense.category}</Badge>
                    </TableCell>
                    <TableCell>{expense.paymentMethod}</TableCell>
                    <TableCell
                      className={`text-right font-medium ${
                        expense.amount >= 0 ? "text-secondary" : "text-expense"
                      }`}
                    >
                      {expense.amount >= 0 ? "+" : ""}₹
                      {Math.abs(expense.amount).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ExpensesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("month");
  const [sortColumn, setSortColumn] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  const totalExpenses = expenses
    .filter((e) => e.amount < 0)
    .reduce((sum, e) => sum + Math.abs(e.amount), 0);

  const totalIncome = expenses
    .filter((e) => e.amount > 0)
    .reduce((sum, e) => sum + e.amount, 0);

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-bold">Expenses</h2>
          <p className="text-muted-foreground">
            Manage and filter your transactions
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button className="sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
          <Button variant="outline" className="sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Summary Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg lg:text-2xl font-bold text-primary">
                ₹{(totalIncome - totalExpenses).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Net Amount</div>
            </div>
            <div>
              <div className="text-lg lg:text-2xl font-bold text-secondary">
                ₹{totalIncome.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Income</div>
            </div>
            <div>
              <div className="text-lg lg:text-2xl font-bold text-expense">
                ₹{totalExpenses.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Expenses
              </div>
            </div>
            <div>
              <div className="text-lg lg:text-2xl font-bold">
                {filteredExpenses.length}
              </div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expenses List */}
      <Card>
        <CardContent className="p-0">
          {/* Mobile view */}
          <div className="lg:hidden">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="p-4 border-b last:border-b-0 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{expense.description}</div>
                    <div className="text-sm text-muted-foreground">
                      {expense.date}
                    </div>
                  </div>
                  <div
                    className={`font-bold ${
                      expense.amount >= 0 ? "text-secondary" : "text-expense"
                    }`}
                  >
                    {expense.amount >= 0 ? "+" : ""}₹
                    {Math.abs(expense.amount).toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge variant="secondary">{expense.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {expense.paymentMethod}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {expense.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {expense.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{expense.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden lg:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <button
                      onClick={() => handleSort("date")}
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      Date <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </TableHead>
                  <TableHead>
                    <button
                      onClick={() => handleSort("description")}
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      Description <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>
                    <button
                      onClick={() => handleSort("amount")}
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      Amount <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </TableHead>
                  <TableHead>Tags</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExpenses.map((expense) => (
                  <TableRow key={expense.id} className="hover:bg-muted/50">
                    <TableCell>{expense.date}</TableCell>
                    <TableCell className="font-medium">
                      {expense.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{expense.category}</Badge>
                    </TableCell>
                    <TableCell>{expense.paymentMethod}</TableCell>
                    <TableCell
                      className={`font-medium ${
                        expense.amount >= 0 ? "text-secondary" : "text-expense"
                      }`}
                    >
                      {expense.amount >= 0 ? "+" : ""}₹
                      {Math.abs(expense.amount).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {expense.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {expense.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{expense.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "expenses":
        return <ExpensesView />;
      case "reports":
        return <div className="p-8 text-center">Reports coming soon...</div>;
      case "settings":
        return <div className="p-8 text-center">Settings coming soon...</div>;
      case "profile":
        return <div className="p-8 text-center">Profile coming soon...</div>;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <DesktopSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Sidebar */}
      <MobileSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-background border-b px-4 py-3 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold capitalize">{activeTab}</h1>
          <div className="w-8" />
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 lg:p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
