
const questions = [
    {
        question: "Quels sont les usages les plus fréquents des écrans par les enfants ?",
        answers: ["Jouer à des jeux vidéo", "Regarder des dessins animés ou séries", "Faire des devoirs ou recherches", "Regarder des vidéos sur YouTube", "Parler avec des amis en ligne"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les dangers liés à une surexposition aux écrans ?",
        answers: ["Fatigue visuelle", "Manque de sommeil", "Isolement social", "Difficultés scolaires", "Accès à des contenus inappropriés"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quelles sont les bonnes pratiques pour limiter l'usage des écrans ?",
        answers: ["Instaurer des règles de temps d'écran", "Privilégier les activités en famille", "Pas d’écran avant de dormir", "Utiliser des applications éducatives", "Éteindre les écrans pendant les repas"],
        points: [10, 7, 5, 3, 1]
    }
];

let currentQuestion = 0;
let showingAnswers = false;

document.addEventListener("DOMContentLoaded", () => {
    showSlide(); // Automatically display the first slide when the page loads
    document.getElementById("next-button").addEventListener("click", showSlide);
});

function showSlide() {
    const questionContainer = document.getElementById("question");
    const answersList = document.getElementById("answers-list");
    const questionData = questions[currentQuestion];

    if (!showingAnswers) {
        // Show question slide
        questionContainer.textContent = questionData.question;
        answersList.innerHTML = ""; // Clear previous answers
        document.getElementById("next-button").textContent = "Afficher les réponses";
        showingAnswers = true;
    } else {
        // Show answers slide
        questionContainer.textContent = questionData.question;
        answersList.innerHTML = ""; // Clear previous content

        questionData.answers.forEach((answer, index) => {
            const li = document.createElement("li");
            li.textContent = `${answer} (${questionData.points[index]} points)`;
            answersList.appendChild(li);
        });

        document.getElementById("next-button").textContent = "Question suivante";
        showingAnswers = false;
        currentQuestion++;

        // Check if it's the end of the questions
        if (currentQuestion >= questions.length) {
            document.getElementById("next-button").textContent = "Terminer";
            document.getElementById("next-button").addEventListener("click", endGame);
        }
    }
}

function endGame() {
    const questionContainer = document.getElementById("question");
    const answersList = document.getElementById("answers-list");

    questionContainer.textContent = "Le jeu est terminé ! Merci d'avoir participé.";
    answersList.innerHTML = "";
    document.getElementById("next-button").style.display = "none";
}
