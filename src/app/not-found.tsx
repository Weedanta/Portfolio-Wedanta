'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';

export default function NotFound() {
  return (
    <>
      <div className="container flex min-h-screen flex-col items-center justify-between py-8">
        <header className="flex w-full justify-end">
          <ThemeToggle />
        </header>

        <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground/40 text-[8rem] font-black leading-none tracking-tighter sm:text-[12rem]"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="-mt-4 text-3xl font-bold tracking-normal sm:-mt-6 sm:text-5xl"
          >
            Page Not Found
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/">
                <Icons.arrowRight className="mr-2 size-4 rotate-180" /> Back to
                Home
              </Link>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
}
