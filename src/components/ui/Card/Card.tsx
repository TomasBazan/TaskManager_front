import "./Card.css";

type props = {
  children: React.ReactNode;
  className?: string;
};

export function MyCard({ className, children }: props) {
  return (
    <div className={`Card${className ? ` ${className}` : ""}`}>{children}</div>
  );
}
