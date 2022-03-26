import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "outline";
}

const buttonClasses = {
  outline:
    "ring-inset ring-dark-gray ring-2 hover:ring-white focus:ring-white outline-none transition-shadow",
};

const Button: FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`${buttonClasses[variant]} ${className} uppercase tracking-[.2em] py-2 px-8 rounded`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
