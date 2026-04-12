import type React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-transparent flex flex-col overflow-auto">
      {children}
    </div>
  );
}

export default AppLayout;
