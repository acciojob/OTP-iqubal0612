const inputs = document.querySelectorAll(".code");

// initial focus (TEST EXPECTS THIS)
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // allow only digits
    if (!/^\d$/.test(value)) {
      input.value = "";
      return;
    }

    // move forward
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {

      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    }
  });
});
