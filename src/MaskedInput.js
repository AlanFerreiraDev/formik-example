import InputMask from "react-input-mask";

import React from "react";

//* Faço fora a função para definir apenas uma vez, e não entrar no cilco de renderização do componente, sem fazer render mais de uma vez

// Regex toda vez que achar algo que não é de 0 a 9, (números), trocar por uma string vazia, o g é para tropcar sempre em qualquer lugar e sempre que encontrar esse padrão
const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const MaskedInput = ({ value, onChange, name, mask }) => {
  function handleChange(e) {
    onChange({
      ...e,
      target: {
        ...e.target,
        name,
        value: onlyNumbers(e.target.value),
      },
    });
  }

  return (
    <InputMask name={name} mask={mask} value={value} onChange={handleChange} />
  );
};

export default MaskedInput;
