document.getElementById("pythonTest").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const answers = {
        q1: 'C',
        q2: 'A',
        q3: 'B',
        q4: 'D',
        q5: 'B',
        q6: 'C',
        q7: 'A',
        q8: 'B',
        q9: 'B',
        q10: 'C',
        q11: 'A',
        q12: 'B',
        q13: 'C',
        q14: 'B',
        q15: 'D',
        q16: 'D',
        q17: 'A',
        q18: 'D',
        q19: 'B',
        q20: 'A',
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    let resultText = `You scored ${score} out of ${totalQuestions}. `;
    
    if (score >= 16) {
        resultText += "Congratulations! You have passed the test.";
        downloadCertificate();
    } else {
        resultText += "Unfortunately, you did not pass the test. Please try again.";
    }

    document.getElementById("result").innerText = resultText;
});

function downloadCertificate() {
    const doc = new jsPDF();
    doc.text("Certificate of Completion", 20, 20);
    doc.text("This is to certify that", 20, 30);
    doc.text("You have successfully completed the Python test", 20, 40);
    doc.text("Score: " + score, 20, 50);
    doc.save("certificate.pdf");
}
