import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../store/store";

import "react-toastify/dist/ReactToastify.css";
import FetchCurrentUser from "../components/user/CurrentUser";


function App({ Component, pageProps }: AppProps) {
 
  return (
    <Provider store={store}>
      <div>
        <FetchCurrentUser/>
        <Component {...pageProps} /> <ToastContainer />
      </div>
    </Provider>
  );
}

export default App