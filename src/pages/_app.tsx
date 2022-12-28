import { type AppType } from "next/dist/shared/lib/utils";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
