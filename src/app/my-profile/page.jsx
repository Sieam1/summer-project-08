"use client";

import Link from "next/link";

export default function MyProfile() {
  
  const user = {
    name: "Demo User",
    email: "demo@gmail.com",
    photo: "https://i.ibb.co/4pDNDk1/avatar.png",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">

        <img
          src={user.photo}
          className="w-28 h-28 mx-auto rounded-full mb-4"
        />

        <h2 className="text-2xl font-bold">
          {user.name}
        </h2>

        <p className="text-gray-500">{user.email}</p>

        <Link
          href="/update-profile"
          className="btn btn-warning text-white mt-6"
        >
          Update Profile
        </Link>

      </div>
    </div>
  );
}