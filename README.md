1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
###
Answer :  getElementById selects an element by its ID and returns single element . getElementsByClassName mean it defines class and returns HTMLCollection . querySelector mean it define class,id and element by name  and returns only the first matching element . querySelectorAll mean it define class, id and element by name and returns a NodeList of all matching elements.
##
2.How do you create and insert a new element into the DOM?
### 
Answer : To create a new  element using createElement() and insert it into the DOM using appendChild .
##
3. What is Event Bubbling? And how does it work?
### 
Answer: Event Bubbling is when an event on a child element signal up to the parent elements.In Event Bubbling the event moves to the immediate parent then to the grandparent and continues going upward until it reaches document or window object.
##
4. What is Event Delegation in JavaScript? Why is it useful?
###
Answer: Event delegation is a design pattern in JavaScript where a parent element handle events for its child elements.It is useful because it improves performance and works for dynamically added element
##
5.What is the difference between preventDefault() and stopPropagation() methods?
###
Answer: In preventDefault()  it stops the default action of an element,for example if a link is clicked it wouldn't navigate to another page. 
In stopPropagation()  stops the event from bubbling up to parent elements and capturing down to child elements
