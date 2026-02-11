<p align="center">
  <img src="public/boolean-logo.png" alt="Boolean logo" width="35">
</p>

<h1 align="center">EX – Lista di Politici (React)</h1>

Esercizio React sviluppato con **Vite**, focalizzato sull’ottimizzazione delle performance e sulla gestione efficiente del rendering tramite `useMemo` e `React.memo`.

Il progetto è strutturato seguendo **milestone incrementali**, per mostrare il passaggio da una semplice visualizzazione dati a un’implementazione ottimizzata che evita ricalcoli e re-render inutili.

---

## Obiettivo dell’esercizio

- Recuperare dati da un’API locale
- Visualizzare una lista di politici tramite card
- Implementare una ricerca dinamica
- Ottimizzare i calcoli con `useMemo`
- Evitare re-render inutili con `React.memo`

---

## Descrizione generale

L’applicazione visualizza una **lista di politici** recuperati da un server API locale.

L’utente può:
- visualizzare nome, immagine, posizione e biografia
- filtrare i politici tramite una barra di ricerca
- beneficiare di un’ottimizzazione del rendering per migliorare le performance

L’esercizio è pensato per rafforzare i concetti di **memoization, array derivati e controllo dei re-render in React**.

---

## 📸 Anteprima

![Screenshot](public/screenshot.png)

## 📌 Milestone 1: Recuperare e visualizzare i dati

**Obiettivo:** Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

### Requisiti

1. Effettuare una chiamata API a: http://localhost:3333/politicians
2. Salvare la risposta in uno stato React tramite `useState`.
3. Mostrare i politici in una lista di card contenente:
- Nome (`name`)
- Immagine (`image`)
- Posizione (`position`)
- Breve biografia (`biography`)

---

## 📌 Milestone 2: Implementare la ricerca ottimizzata

**Obiettivo:** Migliorare le prestazioni evitando ricalcoli inutili.

### Requisiti

1. Aggiungere un campo di ricerca (`<input type="text">`) sopra la lista.
2. Filtrare i risultati in base a:
- Nome
- Biografia
3. Creare un **array derivato filtrato**.
4. Utilizzare `useMemo` per ricalcolare il filtro solo quando:
- cambia la lista dei politici
- cambia il valore della ricerca
5. ❌ Non utilizzare `useEffect` per aggiornare l’array filtrato.

---

## 📌 Milestone 3: Ottimizzare il rendering con React.memo

**Obiettivo:** Evitare re-render inutili delle card.

### Requisiti

1. Utilizzare `React.memo()` per memorizzare il componente Card.
2. Impedire il re-render quando le props non cambiano.
3. Aggiungere un `console.log()` nel componente Card per verificare il comportamento.

Se la lista filtrata cambia:
- Solo le nuove card devono essere renderizzate.
- Le altre devono rimanere memorizzate senza essere ridisegnate.

---

## 🛠 Tecnologie utilizzate

- React
- Vite
- Postman (test API locali)


