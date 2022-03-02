const input = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const storedInput = localStorage.getItem("textinput")

if(input) {
    text.textContent = storedInput;
}
input.addEventListener("input", letter => {
    text.textContent = letter.target.value;
})

const saveToStorage = () => {
    localStorage.setItem("textinput", text.textContent)
}

button.addEventListener("click", saveToStorage)