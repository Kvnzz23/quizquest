import { BottomNav } from "@/components/layout/BottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="mx-auto max-w-5xl p-4 pb-24 md:ml-64 md:p-8 md:pb-8 lg:mx-0 lg:max-w-none xl:max-w-6xl xl:ml-64">{children}</main>
      <BottomNav />
    </>
  );
}
