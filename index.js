// deklaracja zmiennych
const fetchButton = document.querySelector("#fetchButton");
const form = document.querySelector("#form");

// deklaracja funkcji
const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) throw new Error("Something goes wrong!");

    // dalsza czesc sie nie wykona jezeli if powyzej zostanie spelniony
    const { products } = await response.json();

    console.log(products);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
};

// wywolanie funkcji
fetchData();

// jakie mamy eventy w js
// click - zazwyczaj na przyciskach - mousedown // mouseup
// change - input/textarea
// submit - form - wywolane przez button o typie submit
//
// dodawanie event listenerow
// form.addEventListener('submit', () => {})
