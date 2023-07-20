export const InputForm = ({ onChange, value, title, labelName }) => {
  return (
    <div>
      <label className=" uppercase text-sm font-semibold" htmlFor={title}>
        {labelName}
      </label>
      <input
        onChange={onChange}
        type="text"
        name={title}
        id={title}
        value={value}
        className="py-2 px-4 border border-gray-200 rounded-lg w-full"
      />
    </div>
  );
};

export const TextAreaForm = ({ onChange, value, title, labelName }) => {
  return (
    <div>
      <label className="uppercase text-sm font-semibold" htmlFor="content">
        {labelName}
      </label>
      <textarea
        onChange={onChange}
        type="text"
        name={title}
        id={title}
        value={value}
        rows={6}
        className="py-2 px-4 border border-gray-200 rounded-lg w-full"
      />
    </div>
  );
};

export const ChooseButton = ({ action, model }) => {
  return (
    <div className="">
      <p className=" uppercase text-sm font-semibold" htmlFor="title">
        Tipo de Doação
      </p>
      <button
        onClick={() => action("donation")}
        className={`py-2 px-4 rounded-l-lg border-r ${
          model === "donation"
            ? "bg-amber-500 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        Doação Produto
      </button>
      <button
        onClick={() => action("payment")}
        className={`py-2 px-4 rounded-r-lg border-l ${
          model === "payment"
            ? "bg-amber-500 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        Doação Dinheiro
      </button>
    </div>
  );
};
