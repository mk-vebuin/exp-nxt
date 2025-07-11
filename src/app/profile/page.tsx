"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Edit3,
  Save,
  Camera,
  Shield,
  Bell,
  CreditCard,
  Download,
  Trash2,
  LogOut,
  CheckCircle,
  Badge as BadgeIcon,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    dateOfBirth: "1995-06-15",
    location: "Mumbai, India",
    occupation: "Software Engineer",
    bio: "Passionate about personal finance and technology",
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const stats = [
    { label: "Total Expenses", value: "₹45,230", color: "text-expense" },
    { label: "This Month", value: "₹12,450", color: "text-primary" },
    { label: "Categories", value: "8", color: "text-secondary" },
    { label: "Days Active", value: "127", color: "text-accent" },
  ];

  const achievements = [
    {
      icon: CheckCircle,
      title: "First Expense",
      description: "Added your first expense",
      earned: true,
    },
    {
      icon: BadgeIcon,
      title: "Budget Master",
      description: "Stayed under budget for 3 months",
      earned: true,
    },
    {
      icon: Calendar,
      title: "Consistent Tracker",
      description: "Tracked expenses for 30 days straight",
      earned: false,
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
                <User className="h-4 w-4" />
              </div>
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
          </div>
          {!isEditing && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Edit3 className="h-5 w-5" />
            </Button>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-lg">
                  {profileData.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors">
                  <Camera className="h-4 w-4 text-secondary-foreground" />
                </button>
              </div>

              {/* Basic Info */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                {isEditing ? (
                  <div className="space-y-4">
                    <Input
                      value={profileData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="text-xl font-bold text-center sm:text-left"
                    />
                    <Input
                      value={profileData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      type="email"
                    />
                    <Input
                      value={profileData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      type="tel"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold">
                      {profileData.fullName}
                    </h2>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{profileData.email}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{profileData.phone}</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Premium Badge */}
                <div className="flex justify-center sm:justify-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                    <BadgeIcon className="h-4 w-4" />
                    Premium User
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Actions */}
            {isEditing && (
              <div className="flex gap-3 mt-6 pt-6 border-t">
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="flex-1 sm:w-auto"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="flex-1 sm:w-auto"
                >
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Your Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-muted/50 rounded-lg"
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isEditing ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date of Birth</label>
                  <Input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={profileData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="City, Country"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Occupation</label>
                  <Input
                    value={profileData.occupation}
                    onChange={(e) =>
                      handleInputChange("occupation", e.target.value)
                    }
                    placeholder="Your job title"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium">Bio</label>
                  <Input
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    placeholder="Tell us about yourself"
                  />
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Date of Birth
                    </div>
                    <div className="font-medium">{profileData.dateOfBirth}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium">{profileData.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Occupation
                    </div>
                    <div className="font-medium">{profileData.occupation}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm text-muted-foreground">Bio</div>
                    <div className="font-medium">{profileData.bio}</div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      achievement.earned
                        ? "border-secondary bg-secondary/10"
                        : "border-border bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div
                        className={`font-semibold ${
                          achievement.earned
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {achievement.title}
                      </div>
                    </div>
                    <p
                      className={`text-sm ${
                        achievement.earned
                          ? "text-muted-foreground"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/settings">
            <Button variant="outline" className="w-full h-12">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </Button>
          </Link>
          <Button variant="outline" className="w-full h-12">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" className="w-full h-12">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
