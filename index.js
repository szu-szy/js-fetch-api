// deklaracja zmiennych
const fetchButton = document.querySelector("#fetch-btn");
const form = document.querySelector("#form-user");
const inputForm = document.querySelector("#name");

// roznica miedzy == a ===
// template string -> przed: "" + "", po: `${zmienna} napis`
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

const getFormData = (event) => {
  event.preventDefault();
  const { value } = inputForm;
  console.log(value < 100);
};

// zadanie 1
const getUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");

    if (!response.ok) throw new Error("Something goes wrong!");

    const dataJSON = await response.json();
    console.log(dataJSON.users);
  } catch (error) {
    console.log(error);
  }
};

// wywolanie funkcji
// fetchData();
// getUsers();

// jakie mamy eventy w js
// click - zazwyczaj na przyciskach - mousedown // mouseup
// change - input/textarea
// submit - form - wywolane przez button o typie submit
//
// dodawanie event listenerow
fetchButton.addEventListener("click", getUsers);
form.addEventListener("submit", getFormData);
