import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const AuthorList = () => {
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
      <h3 className="text-center text-success fs-2 p-2 mt-3">Author List</h3>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Author</th>
            <th scope="col">Year</th>
            <th scope="col">Biography</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{d.author.name}</td>
              <td>{d.author.birthYear}</td>
              <td>{d.author.biography}</td>
              <td>
                <Link
                  to={`/viewauthor/${d.id}`}
                  className="btn btn-primary me-1"
                >
                  <FontAwesomeIcon icon={faEye} />
                </Link>
                <Link
                  to={`/authorform/${d.id}`}
                  className="btn btn-warning me-1"
                >
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

export default AuthorList;
