const button = document.querySelector("#changeButton");
const message = document.querySelector("#message");
const version = document.querySelector("#version");

button.addEventListener("click", () => {
  message.textContent = "JavaScript hoạt động bình thường!";
  version.textContent = "Bạn đã kiểm thử thành công 🎉";
});
