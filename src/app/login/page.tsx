"use client";

import { Input } from "@/components/Input/input";
import Card from "@/components/Card/card";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen pt-[100px]">
      <Card className="my-auto">
        <Card.Header>Sign In</Card.Header>

        <Card.Content>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
          </div>

          <div className="my-5 text-center">
            <button className="rounded-xl w-full bg-slate-100 py-2 font-semibold">
              Login to your account
            </button>
          </div>
          <div className="text-xs mt-5">
            Do not have an account yet? Go to{" "}
            <Link className="underline" href={"/register"}>
              register
            </Link>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default LoginPage;
