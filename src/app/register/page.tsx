"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calculator,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState<"details" | "otp" | "success">("details");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    fullName: "",
    password: "",
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStep("otp");
      setIsLoading(false);
      setOtpTimer(60);
      const timer = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1000);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setStep("success");
      setIsLoading(false);
    }, 1500);
  };

  const handleResendOtp = () => {
    setOtpTimer(60);
    const timer = setInterval(() => {
      setOtpTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-primary/5 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle className="h-10 w-10 text-secondary-foreground" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to Expensiq!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your account has been created successfully. You can now start
              tracking your expenses and managing your finances.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => (window.location.href = "/dashboard")}
              size="lg"
              className="w-full h-12 text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/login")}
              size="lg"
              className="w-full h-12"
            >
              Sign In Instead
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">Secure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <p className="text-xs text-muted-foreground">Fast</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">Mobile</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              Start your financial journey today
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of users who are already taking control of their
              finances with smart expense tracking and budgeting tools.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Mobile & Web Access
                </h3>
                <p className="text-muted-foreground">
                  Track expenses on any device, anywhere, anytime
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your data stays secure with advanced encryption
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Works Offline</h3>
                <p className="text-muted-foreground">
                  Continue tracking even without internet connection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
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
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Join thousands of smart money managers
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-primary/10">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">
                {step === "details" ? "Create Account" : "Verify Phone Number"}
              </CardTitle>
              <p className="text-muted-foreground">
                {step === "details"
                  ? "Fill in your details to get started"
                  : `Enter the OTP sent to ${formData.phone}`}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === "details" ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address{" "}
                      <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="pl-10 pr-10 h-12"
                        required
                        minLength={6}
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
                    <p className="text-xs text-muted-foreground">
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={
                      isLoading ||
                      !formData.phone ||
                      !formData.fullName ||
                      !formData.password
                    }
                    className="w-full h-12 text-lg font-semibold"
                  >
                    {isLoading ? (
                      "Sending OTP..."
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  {/* OTP Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="otp"
                      className="text-sm font-medium text-foreground text-center block"
                    >
                      Enter 6-digit OTP
                    </label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="000000"
                      value={formData.otp}
                      onChange={(e) => handleInputChange("otp", e.target.value)}
                      className="text-center text-2xl tracking-widest h-16 font-mono"
                      maxLength={6}
                      required
                    />
                  </div>

                  {/* OTP Timer */}
                  <div className="text-center">
                    {otpTimer > 0 ? (
                      <p className="text-sm text-muted-foreground">
                        Resend OTP in {otpTimer} seconds
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        className="text-sm text-primary hover:underline"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>

                  {/* Verify Button */}
                  <Button
                    type="submit"
                    disabled={isLoading || formData.otp.length !== 6}
                    className="w-full h-12 text-lg font-semibold"
                  >
                    {isLoading ? (
                      "Verifying..."
                    ) : (
                      <>
                        Verify & Create Account
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Back Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep("details")}
                    className="w-full h-12"
                  >
                    Change Phone Number
                  </Button>
                </form>
              )}

              {/* Login Link */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Terms */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            By creating an account, you agree to our{" "}
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
