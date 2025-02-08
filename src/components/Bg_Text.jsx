import React from "react";
import styled, { keyframes } from 'styled-components';
import RotatingText from './RotatingText';
import Squares from './Squares';
import Button from './Button';
import '/dist/style.css';

const gradientAnimation = keyframes`
  0% { background-position: 0% center; }
  100% { background-position: -200% center; }
`;

const GradientText = styled.h2`
  background: linear-gradient(to right, #4c1d95, #7c3aed, #8b5cf6, #4c1d95);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} 3s linear infinite;
`;

export function Bg_Text() {
  const rotatingTexts = [
    "Code. Create. Chase.",
    "Makin' Ideas Into Result.",
    "24 Hours of True Creation.",
    "Craftin' Future Now"
  ];

  const buttonTexts = ["TEAM", "PROJECTS"];

  const handleButtonClick = (text) => {
    console.log(`${text} button clicked`);
  };

  return (
    <Squares className="flex flex-col min-h-screen w-full relative z-20">
      {/* Navbar Section */}
      <nav className="h-auto py-4 bg-transparent">
        <div className="flex flex-col md:flex-row justify-between items-center text-white px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <img 
              src="4i Logo.png" 
              alt="4i Logo" 
              className="h-10 sm:h-12 md:h-16 w-auto mx-auto md:mx-0" 
            />
          </div>
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-9 lg:space-x-16">
            {buttonTexts.map((text, index) => (
              <li key={index}>
                <Button text={text} onClick={() => handleButtonClick(text)} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Content Section */}
      <div className="flex-1 flex items-center px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-[700px] max-w-full mt-[100px]">
          <GradientText className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
            Welcome To Team4i
            <div className="mt-2 w-full sm:w-[409px]">
              <RotatingText
                texts={rotatingTexts}
                splitBy="words"
                rotationInterval={3000}
                staggerDuration={0.1}
                mainClassName="inline-flex flex-wrap"
                elementLevelClassName="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white"
              />
            </div>
          </GradientText>
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 mt-4 md:mt-6 max-w-lg transition-all duration-700 ease-in-out">
          Forge ahead with wisdom from the visionaries of Team 4i. Dreamers, Creators, Explorers, and Innovators — All With Fun.          </p>
        </div>
      </div>
    </Squares>
  );
}