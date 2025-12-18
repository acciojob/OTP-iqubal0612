const codes = document.querySelectorAll(".code");

// Focus first input on load
codes[0].focus();

codes.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {

        // Allow only digits & Backspace
        if (e.key >= "0" && e.key <= "9") {
            input.value = "";
            setTimeout(() => {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }, 10);
        }

        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                setTimeout(() => {
                    codes[index - 1].focus();
                    codes[index - 1].value = "";
                }, 10);
            }
        }
    });
});
