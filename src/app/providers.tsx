"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-vazir: ${vazir.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
