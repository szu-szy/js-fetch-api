// deklaracja zmiennych
const fetchButton = document.querySelector("#fetch-btn");
const form = document.querySelector("#form-user");
const inputForm = document.querySelector("#name");
const pageBtn1 = document.querySelector("#page-btn-1");
const pageBtn2 = document.querySelector("#page-btn-2");
const pageBtn3 = document.querySelector("#page-btn-3");

const inputFirstName = document.querySelector("#firstName");
const inputLastName = document.querySelector("#lastName");
const inputUserID = document.querySelector("#userID");
const userForm = document.querySelector("#update-user-form");

const LIMIT_ITEMS = 10;

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

const updateProduct = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "iPhone Galaxy +1",
      }),
    });

    if (!response.ok) throw new Error("Ups!");

    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.log(error);
  }
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
// zadanie 2
const getUser = async (e) => {
  e.preventDefault();
  const { value: userID } = inputForm;
  if (userID >= 0 && userID <= 100) {
    try {
      const response = await fetch(`https://dummyjson.com/users/${userID}`);

      if (!response.ok) throw new Error("Something goes wrong!");

      const { firstName, lastName } = await response.json();
      console.log(firstName, lastName);
    } catch (error) {
      console.log(error);
    }
  }
};
// zadanie 3
const getUsersByPage = async (skipItems) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT_ITEMS}&skip=${skipItems}`
    );

    if (!response.ok) throw new Error("Ups!");

    const { products } = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};
// zadanie 4
const updateUser = async (e) => {
  e.preventDefault();
  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const userID = inputUserID.value;

  try {
    const response = await fetch(`https://dummyjson.com/users/${userID}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName, // firstName: firstName
        lastName, // lastName: lastName
      }),
    });

    if (!response.ok) throw new Error("Ups!");

    const dataJSON = await response.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error);
  }
};

// wywolanie funkcji
// fetchData();
// getUsers();
// updateProduct();

// jakie mamy eventy w js
// click - zazwyczaj na przyciskach - mousedown // mouseup
// change - input/textarea
// submit - form - wywolane przez button o typie submit
//
// dodawanie event listenerow
fetchButton.addEventListener("click", getUsers);
form.addEventListener("submit", getUser);
pageBtn1.addEventListener("click", () => getUsersByPage(0));
pageBtn2.addEventListener("click", () => getUsersByPage(10));
pageBtn3.addEventListener("click", () => getUsersByPage(20));
userForm.addEventListener("submit", updateUser);
