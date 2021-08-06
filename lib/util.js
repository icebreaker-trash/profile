const qrcode = require('qrcode-terminal')
const { AsciiTree } = require('oo-ascii-tree')

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

function createProjectsTree () {
  const tree = new AsciiTree('主程主架构')

  tree.add(new AsciiTree('官网',
    new AsciiTree('SSR'),
    new AsciiTree('Nuxt')))

  tree.add(new AsciiTree('产品端',
    new AsciiTree('SPA'),
    new AsciiTree('Vue'),
    new AsciiTree('React'),
    new AsciiTree('Umi')
  ))

  tree.add(new AsciiTree('诸多小程序',
    new AsciiTree('wepy'),
    new AsciiTree('uniapp')))

  tree.add(new AsciiTree('实时通讯',
    new AsciiTree('websocket'),
    new AsciiTree('socket.io'),
    new AsciiTree('nodejs')))

  return tree
}

module.exports = {
  generateQrcode,
  createProjectsTree
}
