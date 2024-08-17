document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Kéo", "Bao", "Búa"];
    const buttons = document.querySelectorAll("button");
    const userChoiceElement = document.getElementById("userChoice");
    const computerChoiceElement = document.getElementById("computerChoice");
    const resultElement = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const userChoice = button.textContent;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result = determineWinner(userChoice, computerChoice);

            userChoiceElement.textContent = `Bạn chọn: ${userChoice}`;
            computerChoiceElement.textContent = `Máy tính chọn: ${computerChoice}`;
            resultElement.textContent = `Kết quả: ${result}`;
        });
    });

    function determineWinner(user, computer) {
        if (user === computer) {
            return "Hòa!";
        } else if (
            (user === "Kéo" && computer === "Búa") ||
            (user === "Bao" && computer === "Kéo") ||
            (user === "Búa" && computer === "Bao")
        ) {
            return "Bạn thua!";
        } else {
            return "Bạn thắng!";
        }
    }
});
