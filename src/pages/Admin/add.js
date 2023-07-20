import { useEffect, useState } from "react";
import { ChooseButton, InputForm, TextAreaForm } from "./FormInputs";
import { donationModel, paymentModel, listData } from "./DataModel";
import { database } from "./../../firebase";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function NovaCampanha() {
  const [modelForm, setModelForm] = useState("donation");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(modelForm === "donation" ? donationModel : paymentModel);
  }, [modelForm]);

  const changeValues = (evt) => {
    setFormData((old) => {
      return {
        ...old,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const saveCampanha = async () => {
    try {
      const date = new Date();
      const link = btoa(date.getTime());
      await set(ref(database, `path/${link}`), formData);
      setFormData(modelForm === "donation" ? donationModel : paymentModel);
      navigate("/admin/todascampanhas");
    } catch (err) {}
  };

  return (
    <div>
      <div className=" flex flex-col w-10/12 mx-auto gap-6 p-12 rounded-lg">
        <ChooseButton action={setModelForm} model={modelForm} />
        {Object.keys(formData).map((item) => {
          if (item !== "type" && item !== "content") {
            return (
              <InputForm
                key={item}
                onChange={changeValues}
                value={formData[item]}
                title={item}
                labelName={listData[item]}
              />
            );
          }
          if (item === "content") {
            return (
              <TextAreaForm
                key={item}
                onChange={changeValues}
                value={formData[item]}
                title={item}
                labelName={listData[item]}
              />
            );
          }
        })}
        <button
          onClick={saveCampanha}
          className="uppercase text-2xl font-extralight mt-12"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
