'use client';

import 'react-vertical-timeline-component/style.min.css';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

// Buat komponen terpisah untuk Timeline Element
const TimelineElement = ({
  title,
  description,
  location,
  date,
}: {
  title: string;
  description: string;
  location: string;
  date: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: 'hsl(var(--secondary))',
        boxShadow: 'none',
        padding: '20px',
      }}
      contentArrowStyle={{ display: 'none' }}
      date={date}
      dateClassName="!font-medium text-muted-foreground"
      icon={<Icons.briefcase />}
      iconStyle={{
        boxShadow: 'none',
        border: '2px solid hsl(var(--foreground)',
      }}
    >
      <h3 ref={ref} className="font-medium">
        {title}
      </h3>
      <p className="!mt-0 !font-normal">{location}</p>
      <p className="text-muted-foreground !mt-1 !font-normal">{description}</p>
    </VerticalTimelineElement>
  );
};

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll
    ? experiencesData
    : experiencesData.slice(0, 6);
  const hasMore = experiencesData.length > 6;

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="My Experience"
        content="Professional experience that I have accumulated over several years."
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {visibleExperiences.map((experience, index) => (
          <TimelineElement
            key={index} // Gunakan index atau unique identifier dari data
            {...experience}
          />
        ))}
      </VerticalTimeline>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? 'Show less' : 'Show all'}
          </Button>
        </div>
      )}
    </section>
  );
};
