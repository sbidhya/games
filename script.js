document.addEventListener('DOMContentLoaded', () => {
    const sayingsListDiv = document.getElementById('sayings-list');

    fetch('sayings.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(sayings => {
            if (sayings && sayings.length > 0) {
                sayings.forEach(saying => {
                    const card = document.createElement('div');
                    card.className = 'saying-card';

                    const englishP = document.createElement('p');
                    englishP.className = 'english';
                    englishP.textContent = saying.English || 'N/A';
                    card.appendChild(englishP);

                    const romanP = document.createElement('p');
                    romanP.className = 'roman';
                    romanP.textContent = saying.Roman || 'N/A';
                    card.appendChild(romanP);

                    const ukhanP = document.createElement('p');
                    ukhanP.className = 'ukhan';
                    ukhanP.textContent = saying.Ukhan || 'N/A';
                    card.appendChild(ukhanP);

                    sayingsListDiv.appendChild(card);
                });
            } else {
                sayingsListDiv.textContent = 'No sayings found.';
            }
        })
        .catch(error => {
            console.error('Error fetching or processing sayings:', error);
            if (sayingsListDiv) { // Check if sayingsListDiv exists before trying to set its textContent
                sayingsListDiv.textContent = 'Failed to load sayings. Please check the console for errors.';
            }
        });
});
