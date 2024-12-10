export const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex-shrink-0 flex items-center gap-2" 
      aria-label="Home"
    >
      <img
        src="/lovable-uploads/101ecb9b-292e-4ae7-b5bb-0e4f82d955b5.png"
        alt="Elak Council Logo"
        className="h-12 w-12"
        loading="eager"
      />
      <span className="text-xl font-bold text-gray-900">
        Elak Council
      </span>
    </a>
  );
};