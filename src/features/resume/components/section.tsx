import { Separator } from "@/components/ui/separator";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <Separator className="mb-1" />
      {children}
    </div>
  );
}
