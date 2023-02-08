const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img"),
  downloadBtn = wrapper.querySelector(".download-btn");
let preValue;

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
    downloadBtn.style.display = "block";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    downloadBtn.style.display = "none";
    preValue = "";
  }
});

downloadBtn.addEventListener("click", () => {
  const qrCode = document.querySelector(".qr-code img");
  let link = document.createElement("a");
  link.href = qrCode.src;
  link.download = "qr-code.jpg";
  link.click();
});
