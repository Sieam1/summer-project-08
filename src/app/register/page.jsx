"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createAuthClient } from "better-auth/client";
import { FcGoogle } from "react-icons/fc";

const authClient = createAuthClient();

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    try {
      await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      toast.success("Registration Successful");
      router.push("/login");
    } catch (error) {
      toast.error("Registration Failed");
    }

    setLoading(false);
  };

  const handleGoogleRegister = async () => {
    setGoogleLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Login Failed");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4 py-6">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Register
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-3">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL (link)"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        {/* Divider */}
        <div className="divider text-gray-400 my-4">OR</div>

        {/* Google Button */}
        <button
          onClick={handleGoogleRegister}
          className="w-full py-2.5 rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition font-medium"
        >
          <FcGoogle size={22} />
          {googleLoading ? "Please wait..." : "Continue with Google"}
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}