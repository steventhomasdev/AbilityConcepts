import { setToken } from "../components/utls/Session";

//User

export function CreateAccount(userData) {
  return fetch("../../user/register", {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      'Accept': "application/json",
    },
    body: JSON.stringify({ userData }),
  }).then((data) => data.json());
}

export function LoginCheck(userData) {
    return fetch("../../user/login", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({ userData }),
    }).then((data) => data.json())
    .then((data) => setToken(data.accessToken));
  }

  //Products

  export function GetProducts(searchString) {
    return fetch("../../product/details", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({ searchString }),
    }).then((data) => data.json());
  }

  export function GetProductsCat() {
    return fetch("https://mxzy5rj0rc.execute-api.us-east-2.amazonaws.com/default/GetProductCategory", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(),
    }).then((data) => data.json());
  }

  export function GetProductsFilterCat(categoryCode) {
    return fetch("../../product/filter", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({ categoryCode }),
    }).then((data) => data.json());
  }

