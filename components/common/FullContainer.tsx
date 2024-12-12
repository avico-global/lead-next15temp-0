import { cn } from "../../lib/utils";

interface FullContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FullContainer: React.FC<FullContainerProps> = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={cn(
        "w-full flex items-center justify-center flex-col bg-cover bg-center relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FullContainer;
