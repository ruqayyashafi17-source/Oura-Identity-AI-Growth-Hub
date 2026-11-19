document.getElementById('auditForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('bizName').value;
    const goal = document.getElementById('bizGoal').value;
    const resultBox = document.getElementById('ai-result');
    const resultText = document.getElementById('resultText');

    // Show loading state while n8n and Gemini AI process the request
    resultBox.style.display = 'block';
    resultText.innerHTML = `🔄 Connecting to Oura Identity AI Engine & n8n Webhook... Please wait.`;

    // Production URL use karein jab workflow Active ho (ya test ke waqt webhook-test)
    const n8nWebhookURL = 'http://localhost:5678/webhook-test/oura-audit';

    try {
        const response = await fetch(n8nWebhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brandName: name,
                marketingGoal: goal,
                timestamp: new Date().toISOString()
            })
        });

        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();

        // Display 100% real response received from n8n / Gemini AI
        resultText.innerHTML = `
            <strong>🏢 Target Enterprise:</strong> <span style="color: var(--accent-cyan);">${name}</span><br>
            <strong>🎯 Selected Objective:</strong> ${goal}<br><br>
            <strong>🤖 Live AI Generated Strategy (via n8n & Gemini):</strong><br>
            ${data.strategyReport}
        `;

    } catch (error) {
        // Real error message (no dummy text)
        resultText.innerHTML = `
            <span style="color: #ef4444;">⚠️ <strong>Connection Error:</strong> Real AI response receive nahi hua (${error.message}).</span><br>
            <small style="color: #94a3b8;">Check karein ke n8n mein 'Execute Workflow' on hai aur Gemini node mein koi error nahi hai.</small>
        `;
    }
});

// Copy Report Functionality
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        const textToCopy = document.getElementById('resultText').innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.innerText = '✅ Report Copied Successfully!';
            setTimeout(() => {
                copyBtn.innerText = '📋 Copy Report to Clipboard';
            }, 2500);
        });
    });
}
