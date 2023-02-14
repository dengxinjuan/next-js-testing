import '@/styles/globals.css';
import useOneSignal from "../utils/useOneSignal";

export default function App({ Component, pageProps }) {
  useOneSignal();
  return <Component {...pageProps} />
}
