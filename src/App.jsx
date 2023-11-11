import { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Nav from "./components/Nav";

function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandlere = (id) => {
    console.log("editted id", id);
    setBookId(id);
  };
  return (
    <>
      <Nav />
      <AddBook id={bookId} setBookId={setBookId} />
      <BooksList getBookId={getBookIdHandlere} />
    </>
  );
}

export default App;
