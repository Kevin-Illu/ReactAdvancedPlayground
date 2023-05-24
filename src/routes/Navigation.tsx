import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ShoppingPage } from "../pages/ShoppingPage";

const withContainer = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="container">
        <WrappedComponent {...props} />
      </div>
    );
  };
};
const HomePageContent = () => <h1>Home</h1>;
const UsersPageContent = () => <h1>Users</h1>;
const AboutPageContent = () => <h1>About</h1>;

const HomePage = withContainer(HomePageContent);
const UsersPage = withContainer(UsersPageContent);
const AboutPage = withContainer(AboutPageContent);

export const Navigation = () => {
  const navLinkIsActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "link-active" : "";
  };

  return (
    <BrowserRouter>
      <div>
        <nav className="nav">
          <div className="nav-root container">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
            <ul>
              <li>
                <NavLink to="/home" className={navLinkIsActive}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkIsActive}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className={navLinkIsActive}>
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="about" element={<AboutPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="home" element={<ShoppingPage />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
