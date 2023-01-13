import LogoWeb from "../../assets/images/Logo.png";
import Counter from "../Counter/Counter";
import { Link, NavLink } from "react-router-dom";

// const div = document.querySelector(".nav_container");
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 60) {
//     div.classList.add("solid");
//   } else {
//     div.classList.remove("solid");
//   }
// });

const NavBar = () => {
  return (
    <div className="nav_container">
      <div className="nav_menu">
        <Link to="/">
          {" "}
          <img to="/home" className="logoNavBar" src={LogoWeb} alt="" />{" "}
        </Link>
      </div>

      <div className="nav_menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activa nav_item" : "inactiva nav_item"
          }
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive ? "activa nav_item" : "inactiva nav_item"
          }
        >
          {" "}
          Productos{" "}
        </NavLink>

        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "activa nav_item" : "inactiva nav_item"
          }
        >
          {" "}
          Quienes Somos{" "}
        </NavLink>

        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive ? "activa nav_item" : "inactiva nav_item"
          }
        >
          Contacto
        </NavLink>
      </div>

      <div className="nav_menu">
        <a href="" className="nav_item">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="" className="nav_item">
          <i className="fa-solid fa-user"></i>
        </a>
        <Counter />
      </div>
    </div>
  );
};

export default NavBar;
