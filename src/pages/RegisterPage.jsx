import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/auth/authThunks";

export const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    try{
      dispatch(registerUser({username, password}))
      setUsername('')
      setPassword('')
    }catch(error) {
      console.log(error)
    }
  }
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/3 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Регістрація</h1>
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
          type="text"
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
          Підтвердити
        </button>
        <Link
          to={"/login"}
          className="flex justify-center text-center text-xs text-white hover:underline"
        >
          Вже зарегістровані?
        </Link>
      </div>
    </form>
  );
};
