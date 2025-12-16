const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {
        // Allow only digits
        code.value = code.value.replace(/[^0-9]/g, "");

        if (code.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            if (code.value === "" && index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});
