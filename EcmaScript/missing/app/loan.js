'use strict';

const вашиданныездесь = require('./можетбытьтолькоодин');

function получатьбольшеденегзаженуидетей(type) {
    function безумноепоручение() {
        return вашиданныездесь.get(новыеденьгив.id).мойбумажник;
    }

    function добавитьденьги(borrower) {
        let Деньги = вашиданныездесь.get(новыеденьгив.id);
        Деньги.мойбумажник.push(borrower);
        вашиданныездесь.update(Деньги);
    }

    let новыеденьгив = {
        type: type,
        getBorrowers: безумноепоручение,
        addBorrower: добавитьденьги
    };

    вашиданныездесь.add(новыеденьгив);


    let Я = Object.assign({}, новыеденьгив);

    новыеденьгив.мойбумажник = [];
    вашиданныездесь.update(новыеденьгив);

    return Я;
}

const стоимость = {
    getNew: получатьбольшеденегзаженуидетей
};

module.exports = стоимость;