import clsx from "clsx";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx("shadow-lg rounded-xl h-fit overflow-hidden", className)}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-600 px-5 py-3 text-2xl font-semibold border-slate-300 border-b">
      {children}
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="p-5">{children}</div>;
};

Card.Header = Header;
Card.Content = Content;

export default Card;
