'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m currently an undergraduate student in the Information
          Technology program at the Faculty of Computer Science, Universitas
          Brawijaya. I have a strong interest in information technology and web
          programming. Throughout my studies, I have learned concepts ranging
          from basic to advanced in programming, databases, and operating
          systems. My main focus is web and mobile application development,
          where I combine creativity and programming logic to build functional
          and innovative solutions.
        </p>
        <p>
          I&apos;m open to job and internship opportunities where I can apply my
          skills, continue learning, and grow professionally. If you have an
          opportunity that aligns with my experience and interests, feel free to
          reach out.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
