import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FoodContext from "./context/FoodContext.jsx";
import CourseContex from "./context/CourseContex.jsx";
import DessertContext from "./context/DessertContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CourseContex>
        <FoodContext>
          <DessertContext>
            <App />
          </DessertContext>
        </FoodContext>
      </CourseContex>
    </BrowserRouter>
  </StrictMode>,
);
