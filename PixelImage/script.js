const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pixelateButton = document.getElementById('pixelateButton');
const downloadButton = document.getElementById('downloadButton');
const pixelSizeInput = document.getElementById('pixelSizeInput');

imageInput.addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

pixelateButton.addEventListener('click', () => {
    const pixelSize = parseInt(pixelSizeInput.value); 
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelatedData = pixelateImage(imgData, pixelSize);
    ctx.putImageData(pixelatedData, 0, 0);
    downloadButton.style.display = 'inline-block';
});

function pixelateImage(imgData, pixelSize) {
    const width = imgData.width;
    const height = imgData.height;
    const pixelatedData = ctx.createImageData(width, height);

    for (let y = 0; y < height; y += pixelSize) {
        for (let x = 0; x < width; x += pixelSize) {
            const index = (y * width + x) * 4;
            const r = imgData.data[index];
            const g = imgData.data[index + 1];
            const b = imgData.data[index + 2];
            const a = imgData.data[index + 3];

            for (let py = 0; py < pixelSize; py++) {
                for (let px = 0; px < pixelSize; px++) {
                    const pixelIndex = ((y + py) * width + (x + px)) * 4;
                    if (y + py < height && x + px < width) { 
                        pixelatedData.data[pixelIndex] = r;
                        pixelatedData.data[pixelIndex + 1] = g;
                        pixelatedData.data[pixelIndex + 2] = b;
                        pixelatedData.data[pixelIndex + 3] = a;
                    }
                }
            }
        }
    }

    return pixelatedData;
}

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'pixelated_image.png';
    link.href = canvas.toDataURL();
    link.click();
});
