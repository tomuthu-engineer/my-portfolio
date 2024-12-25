"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Head from "next/head";

const about = [
  {
    title: "About me",
    description:
      "I'm a passionate developer with a focus on creating elegant and functional digital experiences. I thrive on solving complex problems and am dedicated to continuous learning and improvement.",
    info: [
      { fieldName: "Name", fieldValue: "Muthu Pandi" },
      { fieldName: "Phone", fieldValue: "+91 9344518443" },
      { fieldName: "Experience", fieldValue: "4 Months" },
      { fieldName: "Skype", fieldValue: "Mpsd" },
      { fieldName: "Nationality", fieldValue: "Tamil" },
      { fieldName: "Email", fieldValue: "tomuthu.engineer@gmail.com" },
      { fieldName: "Freelance", fieldValue: "Available" },
      { fieldName: "Languages", fieldValue: "English, Tamil" },
    ],
  },
];

const education = [
  {
    icon: "🎓",
    title: "My Education",
    description:
      "Here’s a snapshot of my academic background and qualifications.",
    items: [
      {
        institution: "The American College",
        degree: "Bachelor of Computer Applications (BCA)",
        duration: "2017 - 2020",
      },
    ],
  },
];

const experience = [
  {
    icon: "💼",
    title: "My Experience",
    description:
      "A summary of my professional journey and roles in various organizations.",
    items: [
      {
        company: "Your Automation Technologies",
        position: "Frontend Developer",
        duration: "2024 - Present",
      },
    ],
  },
];

const skils = [
  {
    title: "My Skills",
    description:
      "A collection of technologies and tools I excel in, showcasing my proficiency in modern web development.",
    skilList: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaPython />, name: "Python" },
    ],
  },
];

const Resume = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Muthupandi's Resume | Web Developer</title>
        <meta
          name="description"
          content="Explore Muthupandi's professional resume showcasing his skills in web development, including experience, education, and technologies he excels in."
        />
        <meta
          name="keywords"
          content="Muthupandi, Resume, Web Developer, Frontend Developer, Next.js, React, JavaScript, HTML5, CSS3, Node.js, Python, Tailwind CSS"
        />
        <meta name="author" content="Muthupandi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta
          property="og:title"
          content="Muthupandi's Resume | Web Developer"
        />
        <meta
          property="og:description"
          content="Check out Muthupandi's resume. Discover his skills in web development with Next.js, React, Node.js, and more."
        />
        <meta property="og:image" content="/assets/resume-preview.jpg" />
        <meta property="og:url" content="https://muthupandi.in/resume" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Muthupandi's Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muthupandi's Resume | Web Developer"
        />
        <meta
          name="twitter:description"
          content="View Muthupandi's web development resume, with details about his skills, experience, and education."
        />
        <meta name="twitter:image" content="/assets/resume-preview.jpg" />
      </Head>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70h] w-full">
              {/* Experience Tab */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience[0].title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience[0].description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience[0].items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education[0].title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education[0].description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education[0].items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skils[0].title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skils[0].description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skils[0].skilList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              {/* About Me Tab */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about[0].title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {about[0].description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about[0].info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}:
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
