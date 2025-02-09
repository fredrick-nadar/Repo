"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import LiquidChrome from './LiquidChrome';

// Timeline data array - you can easily add/modify entries here
const timelineData = [
  {
    year: "2024",
    title: "Revolutionary Web Experiences",
    description: "Built and launched revolutionary web experiences",
    image: "https://assets.aceternity.com/templates/startup-1.webp",
    imageAlt: "startup template"
  },
  {
    year: "2023",
    title: "Expanded Capabilities",
    description: "Expanded our capabilities with cutting-edge features",
    image: "https://assets.aceternity.com/pro/hero-sections.png",
    imageAlt: "hero template"
  },
  {
    year: "2022",
    title: "Latest Achievements",
    description: "Latest Updates and Achievements",
    image: "https://assets.aceternity.com/pro/bento-grids.png",
    imageAlt: "bento template"
  },
  {
    year: "2022",
    title: "Latest Achievements",
    description: "Latest Updates and Achievements",
    image: "https://assets.aceternity.com/pro/bento-grids.png",
    imageAlt: "bento template"
  },{
    year: "2022",
    title: "Latest Achievements",
    description: "Latest Updates and Achievements",
    image: "https://assets.aceternity.com/pro/bento-grids.png",
    imageAlt: "bento template"
  },{
    year: "2022",
    title: "Latest Achievements",
    description: "Latest Updates and Achievements",
    image: "https://assets.aceternity.com/pro/bento-grids.png",
    imageAlt: "bento template"
  }
];

const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={1}
          amplitude={0.6}
          interactive={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full" ref={containerRef}>
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-6xl mb-4 text-white text-center font-['Cascadia_Code'] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            Journey Timeline
          </h2>
          <p className="text-lg text-center mb-20 font-['Cascadia_Code'] tracking-wide text-neutral-400">
            A visual journey through our key milestones and achievements.
          </p>

          <div ref={ref} className="relative max-w-6xl mx-auto">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-black/40 to-transparent">
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <div key={index} className="mb-32">
                {/* Year Marker */}
                <div className="flex justify-center mb-16">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm border border-black/40 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500/50 border border-blue-400" />
                    </div>
                    <h3 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/70 whitespace-nowrap font-['Cascadia_Code'] tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                      {item.year}
                    </h3>
                  </div>
                </div>

                {/* Content Box - Added rounded borders */}
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} px-4 mt-8`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[500px] bg-black/30 backdrop-blur-sm p-6 border border-black/40 rounded-[15%] overflow-hidden"
                  >
                    <h4 className="text-2xl font-semibold text-white mb-4 font-['Cascadia_Code'] tracking-tight ">
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 text-base mb-6 font-['Cascadia_Code'] leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                    <div className="w-full">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="rounded-lg object-cover h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

