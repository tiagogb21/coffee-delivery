import { Header } from "./components/Common/Header";
import { ShoppingCartProvider } from "./contexts/cart";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

function App() {
    return (
        <ShoppingCartProvider>
            <div className="bg-background font-roboto">
                <Header />
                {/* <Home /> */}
                <Checkout />
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
