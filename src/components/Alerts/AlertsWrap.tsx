"use client";

import { AppStoreTypes, useAppStore } from "@/stores/appStore";
import { ErrorAlert } from "./ErrorAlert";
import { SuccessAlert } from "./SuccessAlert";

export const AlertsWrap = () => {
  const { error, success } = useAppStore<AppStoreTypes>((state) => state);

  return (
    <>
      {error ? <ErrorAlert error={error} /> : null}
      {success ? <SuccessAlert msg={success} /> : null}
    </>
  );
};
