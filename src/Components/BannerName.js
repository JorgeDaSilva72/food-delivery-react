import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "€";
  return (
    <div className="bannerContent">
      <h3>Bonjour {name},</h3>
      <p>
        Obtenez une promotion de 20% tous les{" "}
        <span>{`${currency}${discount}`}</span>
        <br></br>Passez commande
      </p>
      <a href={more}>En savoir plus</a>
    </div>
  );
}

export default BannerName;
