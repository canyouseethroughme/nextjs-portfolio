export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen mt-32 mb-32 grid gap-24 place-content-center">
      {children}
    </div>
  );
}