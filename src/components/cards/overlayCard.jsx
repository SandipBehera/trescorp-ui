import React from "react";
import "./overlayCard.css";

const OverlayCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-14">
    {data?.map((item,index) => (
   
      <div className="image-container1" key={index}>
        <img src={item.img} alt="Description" className="image" />
        <div>
          <div className="overlay">
            <div className="text">
              {/* <div className="pmeta font-second">
                {" "}
                <a
                  href={item?.url}
                  rel="tag"
                  tabIndex="-1"
                >
                 {item.type}
                </a>{" "}
                /{" "}
                <a
                  href={item?.url}
                  rel="tag"
                  tabIndex="-1"
                >
                  {item.category}
                </a> */}
              {/* </div> */}
              <br />
              <h6 className="project-name">
                <a
                  href={item?.url}
                  tabIndex="-1"
                >
                   {item.title}
                </a>
              </h6>
              <p className="mt-4 text-base">
                {item.smallDescription}
              </p>
              {/* <a
                className="btn-details mt-10"
                href={item?.url || '#'}
                tabIndex="-1"
              >
                View details <i className="icon ion-md-add-circle-outline"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
};

export default OverlayCard;
