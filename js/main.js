
document.querySelector("#drink-btn").addEventListener("click", getDrinkID);
document.querySelector("#left-btn").addEventListener("click", moveLeft);
document.querySelector("#right-btn").addEventListener("click", moveRight);

let count = 0;
let drinkIDs = [];

function getDrinkID() {
    let spirit = document.getElementById("drink-input").value.toLowerCase();
    // console.log(drink);

    if (document.querySelector(".container").classList.contains("center")) {
        document.querySelector("header").remove();
        document.querySelector(".container").classList.remove("center");
        document.querySelector(".display-container").classList.remove("hidden");
    }

    if (drinkIDs !== null) {
        clear();
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        let nums = [];
        for (let i = 0; i < 5; i++) {
            let x = Math.floor(Math.random() * data.drinks.length);
            nums.includes(x) ? i-- : nums.push(x);
        }

        drinkIDs = nums.map(x => data.drinks[x].idDrink);
        getDrink(drinkIDs);
        console.log(`Set IDs: ${drinkIDs}`);
    })
    .catch(err => {
        console.log(`error ${err}`);
        document.getElementById("drink-name").innerText = "Please enter a valid drink."
    })
}

function getDrink(arr) {
    let drinkID = arr[count];
    console.log(`Get Individual ID: ${drinkID}`);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        document.getElementById("drink-name").innerText = data.drinks[0].strDrink;
        document.getElementById("drink-img").src = data.drinks[0].strDrinkThumb;

        for (let i = 1; i <= 15; i++) {
            let ingredientID = "strIngredient" + i;
            let measureID = "strMeasure" + i;
            if (data.drinks[0][ingredientID] !== null) {
                let ingredient = data.drinks[0][ingredientID];
                let measure = data.drinks[0][measureID];

                let ingredientMeasure = document.createElement("li");

                if (measure == null) {
                    ingredientMeasure.innerText = ingredient;
                } else {
                    ingredientMeasure.innerText = `${measure} ${ingredient}`;
                }
                
                document.querySelector(".drink-details").appendChild(ingredientMeasure)
            }
        }

        document.querySelector(".drink-instructions").innerText = data.drinks[0].strInstructions;
    })
    .catch(err => {
        console.log(`error ${err}`);
    })
}

function clear() {
    let list = document.querySelector(".drink-details");
    list.innerHTML = "";
}

function moveLeft() {
    clear();
    count === 0 ? count = 4 : count--;
    getDrink(drinkIDs);
}

function moveRight() {
    clear();
    count === 4 ? count = 0 : count++;
    getDrink(drinkIDs);
}
