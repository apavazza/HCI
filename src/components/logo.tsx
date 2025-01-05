type LogoProps = {
    theme?: "light" | "dark";
    className?: string;
  };
  
  const Logo = ({ theme = "light", className = "" }: LogoProps) => {
    return (
      <p className={`font-lato font-black ${className}`}>
        {theme === "light" ? (
          <>
            <span className="text-brand-primary">writewarp</span>
          </>
        ) : (
          <>
            <span className="text-brand-stroke-weak">writewarp</span>
          </>
        )}
      </p>
    );
  };
  
  export default Logo;