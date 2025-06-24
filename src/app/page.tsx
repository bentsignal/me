import Socials from "@/components/socials";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ThemeToggle />
      <Socials />
    </div>
  );
}
