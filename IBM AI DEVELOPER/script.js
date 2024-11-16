function addRecommendation() {
  // Add recommendation to the recommendations section (if desired)
  const recommendation = document.getElementById("new_recommendation").value;
  if (recommendation.trim() !== "") {
      const newRecDiv = document.createElement("div");
      newRecDiv.classList.add("recommendation");
      newRecDiv.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;
      document.getElementById("all_recommendations").appendChild(newRecDiv);
      document.getElementById("new_recommendation").value = ""; // Clear textarea
  }

  // Show popup
  showPopup(true);
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  if (show) {
      popup.style.display = "block";
  } else {
      popup.style.display = "none";
  }
}