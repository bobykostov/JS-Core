function table(arr) {
    let html = "<table>\n";

    for (let line of arr) {
        let emp = JSON.parse(line);
        html += "<tr>\n";

        html += `<td>${htmlEscape(emp['name'])}</td>\n`;
        html += `<td>${htmlEscape(emp['position'])}</td>\n`;
        html += `<td>${emp['salary']}</td>\n`;

        html += "<tr>\n";
    }

    html += "</table>";
    console.log(html);

    function htmlEscape(text) {
        return text.replace('&', '&amp;')
            .replace('"', '&quot;')
            .replace("'", '&#39;')
            .replace('<', '&lt;')
            .replace('>', '&gt;');
    }
}