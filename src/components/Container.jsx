export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 pt-12 md:px-8 md:pt-16 ${className}`}
    >
      {children}
    </div>
  );
}
