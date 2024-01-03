const emptyBox = document.querySelectorAll('.empty');
const imgbox = document.querySelector('.imgbox');

emptyBox.forEach((box) => {
    box.addEventListener('dragover', e => {
        e.preventDefault(); // its prevent refresh of page
        box.classList.add('hovered');
    });

    box.addEventListener('dragleave', () => {
        box.classList.remove('hovered');
    })

    box.addEventListener('drop', () => {
        box.appendChild(imgbox);
        box.classList.remove('hovered');
    })

})

