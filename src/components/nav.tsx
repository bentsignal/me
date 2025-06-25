import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Nav() {
  return (
    <Card>
      <CardHeader className="sr-only">
        <CardTitle>Nav</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`text-md flex flex-col items-center 
          justify-center gap-4 font-bold`}
        >
          <Link href="/about">[ about ]</Link>
          <Link href="/blog">[ blog ]</Link>
        </div>
      </CardContent>
    </Card>
  );
}
