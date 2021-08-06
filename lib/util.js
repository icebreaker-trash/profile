const qrcode = require('qrcode-terminal')
qrcode.setErrorLevel('L')
function generateQrcode (input) {
  return new Promise((resolve, reject) => {
    qrcode.generate(input, {
      small: true
    }, (qrcode) => {
      resolve(qrcode)
    })
  })
}

module.exports = {
  generateQrcode
}
