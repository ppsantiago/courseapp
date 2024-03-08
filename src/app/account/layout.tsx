import Navbar from "app/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-gray-700">
      <Navbar />
      {children}
    </div>
  );
}
