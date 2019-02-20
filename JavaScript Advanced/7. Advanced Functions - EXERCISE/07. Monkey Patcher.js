function solution(arg) {
    let obj = this;

    let func = (function () {
        function upvote() {
            ++obj.upvotes;
        }

        function downvote() {
            ++obj.downvotes;
        }

        function score() {
            let scoreArr = [];
            let ups = obj.upvotes;
            let downs = obj.downvotes;

            if (ups + downs > 50) {
                let added = Math.ceil(Math.max(ups, downs) * 0.25);
                ups += added;
                downs += added;
            }

            scoreArr.push(ups);
            scoreArr.push(downs);
            scoreArr.push(ups - downs);

            if (ups + downs < 10)
                scoreArr.push('new');
            else if ((obj.upvotes / (obj.upvotes + obj.downvotes)) * 100 > 66.0)
                scoreArr.push('hot');
            else if (ups - downs < 0)
                scoreArr.push('unpopular');
            else if (ups - downs >= 0 && (ups > 100 || downs > 100))
                scoreArr.push('controversial');
            else scoreArr.push('new');

            return scoreArr;
        }

        return {
            upvote,
            downvote,
            score
        }
    })();

    return func[arg]();
}