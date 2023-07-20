export default function AdminHeader({ username, signout }) {
  return (
    <div>
      <div className="  py-4 px-8 flex justify-between items-center border-b border-gray-300">
        <h2 className=" text-3xl font-extralight">Painel Administrativo</h2>
        <div>
          <p className=" font-medium">Olá, {username}</p>
          <button onClick={signout} className=" text-red-700 uppercase">
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
