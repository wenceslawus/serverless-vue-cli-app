'use strict';

const moment = require('moment-timezone');

function getTime() {
    return { data: moment().format() };
}

module.exports.time = getTime;