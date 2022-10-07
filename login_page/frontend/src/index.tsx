import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import LoginPage from "./LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <LoginPage />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
