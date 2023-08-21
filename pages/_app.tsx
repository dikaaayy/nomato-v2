import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { AuthProvider } from "../components/auth/useAuth";

export const CoordinateContext = createContext(null as any);

export default function App({ Component, pageProps }: any) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  return (
    <AuthProvider>
      <CoordinateContext.Provider value={{ latitude, longitude, setLatitude, setLongitude }}>
        <Component {...pageProps} />
      </CoordinateContext.Provider>
    </AuthProvider>
  );
}
