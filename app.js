const qrInput = document.querySelector("#qr-input");
const qrImg = document.querySelector("#qr-img");
const qrBtn = document.querySelector("#qr-btn");

qrBtn.addEventListener("click", function () {
  const inputValue = qrInput.value;
  if (!inputValue) {
    alert("Please enter a valid URL");
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.alt = `QR code for ${inputValue}`;
  }
});
