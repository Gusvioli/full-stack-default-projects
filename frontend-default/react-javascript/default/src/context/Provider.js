import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [texts, setTexts] = useState([]);
    const [numero, setNumero] = useState(0);
    const [booleano, setBooleano] = useState(true);
    const [objeto, setObjeto] = useState({});
    const [arreglo, setArreglo] = useState([]);
    const [funcion, setFuncion] = useState(() => { });
    const [nulo, setNulo] = useState(null);
    const [indefinido, setIndefinido] = useState(undefined);
    // [...]

    const memorize = React.useMemo(() => ({
        texts, setTexts,
        numero, setNumero,
        booleano, setBooleano,
        objeto, setObjeto,
        arreglo, setArreglo,
        funcion, setFuncion,
        nulo, setNulo,
        indefinido, setIndefinido,
        // [...]
    }), [
        texts, setTexts,
        numero, setNumero,
        booleano, setBooleano,
        objeto, setObjeto,
        arreglo, setArreglo,
        funcion, setFuncion,
        nulo, setNulo,
        indefinido, setIndefinido,
        // [...]
    ]);
    return (
        <Context.Provider
            value={memorize}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
