export default function Hours() {
  return (
    <div className="flex flex-col w-full p-8 bg-gray-50/95 rounded-lg lg:px-12 py-24 xl:px-24 lg:w-1/2">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
        Horários para visitas
      </h1>

      <p className="mt-4 text-gray-700">
        Verifique abaixo os dias e horários que aceitamos visitas.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-6">
        <li>
          <p className=" font-medium">Segunda-Feira</p>
          <p>09:00 as 16:00</p>
        </li>
        <li>
          <p className=" font-medium">Terça-Feira</p>
          <p>09:00 as 16:00</p>
        </li>
        <li>
          <p className=" font-medium">Quarta-Feira</p>
          <p>09:00 as 16:00</p>
        </li>
        <li>
          <p className=" font-medium">Quinta-Feira</p>
          <p>09:00 as 16:00</p>
        </li>
        <li>
          <p className=" font-medium">Sexta-Feira</p>
          <p>09:00 as 16:00</p>
        </li>
        <li>
          <p className=" font-medium">Sábado</p>
          <p>09:00 as 13:00</p>
        </li>
      </ul>
    </div>
  );
}
