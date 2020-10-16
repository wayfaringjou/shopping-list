function shoppingList() {
  // Call addItem function when the 'Add Item' buttton is clicked
  $("#js-shopping-list-form").submit(addItem);

  // Call checkItem function when 'check' button is clicked
  $(".shopping-list").on("click", ".shopping-item-toggle", checkItem);

  // Call deleteItem function when 'delete' button is clicked
  $(".shopping-list").on("click", ".shopping-item-delete", deleteItem);
}

// Enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
function addItem(e) {
  // Prevent default submit behavior
  e.preventDefault();
  // Get value entered in shopping-list-entry field
  const itemAdded = $("#js-shopping-list-form")
    .find('input[name="shopping-list-entry"]')
    .val();
  // Set the new element markup with the user's input
  const itemElement = `<li>
    <span class="shopping-item">${itemAdded}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
     </div>
    </li>`;
  // Go ahead and append the new element inside shopping-list
  $(".shopping-list").append(itemElement);
}

// Check and uncheck items on the list by clicking the "Check" button
function checkItem(e) {
  // Traverse to shopping-item
  const shoppingItemElement = $(this.closest("li")).find(".shopping-item");
  // Manipulate it by toggling the shopping-item--checked class
  shoppingItemElement.toggleClass("shopping-item__checked");
}

// Permanently remove items from the list
function deleteItem(e) {
  // Traverse to parent element <li>
  const shoppingItemElement = $(this.closest("li"));
  // Remove the whole <li> element
  shoppingItemElement.remove();
}

// Call function when document is ready
$(shoppingList);
