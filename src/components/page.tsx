import type { FC, ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      {...props}
    >
      {children}
    </main>
  );
};
