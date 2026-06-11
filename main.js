const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate');
const historyList = document.getElementById('history-list');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const winningNumbers = generateLottoNumbers();
    displayNumbers(winningNumbers);
    addHistory(winningNumbers);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    });
}

function addHistory(numbers) {
    const listItem = document.createElement('li');
    listItem.textContent = numbers.join(', ');
    historyList.prepend(listItem);
}
