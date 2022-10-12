function doSearch(text) {
    if (window.find(text)) {
        console.log(window.find(text));
    }
}

document.getElementById('SearchTxt').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        doSearch(event.target.value);
    }
});
