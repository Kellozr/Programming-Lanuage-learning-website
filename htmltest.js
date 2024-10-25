const htmlQuizData = [
    {
        question: "1. What does HTML stand for?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "High Text Markup Language",
            c: "Hyperlinks and Text Markup Language",
            d: "Hyper Tool Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "2. Which of the following elements defines the document type in HTML?",
        answers: {
            a: "&lt;!DOCTYPE&gt;",
            b: "&lt;html&gt;",
            c: "&lt;head&gt;",
            d: "&lt;body&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "3. Which tag is used to create a hyperlink?",
        answers: {
            a: "&lt;link&gt;",
            b: "&lt;a&gt;",
            c: "&lt;href&gt;",
            d: "&lt;url&gt;"
        },
        correctAnswer: "b"
    },
    {
        question: "4. Which attribute is used to specify the URL of the page the link goes to?",
        answers: {
            a: "src",
            b: "href",
            c: "link",
            d: "url"
        },
        correctAnswer: "b"
    },
    {
        question: "5. What does the &lt;title&gt; tag do?",
        answers: {
            a: "Displays a title on the webpage",
            b: "Sets the title of the document in the browser tab",
            c: "Creates a clickable title",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "6. Which HTML element is used to define an unordered list?",
        answers: {
            a: "&lt;ol&gt;",
            b: "&lt;ul&gt;",
            c: "&lt;list&gt;",
            d: "&lt;li&gt;"
        },
        correctAnswer: "b"
    },
    {
        question: "7. Which tag is used for inserting an image?",
        answers: {
            a: "&lt;img&gt;",
            b: "&lt;image&gt;",
            c: "&lt;picture&gt;",
            d: "&lt;photo&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "8. What is the correct HTML element for playing audio files?",
        answers: {
            a: "&lt;audio&gt;",
            b: "&lt;sound&gt;",
            c: "&lt;music&gt;",
            d: "&lt;media&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "9. How can you create a table in HTML?",
        answers: {
            a: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",
            b: "&lt;table&gt;&lt;row&gt;&lt;cell&gt;&lt;/cell&gt;&lt;/row&gt;&lt;/table&gt;",
            c: "&lt;table&gt;&lt;tr&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/table&gt;",
            d: "&lt;table&gt;&lt;line&gt;&lt;column&gt;&lt;/column&gt;&lt;/line&gt;&lt;/table&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "10. Which HTML element is used to define the main heading?",
        answers: {
            a: "&lt;h1&gt;",
            b: "&lt;head&gt;",
            c: "&lt;header&gt;",
            d: "&lt;h&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "11. What is the purpose of the &lt;meta&gt; tag?",
        answers: {
            a: "To provide metadata about the HTML document",
            b: "To create hyperlinks",
            c: "To insert images",
            d: "To define the document type"
        },
        correctAnswer: "a"
    },
    {
        question: "12. Which HTML attribute is used to define inline styles?",
        answers: {
            a: "style",
            b: "class",
            c: "font",
            d: "color"
        },
        correctAnswer: "a"
    },
    {
        question: "13. What does the &lt;br&gt; tag do?",
        answers: {
            a: "Inserts a line break",
            b: "Creates a new paragraph",
            c: "Inserts a horizontal line",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "14. How do you create a checkbox in HTML?",
        answers: {
            a: "&lt;input type='checkbox'&gt;",
            b: "&lt;checkbox&gt;",
            c: "&lt;input type='check'&gt;",
            d: "&lt;input type='button'&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "15. Which tag is used to define a footer for a document or section?",
        answers: {
            a: "&lt;footer&gt;",
            b: "&lt;bottom&gt;",
            c: "&lt;section&gt;",
            d: "&lt;div&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "16. What is the purpose of the &lt;form&gt; tag?",
        answers: {
            a: "To create a form for user input",
            b: "To insert images",
            c: "To define the footer",
            d: "To create a hyperlink"
        },
        correctAnswer: "a"
    },
    {
        question: "17. Which HTML element is used to display a list item?",
        answers: {
            a: "&lt;listitem&gt;",
            b: "&lt;li&gt;",
            c: "&lt;item&gt;",
            d: "&lt;ul&gt;"
        },
        correctAnswer: "b"
    },
    {
        question: "18. What does the &lt;script&gt; tag do?",
        answers: {
            a: "Defines a client-side script",
            b: "Inserts an image",
            c: "Creates a hyperlink",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "19. How do you add a comment in HTML?",
        answers: {
            a: "// This is a comment",
            b: "&lt;!-- This is a comment --&gt;",
            c: "' This is a comment",
            d: "# This is a comment"
        },
        correctAnswer: "b"
    },
    {
        question: "20. Which element is used to specify a navigation link?",
        answers: {
            a: "&lt;nav&gt;",
            b: "&lt;link&gt;",
            c: "&lt;navigation&gt;",
            d: "&lt;menu&gt;"
        },
        correctAnswer: "a"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    htmlQuizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    htmlQuizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${htmlQuizData.length}`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
