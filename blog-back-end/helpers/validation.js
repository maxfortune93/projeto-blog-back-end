
const emptyOrNull = (value, message) => {
    if(!value) throw message;
    if(Array.isArray(value) && value.length === 0) throw message;
    if(typeof value === 'string' && !value.trim()) throw message;
}

module.exports = {emptyOrNull}
