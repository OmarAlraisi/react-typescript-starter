import { ReactNode } from "react";

interface IURLWrapperProps {
  className?: string;
  href: string;
  target?: string;
  children: ReactNode | ReactNode[];
}

export const URLWrapper = ({
  className,
  href,
  target = "_blank",
  children,
}: IURLWrapperProps) => {
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
};
