interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }
  
  const Container: React.FC<ContainerProps> = ({ children, className = "", style }) => {
    return (
      <div
        style={style}
        className={`w-11/12 max-w-screen-xl flex items-center justify-center flex-col bg-cover bg-center ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export default Container;
  