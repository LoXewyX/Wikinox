import { render } from "preact";
import "./index.css";
import "./global.css";
import { App } from "./app";

render(<App />, document.getElementById("app")!);
