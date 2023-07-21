import img1 from "../Assets/Screenshot 2023-06-29 152918.png";
import img2 from "../Assets/Screenshot 2023-06-03 191250.png";
import img3 from "../Assets/Screenshot 2023-06-03 191520.png";
import img4 from "../Assets/Screenshot 2023-06-04 171452.png";
import "../Style/Project.css";

export default function Project() {
  return (
    <div className="project-content">
      <h1>My Project</h1>
      <div className="my-project">
        <div className="project1">
          <img src={img1} alt="" />
          <h5 className="wt">
            Game Store <span>Date / Month /2000</span>
          </h5>
        </div>
        <div className="project2">
          <img src={img2} alt="" />
          <h5 className="wt">
            Portfolio <span>Date / Month /2000</span>
          </h5>
        </div>
        <div className="project3">
          <img src={img3} alt="" />
          <h5 className="bk">
            Portfolio <span>Date / Month /2000</span>
          </h5>
        </div>
        <div className="project4">
          <img src={img4} alt="" />
          <h5 className="bk">
            Web Sederhana <span>Date / Month /2000</span>
          </h5>
        </div>
      </div>
      <hr />
    </div>
  );
}
