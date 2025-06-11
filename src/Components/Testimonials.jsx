import React from "react";
import { motion } from "framer-motion";
import RoundedHeader from "./RoundedHeader";
import { testimonials } from "../util/constant";
import StarRating from "./StarRating";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const floatingVariants = {
  float: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Animated floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/20 dark:bg-purple-400/20"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [null, Math.random() * 100 - 50],
            y: [null, Math.random() * 100 - 50],
            opacity: [0, 0.4, 0],
            scale: [0, Math.random() * 0.5 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="paddingtop paddingbottom wrapper flex flex-col items-center gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <RoundedHeader title={"Testimonial"} />
        </motion.div>

        <motion.h1
          className="main-title text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Professionals use to <br />
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            10x their Productivity
          </motion.span>
        </motion.h1>

        <motion.div
          className="wrapper"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl p-6 flex flex-col justify-between
                  transition-all duration-300 hover:border-blue-400 dark:hover:border-white/40 
                  hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]
                  overflow-hidden ${index === 0 && "md:col-span-1"}  
                  ${index === 1 && "md:col-span-2"}`}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Animated background highlight */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 opacity-0"
                  animate={{
                    opacity: [0, 0.1, 0],
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                <div className="relative z-10">
                  {/* Animated quote icon */}
                  <motion.svg
                    className="absolute -left-2 -top-2 opacity-20 dark:opacity-30 w-8 h-8 text-gray-600 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    variants={floatingVariants}
                    animate="float"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </motion.svg>

                  <motion.p
                    className="desc !font-medium mb-4 pl-4 relative z-10 text-gray-700 dark:text-gray-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                </div>

                <div className="relative z-10">
                  <motion.p
                    className="desc !font-medium mb-2 flex items-center text-gray-800 dark:text-gray-100"
                    initial={{ x: -10 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="mr-2">—</span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                      {testimonial.author}
                    </span>
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <StarRating rating={testimonial.rating} />
                  </motion.div>

                  {/* Animated tech circles */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-blue-400/30 dark:border-purple-400/30"
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: [0.3, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeOut",
                        },
                      }}
                      style={{
                        width: `${i * 40}px`,
                        height: `${i * 40}px`,
                        right: `${-i * 10}px`,
                        bottom: `${-i * 10}px`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
