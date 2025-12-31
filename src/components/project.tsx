'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;
  const previewLink = links?.preview?.trim?.() ?? '';
  const githubLink = links?.github?.trim?.() ?? '';
  const hasPreview = Boolean(previewLink && previewLink !== '#');
  const hasGithub = Boolean(githubLink && githubLink !== '#');

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-secondary flex w-full flex-col items-center rounded p-5 text-center shadow-lg transition-shadow hover:shadow-xl md:w-80"
    >
      <div className="bg-muted w-fit rounded-full p-4">
        <Image
          src={image}
          alt={`${title} image`}
          width={32}
          height={32}
          className="size-6"
        />
      </div>
      <h3 className="my-2 text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="my-3 flex flex-wrap justify-center gap-2">
        {technologies.map((tech) => (
          <span className="bg-muted rounded-full px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-2 flex">
        {hasPreview && (
          <Button variant="outline" asChild className="mr-2 px-5">
            <a href={previewLink} aria-label="preview project">
              <Icons.preview className="size-5" />
            </a>
          </Button>
        )}
        {hasGithub && (
          <Button variant="outline" asChild className="mr-2 px-5">
            <a href={githubLink} aria-label="github">
              <Icons.githubOutline className="size-5" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};
