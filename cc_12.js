// Task 1 - Created Revenue Metric Card

const dbContainer = document.getElementById("dashboard");
const dbContainerQuery = document.querySelector("#dashboard");
// Finds the dashboard on the website – makes it easy to track this specific element.

const revenueCard = document.createElement("div"); 
// Creates a div element for the metric card.

revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
// Sets a class and an ID to help identify and style this element.

revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>
`; // Adds a title and a placeholder value.

dbContainer.appendChild(revenueCard);
// Adds the new metric card to the dashboard container.
