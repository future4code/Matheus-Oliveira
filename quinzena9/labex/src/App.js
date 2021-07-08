import { Router } from "./route/router";
import GlobalStyle from "./themes/globalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}