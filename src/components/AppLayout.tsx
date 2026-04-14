import type React from "react";
import { useUI } from "../hooks/useUI";
import Modal from "../ui/Modal";
import Form from "../ui/Form";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { state, modalType } = useUI();
  return (
    <>
      <div className="h-screen w-screen bg-transparent flex flex-col">
        {children}
      </div>
      <Form />
      {state.modal.isOpen && modalType && (
        <Modal variantType={state.modal.type} />
      )}
    </>
  );
}

export default AppLayout;
