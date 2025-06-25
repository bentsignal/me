import Socials from "@/components/socials";
import ThemeToggle from "@/components/theme-toggle";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <ThemeToggle />
      <Nav />
      <Socials />
    </div>
  );
}
