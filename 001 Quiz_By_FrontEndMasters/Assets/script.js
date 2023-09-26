const statement = document.getElementById("statement");
const optionsButton = document.querySelectorAll("#options button")
const explanation = document.getElementById("explanation");


const fact = {
    statement: "Arrays are just like Object",
    answer: true,
    explanation: "Everything other then primitive data types is considered as objects"
};

statement.textContent=fact.statement;



 const disable = (buttonname)=>{
buttonname.setAttribute("disabled","");
 }

 const enable = (buttonname)=>{
    buttonname.removeAttribute("disabled");
 }

 function isCorrect(guess){
    return guess === fact.answer.toString();
    
}


for(let buttons of optionsButton){
    buttons.addEventListener("click", (event)=>{
        let buttonvalue = buttons.value;
        if(isCorrect(buttonvalue)){
            buttons.classList.add("correct")
        }else{
            buttons.classList.add("incorrect")
        }
        explanation.textContent = fact.explanation;
        for(buttons of optionsButton){
            buttons.disabled = true;
        }
    })
}


