import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuCard from "./Components/MenuCard";
import MenuContainer from "./Components/MenuContainer";
import SubMenuContainer from "./Components/SubMenuContainer";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import { useStateValue } from "./Redux/StateProvider";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("acrive");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId))
  }
  return (
    <div className="App">
      {/* Header section */}
      <Header />
      {/* Main section */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"FoodDelivery"} discount={"20"} link={"#"} />
            <img src="" alt="" className="deliveryPic" />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu"} />
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
            <div className="dishitemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    rating={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {
            !cart ? (<div></div>) : (
              <div className="cartCheckOutContainer">
                <SubMenuContainer name={"Carrito"} />
                <div className="cartContainer">
                  <div className="cartItems">
                    {
                      cart && cart.map((data) => (
                        <CartItem
                          key={data.id}
                          itemId={data.id}
                          name={data.name}
                          imgSrc={data.imgSrc}
                          price={data.price} />
                      ))
                    }
                  </div>
                </div>
                <div className="totalSection">
                  <h3>Total</h3>
                  <p><span>$ </span>100.0</p>
                </div>
                <button className="checkOut">Pagar</button>
              </div>
            )
          }
        </div>
      </main>
      {/* Footer section */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator">
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
