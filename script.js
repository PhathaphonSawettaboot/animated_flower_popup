document.getElementById('moreBtn').addEventListener('click', function() {
    for (let i = 0; i < 2; i++) {
        var newFlower = new Image();
        newFlower.src = 'asset/sunflower.png'; // Replace with your sunflower image path
        newFlower.classList.add('sunflower');
        // Randomize the position of the new sunflower
        newFlower.style.left = Math.random() * 100 + '%';
        newFlower.style.bottom = Math.random() * 50 + '%'; // Adjust if you want different heights

        // Set size of the new flower
        newFlower.style.width = '100px'; // Adjust the width as needed
        newFlower.style.height = 'auto'; // This keeps the aspect ratio of the image

    document.querySelector('.background').appendChild(newFlower);
    }

    // Display the text
    var displayText = document.getElementById('displayText');
  if (displayText.style.display === 'none' || displayText.style.display === '') {
    displayText.style.display = 'block';
  } else {
    displayText.style.display = 'none';
  }
});