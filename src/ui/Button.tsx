import type React from "react";

type ButtonProps = {
  variant: "big" | "small" | "modalBtnCancel" | "modalBtnSaveConfirm";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

function Button({ variant, children, onClick, type = "button" }: ButtonProps) {
  const stylesCta = {
    big: "bg-brand-cta px-14 py-2 text-2xl tracking-wider font-bold cursor-pointer active:scale-97 transition-all duration-300 ease shadow-lg rounded-md hover:bg-brand-cta-hover",
    small:
      "text-brand-cta-small cursor-pointer hover:text-brand-cta-small-hover transition-all duration-300 ease",
    modalBtnCancel:
      "border-brand-text border bg-transparent px-3 py text-lg tracking-wide cursor-pointer active:scale-97 transition-all duration-300 ease rounded-md hover:bg-brand-cta-hover",
    modalBtnSaveConfirm:
      "border-brand-cta border bg-brand-cta px-3 py text-lg tracking-wide cursor-pointer active:scale-97 transition-all duration-300 ease rounded-md hover:bg-brand-cta-hover",
  };

  return (
    <button className={stylesCta[variant]} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
