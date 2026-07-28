"use client";

import { ConfigProvider, theme } from "antd";
import { useEffect, useState } from "react";

export default function ThemeRegistry({ children }) {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (e) => setIsDark(e.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,

        token: {
          colorPrimary: "#1E3A8A",
          borderRadius: 10,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
