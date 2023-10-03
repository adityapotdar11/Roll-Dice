const dice = [1, 2, 3, 4, 5, 6];

const diceImages = {
    1: "dice-1.svg",
    2: "dice-2.svg",
    3: "dice-3.svg",
    4: "dice-4.svg",
    5: "dice-5.svg",
    6: "dice-6.svg",
};

function rollDice() {
    document.getElementById("image-section").innerHTML = "";
    try {
        const random = Math.floor(Math.random() * Object.keys(dice).length);

        let path = "./assets/images/" + diceImages[dice[random]];

        document.getElementById(
            "image-section"
        ).innerHTML = `<img src="${path}" width="100px" alt="${
            diceImages[dice[random]]
        }"/>`;
    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
}

function reset() {
    document.getElementById("image-section").innerHTML = "";
}
