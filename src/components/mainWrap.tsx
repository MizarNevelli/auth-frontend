"use client";

import { ReactNode } from "react";
import Header from "./Header/header";
import { MenuOverlay } from "./Menu/menuOverlay";
import { AppStoreTypes, useAppStore } from "@/stores/appStore";
import { ErrorAlert } from "./Alerts/errorAlert";
import { SuccessAlert } from "./Alerts/successAlert";

export const MainWrap = ({ children }: { children: ReactNode }) => {
  const { error, success } = useAppStore<AppStoreTypes>((state) => state);

  return (
    <main className="relative">
      {error ? <ErrorAlert error={error} /> : null}
      {success ? <SuccessAlert msg={success} /> : null}
      <MenuOverlay />
      <Header />
      <div className="min-h-[100dvh]">{children}</div>
    </main>
  );
};
