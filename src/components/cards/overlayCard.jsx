import React from "react";
import "./overlayCard.css";

const OverlayCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-14">
    {data?.map((item,index) => (
   
      <div className="image-container" key={index}>
        <img src={`../img/product/${item.img}`} alt="Description" className="image" />
        <div>
          <div className="overlay">
            <div className="text">
              <div class="pmeta font-second">
                {" "}
                <a
                  href="https://trescorp.saplingedu.in/service/transportation-distribution//"
                  rel="tag"
                  tabindex="-1"
                >
                 {item.type}
                </a>{" "}
                /{" "}
                <a
                  href="https://trescorp.saplingedu.in/service/transportation-distribution/"
                  rel="tag"
                  tabindex="-1"
                >
                  {item.category}
                </a>
              </div>
              <br />
              <h4 class="project-name">
                <a
                  href="https://trescorp.saplingedu.in/service/transportation-distribution/"
                  tabindex="-1"
                >
                   {item.title}
                </a>
              </h4>
              <p className="mt-4 text-base">
                {item.smallDescription}
              </p>
              <a
                class="btn-details mt-10"
                href="https://trescorp.saplingedu.in/portfolio/industry-complex/"
                tabindex="-1"
              >
                View details <i class="icon ion-md-add-circle-outline"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    ))};
    </div>

  );
};

export default OverlayCard;
