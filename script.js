function openPopup() {
    document.getElementById("openPopup").style.display = "inline-block";
}
function closePopup() {
    document.getElementById("openPopup").style.display = "none";
}

function addProduct() {
    let productName = document.getElementById("name").value;
    let productDesc = document.getElementById("desc").value;
    console.log(productName);
    closePopup();
}
