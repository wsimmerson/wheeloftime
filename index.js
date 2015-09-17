var data = require('./data.json');

module.exports = {

    names: data.names,

    get: function () {
        return data.names[Math.floor(Math.random() * data.names.length)];
    },

    getList: function (num) {
        var names = Array();
        for (x=0; x<num; x++) {
            names.push(data.names[
                Math.floor(Math.random() * data.names.length)]);
        }
        return names;
    }

};
