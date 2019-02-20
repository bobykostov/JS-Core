function score(scoreJSON) {
    let html = "<table>\n";
    html += "   <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr) {
        html += `    <tr><td>${htmlEscape(obj['name'])}</td>` +
            `<td>${obj['score']}</td></tr>\n`;
    }
    html += "</table>";
    console.log(html);

    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}