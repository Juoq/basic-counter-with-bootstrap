import React, { useState } from "react";

export const useContador = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const reduccion = () => setContador (contador - 1);
    const reset = () => setContador(0);

    return {
        contador,
        incrementar,
        reduccion,
        reset
    }
};