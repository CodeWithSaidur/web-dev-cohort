function toggleDetails() {
    const details = document.getElementById('details');
    const button = document.querySelector('button');
    
    if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = 'Show More Details';
    } else {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    }
}