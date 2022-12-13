import { ConfigProvider, theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./store";

const { defaultAlgorithm } = theme;

const customTheme: ThemeConfig = {
  algorithm: [defaultAlgorithm],
  token: {
    colorPrimary: "#2e7d32",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={customTheme}>
          <App />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
