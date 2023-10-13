const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const imgUrlInput = document.getElementById("imgUrl");
  const priceInput = document.getElementById("price");

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imgUrl: imgUrlInput.value,
    price: priceInput.value,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWNmMzEzOWM0MzAwMTg4MTQ1NWYiLCJpYXQiOjE2OTcyMDM0MjIsImV4cCI6MTY5ODQxMzAyMn0._L2OK3jlLyM2guBJowX-HCAqU9CHJt80LPKzNKmQoQE",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Inviato", res);
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.log("errore", err);
    });
});
