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

  export function UpdateUserDetails (userData) {
    //https://r6v6hrihk2.execute-api.us-east-2.amazonaws.com/Products_Live/updateuserdetails
    return fetch("https://r6v6hrihk2.execute-api.us-east-2.amazonaws.com/Products_Live/updateuserdetails", {
      method: "POST",
      headers: {
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

  export function GetCartCount (userData) {
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

  export function GetCartItems (userData) {
    //https://4ds5mcq6qc.execute-api.us-east-2.amazonaws.com/Products_Live/getcartitems
    return fetch("https://4ds5mcq6qc.execute-api.us-east-2.amazonaws.com/Products_Live/getcartitems", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }

  export function RemoveItemsFromCart (userData) {
    //https://v0oy6hc75f.execute-api.us-east-2.amazonaws.com/Products_Live/removeitemsfromcart
    return fetch("https://v0oy6hc75f.execute-api.us-east-2.amazonaws.com/Products_Live/removeitemsfromcart", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }

  export function OrderTableEntry (userData) {
    //https://pqe07h0alg.execute-api.us-east-2.amazonaws.com/Products_Live/ordertableentry
    return fetch("https://pqe07h0alg.execute-api.us-east-2.amazonaws.com/Products_Live/ordertableentry", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }

  export function GetOrders (userData) {
    //https://wfoybvekp3.execute-api.us-east-2.amazonaws.com/Products_Live/getorders
    return fetch("https://wfoybvekp3.execute-api.us-east-2.amazonaws.com/Products_Live/getorders", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }
  

  // export function Payment (userData) {
  //   return fetch("http://localhost:8282/payment", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': "application/json",
  //       'Accept': "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   }).then((data) => data.json());
  // }


