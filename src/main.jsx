import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/react";
import App from "./App";
import { clerkPublishableKey, isClerkEnabled } from "./config/clerk";
import "./index.css";

const clerkLocalization = {
  locale: "en",
  signIn: {
    start: {
      title: "Sign in to ZiipInvest",
      titleCombined: "Sign in to ZiipInvest",
    },
  },
};

if (!isClerkEnabled) {
  console.warn(
    "Clerk is disabled because VITE_CLERK_PUBLISHABLE_KEY is not configured. The site will render without authentication.",
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isClerkEnabled ? (
      <ClerkProvider
        publishableKey={clerkPublishableKey}
        localization={clerkLocalization}
      >
        <App />
      </ClerkProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>,
);
