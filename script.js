document.getElementById('auditForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('bizName').value;
    const goal = document.getElementById('bizGoal').value;
    const resultBox = document.getElementById('ai-result');
    const resultText = document.getElementById('resultText');

    resultBox.style.display = 'block';
    resultText.innerHTML = `
        <strong>Target Brand:</strong> ${name}<br>
        <strong>Focus Area:</strong> ${goal}<br><br>
        <strong>1. Visual & Brand Audit:</strong> Establish a consistent dark/modern visual grid on Instagram & Facebook to build instant trust.<br>
        <strong>2. Growth Action:</strong> Launch targeted Meta/Google campaigns paired with high-authority SEO backlinks.<br>
        <strong>3. Automation Edge:</strong> Connect lead forms directly to an automated email/WhatsApp responder to convert inquiries within 60 seconds.
    `;
});
