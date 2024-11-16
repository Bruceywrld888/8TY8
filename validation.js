document.getElementById('obituaryForm').addEventListener('submit', function(event) {
    const dob = new Date(document.getElementById('dob').value);
    const dod = new Date(document.getElementById('dod').value);

    if (dod <= dob) {
        alert('Date of Death must be after Date of Birth.');
        event.preventDefault();
    }
});
