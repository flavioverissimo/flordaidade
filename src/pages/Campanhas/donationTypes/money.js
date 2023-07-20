export default function Money({ mainData }) {
  return (
    <div className="flex flex-col gap-6 mt-6 text-xl">
      <div>
        <p className="font-semibold uppercase">Pix</p>
        <p>{mainData.pix}</p>
      </div>
      <div>
        <p className="font-semibold">{mainData.bco}</p>
        <p>{mainData.ag}</p>
        <p>{mainData.cta}</p>
      </div>
      <div>
        <p className="font-semibold">Responsável</p>
        <p>{mainData.responsible}</p>
      </div>
    </div>
  );
}
