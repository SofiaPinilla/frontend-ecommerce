import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Avatar, Space, Button } from "antd";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const logoutUser = () => {
    //desloguee el usuario
    logout();
    //me redirija a login
    navigate("/login");
  };
  return (
    <div>
      {user ? (
        <>
          <Link to="/profile">
            <Space size={16} wrap>
              <Avatar>{user.name[0]}</Avatar>
            </Space>
          </Link>{" "}
          /<Button onClick={logoutUser}> Logout</Button>
        </>
      ) : (
        <>
          / <Link to="/login"> Login</Link>
        </>
      )}
    </div>
  );
};

export default Header;
