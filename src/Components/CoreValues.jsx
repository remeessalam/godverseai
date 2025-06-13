import { coreValues } from "../util/constant";
import RoundedHeader from "./RoundedHeader";

const CoreValues = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/30 to-transparent dark:from-transparent dark:via-gray-900/20 dark:to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-100/20 to-orange-100/20 dark:from-pink-900/10 dark:to-orange-900/10 rounded-full blur-3xl"></div> */}

      <div className="relative paddingtop paddingbottom wrapper flex gap-12 flex-col justify-center items-center">
        <div className="text-center space-y-4">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex justify-center"
          >
            <RoundedHeader title="Why Choose Us" />
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="main-title relative gradient-text"
          >
            Our Core Values
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 rounded-full"></div>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {coreValues.map((obj, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              key={obj.id}
              className="group w-full h-full p-8 border-2 rounded-2xl relative overflow-hidden
                     bg-white dark:bg-darkbackground
                     border-gray-200 dark:border-gray-700
                     hover:border-primary/50 dark:hover:border-primary
                     hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20
                     hover:-translate-y-3 transition-all duration-500 ease-out
                     cursor-pointer"
            >
              {/* Animated background gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 
                         dark:from-primary/10 dark:via-transparent dark:to-primary/20
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Glowing border effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-blue-400/20 to-primary/20
                         dark:from-primary/30 dark:via-blue-300/30 dark:to-primary/30
                         opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between w-full items-start mb-6">
                  <h1
                    className="text-2xl font-bold text-gray-800 dark:text-white
                           group-hover:text-primary dark:group-hover:text-primary
                           group-hover:scale-105 transition-all duration-300"
                  >
                    {obj.title}
                  </h1>

                  <div className="relative">
                    {/* Icon glow effect */}
                    <div
                      className="absolute inset-0 bg-primary/30 dark:bg-primary/40 rounded-full 
                               scale-0 group-hover:scale-150 transition-transform duration-500 blur-xl"
                    ></div>

                    {/* Icon background */}
                    <div
                      className="relative bg-gray-100 dark:bg-darkblack p-3 rounded-full
                               group-hover:bg-primary/10 dark:group-hover:bg-primary/20
                               transition-all duration-300"
                    >
                      <img
                        src={obj.icon || "/placeholder.svg"}
                        alt={`core-value-icons-${obj.title}`}
                        className="relative z-10 w-8 h-8 object-contain transition-all duration-500 
                             group-hover:scale-110 group-hover:rotate-12
                             filter group-hover:brightness-110
                             drop-shadow-lg group-hover:drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p
                    className="text-gray-600 dark:text-gray-300 leading-relaxed text-base
                          group-hover:text-gray-700 dark:group-hover:text-gray-200 
                          transition-colors duration-300"
                  >
                    {obj.description}
                  </p>

                  {/* Progress bar effect */}
                  <div
                    className="w-0 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full
                             group-hover:w-full transition-all duration-700 delay-200"
                  ></div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute top-6 right-6 w-3 h-3 bg-primary/30 rounded-full 
                         group-hover:animate-ping group-hover:bg-primary/50"
              ></div>
              <div
                className="absolute bottom-8 left-8 w-2 h-2 bg-primary/20 rounded-full 
                         group-hover:animate-pulse group-hover:bg-primary/40"
              ></div>
              <div
                className="absolute top-1/2 right-4 w-1 h-1 bg-primary/40 rounded-full 
                         group-hover:animate-bounce"
              ></div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent
                         dark:from-primary/20 dark:to-transparent rounded-tl-full
                         scale-0 group-hover:scale-100 transition-transform duration-500"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
