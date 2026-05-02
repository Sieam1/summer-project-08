import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-emerald-400 mb-3">
            Summer Store
          </h2>
          <p>Best quality summer essentials for your lifestyle.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
          <p>Email: support@summer.com</p>
          <p>Phone: +880123456789</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaTwitter /></Link>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Privacy Policy
          </p>
        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-400">
        © 2026 Summer Essentials Store. All Rights Reserved.
      </div>
    </footer>
  );
}