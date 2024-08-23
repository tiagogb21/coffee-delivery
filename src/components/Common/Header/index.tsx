import { useContext } from "react";
import logo from "../../../assets/imgs/Logo.png";
import { ShoppingCartContext } from "../../../contexts/cart";
import shoppingCart from '../../../assets/icons/shopping-cart.svg';
import map from '../../../assets/icons/map-pin.svg';
import { Link } from "react-router-dom";

export const Header = () => {
    const {cart} = useContext(ShoppingCartContext);

    return (
        <header>
            <div className="container mx-auto flex justify-between px-20 py-8">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <ul className="flex items-center gap-3">
                    <li className="flex items-center bg-purple-light text-purple-dark p-2 rounded-md gap-1">
                        <img src={map} alt="show icon to represent direction" />
                        Porto Alegre, RS
                    </li>
                    <li>
                        <Link to="/checkout" className="flex p-3 rounded-md relative bg-yellow-light">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full absolute -top-3 -right-3 bg-yellow-dark text-yellow-light">{cart?.length}</span>
                            <img src={shoppingCart} alt="go to shopping cart" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
