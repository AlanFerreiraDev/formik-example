import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "./schema";

import MaskedInput from "./MaskedInput";

import "./App.css";

const initialValues = {
  cpf: "",
  cnpj: "",
};

function App() {
  //* formik e yup
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  // * Validação Simples, sem YUP
  // function validate(values) {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = "Nome é Obrigatório";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email é Obrigatório";
  //   }

  //   return errors;
  // }

  //* react-input-mask
  const [valuesMask, setValuesMask] = useState(initialValues);

  function handleChange(e) {
    setValuesMask({
      ...valuesMask,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="App">
      <Formik
        validateOnMount // Para validar no momento que monta o componente
        //validate={validate}
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          email: "",
        }}
        // touched é para quando o campo foi tocado, mesmo com validateOnMount
        render={({ values, errors, touched, isValid }) => (
          // Assim não precisomais passar o handleSubmit no Form
          <Form>
            <div>
              <label>Nome: </label>
              {/* Com o Field eu não preciso mais passar value, e nem o onChange */}
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
              {/* {errors.name && touched.name && <span>{errors.name}</span>} */}
            </div>

            <div>
              <label>Email: </label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
              {/* {errors.email && touched.email && <span>{errors.email}</span>} */}
            </div>

            <div className="MaskValues">
              <label>CPF: </label>
              <MaskedInput
                name="cpf"
                mask="999.999.999-99"
                value={valuesMask.cpf}
                onChange={handleChange}
              />
              <button onClick={() => setValuesMask(initialValues)}>
                Limpar
              </button>

              <label>CNPJ: </label>
              <MaskedInput
                name="cnpj"
                mask="99.999.999/9999-99"
                value={valuesMask.cnpj}
                onChange={handleChange}
              />
            </div>

            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
