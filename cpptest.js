// Questions for the C++ quiz
const questions = [
    {
        question: "Which of these is not a feature of C++?",
        options: ["Object-oriented", "Platform-independent", "Compiled", "Interpreted language"],
        answer: "Interpreted language"
    },
    {
        question: "What will be the output of the following code snippet?\nint a = 10; int b = 20;\nstd::cout << a + b;",
        options: ["10", "20", "30", "Error"],
        answer: "30"
    },
    {
        question: "Identify the output.\nbool isCppFun = true;\nstd::cout << !isCppFun;",
        options: ["true", "false", "Error", "null"],
        answer: "false"
    },
    {
        question: "What is the output of this pseudocode?\nSET x = 10\nIF x > 5\nTHEN PRINT \"Greater\"\nELSE PRINT \"Lesser\"",
        options: ["Greater", "Lesser", "Error", "No output"],
        answer: "Greater"
    },
    {
        question: "Identify the error in this code.\nint nums[2];\nnums[0] = 1;\nnums[1] = 2;\nnums[2] = 3;",
        options: ["Array index out of bounds", "Incorrect array declaration", "No error", "Syntax error"],
        answer: "Array index out of bounds"
    },
    {
        question: "Which control structure is used to execute a block of code multiple times?",
        options: ["if", "switch-case", "for", "try-catch"],
        answer: "for"
    },
    {
        question: "What is the output of this code?\nint x = 1;\nwhile(x < 4) { std::cout << x << \" \"; x++; }",
        options: ["1 2 3", "2 3 4", "1 2 3 4", "1"],
        answer: "1 2 3"
    },
    {
        question: "Analyze this pseudocode.\nSET num = 0\nWHILE num <= 5\nIF num MOD 2 = 0\nTHEN PRINT num\nINCREMENT num",
        options: ["0 2 4", "0 1 2 3 4 5", "2 4", "0 2 4 6"],
        answer: "0 2 4"
    },
    {
        question: "What does 'cin' in C++ provide that 'gets' does not?",
        options: ["Faster input reading", "Input from file only", "Different data types", "Graphical interface"],
        answer: "Different data types"
    },
    {
        question: "What does this C++ code do?\nint arr[2][2] = {{1, 2}, {3, 4}};\nfor(int i = 0; i < 2; i++)\nfor(int j = 0; j < 2; j++)\nstd::cout << arr[i][j] << \" \";",
        options: ["Prints a 2D array in matrix form", "Prints only the first row of the array", "Prints the sum of the array elements", "Gives an error"],
        answer: "Prints a 2D array in matrix form"
    },
    {
        question: "Which of the following is a checked exception in C++?",
        options: ["std::out_of_range", "std::bad_cast", "std::ios_base::failure", "std::logic_error"],
        answer: "std::ios_base::failure"
    },
    {
        question: "Which method must be implemented for custom exceptions in C++?",
        options: ["what()", "throw()", "try()", "catch()"],
        answer: "what()"
    },
    {
        question: "Which of the following is not a C++ access specifier?",
        options: ["public", "private", "protected", "friend"],
        answer: "friend"
    },
    {
        question: "Identify the flaw in this C++ code.\nchar* chars = new char[-1];",
        options: ["Negative array size", "Syntax error", "No error", "Logic error"],
        answer: "Negative array size"
    },
    {
        question: "Find the error in this C++ code.\nint matrix[2][2];\nmatrix[0][0] = 1;\nmatrix[0][1] = 2;\nmatrix[1][0] = 3;\nstd::cout << matrix[1][1];",
        options: ["Prints incorrect value", "No error", "Syntax error", "Missing initialization for matrix[1][1]"],
        answer: "Missing initialization for matrix[1][1]"
    },
    {
        question: "Which of these is not a valid way to instantiate an array in C++?",
        options: ["int arr[5];", "int* arr = new int[5];", "int arr[] = {1, 2, 3, 4, 5};", "int arr[] = int[5];"],
        answer: "int arr[] = int[5];"
    },
    {
        question: "What happens when you access an out-of-bounds element in C++?",
        options: ["Compile-time error", "Runtime error: std::out_of_range", "No error", "Undefined behavior"],
        answer: "Undefined behavior"
    },
    {
        question: "In a multi-dimensional array, how do you access the element in the second row and third column of an array named 'matrix'?",
        options: ["matrix[1][2]", "matrix[2][3]", "matrix[2][2]", "matrix[1][3]"],
        answer: "matrix[1][2]"
    },
    {
        question: "What is the difference between 'while' and 'do-while' loops in C++?",
        options: ["Syntax only", "The 'do-while' loop executes at least once", "Execution speed", "No difference"],
        answer: "The 'do-while' loop executes at least once"
    },
    {
        question: "In a 'switch-case' statement, what is the role of the 'break' keyword?",
        options: ["To pause the execution", "To terminate the case block", "To skip to the next case", "To repeat the case block"],
        answer: "To terminate the case block"
    }
];

// Function to load the quiz
function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <ul class="options">
                ${q.options.map((option, i) => `
                    <li>
                        <input type="radio" name="question${index}" value="${option}" id="question${index}_option${i}">
                        <label for="question${index}_option${i}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
}

// Function to calculate the score and handle certificate generation
function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    return score;
}

// Function to handle quiz submission
document.getElementById('submit-btn').addEventListener('click', () => {
    const score = calculateScore();
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    const participantName = prompt("Please enter your name:");

    if (percentage >= 80) {
        alert(`Congratulations, ${participantName}! You scored ${score}/${totalQuestions}. You passed the quiz!`);
        window.location.href = `certificate.html?name=${encodeURIComponent(participantName)}&score=${score}/${totalQuestions}`;
    } else {
        alert(`Sorry, ${participantName}. You scored ${score}/${totalQuestions}. You need at least 80% to earn a certificate.`);
    }
});

// Load the quiz when the page loads
window.onload = loadQuiz;
