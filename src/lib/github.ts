import type { ContributionDay } from '@/components/ui/contribution-skyline';

export const GITHUB_USERNAME = 'Weedanta';

type TContributionsResponse = {
  contributions: { date: string; count: number; level: number }[];
};

// Public mirror of the GitHub contribution calendar, so no token is needed.
// Revalidated daily; returns null when the request fails so the section can hide itself.
export const getGithubContributions = async (): Promise<
  ContributionDay[] | null
> => {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: 60 * 60 * 24 } }
    );

    if (!res.ok) return null;

    const json = (await res.json()) as TContributionsResponse;

    return json.contributions.map(({ date, count }) => ({ date, count }));
  } catch {
    return null;
  }
};
