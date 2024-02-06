document.addEventListener('DOMContentLoaded', function() {
  // Create a new paragraph element
  var paragraph = document.createElement('p');
  
  // Set its text content to "DOM load success"
  paragraph.textContent = 'DOM load success';
  
  // Append the paragraph element to the body of the document
  document.body.appendChild(paragraph);
});