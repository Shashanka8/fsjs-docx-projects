const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");

let filterInput;

checkBtn.addEventListener("click", () => {
  // reversing input string
  let reverseInput = filterInput.split("").reverse().join("");

  infoTxt.style.display = "block";
  if (reverseInput != filterInput) {
    return (infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`);
  }
  infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {
  // removing all whitespaces and special characters from entered value
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");

  if (filterInput) {
    return checkBtn.classList.add("active");
  }

  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});
