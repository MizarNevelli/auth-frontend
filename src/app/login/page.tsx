"use client";

import { Input } from "@/components/Input/input";
import Card from "@/components/Card/card";
import Link from "next/link";
import { AppStoreTypes, useAppStore } from "@/stores/appStore";
import { userLogin } from "@/fetch/user";
import { useState } from "react";

export interface LoginDataTypes {
  email?: string;
  password?: string;
}

const LoginPage = () => {
  const { setError } = useAppStore<AppStoreTypes>((state) => state);
  const [loginData, setLoginData] = useState<LoginDataTypes>({});

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    userLogin(loginData)
      .then((result) => {
        console.log("LOGGED IN", result);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen pt-[100px]">
      <Card className="my-auto md:w-[35vw]">
        <Card.Header>Sign In</Card.Header>

        <Card.Content>
          <form
            onSubmit={onSubmitLogin}
            className="grid grid-cols-1 gap-4 mt-4"
          >
            <Input
              onChange={(e) => {
                setLoginData((oldState) => {
                  return {
                    ...oldState,
                    email: e.target.value,
                  };
                });
              }}
              type="email"
              label="Email"
            />
            <Input
              onChange={(e) => {
                setLoginData((oldState) => {
                  return {
                    ...oldState,
                    password: e.target.value,
                  };
                });
              }}
              type="password"
              label="Password"
            />
            <div className="my-5 text-center">
              <button className="rounded-xl w-full bg-slate-100 py-2 font-semibold dark:bg-slate-700">
                Login to your account
              </button>
            </div>
          </form>

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
