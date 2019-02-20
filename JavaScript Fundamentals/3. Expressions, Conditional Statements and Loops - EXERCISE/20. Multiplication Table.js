function multi(n) {
    let html = `<table border="1">\n`;
    for (let i = 0; i <= n; i++) {
        html += `<tr><th>${i===0?"x":i}</th>`;
        for (let j = 1; j <= n; j++) {
            if (i === 0)
            {
                html += `<th>${j}</th>`;
            }
            else
            {
                html += `<td>${i*j}</td>`;
            }
        }
        html += `</tr>\n`;
    }
    html += `</table>`;
    console.log(html);
}