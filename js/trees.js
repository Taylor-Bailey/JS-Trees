// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// 1. It accepts a single object as an argument. The object should have two key/value pairs.
// 2. A key that specifies the height of the pine tree.
// 3. The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// 4. A key that specifies which character to use to build the pine tree.
// 5. The character to use should be from user input in a <input type="text"> field in the DOM.

// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree
const getHeight = document.getElementById("height");
const getLeaf = document.getElementById("leaf");

let tree = {
    height: getHeight,
    leaf: getLeaf
};

document.getElementById("btn").addEventListener("click", function(e){
    e.preventDefault();
    console.log("Tree Height: " + tree.height.value);
    console.log("Tree Leaf: " + tree.leaf.value);
    if (tree.height.value == "" || tree.leaf.value == "") {
        alert("Please fill out both value fields.");
    };


let roomToGrow = " "; // define a variable to add space
let grow = (tree.height.value *2) - 1; //define a variable that takes user input height and determines character length(base width) of the tree
for (var i = 1; i <= grow; i += 2){ // for loop loops through grow starting the counter at 1 because 0 didn't work, running unti the counter is less than or equal to the numerical value of grow(base width)
    let roomToGrow2 = roomToGrow.repeat(tree.height.value - i / 2);// define variable roomToGrow2, repeating the user input tree.height.value - the counter divided by 2. 
    let grow = (tree.leaf.value).repeat(i);
    console.log(roomToGrow2, grow);
}
});