"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calculator,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    otp: "",
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendOtp = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:block space-y-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Calculator className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-3xl font-bold text-primary">Expensiq</span>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome back to your financial companion
            </h1>
            <p className="text-lg text-muted-foreground">
              Track, manage, and analyze your expenses with the power of
              real-time insights and offline-first design.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Bank-level Security
                </h3>
                <p className="text-muted-foreground">
                  Your financial data is protected with end-to-end encryption
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Lightning Fast
                </h3>
                <p className="text-muted-foreground">
                  Add expenses in seconds, even when you&apos;re offline
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Cross-platform Sync
                </h3>
                <p className="text-muted-foreground">
                  Access your data seamlessly across all devices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">Expensiq</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground mt-4 mb-2">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to continue managing your finances
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-primary/10">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <p className="text-muted-foreground">
                Choose your preferred login method
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Login Method Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setLoginMethod("email")}
                  className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    loginMethod === "email"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  Email
                </button>
                <button
                  onClick={() => setLoginMethod("phone")}
                  className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    loginMethod === "phone"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  Phone
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email/Phone Input */}
                <div className="space-y-2">
                  <label
                    htmlFor={loginMethod}
                    className="text-sm font-medium text-foreground"
                  >
                    {loginMethod === "email" ? "Email Address" : "Phone Number"}
                  </label>
                  <div className="relative">
                    {loginMethod === "email" ? (
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    )}
                    <Input
                      id={loginMethod}
                      type={loginMethod === "email" ? "email" : "tel"}
                      placeholder={
                        loginMethod === "email"
                          ? "Enter your email"
                          : "Enter your phone number"
                      }
                      value={
                        loginMethod === "email"
                          ? formData.email
                          : formData.phone
                      }
                      onChange={(e) =>
                        handleInputChange(loginMethod, e.target.value)
                      }
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                {/* Password or OTP */}
                {loginMethod === "email" ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-foreground"
                      >
                        Password
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-xs text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {!isOtpSent ? (
                      <Button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={!formData.phone || isLoading}
                        className="w-full h-12"
                      >
                        {isLoading ? "Sending..." : "Send OTP"}
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <label
                          htmlFor="otp"
                          className="text-sm font-medium text-foreground"
                        >
                          Enter OTP
                        </label>
                        <Input
                          id="otp"
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={formData.otp}
                          onChange={(e) =>
                            handleInputChange("otp", e.target.value)
                          }
                          className="text-center text-lg tracking-widest h-12"
                          maxLength={6}
                          required
                        />
                        <p className="text-xs text-muted-foreground text-center">
                          OTP sent to {formData.phone}
                          <button
                            type="button"
                            onClick={() => setIsOtpSent(false)}
                            className="text-primary hover:underline ml-2"
                          >
                            Change number
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                {(loginMethod === "email" ||
                  (loginMethod === "phone" && isOtpSent)) && (
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 text-lg font-semibold"
                  >
                    {isLoading ? (
                      "Signing in..."
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                )}
              </form>

              {/* Register Link */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Terms */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
