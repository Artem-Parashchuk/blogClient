import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMeSelector, statusSelector } from "../redux/auth/authSelectors";
import { loginThunk } from "../redux/auth/loginThunk";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const status = useSelector(statusSelector);
  const dispatch = useDispatch();
  const isAuth = useSelector(getMeSelector)

  useEffect(() => {
    if(status) {
      toast(status)
    }
    if(isAuth) {
      navigate('/')
    }
  },[status, isAuth, navigate])

  const handleSubmit = () => {
    dispatch(loginThunk({ username, password }));
    setUsername('')
    setPassword('')
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/3 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Авторизація</h1>
      <label className="text-xs text-gray-400">
        Ім'я
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Ім'я"
          className="mt-1 text-black w-full rounded-lg border-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <label className="text-xs text-gray-400">
        Пароль
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Пароль"
          className="mt-1 text-black w-full rounded-lg border-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center text-xs text-white rounded-sm py-2 px-4 bg-gray-600 hover:bg-gray-700"
        >
          Вхід
        </button>
        <Link
          to={"/register"}
          className="flex justify-center items-center text-xs text-white hover:underline"
        >
          Немає акаунта?
        </Link>
      </div>
    </form>
  );
};
