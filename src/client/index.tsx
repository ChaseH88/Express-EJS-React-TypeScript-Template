import React, { FC } from "react";
import ReactDOM from "react-dom";

const App: FC = () => (
  <>
    <h1>React Starter with {` `}
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
      >TypeScript</a>
    </h1>
  </>
);

const root = document.querySelector("#app");

if (root !== null) {
  ReactDOM.render(<App /> , root)
}