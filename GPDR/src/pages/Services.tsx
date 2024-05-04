import image1 from "../assets/Bmw2.jpg";
import image2 from "../assets/extPDR.png";
import image3 from "../assets/bmw1.jpg";

import "../pages/components/Service.css";

function Services() {
  return (
    <div className="container mt-5 pb-10">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col text-center">
          {" "}
          {/* Added padding bottom */}
          <h2 className="mb-3">What is Paint-less Dent Repairs?</h2>
          <p>
            Paintless Dent Repair (PDR) is a technique used to remove minor
            dents and dings from the body of a vehicle without the need for
            painting or refinishing. It's typically used for small dents that
            haven't caused damage to the paint surface, such as those caused by
            hail, door dings, or minor collisions.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4  pb-4">
          <div className="card shadow card-hover">
            <img src={image1} className="card-img-top img-fluid" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">FAQ</h5>
              <p className="card-text">
                This is a simple card. Replace this text with your content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4  pb-4">
          <div className="card shadow card-hover">
            <img src={image2} className="card-img-top img-fluid" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Schedule a repair</h5>
              <p className="card-text">
                This is another simple card. Replace this text with your
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4  pb-4">
          <div className="card shadow card-hover">
            <img src={image3} className="card-img-top img-fluid" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Auto Detail</h5>
              <p className="card-text">
                This is yet another simple card. Replace this text with your
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
