document.getElementById('moreBtn').addEventListener('click', function() {
    var newFlower = new Image();
    newFlower.src = 'path_to_your_sunflower_image.png'; // Replace with your sunflower image path
    newFlower.classList.add('sunflower');
    // Randomize the position of the new sunflower
    newFlower.style.left = Math.random() * 100 + '%';
    newFlower.style.bottom = Math.random() * 50 + '%'; // Adjust if you want different heights

    document.querySelector('.background').appendChild(newFlower);