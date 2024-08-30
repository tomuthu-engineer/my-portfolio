"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const about = [{
  title: 'About me',
  description: "orem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero sint temporibus atque exercitationem nam! ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muthu Pandi"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9344518443"
    },
    {
      fieldName: "Experience",
      fieldValue: "4 Months"
    },
    {
      fieldName: "Skype",
      fieldValue: "Mpsd"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tamil"
    },
    {
      fieldName: "Email",
      fieldValue: "tomuthu.engineer@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tamil"
    },

  ]
}]

const education = [{
  icon: "",
  title: "My education",
  description: "orem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero sint temporibus atque exercitationem nam! ",
  items: [
    {
      institution: "The American College",
      degree: "Frontend Developer",
      duration: "2017 - 2020"
    }
  ]
}]
const experience = [{
  icon: "",
  title: "My experience",
  description: "orem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero sint temporibus atque exercitationem nam! ",
  items: [
    {
      company: "Your Automation Technloligies",
      position: "Frontend Developer",
      duration: "2024 - Present"
    }
  ]
}]

const skils = [{
  title: "My Skils",
  description: "orem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero sint temporibus atque exercitationem nam! ",
  skilList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaPython />,
      name: "node.js"
    },
  ]
}]


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"




const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about">
              About me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70h] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience[0].title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">{experience[0].description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience[0].items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-center lg:items-start  gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education[0].title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">{education[0].description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education[0].items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start  gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skils[0].title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skils[0].description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"
                >{skils[0].skilList.map((item, index) => {
                  return <li key={index}>
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
                    </TooltipProvider></li>
                })}</ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about[0].description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about[0].info.map((item, index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume