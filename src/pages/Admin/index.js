import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "./../../firebase";
import LoadingCard from "../../components/loadingCard";
import AdminHeader from "./header";

export default function Admin() {
  const [userState, setUserState] = useState({
    isAuthing: true,
    user: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user !== null) {
          return setUserState({
            isAuthing: false,
            user: user.email.split("@")[0],
          });
        }
        setUserState({ ...userState, isAuthing: false });
        return navigate("/login");
      },
      [userState]
    );
  }, []);

  const signOutAdmin = async () => {
    try {
      await signOut(auth);
      return navigate("/login");
    } catch (err) {}
  };

  return (
    <section>
      {userState.isAuthing && <LoadingCard />}
      {userState.user !== null && (
        <nav className="my-12 max-w-6xl mx-auto bg-white rounded-lg">
          <AdminHeader username={userState.user} signout={signOutAdmin} />
          <div className="py-12 px-8">
            <div className=" flex justify-between items-center">
              <h3 className=" text-2xl">Gerenciador das campanhas</h3>
              <div className="flex gap-6">
                <Link to="criarcampanha">Nova Campanha</Link>
                <Link to="todascampanhas">Todas Campanhas</Link>
              </div>
            </div>
            <Outlet />
          </div>
        </nav>
      )}
    </section>
  );
}
