import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function CartItem({ itemId, name, imgSrc, price }) {
  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x </span>
          <div className="quantity">
            <RemoveRounded className="itemRemove" />
            <AddRounded className="itemAdd" />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  );
}

export default CartItem;
