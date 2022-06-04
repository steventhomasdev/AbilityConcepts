
  export function GetProductsCat() {
    return fetch("https://u94lnqyv4e.execute-api.us-east-2.amazonaws.com/staging/", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify(),
    }).then((data) => data.json());
  }