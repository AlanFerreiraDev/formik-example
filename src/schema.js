import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string("O campo precisa ter letras")
    .min(2, "No mínimo 2 caracteres")
    .required("O nome é obrigatório"),

  email: Yup.string("O campo precisa ter letras")
    .email("Favor inserir um email válido")
    .required("O nome é obrigatório"),
});
