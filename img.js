const image = document.getElementsByTagName("image");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const imageInput = document.getElementById("image");

  const newProduct = {
    image: imageInput.value,
  };
});
