import {
  FaTint,
  FaSun,
  FaTshirt,
  FaAppleAlt,
  FaBed,
  FaBath,
} from "react-icons/fa";

export default function SummerTips() {
  const tips = [
    {
      icon: <FaTint size={42} />,
      title: "Stay Hydrated",
      desc: "Drink enough water daily to stay fresh and energized.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaSun size={42} />,
      title: "Use Sunscreen",
      desc: "Protect your skin from harmful sunlight before going outside.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaTshirt size={42} />,
      title: "Light Clothing",
      desc: "Wear breathable cotton clothes for extra comfort.",
      color: "from-pink-400 to-purple-500",
    },
    {
      icon: <FaAppleAlt size={42} />,
      title: "Eat Fresh Fruits",
      desc: "Enjoy seasonal fruits to stay cool and healthy.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaBed size={42} />,
      title: "Proper Rest",
      desc: "Take enough sleep and avoid overworking in heat.",
      color: "from-indigo-400 to-blue-600",
    },
    {
      icon: <FaBath size={42} />,
      title: "Cool Shower",
      desc: "Refresh your body with cool showers on hot days.",
      color: "from-sky-400 to-cyan-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-20 pt-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          🌞 Summer Care Tips
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Smart habits to stay cool, fresh, and healthy this summer
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 text-center border border-gray-100 min-h-[340px] flex flex-col justify-between"
          >
            <div>
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white bg-gradient-to-r ${tip.color} shadow-lg`}
              >
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-3 leading-relaxed px-2">
                {tip.desc}
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 btn btn-success text-white rounded-full px-8">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}