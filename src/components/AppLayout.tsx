import type React from "react";
import { useUI } from "../hooks/useUI";
import Modal from "../ui/Modal";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { state, modalType } = useUI();
  return (
    <>
      <div className="h-screen w-screen bg-transparent flex flex-col">
        {children}
      </div>
      {state.modal.isOpen && (
        <Modal variantType={modalType} payload={state.modal.payload} />
      )}
    </>
  );
}

export default AppLayout;
