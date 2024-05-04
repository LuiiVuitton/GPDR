import { FaSearch } from "react-icons/fa";

interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrcPath})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "25% 75%", // Adjusted position
    height: "400px",
  };

  return (
    <div id="Home">
      <div
        className="bg-image d-flex align-items-center justify-content-center"
        style={backgroundImageStyle}
      >
        <div className="text-center text-white">
          <h1 className="display-4 mb-4">Gaithersburg PDR</h1>
          {/* Search Bar */}
          <div className="input-group mb-3" style={{ maxWidth: "400px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
