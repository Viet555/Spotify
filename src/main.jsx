import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/ReduxStore.jsx";
import "react-datepicker/dist/react-datepicker.css";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </StrictMode> */}
    </PersistGate>
  </Provider>
);
