import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { appPortfolio, webPortfolio } from "../util/constant";
import RoundedHeader from "./RoundedHeader";
import { Link } from "react-router-dom";
const animation = { duration: 60000, easing: (t) => t };

const Portfolio = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": {
        // Tailwind 'sm' and below
        slides: {
          perView: 1, // Show 1 slide
          spacing: 30,
        },
      },
      "(min-width: 640px) and (max-width: 767px)": {
        // Tailwind 'md' below (640px to 767px)
        slides: {
          perView: 2, // Show 2 slides
          spacing: 30,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        // Tailwind 'lg' below (768px to 1023px)
        slides: {
          perView: 3, // Show 3 slides
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        // Tailwind 'lg' and above (1024px and above)
        slides: {
          perView: 3, // Show 4 slides
          spacing: 30,
        },
      },
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 639px)": {
        // Tailwind 'sm' and below
        slides: {
          perView: 1, // Show 1 slide
          spacing: 30,
        },
      },
      "(min-width: 640px) and (max-width: 767px)": {
        // Tailwind 'md' below (640px to 767px)
        slides: {
          perView: 2, // Show 2 slides
          spacing: 30,
        },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        // Tailwind 'lg' below (768px to 1023px)
        slides: {
          perView: 2, // Show 3 slides
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        // Tailwind 'lg' and above (1024px and above)
        slides: {
          perView: 3, // Show 4 slides
          spacing: 30,
        },
      },
    },

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="my-[5rem]">
      <div className="">
        <div data-aos="fade-up" data-aos-offset="-200">
          <div className=" flex justify-center w-full">
            <RoundedHeader title={"Portfolio"} />
          </div>

          <h3 className="main-title text-center my-10" data-aos="fade-up">
            Web Projects
          </h3>
          <div ref={sliderRef} className="keen-slider ">
            {webPortfolio.map((obj) => (
              <div
                key={obj.id}
                className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient object-cover"
              >
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="rounded-t-xl hover:scale-105 transition-all duration-300 lg:max-h-[316px] w-full  2xl:max-h-[467px] object-cover"
                />
                <div className="px-3 mt-3 pb-5">
                  <h4 className="small-heading dark:text-white  text-center">
                    {obj.title}
                  </h4>
                  {/* <p className="desc text-center">{obj.description}</p> */}
                </div>
              </div>
            ))}
          </div>
          <h3 className="main-title text-center my-16" data-aos="fade-up">
            App Projects
          </h3>

          <div ref={sliderRef2} className="keen-slider">
            {appPortfolio.map((obj) => (
              <Link
                key={obj.title}
                className="keen-slider__slide border-4 dark:bg-darkblack border-primary/40 rounded-xl bg-custom-gradient "
                // data-aos="fade-up"
              >
                <div
                  className={`  lg:max-h-[316px]  2xl:max-h-[467px] 2xl:min-h-[467px] flex items-end
                  w-full overflow-hidden`}
                >
                  {/* ${obj.title === "House of Deliverance" && `2xl:min-h-[480px]`} */}
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className={` hover:scale-105 transition-all duration-300   ${
                      obj.title === "House of Deliverance" ||
                      obj.title === "Artisan Express"
                        ? `object-cover  2xl:min-h-[467px]`
                        : `object-cover`
                    }
                   w-full
                  `}
                  />
                  {/* ${obj.title === "House of Deliverance" && `2xl:min-h-[480px]`} */}
                </div>
                <div className="px-3 mt-3 pb-5 max-h-[96px]">
                  <h4 className="font-semibold dark:text-white text-xl text-center">
                    {obj.title}
                  </h4>
                  {/* <p className="desc text-center">{obj.description}</p> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
