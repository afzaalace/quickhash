var quickhash = function (str) {
    var val = 5381,
        l = str.length
    while (l)
        val = (val * 33) ^ str.charCodeAt(--l)
    return val >>> 0;
}
module.exports = quickhash;
