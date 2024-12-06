document.getElementById('generate-btn').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
        fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(url))
            .then(response => response.blob())
            .then(blob => {
                const imgUrl = URL.createObjectURL(blob);
                document.getElementById('qr-code-img').src = imgUrl;
                document.getElementById('download-link').href = imgUrl;
                document.getElementById('output-section').style.display = 'block';
            });
    } else {
        alert('Please enter a valid URL');
    }
});
