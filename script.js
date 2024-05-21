document.addEventListener("DOMContentLoaded", () => {
    const problems = [
        { question: "2 + 2 =", answer: 4 },
        { question: "5 - 3 =", answer: 2 },
        { question: "10 / 2 =", answer: 5 },
        { question: "8 * 1 =", answer: 8 },
        { question: "9 + 3 =", answer: 12 }
    ];

    const mathProblemsList = document.getElementById("math-problems");
    const resultDiv = document.getElementById("result");

    problems.forEach((problem, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${problem.question} <input type="text" data-index="${index}" />`;
        mathProblemsList.appendChild(listItem);
    });

    document.getElementById("submit-btn").addEventListener("click", () => {
        const allCorrect = problems.every((problem, index) => {
            const userAnswer = document.querySelector(`input[data-index="${index}"]`).value;
            return parseInt(userAnswer) === problem.answer;
        });

        resultDiv.textContent = allCorrect ? "PARABÉNS!" : "Há erros nas suas respostas. Tente novamente!";
        resultDiv.style.color = allCorrect ? "green" : "red";
    });
});
