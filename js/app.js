// Object to store expenses added by the user:
const expense = {
  title: '',
  amount: '',
  date: ''
};

// Variable to store total at all times. Start with the value in the example
let total = 20000;

// Display hidden card that allows user to add expenses:
function display_inputCard() {
    let hiddenCard = document.getElementById("hiddenCard");
    hiddenCard.classList.toggle('hidden');
}

// Actually add the expense and make the card disappear again:
function add_expense() {
    // Get the inputs
    const title = document.getElementById("title").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const date = document.getElementById("date").value.trim();

    // Basic validation (optional)
    if (!title || !amount || !date) {
        alert("Please fill in all fields.");
        return;
    }

    // Update total and UI
    total += parseInt(amount);
    updateTotalDisplay();

    // Create the main container div for one expense
    const expenseItem = document.createElement("div");
    expenseItem.className = "expense_item w-full flex justify-evenly p-2 border border-black";

    // Create the title section
    const titleDiv = document.createElement("div");
    titleDiv.className = "expense_title flex items-center";
    titleDiv.innerHTML = `<p class="text-xl font-bold">${title}</p>`;

    // Create the details section
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "expense_details flex flex-col items-center";
    detailsDiv.innerHTML = `
        <p class="expense_date text-sm text-gray-400">${date}</p>
        <p class="expense_amount font-bold text-xl text-blue-700">${amount} RWF</p>
    `;

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "expense_delete";
    deleteBtn.textContent = "Delete";

    // Add functionality to delete this item
    deleteBtn.addEventListener("click", () => {
        expenseItem.remove();
        // Delete amount from the total and update UI
        total -= parseInt(amount);
        updateTotalDisplay();
    });

    // Append all children to the expense item
    expenseItem.appendChild(titleDiv);
    expenseItem.appendChild(detailsDiv);
    expenseItem.appendChild(deleteBtn);

    // Append the expense item to the container
    document.querySelector(".expense_container").appendChild(expenseItem);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";

    // Hide the card again
    document.getElementById("hiddenCard").classList.add("hidden");
}

// Add delete functionality to the first expense example
function deleteExpenseSelf() {
    let example = document.getElementById("example");
    const amountText = example.querySelector(".expense_amount").textContent;
    const amount = parseInt(amountText.replace(/[^\d]/g, ""));
    if (!isNaN(amount)) {
        total -= amount;
        updateTotalDisplay();
    }
    example.remove();
}

// Update the displayed total
function updateTotalDisplay() {
    const totalDisplay = document.querySelector(".total p");
    totalDisplay.textContent = `Total: ${total.toLocaleString()} RWF`;
}


// Call this at the beginning to show the starting total
updateTotalDisplay();