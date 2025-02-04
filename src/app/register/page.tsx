"use client";

import { SettingsContext } from "@/SettingContext";
import { ErrorAlert } from "@/components/Alerts/ErrorAlert";
import { SuccessAlert } from "@/components/Alerts/SuccessAlert";
import Card from "@/components/Card/Card";
import { Input } from "@/components/Input/Input";
import { registerNewUser } from "@/fetch/user";
import Link from "next/link";
import { useContext, useState } from "react";

// const validateEmail = (email: string) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

export interface NewUserTypes {
  userName?: string;
  email?: string;
  password?: string;
}

const RegisterPage = () => {
  const [user, setUser] = useState<NewUserTypes>({});

  const { error, success, setSuccess, setError } = useContext(SettingsContext);

  const onSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();

    registerNewUser(user)
      .then(() => {
        setSuccess("Your request is successfully completed. Check your email!");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return error ? (
    <ErrorAlert error={error} />
  ) : success ? (
    <SuccessAlert msg={success} />
  ) : (
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
                      userName: e.target.value,
                    };
                  });
                }}
                type="text"
                label="User Name"
                placeholder="Choose your name"
                data-testid="registerUserName"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Insert your email"
                data-testid="registerUserMail"
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
                placeholder="Choose your password"
                data-testid="registerUserPsw"
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
                  name="register"
                  type="submit"
                  className="rounded-xl w-full bg-slate-100 py-2 font-semibold dark:bg-slate-700"
                >
                  Register new account
                </button>
              </div>
            </form>
          </div>

          <div className="text-xs mt-5">
            Already have an account? Go to{" "}
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
