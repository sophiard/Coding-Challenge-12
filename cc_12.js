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


//  Task 2 - Updated Metric Cards via Array Conversion
const metricCards = document.querySelectorAll(".metric-card");
// selected all the metric cards 
const metricCardArray = [...metricCards];  
 metricCardArray.forEach(card => {
        const title = card.querySelector("h3");
        title.innerText += " - Updated"; //shows updated when updated
        card.style.backgroundColor = "pink"; //color of box is pink
    });

// Task 3 - Implemented Dynamic Inventory List

const inventoryList = document.getElementById('inventoryList');
function addInventoryItem(productName) { 
    //adds a new item to inventory 
    const listItem = document.createElement('li');
    listItem.setAttribute('class','product-item');  
    listItem.setAttribute('data-product', productName); 
    listItem.textContent = productName; 
//created a list items iwth class, procut utems, data procuct  
    listItem.addEventListener('click', () =>{
        inventoryList.removeChild(listItem); 
    });//removed itesm from list if clicked 
    inventoryList.appendChild(listItem);
} //adds new item 

