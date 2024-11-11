import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);
