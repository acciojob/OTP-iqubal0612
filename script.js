//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("keydown", (e) => {

        if (e.key >= 0 && e.key <= 9) {
            code.value = "";
            setTimeout(() => {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }, 10);
        }

        else if (e.key === "Backspace") {
            code.value = "";
            setTimeout(() => {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            }, 10);
        }
    });

});

