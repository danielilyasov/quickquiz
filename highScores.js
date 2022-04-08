const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return `<il class = "high-score"> ${score.name} - ${score.score}<li/>`;
    })
    .join("");
  
   