"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-20">

      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-xl p-8 rounded-2xl space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Update Profile
        </h2>

        <input
          className="input input-bordered w-full"
          placeholder="New Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input input-bordered w-full"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn btn-warning w-full text-white">
          Update
        </button>

      </form>
    </div>
  );
}