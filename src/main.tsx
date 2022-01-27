import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { nhost } from "./utils/Nhost";

ReactDOM.render(
    <React.StrictMode>
        <NhostApolloProvider nhost={nhost}>
            <NhostAuthProvider nhost={nhost}>
                <App />
            </NhostAuthProvider>
        </NhostApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
