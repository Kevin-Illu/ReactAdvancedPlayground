import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { FirstPage, SecondPage, ThirdPage } from "../pages";

const LazyLayout = () => {
  return (
    <div className="container">
      <h1>LazyLayout</h1>

      <ul>
        <li>
          <NavLink to="lazy1">lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<FirstPage />} />
        <Route path="lazy2" element={<SecondPage />} />
        <Route path="lazy3" element={<ThirdPage />} />

        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
