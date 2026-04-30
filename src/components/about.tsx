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
          I&apos;m Information Technology student at the Faculty of Computer
          Science, Universitas Brawijaya, with a strong interest in both
          software development and system analysis. I believe the two go hand in
          hand because understanding how systems are built makes me a better
          analyst, and thinking analytically makes me a more deliberate
          developer.
        </p>
        <p className="mb-4">
          On the development side, I have worked with web and mobile
          technologies, building functional applications that combine
          programming logic with practical problem solving. On the analysis
          side, I have developed an understanding of system design, databases,
          and software development lifecycles. This gives me the ability to
          evaluate requirements, map out workflows, and think critically about
          how a system should behave before a single line of code is written.
        </p>
        <p>
          I&apos;m open to opportunities in either development or system
          analysis, or roles that blend both. I am looking for an environment
          where I can keep growing, contribute meaningfully, and bridge the gap
          between technical execution and thoughtful system design. If you think
          we would be a good fit, feel free to reach out.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
