// VARIAVÉIS GLOBAIS
// Cuidado, evitar criar muitas variavéis globais.

// essa variável representa a lista de notas adicionadas pelo usuário
// tipo: lista de número
var LIST_OF_GRADES = []

// essa função registra o valor da nova nota
// parâmetros:
//   - nenhum
// retorno: nada
function onClick_newGrade(){
    const inputTagHTML = document.getElementById("grade");
    const value = inputTagHTML.value
    if (value.trim()==""){
        console.log("vazio")
    } else {
        addGradeOnList(value)
        inputTagHTML.value = ""
        inputTagHTML.focus()
        console.log("nova nota:",value)
        LIST_OF_GRADES.push(Number(value))
    }
}

// essa função adiciona uma nota na lista de notas do HTML
// paramêtros: 
//   - grade: uma nota (number)
// retorno: nada
function addGradeOnList(grade){
    const newListItem = document.createElement("li"); // Create new list item
    newListItem.textContent = `Nota: ${grade}`; // Set its text
    document.getElementById("grades").appendChild(newListItem); // Add to the list
}

// essa função calcula a média de todas as notas
// parâmetros:
//   - allGrades: lista com todas as notas (lista de números)
// retorno: o resultado da média da lista de notas
function averageGrade(allGrades){
    const numberOfGrades = allGrades.length
    var totalGrades = 0
    for (i=0; i<allGrades.length; i++){
        totalGrades = totalGrades+allGrades[i]
    }
    const averageGradesResult = totalGrades/numberOfGrades
    return parseFloat(averageGradesResult.toFixed(1))   // Used to restrict the number of decimals places on the result
}                                                       // Before the .toFixed indicates which number should be adjusted
                                                       // The number (1) indicates how many decimal places should exhibit

// essa função é chamada ao clicar no botão.
// ela vai pegar a lista de notas, ativar o cálulo da média e mostrar o resultado de aprovação ou não
// parâmetros
//   - nenhum
// retorno: nada
function onClick_CalculateAverage() {
    const averageResult = averageGrade(LIST_OF_GRADES)
    if (averageResult>=6){
        document.getElementById("result").innerText = "Aprovado " + averageResult
        document.getElementById("result").classList.add("approved")
    } else {
        document.getElementById("result").innerText = "Reprovado " + averageResult
        document.getElementById("result").classList.add("reproved")
    }
}

// --------------------------------------------------------------
//  The code bellow 👇 runs as soon as the HTML page is loaded!
// --------------------------------------------------------------

const _input = document.getElementById("grade");
const _button = document.getElementById("addGrade");

// This code allow you to add a new grade by pressing "enter"
_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter")
        _button.click();
});
