import Link from "next/link";

interface ResumeItemProps {
  title: string;
  subtitle?: string;
  url?: string;
  subItems: SubItemProps[];
}

export default function ResumeItem({
  title,
  subtitle,
  url,
  subItems,
}: ResumeItemProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-md font-bold">{title}</h2>

      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm underline"
        >
          {url.replace("https://", "")}
        </Link>
      )}
      {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
      <div className="border-muted-foreground my-2 flex flex-col gap-2 border-l-1 pl-4">
        {subItems.map((subItem) => (
          <SubItem key={subItem.title} subItem={subItem} />
        ))}
      </div>
    </div>
  );
}

interface SubItemProps {
  title: string;
  subtitle: string;
  description?: string;
  bullets?: string[];
  children?: React.ReactNode;
}

function SubItem({ subItem }: { subItem: SubItemProps }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{subItem.title}</h3>
      <p className="text-muted-foreground text-sm">{subItem.subtitle}</p>
      {subItem.description && (
        <p className="pt-2 pb-1 text-sm font-semibold">{subItem.description}</p>
      )}
      {subItem.bullets && (
        <ul className="list-disc py-1 pl-4 text-sm">
          {subItem.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {subItem.children && subItem.children}
    </div>
  );
}
