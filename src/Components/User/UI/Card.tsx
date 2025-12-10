import { ReactNode } from "react";

interface CardProps {
  title: string;
  data: ReactNode;            // <-- was probably `string | number`
  children?: ReactNode;
}

const Card = ({ title, data, children }: CardProps) => {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm border border-border">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <div className="text-xl font-bold">{data}</div>
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;