import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookList from "./components/Book/BookList";
import CreateBook from "./components/Book/CreateBook";
import AuthorList from "./components/Author/AuthorList";
import NoPage from "./components/NoPage";
import AuthorForm from "./components/Author/AuthorForm";
import ViewBook from "./components/Book/ViewBook";
import EditBook from "./components/Book/EditBook";
import ViewAuthor from "./components/Author/ViewAuthor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="booklist" element={<BookList />} />
            <Route path="/createbook" element={<CreateBook />} />
            <Route path="/viewbook/:id" element={<ViewBook />} />
            <Route path="/editbook/:id" element={<EditBook />} />

            <Route path="authorlist" element={<AuthorList />} />
            <Route path="/authorform/:id" element={<AuthorForm />} />
            <Route path="/viewauthor/:id" element={<ViewAuthor />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
