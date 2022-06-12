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
        'authorizationToken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOnsiX2lkIjoiNjI5ZTlhZjkzMWY1YWYyYWQ2NGNkMDY3IiwibmFtZSI6InRlc3QgdXNlciIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRZSWY0d1BhUHcyRHVhZEJnMHd0SlguME8wcVROQnY2a0l2SXguSjYyZERITldPOEhwMzdISyIsInBob25lIjpudWxsLCJjb3VudHJ5IjpudWxsLCJwcm92aWNlIjpudWxsLCJjaXR5IjpudWxsLCJwb3N0YWxDb2RlIjpudWxsfSwiaWF0IjoxNjU1MDA2OTgwfQ.Ccuw1PYY5qq_i-NnSrXhYu1VpSL2VM1s2FqSPvMOZmo",
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(userData),
    }).then((data) => data.json());
  }



