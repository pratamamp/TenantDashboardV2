import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useNavigate, BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config.js";

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    console.log(appState);
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: config.audience,
    // ...(config.audience ? { audience: config.audience } : null),
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0ProviderWithRedirectCallback {...providerConfig}>
      <App />
    </Auth0ProviderWithRedirectCallback>
  </BrowserRouter>
);
