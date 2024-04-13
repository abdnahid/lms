import { Button } from "@/components/ui/button";
import prisma from "@/lib/prismaDB";

export default async function Home() {
  const categories = await prisma.category.findMany();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {categories.map((cat, index) => (
        <span key={index}>{cat.name}</span>
      ))}
      <Button variant="ghost">Click me</Button>
    </main>
  );
}
