import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative grid justify-start py-32 w-11/12 mx-auto">
      <img
        src="/homeImg.jpg"
        alt="melhor idade"
        className="w-5/6 rounded-lg border-8 border-intensiveColor"
      />
      <div className="text-center absolute top-1/2 -translate-y-1/2 right-0 bg-gray-100/80 w-3/5 p-16 rounded-md">
        <p className="text-lg font-bold uppercase">Seu apoio</p>
        <h3 className=" uppercase text-5xl font-light">Nos faz bem</h3>
        <p className=" text-lg mt-3">
          Todos os trabalhos e ajudas realizadas diariamente, são possíveis
          devido a colaboração constante dos nossos voluntários.
        </p>
        <Link
          className="bg-orange-400 rounded-lg -mb-24 mt-12 py-6 block"
          to="/campanhas"
        >
          Nossas campanhas atuais
        </Link>
      </div>
    </section>
  );
}
