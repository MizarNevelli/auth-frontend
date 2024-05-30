"use client";

import { SettingsProvider } from "@/SettingContext";
import { ReactNode } from "react";

export const MainWrap = ({ children }: { children: ReactNode }) => {
  return (
    <SettingsProvider>
      <main>{children}</main>
    </SettingsProvider>
  );
};
