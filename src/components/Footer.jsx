import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white mt-24 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20">
                S
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase">
                Summer <span className="text-emerald-400">Store</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevate your summer lifestyle with our curated collection of premium essentials. Quality and comfort in every piece.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-emerald-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'New Arrivals', 'Best Sellers', 'Discount Store', 'Track Order'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-emerald-400 hover:translate-x-2 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-emerald-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-emerald-400 mt-1" />
                <span>Sieam Fashion Street, <br /> Satkhira, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-emerald-400" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-emerald-400" />
                <span>sieama317@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-emerald-500 rounded-full"></span>
            </h3>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to get special offers and seasonal news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

       
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Summer Essentials Store. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}