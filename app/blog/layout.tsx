export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mt-16 mb-16 sm:mt-32 sm:mb-32 grid gap-8 sm:gap-24 place-content-center">
      {children}
    </div>
  );
}