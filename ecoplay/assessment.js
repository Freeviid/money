document.getElementById("wasteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const household = parseInt(form.household.value);
  const garden = form.garden.value;
  const housing = form.housing.value;
  const plastic = form.plastic.value;

  let tips = [];

  // Household size
  if (household >= 5) {
    tips.push("Large household? Buy in bulk to reduce packaging waste.");
  } else if (household <= 2) {
    tips.push("Smaller homes can use compact composting or vermicompost bins.");
  } else {
    tips.push("Plan meals to reduce food waste across medium-sized households.");
  }

  // Garden
  if (garden === "yes") {
    tips.push("Start composting kitchen scraps in your garden to enrich soil.");
  } else {
    tips.push("No garden? Try community composting or indoor composting solutions.");
  }

  // Housing
  if (housing === "apartment") {
    tips.push("Use space-saving recycling bins and join local waste programs.");
  } else if (housing === "detached") {
    tips.push("You can set up backyard compost bins and rainwater harvesting.");
  } else {
    tips.push("Coordinate with housemates to maintain shared waste rules and compost plans.");
  }

  // Plastic generation
  if (plastic === "daily") {
    tips.push("Switch to reusable containers and shop at refill stores.");
  } else if (plastic === "weekly") {
    tips.push("Track your weekly plastic use and avoid single-use plastics.");
  } else {
    tips.push("Great job! Keep reducing and help others do the same.");
  }

  // Display tips
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <h2>Recommended Tips:</h2>
    <ul>${tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
  `;
});
