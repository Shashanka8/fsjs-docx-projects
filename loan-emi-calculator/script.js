const loanAmount = document.getElementById("amount");
const interestRate = document.getElementById("interest");
const loanTenure = document.getElementById("loanTenure");
const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  calculateEMI();
});

function calculateEMI() {
  if (
    interestRate.value == "" ||
    loanAmount.value == "" ||
    loanTenure.value == ""
  ) {
    return alert("Please enter all values to calculate EMI");
  }

  let r = parseFloat(interestRate.value) / 12 / 100;
  let p = loanAmount.value;
  let n = loanTenure.value;

  let EMI = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  document.getElementById("emi").innerText = `₹ ${Math.round(EMI)}`;
}
