import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewAuthor = () => {
  const [authorData, setAuthorData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://651666ac09e3260018c9b81d.mockapi.io/books/" + id)
      .then((res) => {
        console.log("Details", res);
        setAuthorData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 bg-light justify-content-center align-items-center">
      {authorData.author && (
        <div className="w-50 border bg-white shadow rounded px-5 pt-3 pb-5">
          <h4>Author Details</h4>

          <div className="mb-2">
            <p>
              <strong>Author: </strong>
              {authorData.author.name}
            </p>
          </div>
          <div className="mb-2">
            <p>
              <strong>Birth Year: </strong>
              {authorData.author.birthYear}
            </p>
          </div>
          <div className="mb-2">
            <p>
              <strong>Biography: </strong>
              {authorData.author.biography}
            </p>
          </div>

          <Link to={`/authorform/${id}`} className="btn btn-success me-2">
            Edit
          </Link>
          <Link to="/authorlist" className="btn btn-primary">
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default ViewAuthor;
