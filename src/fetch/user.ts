import { NewUserTypes } from "@/app/register/page";
import axios from "axios";

export const registerNewUser = async (data: NewUserTypes) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`,
    data
  );
};

export const userLogin = async (data: any) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
    data
  );
};
