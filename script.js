window.onload = (event) => {
  let body = document.getElementByTagName('body');
	let text = document.createTextNode("DOM load success"");
	body.appendChild(text);
	
};