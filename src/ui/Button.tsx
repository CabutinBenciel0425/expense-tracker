import type React from "react";

function Button({
  variant,
  children,
}: {
  variant: "big" | "small";
  children: React.ReactNode;
}) {
  const stylesCta = {
    big: "border border-black bg-brand-cta px-14 py-2 text-2xl tracking-wider font-bold cursor-pointer active:scale-97 transition-all duration-300 ease shadow-lg rounded-md hover:bg-brand-cta-hover",
    small:
      "text-brand-cta-small cursor-pointer hover:text-brand-cta-small-hover transition-all duration-300 ease",
  };

  return <button className={stylesCta[variant]}>{children}</button>;
}

export default Button;
