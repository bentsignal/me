import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <span>zzzzz.......</span>
      <Button asChild variant="outline" className="font-bold">
        <Link href="/">back to home</Link>
      </Button>
    </div>
  );
}
