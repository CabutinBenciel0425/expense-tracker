import type React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-transparent border border-black flex flex-col">
      {children}
    </div>
  );
}

export default AppLayout;
