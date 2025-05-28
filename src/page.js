import Image from "next/image";
import React from "react";
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Daniel
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 rounded-lg mt-2">
              <a href="#home" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Daniel</h3>
            <p className="text-gray-400 text-sm">
              Computer Science graduate passionate about building analytical software tools 
              to help people make well-informed decisions and improve their lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Daniel. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


// Updated Project Card Component
function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href={link || "#"}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={imageUrl || "/api/placeholder/400/200"}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href={link || "#"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link || "#"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "Surgical Training VR",
      description:
        "A Virtual Reality surgical training project built with Unity, Scikit-Learn, and Generative AI",
      imageUrl: "/unity_logo.jpg",
      link: "#",
    },
    // {
    //   title: "Task Management App",
    //   description: "place text here",
    //   imageUrl: "/api/placeholder/400/200",
    //   link: "#"
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "place text here",
    //   imageUrl: "/api/placeholder/400/200",
    //   link: "#"
    // },
    // {
    //   title: "Portfolio Website",
    //   description: "place text here",
    //   imageUrl: "/api/placeholder/400/200",
    //   link: "#"
    // }
  ];

  return (
    
    <div className="bg-black text-white">
      {/* Hero Section */}
      <main className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="IMG_0468.jpg"
            alt="Background"
            className="h-full w-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          {/* Profile Image */}
          <div className="h-70 w-70 rounded-full border-4 border-white shadow-lg overflow-hidden mb-6">
            <img
              src="/IMG_9517.jpeg"
              alt="Daniel"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Gradient Title */}
          <h1 className="mb-6 text-3xl font-extrabold md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">
              Hi, I&lsquo;m Daniel! Nice to meet you
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed">
            I&lsquo;m a recent graduate of Cal Poly Pomona, where I graduated with my
            B.S in Computer Science. I&lsquo;m interested in building analytical
            software tools to help people improve their lives based on well
            informed decisions!
          </p>

          <div className="mt-10 text-xs"><p> p.s: I took this background photo myself at Grant Lake in Mammoth Ca, Jan 16, 2025 @ 12:25 A.M.!</p></div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills
            </p>
        </div>

          {/* Projects Carousel (hard coded to 1 for now, use project.value later for dynamic mapping) */}
            <div className="flex justify-center">
              <ProjectCard
                title={"Surgical Training VR"}
                description={"A Virtual Reality surgical training project built with Unity, Scikit-Learn, and Generative AI"}
                imageUrl={"unity_logo.jpg"}
                link={projects.link}
              />
            </div>

          {/* {use carousel after getting more projects ready} */}
          {/* <div className="relative max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
            </Carousel>
          </div> */}

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Projects
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* about me */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-center">

        
        {/* timeline section */}
        <section>
      <div className="text-white mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <div className="items-center text-sm font-semibold text-indigo-600">
              Python Development
            </div>
            <p className="mt-6 text-lg font-semibold tracking-tight text-gray-400">
              Machine Learning & API Development
            </p>
            <p className="mt-1 text-base text-gray-400">
              Expertise in scikit-learn for machine learning model development, data preprocessing, and predictive analytics. Building robust APIs with FastAPI for scalable backend solutions and model deployment.
            </p>
          </div>
          <div>
            <div className="items-center text-sm font-semibold text-indigo-600">
            Generative AI
            </div>
            <p className="mt-6 text-lg font-semibold tracking-tight text-gray-400">
              LLM Integration & Applications
            </p>
            <p className="mt-1 text-base text-gray-400">
              Implementing large language models into diverse applications, creating intelligent chatbots, content generation systems, and AI-powered workflow automation across various domains and use cases.
            </p>
          </div>
          <div>
            <div className="items-center text-sm font-semibold text-indigo-600">
              Unity Development
            </div>
            <p className="mt-6 text-lg font-semibold tracking-tight text-gray-400">
              3D Scene Creation & Game Development
            </p>
            <p className="mt-1 text-base text-gray-400">
              Designing and developing immersive 3D scenes, interactive environments, and game mechanics using Unity engine. Creating engaging user experiences through visual storytelling and interactive design.
            </p>
          </div>
        </div>
      </div>
    </section>
      </section>
    </div>
  );
}
