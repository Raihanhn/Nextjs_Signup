import React, { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface GoogleSigninButtonProps {
  children: ReactNode;
}

const GoogleSigninButton: FC<GoogleSigninButtonProps> = ({ children }) => {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000/admin" });
  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {" "}
      {children}{" "}
    </Button>
  );
};

export default GoogleSigninButton;
