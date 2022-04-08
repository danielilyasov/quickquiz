const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const max_high_scores = 4;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup",() => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("click save btn");
    e.preventDefault();


    const score = {
        score: mostRecentScore, name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(4);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
};