"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9344518443",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tomuthu.engineer@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Madurai, Tamil Nadu",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        "serv5ice_yxz6nl", // Your EmailJS Service ID
        "template_bmli0ga", // Your EmailJS Template ID
        formData,
        "y7by33hGJoyOK1DNR"
      );
      console.log(result.text);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message.");
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9344518443",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Madurai, Tamil Nadu",
      addressLocality: "Madurai",
      addressRegion: "TN",
      postalCode: "625001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/muthupandi",
      "https://github.com/muthupandi",
    ],
  };

  return (
    <>
      <Head>
        <title>Contact Me - Muthu Pandi</title>
        <meta
          name="description"
          content="Get in touch with Muthu Pandi, a skilled web developer. Reach out for web development, app development, and UI/UX design services."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Contact, Muthu Pandi, Web Developer, App Developer, UI/UX Design"
        />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:title" content="Contact Me - Muthu Pandi" />
        <meta
          property="og:description"
          content="Reach out to Muthu Pandi for web development, app development, and UI/UX design."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/contact.jpg"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourwebsite.com/contact" />
        <meta name="twitter:title" content="Contact Me - Muthu Pandi" />
        <meta
          name="twitter:description"
          content="Contact Muthu Pandi for your next web or app development project."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/contact.jpg"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6 xl:py-0"
      >
        <div className="container mx-auto xl:py-0">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-10 xl:py-4 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/40">
                  Have a project or question? Fill out the form and I'll respond
                  promptly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Firstname"
                  />
                  <Input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Lastname"
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                  />
                  <Input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                  />
                </div>
                <Select
                  name="service"
                  value={formData.service}
                  onValueChange={handleChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="app-dev">App Development</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[150px]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                />
                <Button size="lg" className="max-w-40">
                  Send message
                </Button>
                {status && <p>{status}</p>}
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
