import "./mystyle.scss";

import {createRoot} from "react-dom/client";
import { ChapterContainer } from "./pods/ChapterContainer";

const RootElement = document.getElementById("root");
const root= createRoot(RootElement);

root.render(
    <ChapterContainer />
)