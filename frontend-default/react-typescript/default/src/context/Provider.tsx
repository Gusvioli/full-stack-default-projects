import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }: { children: any }) {
    const [texts, setTexts] = useState([]);
    const [numero, setNumero] = useState<number>(0);
    const [booleano, setBooleano] = useState<boolean>(true);
    const [objeto, setObjeto] = useState<object>({});
    const [arreglo, setArreglo] = useState<any[]>([]);
    const [funcion, setFuncion] = useState<Function>(() => { });
    const [nulo, setNulo] = useState<null>(null);
    const [indefinido, setIndefinido] = useState<undefined>(undefined);
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
