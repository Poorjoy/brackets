module.exports = function check(str, bracketsConfig) {
    let result = [];

    for (let bracket of str) {
        let [startBracket, endBracket] = bracketsConfig.find(pair =>
            pair.includes(bracket)
        );
        if (bracket === startBracket && !result.includes(startBracket)) {
            result.push(endBracket);
            continue;
        }
        let stackedBracket = result.pop();
        if (bracket === stackedBracket) {
            continue;
        }
        return false;
    }

    return !result.length;
};
