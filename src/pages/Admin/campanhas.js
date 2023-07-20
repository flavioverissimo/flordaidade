import { Link } from "react-router-dom";
import { useGetData } from "./../../database";
import { ref, remove } from "firebase/database";
import { database } from "../../firebase";

export default function TodasCampanhas() {
  const data = useGetData("path");

  const removeCampanha = async (evt) => {
    try {
      await remove(ref(database, "path/" + evt.target.value));
    } catch (err) {}
  };

  return (
    <div className="p-10">
      <ul className="flex flex-col gap-6">
        {data === null && <li>Nenhuma campanha foi encontrada</li>}
        {data !== null &&
          Object.keys(data).map((campanha) => {
            return (
              <li key={campanha} className="bg-gray-50 p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold uppercase">
                      {data[campanha].subtitle}
                    </p>
                    <h3 className="text-2xl uppercase mb-2">
                      {data[campanha].title}
                    </h3>
                  </div>
                  <div className=" flex gap-2">
                    <Link
                      to={`/admin/editarcampanha/${campanha}`}
                      className=" bg-gray-100 py-2 px-4 uppercase text-xs font-semibold"
                    >
                      Editar
                    </Link>
                    <button
                      value={campanha}
                      onClick={removeCampanha}
                      className=" bg-amber-400 py-2 px-4 uppercase text-xs font-semibold"
                    >
                      Deletar
                    </button>
                  </div>
                </div>
                <p className="">{data[campanha].content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
