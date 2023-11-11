import { Table } from "react-bootstrap";
import "../index.css";
import { useEffect, useState } from "react";
import BookDataService from "../services/book.services";

const BooksList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  return (
    <>
      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
      <div className="mt-[30px] w-[95%] sm:w-[70%] mx-auto ">
        <div>
          <button
            onClick={getBooks}
            className="refreshbtn mt-[10px] mb-3 rounded-[5px] bg-slate-800 text-white px-3 py-1 border-b-[2px] border-red-500 hover:bg-slate-950 hover:border-b-[4px] "
          >
            Refresh List
          </button>
        </div>
        <div className="scrollable-table-container">
          <Table className="mt-2 w-full border text-center custom-table">
            <thead>
              <tr>
                <th className="w-[7%] border ">#</th>
                <th className="w-[33%] border">Book Title</th>
                <th className="w-[20%] border">Book Author</th>
                <th className="w-[20%] border">Status</th>
                <th className="w-[20%]  border ">Action</th>
              </tr>
            </thead>
            <tbody className="custom-tbody">
              {books.map((doc, index) => {
                return (
                  <tr key={doc.id}>
                    <td className="border">{index + 1}</td>
                    <td className="border">{doc.title}</td>
                    <td className="border">{doc.author}</td>
                    <td className="border">{doc.status}</td>
                    <td className="border">
                      <button
                        onClick={(e) => getBookId(doc.id)}
                        className="bg-gray-500 rounded-[3px] px-1 mx-[5px]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteHandler(doc.id)}
                        className=" bg-red-600 rounded-[3px] px-1 mr-[5px]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BooksList;
