// "use client";

// import { motion } from "motion/react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//       }}
//       transition={{
//         duration: .25,
//       }}
//       className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
//     >
//       {/* Gold Line */}

//       <span className="absolute left-0 top-0 h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />

//       {/* Icon */}

//       <motion.div
//         whileHover={{
//           rotate: 10,
//           scale: 1.08,
//         }}
//         className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10"
//       >
//         <Icon
//           size={30}
//           className="text-secondary"
//         />
//       </motion.div>

//       <h3 className="text-2xl font-bold text-text-primary">
//         {title}
//       </h3>

//       <p className="mt-5 leading-8 text-text-secondary">
//         {description}
//       </p>

//       <Link
//         href="/services"
//         className="mt-8 inline-flex items-center gap-2 font-semibold text-secondary"
//       >
//         Learn More

//         <motion.span
//           whileHover={{
//             x: 5,
//           }}
//         >
//           <ArrowRight size={18} />
//         </motion.span>
//       </Link>
//     </motion.div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  image,
  icon: Icon,
  slug,
  featured = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`group relative overflow-hidden rounded-[32px] ${
        featured ? "md:col-span-2 md:h-[500px]" : "h-[340px]"
      }`}
    >
      {/* Background Image */}

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Glow */}

      <div className="absolute -bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="relative flex h-full flex-col justify-end p-8">

        {/* Icon */}

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">

          <Icon
            size={30}
            className="text-secondary"
          />

        </div>

        <h3
          className={`font-black text-white ${
            featured
              ? "text-4xl"
              : "text-2xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-5 max-w-xl text-white/80 ${
            featured
              ? "text-lg leading-8"
              : "leading-7"
          }`}
        >
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className="mt-8 inline-flex items-center gap-3 font-semibold text-secondary"
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-2"
          />

        </Link>

      </div>
    </motion.div>
  );
}