import React, { useState } from "react";
import { services } from "../util/constant";
import { Users } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const ServicesGrid = () => {
  const [hover, setHover] = useState("");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();

  const navigateTo = (link) => {
    navigate(`/services/${link}`);
  };

  return (
    <section>
      <div className="wrapper paddingtop paddingbottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`relativ cursor-pointer aspect-square h-full group overflow-hidden rounded-xl border ${
                  isDarkMode
                    ? "border-gray-700 bg-darkblack"
                    : "border-gray-200 bg-white"
                } transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl ${
                  isDarkMode
                    ? "hover:shadow-primary/30"
                    : "hover:shadow-primary/20"
                }`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover("")}
                onClick={() => navigateTo(service.link)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isDarkMode
                      ? "from-primary/10 to-primary/30"
                      : "from-primary/5 to-primary/20"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Animated background elements */}
                <div
                  className={`absolute ${
                    hover === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  } transition-all duration-700 -inset-2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${
                    isDarkMode
                      ? "from-primary/20 via-transparent to-transparent"
                      : "from-primary/10 via-transparent to-transparent"
                  }`}
                />

                {/* Content container */}
                <div
                  className={`relative flex flex-col justify-evenly min-h-full p-6 z-10 ${
                    isDarkMode ? "text-white" : "text-darkblack"
                  }`}
                >
                  {/* Icon with hover effect */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                      isDarkMode
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-primary/5 group-hover:bg-primary/10"
                    } transition-all duration-300`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${
                        isDarkMode
                          ? "text-primary group-hover:text-white"
                          : "text-primary group-hover:text-primary-dark"
                      } transition-colors duration-300`}
                    />
                  </div>

                  {/* Title with underline effect */}
                  <h3 className="text-xl font-bold mb-3 relative inline-block">
                    {service.title}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 ${
                        isDarkMode ? "bg-white" : "bg-primary"
                      } transition-all duration-500 ${
                        hover === index ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </h3>

                  {/* Description with fade-in effect */}
                  <p
                    className={`desc ${
                      isDarkMode
                        ? "text-gray-300 group-hover:text-white"
                        : "text-gray-600 group-hover:text-darkblack"
                    } transition-colors duration-300`}
                  >
                    {service.description}
                  </p>

                  {/* Learn more button that slides in */}
                  <div className={`mt-4 overflow-hidden`}>
                    <span
                      className={`inline-block  ${
                        isDarkMode
                          ? "text-primary group-hover:text-white"
                          : "text-primary group-hover:text-primary-dark"
                      } font-medium transition-all duration-500 transform ${
                        hover === index ? "translate-x-0" : "-translate-x-full"
                      }`}
                    >
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
