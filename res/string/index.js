const defaultValues = require('./default')
const options = { defaultValues };
const values = {};

function updateValues(option) {
    const optionValues = options[option] || {};
    for (let i in defaultValues) {
      values[i] = optionValues[i] || defaultValues[i];
    }
}

updateValues();

module.exports = {values, updateValues};
