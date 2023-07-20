import { useNavigate, useParams } from "react-router-dom";
import { useGetData } from "../../database";
import { useEffect, useState } from "react";
import { InputForm, TextAreaForm } from "./FormInputs";
import { mainModelForm } from "./DataModel";
import { ref, set } from "firebase/database";
import { database } from "../../firebase";

export default function EditarCampanha() {
  const [formData, setFormData] = useState({ ...mainModelForm });
  const { id } = useParams();
  const response = useGetData(`path/${id}`);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      Object.keys(response).length > 0 &&
      Object.keys(formData).length === 4
    ) {
      setFormData(response);
    }
  }, [response, formData]);

  const changeValues = (evt) => {
    setFormData((old) => {
      return {
        ...old,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const setValues = async () => {
    try {
      await set(ref(database, `path/${id}`), formData);
      navigate("/admin/todascampanhas");
    } catch (err) {}
  };

  return (
    <div>
      <div className=" flex flex-col w-10/12 mx-auto gap-6 p-12 rounded-lg">
        <InputForm
          onChange={changeValues}
          value={formData.title}
          title="title"
          labelName="Titulo"
        />
        <InputForm
          onChange={changeValues}
          value={formData.subtitle}
          title="subtitle"
          labelName="Sub-Titulo"
        />
        <InputForm
          onChange={changeValues}
          value={formData.responsible}
          title="responsible"
          labelName="Responsável"
        />
        <TextAreaForm
          onChange={changeValues}
          value={formData.content}
          title="content"
          labelName="Conteúdo"
        />
        {formData.type === "donation" && (
          <InputForm
            onChange={changeValues}
            value={formData.address}
            title="address"
            labelName="Endereço"
          />
        )}
        {formData.type === "payment" && (
          <div className="flex flex-col gap-6">
            <InputForm
              onChange={changeValues}
              value={formData.pix}
              title="pix"
              labelName="pix"
            />
            <InputForm
              onChange={changeValues}
              value={formData.bco}
              title="bco"
              labelName="Banco"
            />
            <InputForm
              onChange={changeValues}
              value={formData.ag}
              title="ag"
              labelName="Agência"
            />
            <InputForm
              onChange={changeValues}
              value={formData.cta}
              title="cta"
              labelName="Conta"
            />
          </div>
        )}
        <button
          onClick={setValues}
          className="uppercase text-2xl font-extralight mt-12"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
