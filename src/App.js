import React from "react";
import { Formik, Field, Form } from "formik";
import schema from "./schema";

import "./App.css";

function App() {
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
        render={({ values, errors }) => (
          // Assim não precisomais passar o handleSubmit no Form
          <Form>
            <div>
              <label>Nome: </label>
              {/* Com o Field eu não preciso mais passar value, e nem o onChange */}
              <Field name="name" type="text" />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
              <label>Email: </label>
              <Field name="email" type="email" />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
