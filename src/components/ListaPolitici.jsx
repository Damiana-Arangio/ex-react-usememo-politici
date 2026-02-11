import { useState, useEffect } from "react";
import CardPolitico from "./CardPolitico"

function ListaPolitici() {

    /***********
        HOOK
    ************/

    // Hook di Stato che contienee una lista di politici
    const [politici, setPolitici] = useState([]);

    // Hook di Effetto che recupera una lista di politici al mounting
    useEffect(() => {
        fetchPolitici();
    }, []);

    /************
        RENDER
    *************/
    return(
            <section className="sezione-politici">
                    <h1> Lista Politici </h1>
                    <ul>
                        {politici.map(politico => (
                            <li key={politico.id}>
                                <CardPolitico
                                    politico = {politico}
                                />
                            </li>
                        ))}
                    </ul>
            </section>
    )

    /**************
        FUNZIONI
    ***************/
    async function fetchPolitici() {
        try {
            const response = await fetch('http://localhost:3333/politicians')
            const data = await response.json()
            setPolitici(data);
        }
        catch(error) {
            console.error(error);
        }
        finally {
            console.log("Chiamata API effettuata!");
        }
    }
}

export default ListaPolitici