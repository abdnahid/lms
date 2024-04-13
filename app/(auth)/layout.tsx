export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-bodyBg dark:bg-bodyBg-dark min-h-screen flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
