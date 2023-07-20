import { useGetData } from "../../database";
import CampanhaCard from "./donationTypes/campanhaCard";
import HeaderCampanha from "./Header";

export default function Campanhas() {
  const data = useGetData("campanhas");
  return (
    <section>
      <HeaderCampanha />
      {data === null && (
        <div className=" text-center mx-auto mb-24">
          <p className=" text-white text-3xl">Não há campanha no momento</p>
        </div>
      )}
      <div className=" flex flex-col gap-20 pb-32 pt-12">
        {data !== null &&
          Object.keys(data).map((campanha) => {
            return (
              <CampanhaCard
                key={data[campanha].title}
                mainData={data[campanha]}
              />
            );
          })}
      </div>
    </section>
  );
}
