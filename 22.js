
// Create a div element
var div = document.createElement("div");

// Create a p element
var p = document.createElement("p");
p.textContent = "This is a paragraph.";

// Append the p element to the div
div.appendChild(p);

// Now, div contains the p element




var myEl = document.createElement('div');
document.body.appendChild(myEl);








var parent = document.querySelector('.parent');
var firstChild = parent.children[0]; // Accesses the first child




var parent = document.querySelector('.parent');
var childWithClass = parent.querySelector('.child'); // Finds the first child with class 'child'



var parent = document.querySelector('.parent');
var allChildrenWithClass = parent.querySelectorAll('.child'); // Finds all children with class 'child'







var parent = document.getElementById("myParent");
for (var i = 0; i < parent.childNodes.length; i++) {
    var child = parent.childNodes[i];
    if (child.nodeType === 1) { // Element node
        console.log("Element node:", child);
    } else if (child.nodeType === 3) { // Text node
        console.log("Text node:", child);
    }
}





function clean(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType === 8 || (child.nodeType === 3 &&!/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            i--; // Adjust index due to removal
        } else if (child.nodeType === 1) {
            clean(child); // Recursively clean child nodes
        }
    }
}

// Example usage: clean up the entire document
clean(document);







var firstParagraph = document.querySelector(".myParagraphs");




var paragraphs = document.getElementsByClassName("myParagraphs");
