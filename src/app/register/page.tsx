"use client";

import Card from "@/components/Card/card";
import { Input } from "@/components/Input/input";
import { registerNewUser } from "@/fetch/user";
import { useAppStore } from "@/stores/appStore";
import Link from "next/link";
import { useState } from "react";

// const validateEmail = (email: string) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

export interface NewUserTypes {
  name?: string;
  email?: string;
  password?: string;
}

const RegisterPage = () => {
  const [user, setUser] = useState<NewUserTypes>({});

  const { success, error, setSuccess, setError } = useAppStore(
    (state) => state
  );

  const onSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();

    registerNewUser(user)
      .then((result) => {
        setSuccess(
          "Congratulations! Your request is successfully completed. Check your email!"
        );
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen pt-[100px]">
      <Card className="my-auto md:w-[35vw]">
        <Card.Header>Register new account </Card.Header>

        <Card.Content>
          <div>
            <form
              className="grid grid-cols-1 gap-4 mt-4"
              onSubmit={onSubmitRegistration}
            >
              <Input
                onChange={(e) => {
                  setUser((oldState) => {
                    return {
                      ...oldState,
                      name: e.target.value,
                    };
                  });
                }}
                type="text"
                label="User Name"
              />
              <Input
                type="email"
                label="Email"
                onChange={(e) => {
                  // const isValid = validateEmail(e.target.value);
                  // console.log("isValid", isValid);
                  setUser((oldState) => {
                    return {
                      ...oldState,
                      email: e.target.value,
                    };
                  });
                }}
              />
              <Input
                type="password"
                label="Password"
                onChange={(e) => {
                  setUser((oldState) => {
                    return {
                      ...oldState,
                      password: e.target.value,
                    };
                  });
                }}
              />
              <div className="my-5 text-center">
                <button
                  type="submit"
                  className="rounded-xl w-full bg-slate-100 py-2 font-semibold dark:bg-slate-700"
                >
                  Register new account
                </button>
              </div>
            </form>
          </div>

          <div className="text-xs mt-5">
            Already have an account yet? Go to{" "}
            <Link className="underline" href={"/login"}>
              Login page
            </Link>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RegisterPage;
