const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const tryAgain = document.querySelector(".reload");

const correctAnswers = ["B", "B", "A", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userScore = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      userScore += 25;
    }
  });

  // Show result on page
  scrollTo(0, 0); // will scroll to the top on the page 0Y, 0X
  result.classList.remove("d-none");

  // Animating the score
  let output = 0;

  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;

    if (output === userScore) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// Refresh the page to start over
tryAgain.addEventListener("click", () => {
  location.reload(true);
});
