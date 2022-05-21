import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

function MenuCard({ imgSrc, name, isActive }) {
  const chemin = "../img/".concat(imgSrc);
  console.log(chemin);
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">
        {/* <img src={imgSrc} alt="" /> */}
        {/* <img src="../img/loukoums/loukoum 1.jpg" alt="" /> */}
        {/* <img src={require({ chemin })} alt="" /> */}
        {/* <img src='"../img/" + { imgSrc }' alt="" /> */}
        <img src={require("../img/".concat(imgSrc))} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
}

export default MenuCard;
