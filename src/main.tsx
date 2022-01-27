import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { nhost } from "./utils/Nhost";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <NhostApolloProvider nhost={nhost}>
            <NhostAuthProvider nhost={nhost}>
                <Router>
                    <App />
                </Router>
            </NhostAuthProvider>
        </NhostApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
