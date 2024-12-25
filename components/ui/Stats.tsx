"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 3,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 25,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section
      className="pt-4 pb-12 xl:pt-0 xl:pb-0"
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 id="stats-heading" className="sr-only">
          Professional Statistics
        </h2>
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
                aria-labelledby={`stat-${index}`}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                  aria-live="polite" // Allow screen readers to announce updates
                />
                <p
                  id={`stat-${index}`}
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                  aria-label={item.text}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
