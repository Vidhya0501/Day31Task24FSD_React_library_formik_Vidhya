import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const AuthorForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    author: Yup.object().shape({
      name: Yup.string().required("Author name is required"),
      birthYear: Yup.string().required("Birth year is required"),
      biography: Yup.string().required("Biography is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      author: {
        id: "",
        name: "",
        birthYear: "",
        biography: "",
      },
      isbn: "",
      genre: "",
      year: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .put("https://651666ac09e3260018c9b81d.mockapi.io/books/" + id, values)
        .then((res) => {
          console.log(res);
          navigate("/authorlist");
        })
        .catch((err) => console.log(err));
    },
  });

  useEffect(() => {
    axios
      .get("https://651666ac09e3260018c9b81d.mockapi.io/books/" + id)
      .then((res) => formik.setValues(res.data))
      .catch((err) => console.log(err));
  }, [id, formik.setValues]);

  return (
    <div className="d-flex w-100 vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 border bg-white shadow rounded px-5 pt-3 pb-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="authorName" className="fw-bold mb-1 mt-1">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="authorName"
              name="author.name"
              placeholder="Enter author name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author.name}
            />
            {formik.touched["author.name"] && formik.errors["author.name"] ? (
              <div className="text-danger">{formik.errors["author.name"]}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="birthYear" className="fw-bold mb-1 mt-1">
              Birth Year
            </label>
            <input
              type="text"
              className="form-control"
              id="birthYear"
              name="author.birthYear"
              placeholder="Enter birthYear"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author.birthYear}
            />
            {formik.touched["author.birthYear"] &&
            formik.errors["author.birthYear"] ? (
              <div className="text-danger">
                {formik.errors["author.birthYear"]}
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="biography" className="fw-bold mb-1 mt-1">
              Biography
            </label>
            <input
              type="text"
              className="form-control"
              id="biography"
              name="author.biography"
              placeholder="Enter author bio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author.biography}
            />
            {formik.touched["author.biography"] &&
            formik.errors["author.biography"] ? (
              <div className="text-danger">
                {formik.errors["author.biography"]}
              </div>
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

export default AuthorForm;
