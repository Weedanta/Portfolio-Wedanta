import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { GithubActivity } from '@/components/github-activity';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
import { getGithubContributions } from '@/lib/github';

const Home = async () => {
  const contributions = await getGithubContributions();

  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <main className="flex w-full flex-col items-center">
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          {contributions && <GithubActivity contributions={contributions} />}
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default Home;
