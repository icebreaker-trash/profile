#!/usr/bin/env node

const emoji = require('node-emoji')
const chalk = require('chalk')
const dayjs = require('dayjs')
const log = console.log
const { table } = require('table')
const boxen = require('boxen')
const { generateQrcode } = require('./util')
const whenToStartWork = dayjs('2016-07-01')
  // emoji.get('male_sign')
  ; (async () => {
  const boxRow = [
      `${chalk.bold('杨启明')} ${chalk.greenBright('ice breaker')} ${chalk.bold.blueBright('男')}`,
      `\n\n${emoji.get('handbag')} ${chalk.bold.greenBright(dayjs().year() - whenToStartWork.year())} 年经验 | ${emoji.get('mortar_board')} 扬州大学-软件工程-本科`,
      `\n\n${chalk.bold.greenBright('|')} 个人优势`,
      '\n靠谱，擅长吹牛，扯淡，对技术比较热爱',
      `\n\n${chalk.bold.greenBright('|')} 期望职位`,
      `\n${emoji.get('art')} 躺着挣钱 | ${emoji.get('moneybag')} 越多越好 | ${emoji.get('point_down')} 离家近`,
      `\n\n${chalk.bold.greenBright('|')} 工作经历`,
      '\n往事不堪回首月明中',
      `\n\n${chalk.bold.greenBright('|')} 项目经历`,
      '\n雕栏玉砌应犹在，只是朱颜改。',
      `\n\n${chalk.bold.greenBright('|')} 联系方式`,
      `\n${table([['个人博客', '微信号'], [await generateQrcode('https://icebreaker.top'), await generateQrcode('https://u.wechat.com/EAVzgOGBnATKcePfVWr_QyQ')]])}`
  ]
  log(
    boxen(boxRow.join(''), {
      borderStyle: 'round',
      padding: 1,
      margin: 1
    })
  )
})()
