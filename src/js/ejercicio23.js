

const textInput = document.querySelector('#textBehaviour');

textInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const changeElement = document.querySelector('#textWrite');
    changeElement.textContent = inputValue;
    if(inputValue.length > 20){
        changeElement.style.backgroundColor = '#e63c08';
    }
    else{
        changeElement.style.backgroundColor = '#fae100';
    }
});