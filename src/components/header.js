import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Header() {
  const [signInState, setSignInState] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setSignInState(true);
      } else {
        setSignInState(false);
      }
    });
  }, []);

  return (
    <header>
      <img src="/logo.png" alt="Flor da Idade" className="w-4/12 mx-auto" />

      <nav className="relative flex justify-between lg:block uppercase bg-intensiveColor text-white py-10">
        <ul className=" flex justify-center gap-8">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/campanhas">Campanhas</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        {!signInState && (
          <Link
            className="absolute right-10 top-1/2 -translate-y-1/2 bg-amber-700 py-2 px-6 rounded-lg"
            to="/login"
          >
            Login
          </Link>
        )}

        {signInState && (
          <Link
            className="absolute right-10 top-1/2 -translate-y-1/2 bg-amber-700 py-2 px-6 rounded-lg"
            to="/admin"
          >
            Painel Administrativo
          </Link>
        )}
      </nav>
    </header>
  );
}
