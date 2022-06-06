
  import { setToken } from "../components/utls/Session";

  export function GetProductsCat() {
    //https://sfwywf7vs3.execute-api.us-east-2.amazonaws.com/Products_Live/getproductcategories
    return fetch("", {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(),
    }).then((data) => data.json());
  }

  export function LoginAuthentication (userData) {
    return fetch("https://zm9lce8rca.execute-api.us-east-2.amazonaws.com/Products_Live/loginauthentication", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({ userData }),
    }).then((data) => data.json())
    .then((data) => data.accessToken != null ? (data) => setToken(data.accessToken): " ");
  }
