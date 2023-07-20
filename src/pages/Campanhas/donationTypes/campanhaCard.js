import Material from "./material";
import Money from "./money";

export default function CampanhaCard({ mainData }) {
  return (
    <div className="p-20 bg-gray-50/95 w-11/12 mx-auto grid grid-cols-12 gap-12 rounded-lg">
      <div className="col-span-8">
        <p className="uppercase text-2xl font-semibold">{mainData.subtitle}</p>
        <h3 className="uppercase text-5xl font-light">{mainData.title}</h3>
        <p className="mt-8 text-lg">{mainData.content}</p>
      </div>
      <div className="col-span-4">
        <p className="text-2xl font-semibold">Como você pode doar</p>
        {mainData.type === "donation" && <Material mainData={mainData} />}
        {mainData.type === "payment" && <Money mainData={mainData} />}
      </div>
    </div>
  );
}
