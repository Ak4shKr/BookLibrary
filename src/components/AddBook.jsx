import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import BookDataService from "../services/book.services";

// eslint-disable-next-line react/prop-types
const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ error: false, msg: "" }); // Set message state to an empty object

    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };
    console.log(newBook);

    try {
      if (id != undefined && id != "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is: ", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is: ", id);
    if (id != undefined && id != "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <div className="sticky top-20 box w-[60%] md:w-[33%] pt-16 flex flex-col mx-auto">
        {message?.msg && (
          <Alert
            className="max-h-fit mt-[-50px]"
            variant={message?.error ? "danger" : "success"}
            onClose={() => setMessage("")}
            dismissible
          >
            {message?.msg}
          </Alert>
        )}

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col mb-[-70px]"
        >
          <input
            type="text"
            id="booktitle"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="inline mb-[10px] border-2 py-2 "
          />

          <input
            type="text"
            id="bookauthor"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="inline my-[10px]  border-2 py-2"
          />
          <div className="flex ">
            <button
              disabled={flag}
              onClick={() => {
                setStatus("Available");
                setFlag(true);
              }}
              className=" py-[6px] px-[6px] bg-green-600 text-white  font-normal rounded-[5px] rounded-r-none hover:scale-105"
            >
              Available
            </button>

            <button
              disabled={!flag}
              onClick={() => {
                setStatus("Not Available");
                setFlag(false);
              }}
              className="bg-red-500 text-white px-[6px] font-normal rounded-[5px] rounded-l-none hover:scale-105"
            >
              Not Available
            </button>
          </div>
          <div className="mb-5 mt-[30px]">
            <button
              type="submit"
              className="inline-block text-white bg-blue-700 mb-1 w-[100%] mt-[-10px] font-medium rounded-[5px] py-2 border-2 border-transparent hover:border-blue-950"
            >
              Add/Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
