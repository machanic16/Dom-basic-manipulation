const h1 = document.querySelector('h1')
const from = document.getElementById('form')
const input1 = document.getElementById('calculation1')
const input2 = document.getElementById('calculation2')
const btn = document.getElementById('btn_calculate')
const pResult = document.getElementById('result')

h1.addEventListener('copy',(event)=> {
    event.preventDefault();
    console.log(event.clipboardData);

    // const selectedText = window.getSelection().toString();
    
    // const modifiedText = `Modified : ${selectedText} \n do you want this mmg?`;

    const modifiedText = `You will not get the info`;
    event.clipboardData.setData('text/plain', modifiedText);
})

form.addEventListener('submit', sumInputValues)
function sumInputValues(event){
    console.log(event)
    event.preventDefault()
    sum = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = 'Result = ' + sum
    console.log(sum)
}

function calculation2Changed(){
    console.log('Imput 2 changed')
}