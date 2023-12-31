"use client";

// import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Vazirmatn } from "next/font/google";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export function Providers({ children }: { children: React.ReactNode }) {
  const direction = "rtl"
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-vazir: ${vazir.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={{ direction,...theme }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </>
  );
}
