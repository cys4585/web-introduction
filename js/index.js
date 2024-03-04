const submitButton = document.querySelector("#guest-book__submit-button");
submitButton.addEventListener("click", () => {
  const name = document.querySelector("#name-input").value.trim();
  const matchCount = document.querySelectorAll(
    "input[name='favorit-movie']:checked"
  ).length;

  if (name.length === 0) {
    alert("이름을 입력해주세요!");
    return;
  }

  alert(`${name}님, 저와 ${matchCount}개의 취향이 같으시네요!`);
});

const cancelButton = document.querySelector("#guest-book__cancel-button");
cancelButton.addEventListener("click", () => {
  const $nameInput = document.querySelector("#name-input");
  const $favoritMovies = document.querySelectorAll(
    "input[name='favorit-movie']:checked"
  );

  $nameInput.value = "";
  $favoritMovies.forEach((element) => {
    element.checked = false;
  });
});
