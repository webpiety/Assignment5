

Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer 1:
To manipulate DOM use some selector and all of these have different characteristics. We use this selector at the basis of their output.
1.	getElementById: it selects only one element by the unique ID and return a single object.
2.	getElementByClassName: It select elements on the base of class name that means it select many elements where the class name same.  When we console log we see that it returns HTML collection.
3.	querySelector: it selects the first element and return first element object.
4.	querySelectorAll: it select at the basis of matching CSS selector and return a list of element.
============================================================

Q-2: How do you create and insert a new element into the DOM? 
Answer-2:
First create an element:
Code: document.createElement("tagName")
Then insert it to a div by write appendChild().
=============================================================

Q-3: What is Event Bubbling and how does it work?
Answer-3:
The DOM is like a tree, meaning that all elements are connected to each other. So, when an event like a click is triggered, it goes up to its parent element.
==============================================================


Q-4: What is Event Delegation in JavaScript? Why is it useful?
Answer-4:
In a website may have a thousand div and div children. In this case for thousand div or children need to write thousand event listeners. So, it may have many problems to manage. create one event listener for parents div and can manage its all children dynamically.
What is the difference between preventDefault() and stopPropagation() methods? 
================================================================

Answer-5:
preventDefault() prevent browser default behavior related to HTML and CSS element and property. On the other hand, stopPropagation() stop bubbling. That means in a DOM tree its prevent upward moving.
