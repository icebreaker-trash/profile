#!/usr/bin/env node

const emoji = require('node-emoji')
const chalk = require('chalk')
const dayjs = require('dayjs')
const log = console.log
const { table } = require('table')
const boxen = require('boxen')
const { generateQrcode } = require('./util')

const { AsciiTree } = require('oo-ascii-tree')
const whenToStartWork = dayjs('2016-07-01')
// emoji.get('male_sign')

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

; (async () => {
  const boxRow = [
      `${chalk.bold('杨启明')} ${chalk.greenBright('ice breaker')} ${chalk.bold.blueBright('男')}`,
      `\n\n${emoji.get('handbag')} ${chalk.bold.greenBright(dayjs().year() - whenToStartWork.year())} 年经验 | ${emoji.get('mortar_board')} 扬州大学-软件工程-本科`,
      `\n\n${chalk.bold.greenBright('|')} 个人优势`,
      '\n靠谱，对技术比较热爱',
      `\n\n${chalk.bold.greenBright('|')} 个人技能`,
      `\n 前端：Vue React uniapp , 后端 Nodejs Serverless\n其实啥也不会${emoji.get('laughing')}${emoji.get('joy')}`,
      `\n\n${chalk.bold.greenBright('|')} 期望职位`,
      `\n${emoji.get('art')} 躺着挣钱 | ${emoji.get('moneybag')} 越多越好 | ${emoji.get('point_right')} 离家近`,
      `\n\n${chalk.bold.greenBright('|')} 工作经历`,
      '\n> 往事不堪回首月明中 \n 除了创业时当技术合伙人，其他都是打工仔',
      `\n\n${chalk.bold.greenBright('|')} 项目经历`,
      `\n> 雕栏玉砌应犹在，只是朱颜改。\n\n${tree.toString()}`,
      `\n\n${chalk.bold.greenBright('|')} 联系方式`,
      '\nGithub: sonofmagic',
      `\n${table([['个人博客', '微信号'], [await generateQrcode('https://icebreaker.top'), await generateQrcode('https://u.wechat.com/EAVzgOGBnATKcePfVWr_QyQ')]])}`,
      '\n> 人生代代无穷已，江月年年只相似',
      '\n 欢迎对技术感兴趣的小伙伴一起交流！'
  ]
  log(
    boxen(boxRow.join(''), {
      borderStyle: 'round',
      padding: 1,
      margin: 1
    })
  )
})()
