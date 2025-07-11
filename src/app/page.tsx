"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import {
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Smartphone,
  ChevronRight,
  Star,
  Users,
  DollarSign,
  PieChart,
  Receipt,
  Target,
  Download,
  Globe,
  CreditCard,
  WifiOff,
  Check,
  UserPlus,
  Plus,
  FileText,
  Lock,
  Eye,
  Wallet,
  Heart,
  Zap,
  ArrowRight,
  Play,
  Twitter,
  Linkedin,
  Github,
  Languages,
  Sparkles,
  TrendingDown,
  Calendar,
  Camera,
  Bell,
  Settings,
  Filter,
  ChartNoAxesCombined,
  HelpCircle,
  Monitor,
  Layout,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="container relative px-4 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:gap-12 xl:gap-24 lg:grid-cols-2 items-center">
            <div className="text-center lg:text-left">
              <Badge
                variant="secondary"
                className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30"
              >
                <Sparkles className="mr-1 h-3 w-3" />
                Smart Finance Management
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Take Control of Your
                <span className="text-primary"> Money</span>
              </h1>
              <p className="mx-auto lg:mx-0 mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Track, save, and manage your daily expenses easily with Expensiq
                — your personal finance buddy that works offline and syncs
                everywhere.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center lg:justify-start">
                <Link href="/app">
                  <Button
                    size="lg"
                    className="text-lg bg-primary hover:bg-primary/90 shadow-lg"
                  >
                    Get Started Free
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/download">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg border-primary/30 hover:bg-primary/5"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Try Mobile App
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="text-lg bg-secondary hover:bg-secondary/90 shadow-lg"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    Try Web Version
                  </Button>
                </Link>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>50K+ users</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Bank-level security</span>
                </div>
              </div>
            </div>

            {/* Product Mockup */}
            <div className="relative lg:order-last">
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                {/* Mobile App Mockup */}
                <div className="relative z-10 mx-auto w-56 sm:w-64 h-auto">
                  <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      {/* Phone Header */}
                      <div className="h-6 bg-gray-50 flex items-center justify-center">
                        <div className="w-16 h-1 bg-gray-900 rounded-full"></div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 py-3 bg-primary text-primary-foreground">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-sm">Dashboard</h3>
                          <Bell className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div className="p-4">
                        <div className="bg-primary/10 rounded-xl p-4 mb-4">
                          <div className="text-xs text-muted-foreground mb-1">
                            Current Balance
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            ₹45,250
                          </div>
                          <div className="flex items-center gap-1 text-xs text-secondary">
                            <TrendingUp className="h-3 w-3" />
                            <span>+12% this month</span>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-primary text-primary-foreground text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1">
                            <Plus className="h-3 w-3" />
                            Add Expense
                          </div>
                          <div className="bg-secondary text-secondary-foreground text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1">
                            <BarChart3 className="h-3 w-3" />
                            Reports
                          </div>
                        </div>

                        {/* Recent Transactions */}
                        <div className="space-y-2">
                          <div className="text-xs font-medium text-muted-foreground">
                            Recent
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-expense/20 rounded-full flex items-center justify-center">
                                  <Receipt className="h-3 w-3 text-expense" />
                                </div>
                                <div>
                                  <div className="font-medium">Groceries</div>
                                  <div className="text-muted-foreground">
                                    Today
                                  </div>
                                </div>
                              </div>
                              <div className="text-expense font-medium">
                                -₹1,250
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-warning/20 rounded-full flex items-center justify-center">
                                  <CreditCard className="h-3 w-3 text-warning" />
                                </div>
                                <div>
                                  <div className="font-medium">Transport</div>
                                  <div className="text-muted-foreground">
                                    Yesterday
                                  </div>
                                </div>
                              </div>
                              <div className="text-expense font-medium">
                                -₹450
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                                  <DollarSign className="h-3 w-3 text-secondary" />
                                </div>
                                <div>
                                  <div className="font-medium">Salary</div>
                                  <div className="text-muted-foreground">
                                    2 days ago
                                  </div>
                                </div>
                              </div>
                              <div className="text-secondary font-medium">
                                +₹55,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Preview */}
                <div className="absolute -right-4 sm:-right-8 -top-4 sm:-top-8 w-40 sm:w-48 h-28 sm:h-32 bg-white rounded-lg shadow-xl border hidden lg:block">
                  <div className="p-3">
                    <div className="text-xs font-medium mb-2">
                      Monthly Report
                    </div>
                    <div className="h-20 bg-primary/10 rounded flex items-end justify-center space-x-1 p-2">
                      <div
                        className="w-2 bg-primary rounded-t"
                        style={{ height: "60%" }}
                      ></div>
                      <div
                        className="w-2 bg-secondary rounded-t"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="w-2 bg-primary rounded-t"
                        style={{ height: "80%" }}
                      ></div>
                      <div
                        className="w-2 bg-secondary rounded-t"
                        style={{ height: "30%" }}
                      ></div>
                      <div
                        className="w-2 bg-primary rounded-t"
                        style={{ height: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -left-2 sm:-left-4 top-12 sm:top-16 w-20 sm:w-24 h-12 sm:h-16 bg-secondary/20 rounded-lg p-1.5 sm:p-2 shadow-lg">
                  <div className="text-xs text-secondary font-medium">
                    Saved
                  </div>
                  <div className="text-sm sm:text-lg font-bold text-secondary">
                    ₹12K
                  </div>
                </div>

                <div className="absolute -right-1 sm:-right-2 bottom-12 sm:bottom-16 w-16 sm:w-20 h-12 sm:h-14 bg-warning/20 rounded-lg p-1.5 sm:p-2 shadow-lg">
                  <div className="text-xs text-warning font-medium">Budget</div>
                  <div className="text-xs sm:text-sm font-bold text-warning">
                    78%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary"
            >
              <Zap className="mr-1 h-3 w-3" />
              Powerful Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Manage Your Finances
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with modern technology to make financial management
              effortless and accessible.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-primary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <Receipt className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">
                    Daily Expense Tracking
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Track daily expenses by category with smart suggestions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">
                    Custom Payment Methods
                  </CardTitle>
                  <CardDescription className="text-sm">
                    UPI, Cash, Cards, Digital Wallets - track them all
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-warning/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-warning text-warning-foreground shadow-lg">
                    <WifiOff className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">
                    Offline-First Access
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Works perfectly without internet, syncs when back online
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Web + Mobile Sync</CardTitle>
                  <CardDescription className="text-sm">
                    Seamless synchronization across all your devices
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                    <ChartNoAxesCombined className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Detailed Reports</CardTitle>
                  <CardDescription className="text-sm">
                    Daily, weekly, monthly insights with beautiful charts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Beautiful Charts</CardTitle>
                  <CardDescription className="text-sm">
                    Visual insights that make understanding finances easy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                    <Languages className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">
                    Multilingual Support
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Available in all major Indian and international languages
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Secure & Private</CardTitle>
                  <CardDescription className="text-sm">
                    Bank-grade encryption, zero data selling guarantee
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="border-t bg-muted/30 py-16 md:py-24"
      >
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-secondary/30 text-secondary"
            >
              <Play className="mr-1 h-3 w-3" />
              Simple Process
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How Expensiq Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in minutes and take control of your finances today.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-5xl">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <UserPlus className="h-10 w-10" />
                </div>
                <div className="mb-2 inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <h3 className="text-lg font-semibold">Sign Up</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Quick registration with mobile OTP verification. No lengthy
                  forms or complex setups.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <Plus className="h-10 w-10" />
                </div>
                <div className="mb-2 inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    2
                  </span>
                  <h3 className="text-lg font-semibold">Add Expenses</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Log expenses in seconds with smart categorization and payment
                  method tracking.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-warning text-warning-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <WifiOff className="h-10 w-10" />
                </div>
                <div className="mb-2 inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-warning text-xs font-bold text-warning-foreground">
                    3
                  </span>
                  <h3 className="text-lg font-semibold">Offline Support</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Continue tracking expenses without internet. Data
                  automatically syncs when connected.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <BarChart3 className="h-10 w-10" />
                </div>
                <div className="mb-2 inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </span>
                  <h3 className="text-lg font-semibold">View Reports</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Analyze spending patterns with beautiful charts and detailed
                  insights across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary"
            >
              <Heart className="mr-1 h-3 w-3" />
              Why Choose Us
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Use Expensiq?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built to make managing money effortless, accessible, and actually
              enjoyable.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-5xl">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              <div className="flex gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Build Daily Habit
                  </h3>
                  <p className="text-muted-foreground">
                    Develop a consistent habit of tracking your expenses daily
                    with gentle reminders and streak tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Reduce Overspending
                  </h3>
                  <p className="text-muted-foreground">
                    Gain awareness of your spending patterns with smart alerts
                    and budgeting tools to reduce unnecessary expenses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warning text-warning-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Visual Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Get meaningful insights from your spending history with
                    interactive charts, trends, and personalized
                    recommendations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">100% Secure</h3>
                  <p className="text-muted-foreground">
                    Your data is encrypted with military-grade security. We
                    never sell your information or show intrusive ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-secondary/30 text-secondary"
            >
              <Users className="mr-1 h-3 w-3" />
              User Reviews
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by Everyday Users
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our users say about their experience with Expensiq.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-5xl">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20 bg-primary/5 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground italic">
                    &quot;I stopped using spreadsheets the moment I tried
                    Expensiq. So simple and smooth! The offline feature is a
                    game-changer.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      R
                    </div>
                    <div>
                      <div className="text-sm font-medium">Rahul S.</div>
                      <div className="text-xs text-muted-foreground">
                        Mumbai
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground italic">
                    &quot;Finally, an expense tracker that works offline and in
                    my language. Perfect for traveling and daily use!&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-semibold text-sm">
                      N
                    </div>
                    <div>
                      <div className="text-sm font-medium">Neha R.</div>
                      <div className="text-xs text-muted-foreground">
                        Chennai
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground italic">
                    &quot;I love the charts and reminders. It&apos;s become part
                    of my daily habit. Best expense app I&apos;ve ever
                    used!&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      J
                    </div>
                    <div>
                      <div className="text-sm font-medium">John T.</div>
                      <div className="text-xs text-muted-foreground">
                        London
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary"
            >
              <Shield className="mr-1 h-3 w-3" />
              Security First
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Data is Yours Alone
            </h2>
            <p className="text-lg text-muted-foreground">
              We take privacy seriously. Your financial data deserves the
              highest level of protection.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <Lock className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Encrypted Storage
                </h3>
                <p className="text-sm text-muted-foreground">
                  Military-grade AES-256 encryption protects your data both in
                  transit and at rest.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <Eye className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">No Data Selling</h3>
                <p className="text-sm text-muted-foreground">
                  We never sell, share, or monetize your personal financial
                  information. Ever.
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">GDPR Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Full compliance with international privacy laws and data
                  protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-secondary/30 text-secondary"
            >
              <DollarSign className="mr-1 h-3 w-3" />
              Simple Pricing
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Always Free. No Surprises.
            </h2>
            <p className="text-lg text-muted-foreground">
              All features included forever. No hidden costs, no premium tiers.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-md">
            <Card className="border-2 border-primary bg-primary/5 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Free Forever</CardTitle>
                <div className="text-5xl font-bold text-primary">₹0</div>
                <div className="text-muted-foreground">per month, always</div>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Unlimited expense tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Full offline support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Cross-platform sync</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Beautiful reports & charts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Bank-level security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Minimal, respectful ads</span>
                  </li>
                </ul>
                <Link href="/app" className="block mt-8">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg"
                    size="lg"
                  >
                    Get Started Free
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  No credit card required • No time limits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary"
            >
              <HelpCircle className="mr-1 h-3 w-3" />
              FAQ
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Expensiq.
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <Card className="border-primary/20 bg-background shadow-md">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Is Expensiq really free?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Yes! Expensiq is 100% free with minimal, non-intrusive
                          ads. All features are included with no hidden charges,
                          premium tiers, or time limits.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-warning/20 bg-background shadow-md">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warning/20 text-warning">
                        <WifiOff className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Will it work offline?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Absolutely. Expensiq is built offline-first. You can
                          add expenses, view your data, and use all features
                          without an internet connection.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-secondary/20 bg-background shadow-md">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                        <Smartphone className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Can I use it on both web and mobile?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Yes. Use the same account across all platforms -
                          mobile app, web browser, and even offline. Your data
                          stays perfectly synchronized.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 bg-background shadow-md">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Is my data secure?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Your data is protected with military-grade AES-256
                          encryption. We&apos;re GDPR compliant and never sell
                          or share your personal information.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-secondary/20 bg-background shadow-md">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Can I export my expense data?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Yes. Export your complete expense history in multiple
                          formats including PDF reports, CSV files, and Excel
                          spreadsheets.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-primary/20 bg-background shadow-md">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Languages className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Can I change currency or language?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Absolutely. Switch between any currency and choose
                          from dozens of languages including all major Indian
                          languages and international options.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container relative px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-secondary/30 text-secondary bg-background"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              Ready to Start
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Track Every Rupee?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of users who&apos;ve transformed their financial
              habits with Expensiq. Start your journey to better money
              management today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/download">
                <Button
                  size="lg"
                  className="text-lg bg-primary hover:bg-primary/90 shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg border-primary/30 hover:bg-primary/5"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Use Web Version
                </Button>
              </Link>
              <Link href="/app">
                <Button
                  size="lg"
                  className="text-lg bg-secondary hover:bg-secondary/90 shadow-lg"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Always free • Start tracking in 30
              seconds
            </p>
          </div>
        </div>
      </section>

      {/* Footer with organic background */}
      <footer className="border-t bg-primary/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-40 h-20 bg-primary/10 transform rotate-12 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-16 bg-secondary/10 transform -rotate-12 rounded-full blur-2xl"></div>
          <div className="absolute top-0 left-1/2 w-24 h-12 bg-primary/5 transform -translate-x-1/2 rounded-full blur-xl"></div>
        </div>
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
              <div className="md:col-span-2">
                <Link href="/" className="mb-4 flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-lg text-primary">
                    Expensiq
                  </span>
                </Link>
                <p className="mb-4 text-sm text-muted-foreground">
                  Making expense tracking simple, secure, and accessible for
                  everyone worldwide. Your personal finance buddy that works
                  offline.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Languages className="h-4 w-4" />
                    <span className="text-xs text-muted-foreground">
                      Multi-language
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="rounded bg-primary/20 p-2">
                      <Download className="h-4 w-4" />
                    </div>
                    <div className="rounded bg-secondary/20 p-2">
                      <Smartphone className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-semibold">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="#features"
                      className="hover:text-primary transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/download"
                      className="hover:text-primary transition-colors"
                    >
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="hover:text-primary transition-colors"
                    >
                      Web App
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="hover:text-primary transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-primary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-primary transition-colors"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold">Connect</h3>
                <div className="flex gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20 hover:bg-blue-500/30 cursor-pointer transition-all shadow-md">
                    <Twitter className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 hover:bg-blue-600/30 cursor-pointer transition-all shadow-md">
                    <Linkedin className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-700/20 hover:bg-gray-700/30 cursor-pointer transition-all shadow-md">
                    <Github className="h-4 w-4 text-gray-800" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Follow us for updates and tips
                </p>
              </div>
            </div>
            <div className="mt-12 border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
              <p>
                © 2024 Expensiq. All rights reserved. Made with ❤️ for better
                financial habits worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
