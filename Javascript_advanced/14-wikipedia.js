function createElement(data) {
    var paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var page = response.query.pages;
            var pageId = Object.keys(page)[0];
            var extract = page[pageId].extract;
            callback(extract);
        }
    };
    xhr.send();
}

// To test
queryWikipedia(createElement);