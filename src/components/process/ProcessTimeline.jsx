"use client";

import { motion } from "motion/react";

export default function ProcessTimeline({ steps, active, setActive }) {
  return (
    <div className="relative flex flex-row gap-4 lg:flex-col lg:gap-10">
      {/* vertical line */}

      <div
        className="
absolute
left-7
top-8
hidden
h-[80%]
w-[2px]
bg-border
lg:block
"
      />

      {steps.map((step, index) => {
        const Icon = step.icon;

        const isActive = active === index;

        return (
          <button
            key={step.id}
            onClick={() => setActive(index)}
            className="
relative 
z-10 
flex 
items-center 
gap-4 
text-left
min-h-[90px]
"
          >
            <motion.div
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
              className={`
flex
h-14
w-14
items-center
justify-center
rounded-full
border-2

${
  isActive
    ? "border-secondary bg-secondary text-primary shadow-lg"
    : "border-border bg-background text-text-secondary"
}

`}
            >
              <Icon size={22} />
            </motion.div>

            <div className="hidden lg:block">
              <p
                className={`
text-xs
font-bold
tracking-widest

${isActive ? "text-secondary" : "text-text-secondary"}

`}
              >
                {step.number}
              </p>

              <h4
                className={`
font-semibold

${isActive ? "text-text-primary" : "text-text-secondary"}

`}
              >
                {step.title}
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
