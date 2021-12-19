const QRCode = require('qrcode')
const { AsciiTree } = require('oo-ascii-tree')
const emoji = require('node-emoji')
const chalk = require('chalk')
const dayjs = require('dayjs')
const prompts = require('prompts')
const boxen = require('boxen')
const sound = require('sound-play')
const axios = require('axios')

async function generateQrcode (input) {
  const str = await QRCode.toString(input, {
    type: 'terminal',
    errorCorrectionLevel: 'L',
    version: 3,
    scale: 1,
    small: true
  })
  return str
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
  createProjectsTree,
  emoji,
  chalk,
  dayjs,
  prompts,
  boxen,
  axios,
  sound
}
