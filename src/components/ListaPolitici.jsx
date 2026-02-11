import { useState, useEffect, useMemo} from "react";
import CardPolitico from "./CardPolitico"

function ListaPolitici() {

    /***********
        HOOK
    ************/
    const [politici, setPolitici] = useState([]);           // Hook di Stato che contiene la lista completa dei politici
    const [ricerca, setRicerca] = useState("")              // Hook di Stato che salva il valore dell'input di ricerca dell'utente

    // Hook di Memo che calcola l'array filtrato dei politici
    const politiciFiltrati = useMemo(() => {                

        // Input vuoto --> restituisce tutti i politici
        if (ricerca === "") {
            return politici;
        }

        // Input pieno --> restituisce i politici filtrati
        return (
            politici.filter(politico =>
                politico.name.toLowerCase().includes(ricerca.toLowerCase()) ||
                politico.biography.toLowerCase().includes(ricerca.toLowerCase())
            )
        );
    }, [ricerca, politici])

    // Hook di Effetto che recupera una lista politici
    useEffect(() => {
        fetchPolitici();
    }, []);
    

    /************
        RENDER
    *************/
    return(
            <section className="sezione-politici">
                <h1> Lista Politici </h1>
                <input 
                    type="text"
                    placeholder="Inserisci nome o biografia"
                    value = {ricerca}
                    onChange = { e => setRicerca(e.target.value) }
                />
                <ul>
                    {politiciFiltrati.map(politicoFiltrato => (
                        <li key={politicoFiltrato.id}>
                            <CardPolitico
                                politico={politicoFiltrato}
                            />
                        </li>
                    ))}
                </ul>
            </section>
    )

    /**************
        FUNZIONI
    ***************/

    // Funzione che recupera una lista di politici 
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