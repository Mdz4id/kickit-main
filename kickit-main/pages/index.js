function searchShoe() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let cards = document.querySelectorAll(".cards .card");

  cards.forEach((card) => {
    let cardTitle = card.querySelector("h4 b").textContent.toLowerCase();
    let cardPrice = card.querySelector("p").textContent.toLowerCase();

    if (cardTitle.includes(input) || cardPrice.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function addSize() {
    const buttons = document.getElementsByClassName("but");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "black";
    }
  }
  