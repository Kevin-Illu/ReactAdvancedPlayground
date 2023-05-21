import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  const navLinkIsActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "link-active" : "";
  };

  return (
    <Suspense>
      <BrowserRouter>
        <div>
          <nav className="nav">
            <div className="nav-root container">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
              <ul>
                {routes.map(({ to, nameLink }) => (
                  <li key={nameLink}>
                    <NavLink to={to} className={navLinkIsActive}>
                      {nameLink}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
