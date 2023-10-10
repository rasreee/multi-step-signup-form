import type { LayoutProps } from "@/modules/nextjs";

const SignUpLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col p-16">
      <h1 className="mb-20 text-center font-bold text-3xl">Sign Up</h1>
      <div>{children}</div>
    </div>
  );
};

export default SignUpLayout;
