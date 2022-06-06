
  import { setToken, setTokenKey } from "../components/utls/Session";

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
    .then((data) => {
      setToken(data.body.accessToken);
    });
  }
