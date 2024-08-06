const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full">
      <div className="px-5">
        <nav>Navbar</nav>
      </div>
      <section className="w-full flex justify-center items-center border-2">{children}</section>
    </main>
  );
};

export default DashboardLayout;
