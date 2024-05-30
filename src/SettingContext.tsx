import React, { ReactNode, createContext, useState } from "react";

type SettingContextType = {
  menuOpen: boolean | null;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
  error: string | null;
  success: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setSuccess: React.Dispatch<React.SetStateAction<string | null>>;
};

const SettingsContext = createContext<SettingContextType>({
  menuOpen: null,
  setMenuOpen: () => {},
  error: null,
  success: null,
  setError: () => {},
  setSuccess: () => {},
});

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  return (
    <SettingsContext.Provider
      value={{ menuOpen, setMenuOpen, error, success, setError, setSuccess }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
