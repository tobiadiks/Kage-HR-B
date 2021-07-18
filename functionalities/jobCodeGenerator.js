//generates a random job code
function codeGenerator() {
  var code1 = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
  var code2 = Math.floor(Math.random() * (99 - 00 + 1)) + 00;
  var full_code = `${code1}${code2}`;
  return full_code;
}

module.exports = codeGenerator;