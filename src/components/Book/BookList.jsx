import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const BookList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://651666ac09e3260018c9b81d.mockapi.io/books")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios
        .delete("https://651666ac09e3260018c9b81d.mockapi.io/books/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="m-2">
      <h3 className="text-center text-success fs-2 p-2 mt-3">Book List</h3>
      <div className="d-flex justify-content-end">
        <Link to="/createbook" className="btn btn-success mb-2">
          Create
        </Link>
      </div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">ISBN</th>
            <th scope="col">Year</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{d.title}</td>
              <td>
                <Link to={`/authorform/${d.id}`}>{d.author.name}</Link>
              </td>
              <td>{d.genre}</td>
              <td>{d.ISBN}</td>
              <td>{d.year}</td>
              <td>
                <Link to={`/viewbook/${d.id}`} className="btn btn-primary me-1">
                  <FontAwesomeIcon icon={faEye} />
                </Link>
                <Link to={`/editbook/${d.id}`} className="btn btn-warning me-1">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BookList;
