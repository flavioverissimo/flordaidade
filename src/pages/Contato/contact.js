export default function Contact() {
  return (
    <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
      <div className="grid grid-cols-2 py-4 px-6 mb-6 bg-intensiveColor/60">
        <p className=" text-white text-xl font-medium self-center">
          Nossa Localização
        </p>
        <div className=" text-gray-100 text-sm">
          <p>Rua Nosso Lar, nº 0000</p>
          <p>Jd. Nosso Lar, 000.00-000</p>
        </div>
      </div>
      <div>
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-white">Nome</label>
            <input
              type="text"
              placeholder="Joao Ferreira"
              className="block w-full px-5 py-3 mt-2 text-white placeholder-amber-700 bg-intensiveColor border border-amber-800 rounded-md   focus:border-intensiveColor  focus:ring-amber-900 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-white">
              Contato / Whatsapp
            </label>
            <input
              type="tel"
              placeholder="(11) 99000-000"
              className="block w-full px-5 py-3 mt-2 text-white placeholder-amber-700 bg-intensiveColor border border-amber-800 rounded-md   focus:border-intensiveColor  focus:ring-amber-900 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-white">Mensagem</label>
          <textarea
            className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-amber-700 bg-intensiveColor border border-amber-800 rounded-md md:h-36 focus:border-intensiveColor focus:ring-amber-900 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Mensagem"
          ></textarea>
        </div>

        <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md hover:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-900 focus:ring-opacity-50">
          Enviar
        </button>
      </div>
    </div>
  );
}
