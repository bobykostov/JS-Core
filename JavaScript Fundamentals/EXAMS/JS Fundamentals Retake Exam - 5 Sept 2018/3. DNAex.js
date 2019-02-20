function dna(arr) {
    let regex = /^([!@#$?a-z]+)=([0-9]+)--([0-9]+)<<([a-z]+)$/;
    let dna = {};
    let match;

    for (let line of arr)
    {
        if (line === 'Stop!')
            break;
        else
        {
            if ((match = regex.exec(line)) !== null)
            {
                let geneName = match[1].split(/[!@#$?]/).join('');
                let nameLength = Number(match[2]);

                if (geneName.length === nameLength)
                {
                    let geneCount = Number(match[3]);
                    let organism = match[4];

                    if (!dna.hasOwnProperty(organism))
                    {
                        dna[organism] = geneCount;
                    }
                    else
                    {
                        dna[organism] += geneCount;
                    }
                }
            }
        }
    }

    for (let org of Object.keys(dna).sort((a, b) => dna[b] - dna[a])) {
        console.log(`${org} has genome size of ${dna[org]}`);
    }
}