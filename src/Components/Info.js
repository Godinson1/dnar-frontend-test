import React from "react";
import { BsLink45Deg } from "react-icons/bs";

const Info = () => {
  return (
    <div className="info">
      Events
      <div className="event__container">
        {Array(4)
          .fill(null)
          .map(() => {
            return (
              <div className="event">
                Token2049 London
                <div className="token__text">
                  Lorem, ipsum dolor ctetur adipisicing Molestias aut, repellat
                  ipsum dicta obcaecati.
                </div>
                <div>
                  <div className="link">
                    <BsLink45Deg />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Info;
