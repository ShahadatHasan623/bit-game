const tbody = document.getElementById("leaderboard-body");

// Top 3 border color update function
function updateBorders() {
  const rows = tbody.querySelectorAll("tr");
  rows.forEach((row, index) => {
    row.style.borderLeft = ""; // Reset previous borders
    if (index === 0) row.style.borderLeft = "4px solid gold";
    else if (index === 1) row.style.borderLeft = "4px solid silver";
    else if (index === 2) row.style.borderLeft = "4px solid #cd7f32"; // Bronze
  });
}

// Slide one row up
function scrollLeaderboard() {
  const firstRow = tbody.firstElementChild;
  const rowHeight = firstRow.offsetHeight;

  // Slide up effect
  firstRow.style.transition = "transform 0.5s ease";
  firstRow.style.transform = `translateY(-${rowHeight}px)`;

  firstRow.addEventListener(
    "transitionend",
    () => {
      firstRow.style.transition = "";
      firstRow.style.transform = "";
      tbody.appendChild(firstRow); // Move first row to the bottom
      updateBorders(); // Update left border dynamically
    },
    { once: true }
  );
}

// Initial border setup
updateBorders();

// Scroll every 2 seconds
setInterval(scrollLeaderboard, 2000);
