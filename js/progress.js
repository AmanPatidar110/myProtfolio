const elements = document.querySelectorAll('.progress-done');


for(let element of elements) {
    element.style.width = element.getAttribute('data-progress') + '%';
}

