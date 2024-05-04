import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div
      className="bg-light container d-flex flex-column align-items-center pt-4"
      style={{ minHeight: "100px" }}
    >
      <h2>Gaithersburg PDR</h2>
      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control border-right-0"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary border-left-0"
            type="button"
            id="button-addon2"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
