import React, { useState, useEffect, useRef } from "react";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import * as Yup from "yup";

import "./App.css";
import Input from "./components/Form/Input";

const initialData = {
  email: "gabriel@email.com",
  address: {
    city: "dobrada"
  }
};

function App() {
  const formRef = useRef(null);

  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório!"),
    email: Yup.string()
      .email("Digite um e-mail válido!")
      .required("O e-mail é obrigatório!"),
    address: Yup.object().shape({
      city: Yup.string()
        .min(5, "No mínimo 5 caracteres!")
        .required("A cidadeé obrigatório!")
    })
  });

  async function handleSubmit(data, { reset }) {
    // if (data.name === "") {
    //   // formRef.current.setFieldError("address.city", "A cidade é Obrigatório!");
    //   formRef.current.setErrors({
    //     name: "O nome é obrigatório!",
    //     address: {
    //       city: "A cidade é obrigatório!"
    //     }
    //   });
    // }

    try {
      await schema.validate(data, { abortEarly: false });
      reset();
      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        nome: "Gabriel",
        email: "gabriel@email.com",
        address: {
          city: "Dobrada"
        }
      });
    }, 5000);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="email" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
          <Input name="neighborhood" />
          <Input name="city" />
          <Input name="state" />
        </Scope>

        <button type="submit">ENVIAR</button>
      </Form>
    </div>
  );
}

export default App;

// inicialData: Usado quando os dados não são recebidoa de forma assíncrona,
// nesse caso usar formRef.current.setData() .
