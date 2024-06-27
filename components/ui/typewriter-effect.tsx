"use client";

import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  loop = true,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  loop?: boolean;
}) => {
  // split text inside of words into array of characters
  const wordsArray = useMemo(() => words.map((word) => ({
    ...word,
    text: word.text.split(""),
  })), [words]);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      const totalChars = wordsArray.reduce(
        (acc, word) => acc + word.text.length,
        0
      );
      const animation = async () => {
        await animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          }
        );

        if (loop) {
          setTimeout(() => {
            animate(
              "span",
              { opacity: 0 },
              { duration: 0.3, delay: stagger(0.1, { from: totalChars }) }
            ).then(() => {
              setLoopIndex((prev) => prev + 1);
            });
          }, totalChars * 100); // Adjust delay based on typing speed
        }
      };

      animation();
    }
  }, [isInView, loopIndex, animate, loop, wordsArray]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <span key={`word-${idx}-${loopIndex}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}-${loopIndex}`}
                className={cn(
                  `dark:text-white text-white opacity-0 hidden`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
