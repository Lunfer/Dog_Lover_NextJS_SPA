import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BreedProvider } from "../src/breedContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BreedProvider>
      <Component {...pageProps} />
    </BreedProvider>
  );
}

export default MyApp;
