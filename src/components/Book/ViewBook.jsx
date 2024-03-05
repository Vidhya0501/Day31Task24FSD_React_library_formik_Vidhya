import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewBook = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://651666ac09e3260018c9b81d.mockapi.io/books/" + id)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 border bg-white shadow rounded px-5 pt-3 pb-5">
        <h4>Book Details</h4>
        <div className="mb-2">
          <p>
            <strong>Title: </strong>
            {data.title}
          </p>
        </div>
        <div className="mb-2">
          <p>
            <strong>ISBN: </strong>
            {data.ISBN}
          </p>
        </div>
        <div className="mb-2">
          <p>
            <strong>Genre: </strong>
            {data.genre}
          </p>
        </div>
        <div className="mb-2">
          <p>
            <strong>Year: </strong>
            {data.year}
          </p>
        </div>

        <Link to={`/editbook/${id}`} className="btn btn-success me-2">
          Edit
        </Link>
        <Link to="/booklist" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ViewBook;
