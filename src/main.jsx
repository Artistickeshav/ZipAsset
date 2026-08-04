import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/react";
import App from "./App";
import "./index.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Add VITE_CLERK_PUBLISHABLE_KEY to .env.local");
}

const clerkLocalization = {
  locale: "en",
  signIn: {
    start: {
      title: "Sign in to ZiipInvest",
      titleCombined: "Sign in to ZiipInvest",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey} localization={clerkLocalization}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);
