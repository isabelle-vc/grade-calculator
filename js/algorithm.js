// Computational thinking pilars
// 1. Problem: create a calculator
// 2. The calculator must be able to read all grades inserted
// 3. Must calculate the average of all grades = (g1 + g2 + + g3 + ...)/ Ng 
// 4. Condition 1: if the average result is => 6 the student is approved
// 5. Condition 2: if the average result is < 6 the student is reproved

// [const] or [let] are used to set variables, but [const] can only be set once and is not changeable like [let]
// the use of [] means array or vetor, they are variables that can store multiple values
// the {} are used to create blocks where the actions happen


let grades = [];

function addGrade() {
    let grade = document.getElementById('grade').value;
    if (grade) {
        grades.push(parseFloat(grade));
        updateGrade();
        alert("nota adicionada")
    
    }

}

function updateGrade() {
    let list = document.getElementById('grades');
    list.innerHTML = '';
    for (let i = 0; i < grades.length; i++) {
        let li = document.createElement('li');
        li.textContent = `Grade ${i + 1}: ${grades[i]}`;
        list.appendChild(li);
    }
}

function calculateAverage() {
    let sumGrade = 0.0;
    let average = 0.0;

    // [for] = loop = para
    // [let index = 0] is a control variable starting in 0
    // [index < grades.length] how far the index  will read the structure, in this case the variable [grades] length
    // [index +=1] the index should add the variables one by one

    for (let index = 0; index < grades.length; index += 1) {

        // the sum will appear by adding [sumgGrade] + the grades in the next index position

        sumGrade = sumGrade + grades[index];
    }

    average = sumGrade / grades.length

        // string interpolation is indicated by `` where it can hold fixed text and variables from the code, because "" identify the content as fixed only

    if (average > 6 ) {
            const elementoResultado = document.getElementById('result')
        document.getElementById('result').textContent = `Approved | Grade average: ${average}`;
            elementoResultado.className = 'approved'
    } else {
        document.getElementById('result').textContent = `Reproved | Grade average: ${average}`
            document.getElementById('result').className = 'reproved';   
    }
}

// The button "Add grade" wasn't working because on the window.onload command it was missing the " => " after the (), 
// which is the same of using "function" but in a shorter way.
// I discover it by looking for the error on Inspect>Console and the link redirected me for the document and incorrect line

window.onload = () => {
    const btnaddGrade = document.querySelector('#addGrade')
    const btncalculateAverage = document.querySelector('#calculateAverage')

    btnaddGrade.addEventListener('click', addGrade)
    btncalculateAverage.addEventListener('click', calculateAverage)
}
