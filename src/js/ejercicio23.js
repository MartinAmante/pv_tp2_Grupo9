

const textInput = document.querySelector('#textBehaviour');

textInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const changeElement = document.querySelector('#textWrite');
    changeElement.textContent = inputValue;
    if(inputValue.length > 20){
        textInput.style.backgroundColor = '#e63c08';
    }
    else{
        textInput.style.backgroundColor = '#332915';
    }
});