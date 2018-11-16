const REGEX = /(-{0,1}([0-9]{1,}[.|,]{0,1}[0-9]{0,}(\s){0,1}x(\s){0,1})?(-{0,1}[0-9]{1,}[.|,]{0,1}[0-9]{0,}(\s){0,1}(days|Days|day|Day|d|hours|Hours|hour|Hour|h|minutes|Minutes|minute|Minute|m)\b))/g;

module.exports = {
    REGEX,
};
