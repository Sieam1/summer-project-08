"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    try {
      await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      toast.success("Registration Success");
      router.push("/login");
    } catch (error) {
      toast.error("Registration Failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL"
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
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have account?{" "}
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