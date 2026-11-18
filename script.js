document.getElementById('auditForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('bizName').value;
    const goal = document.getElementById('bizGoal').value;
    const resultBox = document.getElementById('ai-result');
    const resultText = document.getElementById('resultText');

    resultBox.style.display = 'block';
    resultText.innerHTML = `
        <strong>Target Brand:</strong> ${name}<br>
        <strong>Selected Strategy:</strong> ${goal}<br><br>
        <strong>1. Graphic & Visual Identity:</strong> High-impact social media assets deployed via automated design grids.<br>
        <strong>2. Growth Execution:</strong> Multi-channel SEO backlink campaigns integrated with targeted Meta ad funnels.<br>
        <strong>3. Automation Workflow:</strong> n8n webhook triggered! Leads captured and synced to client database instantly.
    `;
});
