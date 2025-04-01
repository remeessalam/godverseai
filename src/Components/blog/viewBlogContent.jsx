import React from "react";

function ViewBlogContent({ sections }) {
  return (
    <div>
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2
            className="text-2xl font-semibold dark:text-white my-4"
            data-aos="fade-up"
          >
            {section.heading}
          </h2>
          {section.subtitle && (
            <h3
              className="text-xl font-medium dark:text-gray-300 my-2"
              data-aos="fade-up"
            >
              {section.subtitle}
            </h3>
          )}
          {section.definition && (
            <p className="text-black dark:text-gray-400" data-aos="fade-up">
              {section.definition}
            </p>
          )}
          {section.analogy && (
            <p className="text-black dark:text-gray-400" data-aos="fade-up">
              {section.analogy}
            </p>
          )}
          {section.summary && (
            <p className="text-black dark:text-gray-400" data-aos="fade-up">
              {section.summary}
            </p>
          )}
          {section.points && (
            <ul
              className="list-disc list-inside text-black dark:text-gray-400"
              data-aos="fade-up"
            >
              {section.points.map((point, i) => (
                <li key={i} className="mt-2">
                  {point}
                </li>
              ))}
            </ul>
          )}
          {section.industries && (
            <ul
              className="list-disc list-inside text-black dark:text-gray-400"
              data-aos="fade-up"
            >
              {section.industries.map((industry, i) => (
                <li key={i} className="mt-2">
                  <strong>{industry.name}</strong>
                  <ul className="list-circle list-inside pl-4">
                    {industry.applications.map((app, j) => (
                      <li key={j} className="mt-1">
                        {app}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          {section.future_trends && (
            <ul
              className="list-disc list-inside text-black dark:text-gray-400"
              data-aos="fade-up"
            >
              {section.future_trends.map((trend, k) => (
                <li key={k} className="mt-2">
                  {trend}
                </li>
              ))}
            </ul>
          )}
          {section.text && (
            <p className="text-black dark:text-gray-400" data-aos="fade-up">
              {section.text}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}

export default ViewBlogContent;
