  import { useContext } from "react";
  import { AuthContext } from "../../context/AuthContext";
  import { MenuLink } from "../../components/MenuLink/MenuLink";
  import "./SideBar.scss";
  import { useNavigate } from "react-router-dom";
  
 export const Sidebar = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogout = (e) => {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    };
  
    return (
      <div className="sidebar">
        <div className="sidebarbarWrapper">
          <MenuLink text="Homepage" />

          <MenuLink text="Settings" />
          <span onClick={handleLogout}>
            <MenuLink text="Logout" />
          </span>
        </div>
      </div>
    );
  };