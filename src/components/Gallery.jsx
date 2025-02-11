import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '/dist/style.css';   

const Gallery = () => {
  const galleryRef = useRef(null);
  
  // Custom CSS for Cascadia font
  const titleStyle = {
    fontFamily: 'Cascadia Code, monospace',
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    backgroundImage: 'linear-gradient(to right, #c084fc, #3b82f6)', // purple-400 to blue-500
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1975&auto=format&fit=crop',
      alt: 'Team Building'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Team Meeting'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      alt: 'Project Discussion'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      alt: 'Brainstorming'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
      alt: 'Team Celebration'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
      alt: 'Office Culture'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
      alt: 'Strategy Meeting'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      alt: 'Business Planning'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop',
      alt: 'Team Success'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Tech Development'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop',
      alt: 'Collaborative Work'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
      alt: 'Innovation Hub'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Creative Space'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070&auto=format&fit=crop',
      alt: 'Digital Workshop'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop',
      alt: 'Future Planning'
    }
  ];

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  // Transform for first row (right to left)
  const x1 = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-75%"]);
  // Transform for second row (left to right)
  const x2 = useTransform(scrollYProgress, [0.1, 0.9], ["-75%", "0%"]);

  return (
    <section 
      ref={galleryRef} 
      className="relative min-h-screen overflow-hidden py-20"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 style={titleStyle}>Gallery</h1>
      </div>

      {/* First Row - Right to Left */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[45vh] mb-30"
      >
        <motion.div 
          style={{ x: x1 }} 
          className="flex gap-6 absolute py-10 px-6"
        >
          {images.slice(0, 8).map((image) => (
            <motion.div
              key={image.id}
              className="relative flex-none w-[300px] h-[400px] rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-[250%] h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Second Row - Left to Right */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[45vh]"
      >
        <motion.div 
          style={{ x: x2 }} 
          className="flex gap-6 absolute py-10 px-6"
        >
          {images.slice(8).map((image) => (
            <motion.div
              key={image.id}
              className="relative flex-none w-[300px] h-[400px] rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
