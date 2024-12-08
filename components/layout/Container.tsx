export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container-width section-padding ${className || ''}`}>
      {children}
    </div>
  );
} 