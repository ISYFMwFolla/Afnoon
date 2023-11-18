// Update text and increment visitor count
function updateText() {
  const messageInput = document.getElementById('messageInput').value;
  document.getElementById('output').textContent = messageInput;
  
  // Store the message in localStorage to retain it after page reload
  localStorage.setItem('savedMessage', messageInput);

  // Increment and display the visit count
  let visitCount = localStorage.getItem('visitCount') || 0;
  visitCount++;
  document.getElementById('visitCounter').textContent = `الرسائل: ${visitCount}`;
  localStorage.setItem('visitCount', visitCount.toString());
}

// Check if there's a saved message in localStorage and update the text
const savedMessage = localStorage.getItem('savedMessage');
if(savedMessage) {
  document.getElementById('output').textContent = savedMessage;
}

// Display the initial visit count on page load
const initialVisitCount = localStorage.getItem('visitCount') || 0;
document.getElementById('visitCounter').textContent = `الرسائل: ${initialVisitCount}`;