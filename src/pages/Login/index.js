import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        return navigate("/admin");
      }
    });
  }, []);

  const getFormData = (event) => {
    setFormData((old) => {
      return {
        ...old,
        [event.target.name]: event.target.value,
      };
    });
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/admin");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="w-full max-w-sm mx-auto overflow-hidden py-32  ">
      <div className="px-6 py-4 bg-white rounded-lg shadow-md">
        <p className="mt-1 text-center text-gray-500 ">Login</p>
        <ul className=" bg-gray-100 rounded-lg p-2 mt-2">
          <li className="text-sm text-center">Para acessar o painel admin</li>
          <li className="text-xs text-gray-700 mt-2">
            login: user@floridade.com.br senha: user@floridade
          </li>
          <li className="text-xs text-red-600 mt-2">
            obs: o usuário está bloqueado para criar ou fazer qualquer tipo de
            alteração
          </li>
        </ul>
        <div>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-intensiveColor focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-intensiveColor"
              type="email"
              placeholder="email@email.com"
              name="email"
              value={formData.email}
              onChange={getFormData}
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-intensiveColor focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-intensiveColor"
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={getFormData}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={login}
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-intensiveColor rounded-lg hover:bg-amber-900 focus:outline-none focus:ring focus:ring-intensiveColor focus:ring-opacity-50"
            >
              Logar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
