import prisma from "@/lib/prismaDB";

export async function GET(req: Request) {
  await prisma.category.createMany({
    data: [
      {
        name: "education",
      },
      {
        name: "politics",
      },
    ],
  });

  return new Response("done");
}
