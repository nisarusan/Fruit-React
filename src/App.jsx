import './App.css'
import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/ijsblokjes.jpg';
import ijsblokjes from './assets/limoenen.png';
import {ReactComponent as ShoppingCart} from "./assets/winkelmandje.svg";
import Product from "./components/Product.jsx";

function App() {

    //Hoeft niet in React een Reference point, alleen bij javascript normaal
    // const buttonReference = document.getElementById('button');
    // buttonReference.addEventListener('click', logClick);
    function logClick() {
        console.log("You clicked");
    }

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="#">Ons verhaal</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header><h1>
                Fruit perfection
            </h1>
                <button type="button" onClick={logClick}>Shop nu</button>
            </header>
            <main>
                <Product image={citroenen} title="Citroen"
                         description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
                <Product image={limoenen} title="Limoenen"
                         description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."/>
                <Product image={ijsblokjes} title="ijsblokjes"
                         description="een ijss voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."/>
            </main>
        </>
    );

}

export default App
