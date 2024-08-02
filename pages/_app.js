import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AppProvider } from "../components/context/AppContext";
import Loader from "../components/Loader";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <Loader position="fixed" width="fit" />,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}
