"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged out successfully");
            router.push("/login");
          },
        },
      });
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav
      className="navbar bg-white shadow-md px-4 md:px-10 sticky top-0 z-50"
      data-theme="light"
    >
      {/* LEFT SIDE */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400">
            <Image
              src="/logo/logo.jpg"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>

          <span className="font-bold text-xl text-slate-800">
            Summer <span className="text-emerald-500">Store</span>
          </span>
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 font-semibold text-slate-700">
          <li>
           
            <Link href="/#" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <button className="hover:text-emerald-500">
              Products
            </button>
          </li>

          <li>
            <button className="hover:text-emerald-500">
              My Profile
            </button>
          </li>

          {/* PROFILE SHOW AFTER LOGIN */}
          {user && (
            <li>
              <Link
                href="/my-profile"
                className="hover:text-emerald-500"
              >
                My Profile
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-3">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-emerald-500"></span>
        ) : user ? (
          <>
            {/* USER IMAGE */}
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                <Image
                  src={
                    user.image ||
                    `https://ui-avatars.com/api/?name=${user.name}`
                  }
                  alt="user"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="hidden md:block font-semibold text-sm">
                {user.name}
              </span>
            </div>

            {/* LOGOUT BUTTON */}
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none rounded-full px-5 transition-all active:scale-95"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* LOGIN + REGISTER BEFORE LOGIN */}
            <Link
              href="/login"
              className="btn btn-sm btn-outline border-emerald-500 text-emerald-500 rounded-full px-5 hover:bg-emerald-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-full px-5 transition-all active:scale-95"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}