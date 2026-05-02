import {
  SiNike,
  SiAdidas,
  SiPuma,
} from "react-icons/si";
import { FaCrown } from "react-icons/fa";

export default function TopBrands() {
  const brands = [
    {
      name: "Nike",
      icon: <SiNike size={42} />,
      color: "from-orange-400 to-red-500",
    },
    {
      name: "Adidas",
      icon: <SiAdidas size={42} />,
      color: "from-gray-700 to-black",
    },
    {
      name: "Puma",
      icon: <SiPuma size={42} />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "SunShade",
      icon: <FaCrown size={42} />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-20 pt-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          🏆 Top Brands
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Discover premium fashion brands
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 text-center border border-gray-100"
          >
            {/* Logo */}
            <div
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white bg-gradient-to-r ${brand.color} shadow-lg`}
            >
              {brand.icon}
            </div>

            {/* Name */}
            <h3 className="mt-6 text-2xl font-bold text-gray-800">
              {brand.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Premium Collection
            </p>

            <button className="mt-6 btn btn-success text-white rounded-full px-8">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}