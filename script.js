let count = 0;
let repetitions = 0;

document.getElementById('clickableImage').addEventListener('click', function() {
    count++;
    if (count > 107) {
        count = 0;
        repetitions++;
    }
    document.getElementById('clickCount').textContent = count;
    document.getElementById('repetitions').textContent = repetitions;
});

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('clickableImage').src = e.target.result;
            document.getElementById('clickText').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});
