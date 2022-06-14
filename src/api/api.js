  export function GetProductsCat() {
    //https://sfwywf7vs3.execute-api.us-east-2.amazonaws.com/Products_Live/getproductcategories
    return fetch("https://sfwywf7vs3.execute-api.us-east-2.amazonaws.com/Products_Live/getproductcategories", {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(),
    }).then((data) => data.json());
  }

  export function GetProductsForHomePage() {
    //https://wx6r3vnf7d.execute-api.us-east-2.amazonaws.com/Products_Live/getproducts
    return fetch("https://wx6r3vnf7d.execute-api.us-east-2.amazonaws.com/Products_Live/getproducts", {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(),
    }).then((data) => data.json());
  }

  export function GetProducts(userData) {
    //https://wx6r3vnf7d.execute-api.us-east-2.amazonaws.com/Products_Live/getproducts
    return fetch("https://wx6r3vnf7d.execute-api.us-east-2.amazonaws.com/Products_Live/getproducts", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }


  //User related APIS
  export function LoginAuthentication (userData) {
    //https://g3sm98yek5.execute-api.us-east-2.amazonaws.com/Products_Live/loginauthentication
    return fetch("https://g3sm98yek5.execute-api.us-east-2.amazonaws.com/Products_Live/loginauthentication", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json())
  }

  export function UserRegistration (userData) {
    //https://tgk1njzyvg.execute-api.us-east-2.amazonaws.com/Products_Live/userregistration
    return fetch("https://tgk1njzyvg.execute-api.us-east-2.amazonaws.com/Products_Live/userregistration", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }

  export function GetAccountDetails (userData) {
    //https://zfuvbeh3ze.execute-api.us-east-2.amazonaws.com/Products_Live/getaccountdetails
    return fetch("https://zfuvbeh3ze.execute-api.us-east-2.amazonaws.com/Products_Live/getaccountdetails", {
      method: "POST",
      headers: {
        'authorizationToken': userData.authorizationToken,
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }

  export function AddItemsToCart (userData) {
    //https://nppxsq0jaf.execute-api.us-east-2.amazonaws.com/Products_Live/additemstocart
    return fetch("https://nppxsq0jaf.execute-api.us-east-2.amazonaws.com/Products_Live/additemstocart", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }



