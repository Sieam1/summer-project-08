"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await authClient.signIn.email({
        email,
        password,
      });

      toast.success("Login Success");
      router.push("/");
    } catch (error) {
      toast.error("Invalid Email or Password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}