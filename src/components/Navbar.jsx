import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between p-2 fs-5">
        <div className="nav-left d-flex justify-content-between ">
          <div className="nav-left1">
            <h3 class="navbar-brand mt-1 ms-2">e-Library</h3>
          </div>
          <div className="nav-left2">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-item nav-link">
                  Home
                </Link>
                <Link to="/booklist" class="nav-item nav-link">
                  BookList
                </Link>
                <Link to="/authorlist" class="nav-item nav-link">
                  AuthorList
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-right text-white p-2 me-4">
          <FontAwesomeIcon icon={faUser} />
          <span className="ms-1">Admin</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
