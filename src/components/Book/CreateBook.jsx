import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const CreateBook = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    authorName: Yup.string().required("Author is required"),
    ISBN: Yup.string().required("ISBN is required"),
    genre: Yup.string().required("Genre is required"),
    year: Yup.number()
      .required("Year is required")
      .positive("Year must be a positive number"),
  });

  const handleSubmit = (values) => {
    const newValues = {
      ...values,
      author: {
        name: values.authorName,
      },
      id: uuidv4(),
    };
    axios
      .post("https://651666ac09e3260018c9b81d.mockapi.io/books", newValues)
      .then((res) => {
        console.log(res);
        navigate("/booklist");
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      authorName: "",
      ISBN: "",
      genre: "",
      year: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="d-flex w-100 vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 border bg-white shadow rounded px-5 pt-3 pb-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="fw-bold mb-1 mt-1">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter book title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-danger">{formik.errors.title}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="authorName" className="fw-bold mb-1 mt-1">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="authorName"
              name="authorName"
              placeholder="Enter author"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.authorName}
            />
            {formik.touched.authorName && formik.errors.authorName ? (
              <div className="text-danger">{formik.errors.authorName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="ISBN" className="fw-bold mb-1 mt-1">
              ISBN
            </label>
            <input
              type="ISBN"
              className="form-control"
              id="ISBN"
              name="ISBN"
              placeholder="Enter ISBN"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ISBN}
            />
            {formik.touched.ISBN && formik.errors.ISBN ? (
              <div className="text-danger">{formik.errors.ISBN}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="genre" className="fw-bold mb-1 mt-1">
              Genre
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              placeholder="Enter genre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.genre}
            />
            {formik.touched.genre && formik.errors.genre ? (
              <div className="text-danger">{formik.errors.genre}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="year" className="fw-bold mb-1 mt-1">
              Year
            </label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              placeholder="Enter Year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.year}
            />
            {formik.touched.year && formik.errors.year ? (
              <div className="text-danger">{formik.errors.year}</div>
            ) : null}
          </div>

          <div className="buttons pt-2">
            <button type="submit" className="btn btn-success me-2">
              Submit
            </button>
            <Link to="/booklist" className="btn btn-primary">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
