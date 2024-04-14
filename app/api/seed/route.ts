import prisma from "@/lib/prismaDB";

export async function GET(req: Request) {
  // try {
  //   await prisma.category.createMany({
  //     data: [
  //       { name: "Computer Science" },
  //       { name: "Music" },
  //       { name: "Fitness" },
  //       { name: "Photography" },
  //       { name: "Accounting" },
  //       { name: "Engineering" },
  //       { name: "Filming" },
  //     ],
  //   });
  //   return new Response("done", { status: 200 });
  // } catch (error) {
  //   console.log(error, "error");
  //   return new Response("done", { status: 401 });
  // }
  return new Response("Hey! Nothing to seed", { status: 200 });
}
