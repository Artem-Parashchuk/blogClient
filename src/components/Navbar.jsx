import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getMeSelector } from "../redux/auth/authSelectors";
import { logout } from "../redux/auth/authSlice";
import { toast } from "react-toastify";

export const Navbar = () => {
  const isAuth = useSelector(getMeSelector);
  const dispatch = useDispatch();

  const activeLink = {
    color: "white",
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Ви вийшли із системи");
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className="text-xs text-grey-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/posts"}
              className="text-xs text-grey-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Мої пости
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new"}
              className="text-xs text-grey-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeLink : null)}
            >
              Добавити пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? (
          <button type="button" onClick={logoutHandler}>
            Вийти
          </button>
        ) : (
          <Link to={"/login"}>Увійти</Link>
        )}
      </div>
    </div>
  );
};
