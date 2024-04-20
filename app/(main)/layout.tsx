import Navbar from "@/components/header/Navbar";
import Sidebar from "./_components/Sidebar";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: object;
}) {
  return (
    <main className="h-screen">
      <div className="max-w-[1600px] w-full h-full m-auto grid grid-cols-1 md:grid-cols-[200px_1fr] justify-center grow text-black dark:text-white">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="grow p-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
