document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(signupForm);
        const data = Object.fromEntries(formData.entries());
        
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
    });
});
