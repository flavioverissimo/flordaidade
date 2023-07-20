export default function Material({ mainData }) {
  return (
    <div className="flex flex-col gap-6 mt-6 text-xl">
      <div>
        <p className="font-semibold">Endereço</p>
        <p>{mainData.address}</p>
      </div>
      <div>
        <p className="font-semibold">Responsável</p>
        <p>{mainData.responsible}</p>
      </div>
    </div>
  );
}
