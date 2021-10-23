import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="bottom-right" toastOptions={{ success: { duration: 2000 } }} />
    </>
  );
}

export default MyApp;
