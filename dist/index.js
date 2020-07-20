var Deck;
(function (Deck) {
    Deck["blackwings"] = "blackwings";
    Deck["crystrons"] = "crystrons";
    Deck["elementsabers"] = "elementsabers";
    Deck["darklords"] = "darklords";
    Deck["fortunelady"] = "fortunelady";
    Deck["shiranui"] = "shiranui";
    Deck["darkmagician"] = "darkmagician";
    Deck["cyberdragon"] = "cyberdragon";
    Deck["thunderdragons"] = "thunderdragons";
    Deck["blueeyes"] = "blueeyes";
    Deck["lunalight"] = "lunalight";
    Deck["lightsworn"] = "lightsworn";
    Deck["witchcrafter"] = "witchcrafter";
})(Deck || (Deck = {}));
function initScores(decks) {
    const scores = new Map();
    decks.forEach(deck => {
        scores.set(deck, 0);
    });
    return scores;
}
function toList(scoreMap) {
    const scoreList = [];
    scoreMap.forEach((score, deck) => {
        scoreList.push({ score, deck });
    });
    return scoreList;
}
function compareDeckScores(a, b) {
    return a.score - b.score;
}
const allDecks = Object.keys(Deck);
/**
 * outer array ordered from recent to past
 * inner array ordered from highest to lowest performing
 */
const rankings = [
    [Deck.witchcrafter, Deck.blackwings, Deck.shiranui, Deck.elementsabers, Deck.darkmagician],
    [Deck.shiranui, Deck.crystrons, Deck.darkmagician, Deck.blackwings, Deck.elementsabers],
    [Deck.blackwings, Deck.shiranui, Deck.darkmagician, Deck.elementsabers, Deck.crystrons],
    [Deck.shiranui, Deck.darkmagician, Deck.thunderdragons, Deck.elementsabers, Deck.crystrons],
    [Deck.blueeyes, Deck.darkmagician, Deck.shiranui, Deck.lunalight, Deck.lightsworn],
    [Deck.darkmagician, Deck.elementsabers, Deck.shiranui, Deck.cyberdragon, Deck.darklords],
    [Deck.darkmagician, Deck.cyberdragon, Deck.blackwings, Deck.thunderdragons, Deck.shiranui],
    [Deck.elementsabers, Deck.blackwings, Deck.darklords, Deck.shiranui, Deck.fortunelady],
    [Deck.blackwings, Deck.crystrons, Deck.elementsabers, Deck.darklords, Deck.fortunelady],
];
function computeScore(decks, rankings, limit = -1) {
    let maxNumRankings = limit < 0 ? rankings.length : limit;
    const limitedRankings = rankings.slice(0, maxNumRankings);
    const scoreMap = initScores(allDecks);
    limitedRankings.forEach(decks => {
        const maxScore = decks.length;
        decks.forEach((deck, index) => {
            scoreMap.set(deck, scoreMap.get(deck) + maxScore - index);
        });
    });
    return toList(scoreMap).sort(compareDeckScores).reverse();
}
console.log(computeScore(allDecks, rankings, 4));
