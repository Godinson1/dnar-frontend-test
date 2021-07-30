import React from "react";
import { IoLogoGithub, IoGlobe, IoLogoReddit } from "react-icons/io5";

import "./styles/analytic.scss";

const InfoCard = () => {
  return (
    <div className="info">
      Info Card
      <div className="info__container">
        <div className="info__card">
          Description
          <div className="info__text">
            Lorem, ipsum dolor ctetur adipisicing Molestias aut, repellat ipsum
            dicta obcaecati.
          </div>
        </div>
        <div className="info__links">
          <div className="link_holder">
            website &nbsp; <IoGlobe size={25} color="#4b6fe2" />
          </div>
          <div className="link_holder">
            <IoLogoReddit size={25} color="#e86a48" />
          </div>
          <div className="link_holder">
            <IoLogoGithub size={25} />
          </div>
        </div>
        <div className="info__fact">
          Facts
          <br />
          <div className="line"></div>
          <div className="fact__holder">
            <div className="fact">
              <div>Hashing Algorithm</div> <div>SHA-256</div>
            </div>
            <div className="fact">
              <div>Country Origin</div> <div>Unknown</div>
            </div>
            <div className="fact">
              <div>Category</div> <div>Cryptocurrency</div>
            </div>
          </div>
        </div>
        <div className="info__card__inventory">
          <div className="inventory">
            <div>Total Supply</div> <div>21000000.0</div>
          </div>
          <div className="inventory">
            <div>Max Supply</div> <div>21000000.0</div>
          </div>
          <div className="inventory">
            <div>Circulating</div> <div>18761950.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
