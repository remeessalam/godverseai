import React, { useEffect, useState } from "react";
import { futureTechSectors } from "../util/constant";

const Industries = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card-id");
            setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".industry-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Enhanced title section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Where AI Expertise
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Meets Industry Excellence
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {futureTechSectors.map((sector, index) => (
            <div
              key={sector.id}
              data-card-id={sector.id}
              className={`industry-card relative group cursor-pointer transform transition-all duration-700 ${
                visibleCards.has(sector.id.toString())
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(sector.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card container */}
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 group-hover:border-primary transition-all duration-500">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={sector.img}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-45 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating animation on hover */}
                <div
                  className={`absolute inset-0 transition-transform duration-500 ${
                    hoveredCard === sector.id ? "transform -translate-y-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {sector.title}
                    </h3>

                    <p
                      className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 ${
                        hoveredCard === sector.id
                          ? "opacity-100 max-h-32 transform translate-y-0"
                          : "opacity-0 max-h-0 transform translate-y-4"
                      }`}
                    >
                      {sector.description}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-400/20 blur-xl"></div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45"></div>
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-105"></div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
            <span className="text-lg">Explore the Future of Technology</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Industries;
