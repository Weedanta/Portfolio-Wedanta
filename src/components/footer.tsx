import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}
      <Button
        asChild
        variant="link"
        className="text-muted-foreground px-2 font-medium"
      >
        <a href="https://github.com/Weedanta">Bagus Wedanta</a>
      </Button>
    </footer>
  );
};
