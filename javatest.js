document.getElementById('javaTest').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const totalQuestions = 20;

    // Correct answers array
    const correctAnswers = ['D', 'B', 'B', 'C', 'C', 'A', 'A', 'D', 'A', 'B', 'B', 'B', 'C', 'A', 'D', 'A', 'B', 'D', 'B', 'D'];

    for (let i = 0; i < totalQuestions; i++) {
        const q = document.querySelector(`input[name="q${i + 1}"]:checked`);
        if (q && q.value === correctAnswers[i]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `Your score: ${score} out of ${totalQuestions} (${(score / totalQuestions) * 100}%)`;

    if (score > totalQuestions * 0.8) {
        document.getElementById('certificate').classList.remove('hidden');
    }
});

// Function to download certificate
document.getElementById('downloadCertificate')?.addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('Java Test Certificate', 20, 20);
    doc.text('This certifies that you have completed the Java Test.', 20, 30);
    doc.text('Congratulations!', 20, 40);
    doc.save('Java_Test_Certificate.pdf');
});
