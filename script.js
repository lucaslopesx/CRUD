function openPopup() {
    document.getElementById("openPopup").style.display = "inline-block";
}
function closePopup() {
    document.getElementById("openPopup").style.display = "none";
}

function addProduct() {
    let product = document.getElementById("res");
    let productName = document.getElementById("name").value;
    let productDesc = document.getElementById("desc").value;
    console.log(productName);

    product.innerHTML +=
        "<div class=product'><p>Nome do produto: " +
        productName +
        " </p><p>Descrição: " +
        productDesc +
        "</p></div>";
}
