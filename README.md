# BarHelper | <a href="https://barhelper.netlify.app/" target="_blank">Visit Here</a>

Uses the <a href="https://www.thecocktaildb.com/api.php">CocktailDB</a> to offer 5 random drink selections based on a liquor of the user's choosing.

<p align="center">
<img src="https://github.com/sean-poole/sean-poole/blob/main/images/barhelper-preview.gif"
</p>


## How It's Made: 

**Tech Used:** HTML, CSS, JavaScript, <a href="https://www.thecocktaildb.com/api.php">CocktailDB</a>

The site takes in a liquor of choice by way of user input and passes that info through a fetch method which returns a list of five random cocktails based on that selection. The cocktails are stored in an array which the user can then iterate through and display on the screen. Each drink's display contains a photo, its name, ingredients, and instructions on how it's made. Responsive using media queries.


## Optimizations: 

Implementing OOP and chaining fetch requests would allow for improved runtime and functionality. <br />
Refactoring UI for easier viewing.


## Lessons Learned: 

There were issues in getting the individual drink IDs passed to the second fetch method which returns the details of the drink. I worked around this by placing the IDs in an array and used a global counter to iterate through them. I believe a more semantically correct solution would be to chain the fetch requests. This project provided a good experience in being more comfortable unravelling the layers within an API database and creating HTML elements to store its values.
