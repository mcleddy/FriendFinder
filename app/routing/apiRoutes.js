var friendData = require("../data/friendData.js");
//gets data from friends array
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //will run through the survey results and through the data in the friendData.js
    app.post("/api/friends", function (req, res) {
        var bestFriend = req.body;
        bestFriend.routeName = bestFriend.name.replace(/\s+/g, "").toLowerCase();

        for (var z = 0; z <friendData.length; z++) {
            var placeholder = [];
            var num1
            var i = 0;

            for (var j = 0; j < friendData[z].scores.length; j++) {
                placeholder.push(
                    Math.abs(bestFriend.scores[i] - friendData[z].scores[j]));
                i++;
            };

            num1 = placeholder.reduce(
                (acumulator, currectValue) => accumulator + currentValue,
                0
            );
            friendData[z].score = num1
        };

        var lowest = 40;
        for (var b = 0; b < friendData.length; b++) {
            var dum
            dum = friendData[b].score;
            if (dum < lowest) {
                lowest = dum;
            }
        }

        for (var c = 0; c < friendData.length; c++) {
            if (friendData[c].score === lowest) {
                var match = friendData[c];
                friendData.push(bestFriend);
                res.json({ matchName: match.name, MatchPhoto: match.photo });
            };
        };

    });
};