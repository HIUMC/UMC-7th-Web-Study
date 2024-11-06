import "../components/navbar.css";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbarMenu navbarMenu1" to={"/"}>
          YOUNGCHA
        </div>
        <button className="navbarMenu" to={"/login"}>
          LOGIN
        </button>
        <button className="navbarMenu navbarMenu2" to={"/join"}>
          JOIN
        </button>
      </div>
    </div>
  );
};

export default NavBar;
