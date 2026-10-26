'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import ContributionSkyline, {
  type ContributionDay,
} from '@/components/ui/contribution-skyline';
import { GITHUB_USERNAME } from '@/lib/github';

// Zinc ramp to match the monochrome shadcn theme (lightest activity → heaviest).
const zincPalette = {
  light: ['#d4d4d8', '#a1a1aa', '#52525b', '#18181b'],
  dark: ['#3f3f46', '#71717a', '#a1a1aa', '#fafafa'],
};

type TProps = {
  contributions: ContributionDay[];
};

export const GithubActivity = ({ contributions }: TProps) => {
  return (
    <section id="activity" className="my-10 w-full scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="GitHub Activity"
          content="A year of commits, pull requests and reviews. Switch to 3D and drag to look around."
        />
        <div className="mx-auto w-full max-w-4xl">
          <ContributionSkyline
            data={contributions}
            palette={zincPalette}
            footer={
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
              >
                github.com/{GITHUB_USERNAME}
              </a>
            }
          />
        </div>
      </motion.div>
    </section>
  );
};
