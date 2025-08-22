// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="" target="_blank">
          <LinkedIn></LinkedIn>
        </a>{" "}
        |
        <a href="" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
