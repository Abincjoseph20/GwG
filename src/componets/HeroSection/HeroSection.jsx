import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white"
    >
      {/* Animated Image */}
      <motion.img
        src="/hero.png" // replace with your image path
        alt="Hero"
        className="w-64 h-64"
        animate={{
          y: ["0%", "-15%", "0%"], // Jumping animation
          rotate: [0, 360],        // Full rotation
        }}
        transition={{
          y: {
            duration: 1.5,   // Jump speed control
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,    // Rotation speed control
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mt-8">Welcome to My Website</h1>
      <p className="text-lg text-gray-600 mt-2">
        Scroll down to explore more
      </p>
    </section>
  );
}
