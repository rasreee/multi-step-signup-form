"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignUpSuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 2000);
  }, []);

  return <div className="flex flex-col gap-8">Success! Redirecting...</div>;
};

export default SignUpSuccessPage;
