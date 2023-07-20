export const mainModelForm = {
  title: "",
  subtitle: "",
  content: "",
  responsible: "",
};

export const donationModel = {
  ...mainModelForm,
  address: "",
  type: "donation",
};

export const paymentModel = {
  ...mainModelForm,
  pix: "",
  bco: "",
  ag: "",
  cta: "",
  type: "payment",
};

export const listData = {
  title: "Titulo",
  subtitle: "Sub-Titulo",
  content: "Conteúdo",
  responsible: "Responsável",
  address: "Endereço",
  pix: "Pix",
  bco: "Banco",
  ag: "Agência",
  cta: "Conta",
};
