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
  Settings,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Smartphone,
  Globe,
  Moon,
  Sun,
  Monitor,
  DollarSign,
  Languages,
  Download,
  Upload,
  Trash2,
  RefreshCcw,
  Lock,
  Fingerprint,
  Key,
  Database,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Appearance
    theme: "system",
    currency: "INR",
    language: "en",
    dateFormat: "DD/MM/YYYY",

    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    expenseReminders: true,
    budgetAlerts: true,

    // Privacy & Security
    biometricLogin: false,
    autoLock: "5min",
    dataSyncEnabled: true,
    analyticsOptIn: true,

    // Budget & Categories
    monthlyBudget: "25000",
    weeklyBudget: "6000",
    defaultCategory: "general",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleExportData = () => {
    // Simulate data export
    console.log("Exporting data...");
  };

  const handleDeleteAccount = () => {
    // Show confirmation dialog
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      console.log("Deleting account...");
    }
  };

  const settingSections = [
    {
      id: "appearance",
      title: "Appearance & Display",
      icon: Monitor,
      settings: [
        {
          key: "theme",
          label: "Theme",
          type: "select",
          options: [
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "system", label: "System" },
          ],
          description: "Choose your preferred color scheme",
        },
        {
          key: "currency",
          label: "Currency",
          type: "select",
          options: [
            { value: "INR", label: "₹ Indian Rupee" },
            { value: "USD", label: "$ US Dollar" },
            { value: "EUR", label: "€ Euro" },
            { value: "GBP", label: "£ British Pound" },
          ],
          description: "Default currency for displaying amounts",
        },
        {
          key: "language",
          label: "Language",
          type: "select",
          options: [
            { value: "en", label: "English" },
            { value: "hi", label: "हिंदी" },
            { value: "es", label: "Español" },
            { value: "fr", label: "Français" },
          ],
          description: "App interface language",
        },
        {
          key: "dateFormat",
          label: "Date Format",
          type: "select",
          options: [
            { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
            { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
            { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
          ],
          description: "How dates are displayed throughout the app",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      settings: [
        {
          key: "emailNotifications",
          label: "Email Notifications",
          type: "toggle",
          description: "Receive email updates and summaries",
        },
        {
          key: "pushNotifications",
          label: "Push Notifications",
          type: "toggle",
          description: "Mobile and desktop notifications",
        },
        {
          key: "expenseReminders",
          label: "Expense Reminders",
          type: "toggle",
          description: "Daily reminders to log your expenses",
        },
        {
          key: "budgetAlerts",
          label: "Budget Alerts",
          type: "toggle",
          description: "Alerts when approaching budget limits",
        },
      ],
    },
    {
      id: "security",
      title: "Privacy & Security",
      icon: Shield,
      settings: [
        {
          key: "biometricLogin",
          label: "Biometric Login",
          type: "toggle",
          description: "Use fingerprint or face recognition to sign in",
        },
        {
          key: "autoLock",
          label: "Auto Lock",
          type: "select",
          options: [
            { value: "never", label: "Never" },
            { value: "1min", label: "1 minute" },
            { value: "5min", label: "5 minutes" },
            { value: "15min", label: "15 minutes" },
            { value: "30min", label: "30 minutes" },
          ],
          description: "Automatically lock the app after inactivity",
        },
        {
          key: "dataSyncEnabled",
          label: "Data Sync",
          type: "toggle",
          description: "Sync your data across devices",
        },
        {
          key: "analyticsOptIn",
          label: "Usage Analytics",
          type: "toggle",
          description: "Help improve the app by sharing anonymous usage data",
        },
      ],
    },
    {
      id: "budget",
      title: "Budget & Defaults",
      icon: DollarSign,
      settings: [
        {
          key: "monthlyBudget",
          label: "Monthly Budget",
          type: "input",
          inputType: "number",
          description: "Your monthly spending limit",
        },
        {
          key: "weeklyBudget",
          label: "Weekly Budget",
          type: "input",
          inputType: "number",
          description: "Your weekly spending limit",
        },
        {
          key: "defaultCategory",
          label: "Default Category",
          type: "select",
          options: [
            { value: "general", label: "General" },
            { value: "food", label: "Food & Dining" },
            { value: "transport", label: "Transport" },
            { value: "shopping", label: "Shopping" },
          ],
          description: "Default category for new expenses",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
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
                <Settings className="h-4 w-4" />
              </div>
              <h1 className="text-xl font-bold">Settings</h1>
            </div>
          </div>
          <Button
            onClick={handleSave}
            disabled={isLoading}
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl space-y-6">
        {/* Settings Sections */}
        {settingSections.map((section) => {
          const SectionIcon = section.icon;
          return (
            <Card key={section.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <SectionIcon className="h-5 w-5 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {section.settings.map((setting) => (
                  <div key={setting.key} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <label className="text-sm font-medium">
                          {setting.label}
                        </label>
                        <p className="text-xs text-muted-foreground">
                          {setting.description}
                        </p>
                      </div>
                      <div className="w-48">
                        {setting.type === "toggle" ? (
                          <Button
                            variant={
                              settings[setting.key as keyof typeof settings]
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() =>
                              handleSettingChange(
                                setting.key,
                                !settings[setting.key as keyof typeof settings],
                              )
                            }
                            className="w-full"
                          >
                            {settings[setting.key as keyof typeof settings]
                              ? "Enabled"
                              : "Disabled"}
                          </Button>
                        ) : setting.type === "select" ? (
                          <Select
                            value={
                              settings[
                                setting.key as keyof typeof settings
                              ] as string
                            }
                            onValueChange={(value) =>
                              handleSettingChange(setting.key, value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {setting.options?.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            type={setting.inputType || "text"}
                            value={
                              settings[
                                setting.key as keyof typeof settings
                              ] as string
                            }
                            onChange={(e) =>
                              handleSettingChange(setting.key, e.target.value)
                            }
                            placeholder={setting.label}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-secondary" />
              </div>
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Button
                variant="outline"
                onClick={handleExportData}
                className="h-12 justify-start"
              >
                <Download className="h-4 w-4 mr-2" />
                Export All Data
              </Button>
              <Button variant="outline" className="h-12 justify-start">
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </Button>
              <Button variant="outline" className="h-12 justify-start">
                <RefreshCcw className="h-4 w-4 mr-2" />
                Sync Now
              </Button>
              <Button variant="outline" className="h-12 justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/profile">
                <Button variant="outline" className="w-full h-12 justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Profile Settings
                </Button>
              </Link>
              <Button variant="outline" className="w-full h-12 justify-start">
                <Lock className="h-4 w-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full h-12 justify-start">
                <Key className="h-4 w-4 mr-2" />
                Two-Factor Auth
              </Button>
              <Button variant="outline" className="w-full h-12 justify-start">
                <Globe className="h-4 w-4 mr-2" />
                Connected Apps
              </Button>
              <Button variant="outline" className="w-full h-12 justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Privacy Policy
              </Button>
              <Button variant="outline" className="w-full h-12 justify-start">
                <Info className="h-4 w-4 mr-2" />
                Help & Support
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-destructive">
              <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Delete Account</h4>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data. This
                action cannot be undone.
              </p>
              <Button
                variant="outline"
                onClick={handleDeleteAccount}
                className="border-destructive text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card className="bg-muted/50">
          <CardContent className="p-6 text-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Expensiq Version 2.1.0
            </div>
            <div className="text-xs text-muted-foreground">
              Built with ❤️ for better financial management
            </div>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/support" className="hover:text-primary">
                Support
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
