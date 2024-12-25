"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive websites with modern technologies like HTML, CSS, JavaScript, React, and Vue.js.",
    href: "https://example.com/web-development",
  },
  {
    num: "02",
    title: "App Development",
    description:
      "Creating mobile and web apps using Swift, Kotlin, Flutter, and React Native.",
    href: "https://example.com/app-development",
  },
  {
    num: "03",
    title: "UI & UX Design",
    description:
      "Designing intuitive interfaces with Figma, Sketch, and Adobe XD, focusing on user research and usability.",
    href: "https://example.com/ui-ux-design",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description:
      "Boosting online presence with SEO, content marketing, social media, and PPC strategies.",
    href: "https://example.com/digital-marketing",
  },
];

const Services = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Muthupandi's Portfolio | Services</title>
        <meta
          name="description"
          content="Explore Muthupandi's professional services, including Web Development, App Development, UI & UX Design, and Digital Marketing. Achieve your business goals with cutting-edge solutions."
        />
        <meta
          name="keywords"
          content="Muthupandi, Services, Web Development, App Development, UI & UX Design, Digital Marketing, React, SEO, Flutter, Design"
        />
        <meta name="author" content="Muthupandi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Muthupandi's Portfolio | Services" />
        <meta
          property="og:description"
          content="Discover Muthupandi's top-notch services: Web Development, App Development, UI & UX Design, and Digital Marketing. Transform your vision into reality."
        />
        <meta property="og:image" content="/assets/services/preview.jpg" />
        <meta property="og:url" content="https://muthupandi.in/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Muthupandi's Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muthupandi's Portfolio | Services"
        />
        <meta
          name="twitter:description"
          content="Explore Muthupandi's professional services: Web Development, App Development, UI & UX Design, and Digital Marketing. Empower your business with innovative solutions."
        />
        <meta name="twitter:image" content="/assets/services/preview.jpg" />
      </Head>

      {/* Page Content */}
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {item.num}
                    </div>
                    <Link
                      href={item.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {item.title}
                  </h2>
                  <p className="text-white/60">{item.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
