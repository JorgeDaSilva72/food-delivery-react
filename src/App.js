import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "./Components/BannerName";
import banner from "./img/banner.png";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";

function App() {
  // contient le tableau des plats en fontion de la categorie
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    console.log(menuLi);

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);

  // set main dish items on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      {/* header section */}
      <Header />

      {/* bottom menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>

      {/* main container */}
      <main>
        <div className="mainContainer"></div>
        {/* Banner  */}
        <div className="banner">
          <BannerName name={"Claudia"} discount={"20"} more={"#"} />
          <img src={banner} alt="banner" className="deliveryPic" />
        </div>
        {/* dishContainer  */}
        <div className="dishContainer">
          <div className="menuCard">
            <SubMenuContainer name={"Menu Category"} />
          </div>
          <div className="rowContainer">
            {MenuItems &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />
                </div>
              ))}
          </div>
          <div className="dishItemContainer">
            {isMainData &&
              isMainData.map((data) => (
                <ItemCard
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  ratings={data.ratings}
                  price={data.price}
                />
              ))}
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          <div className="cartCheckOutContianer">
            <div className="cartContainer">
              <SubMenuContainer name={"Votre panier"} />

              <div className="cartItems">
                <CartItem
                  itemId={"1"}
                  name={"Burger"}
                  imgSrc={""}
                  qty={"4"}
                  price={"7.95"}
                />
              </div>
            </div>
            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ 45.0</span> {}
              </p>
            </div>
            <button className="checkOut">Valider</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
