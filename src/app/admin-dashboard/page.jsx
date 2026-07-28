"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LoaderCircle,
} from "lucide-react";
import { message } from "antd";

import useAuthStore from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  );
  const sessionChecked = useAuthStore(
    (state) => state.sessionChecked,
  );
  const loadSession = useAuthStore(
    (state) => state.loadSession,
  );
  const restoreCachedAdmin = useAuthStore(
    (state) => state.restoreCachedAdmin,
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] =
    useState(false);

  useEffect(() => {
    restoreCachedAdmin();
    void loadSession();
  }, [loadSession, restoreCachedAdmin]);

  useEffect(() => {
    if (sessionChecked && isAuthenticated) {
      router.replace("/admin-dashboard/dashboard");
    }
  }, [isAuthenticated, router, sessionChecked]);

  const handleChange = (event) => {
    const { name, value, type, checked } =
      event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = formData.email.trim();

    if (!email) {
      messageApi.error(
        "Please enter your email address.",
      );

      return;
    }

    if (!formData.password) {
      messageApi.error(
        "Please enter your password.",
      );

      return;
    }

    try {
      await login({
        email,
        password: formData.password,
        remember: formData.remember,
      });

      messageApi.success("Login successful.");

      router.replace("/admin-dashboard/dashboard");
    } catch (error) {
      messageApi.error(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to sign in.",
      );
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {contextHolder}

      {/* Background Image */}
      <Image
        src="/hab_bg_image.png"
        alt="HAB Global"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* LEFT */}
        <div className="hidden w-1/2 flex-col justify-center px-20 lg:flex">
          {/*
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="HAB Global"
              width={220}
              height={70}
              priority
            />

            <h1 className="mt-10 text-6xl font-black leading-tight text-white">
              HAB Global
              <br />
              Management
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-10 text-white/90">
              Delivering world-class business
              consulting, strategic planning,
              operational excellence and innovative
              solutions that help organisations grow
              confidently.
            </p>

            <div className="mt-12 flex gap-4">
              <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md">
                Strategy
              </div>

              <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md">
                Innovation
              </div>

              <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md">
                Growth
              </div>
            </div>
          </motion.div>
          */}
        </div>

        {/* RIGHT */}
        <div className="flex w-full items-center justify-center px-6 py-10 lg:w-1/2">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-10"
          >
            <div className="text-center">
              <h2 className="mt-2 text-3xl font-bold text-white">
                Dashboard Login
              </h2>

              <p className="mt-3 text-white/70">
                Sign in to manage your organisation.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4 transition focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20">
                  <Mail
                    size={18}
                    className="shrink-0 text-white/60"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    autoComplete="email"
                    disabled={loading}
                    className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-white/40 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4 transition focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20">
                  <Lock
                    size={18}
                    className="shrink-0 text-white/60"
                  />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    disabled={loading}
                    className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-white/40 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous,
                      )
                    }
                    disabled={loading}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="shrink-0 text-white/60 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-white/70">
                  <input
                    name="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    disabled={loading}
                    className="h-4 w-4 rounded accent-secondary"
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm text-secondary transition hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-4 text-lg font-semibold text-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />

                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-white/50">
              © {new Date().getFullYear()} HAB
              Global Management
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
