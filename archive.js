// Function to select all messages, archive them, and go to the next page
function archiveMessagesAndNavigate() {
  // Click the "Select All" checkbox to select all messages on the page
  document.querySelector("#idSelectAll").click();
  
  // Click the "Move to Archive" button to archive selected messages
  document.querySelector("button[data-testid='toolbar:movetoarchive']").click();
  
  // Click the "Next Page" button to navigate to the next page of messages
  document.querySelector("button[data-testid='toolbar:next-page']").click();
}

// Set an interval to call the archiveMessagesAndNavigate function every 2 seconds (2000 milliseconds)
const archiveInterval = setInterval(archiveMessagesAndNavigate, 2000);
