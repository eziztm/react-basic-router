function getChats(data) {

    if (data == 'privat') {
        return "";
    } else if (data == 'bedrift') {
        return "corpChats";
    } else {
        return [];
    }
}

module.exports = {
    getChats
}
