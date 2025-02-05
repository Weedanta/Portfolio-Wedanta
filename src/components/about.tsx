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
          I'm currently studying at the Bachelor of Information Technology
          Study Program, Faculty of Computer Science, Universitas Brawijaya.
          I'm very interested in Information Technology and Web
          Programming. During my study, I learned basic to advanced concepts in
          programming, database, and operating system. My main interest is web
          and mobile apps development, where I can combine creativity and
          programming logic to create innovative and functional solutions.
        </p>
        <p>
          I'm open to job opportunities where I can apply my skills, continue
          learning, and grow professionally. If you have a suitable opportunity
          that aligns with my experience, feel free to reach out to me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
