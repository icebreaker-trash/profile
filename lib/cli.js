#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const log = console.log
const { generateQrcode, createProjectsTree, chalk, dayjs, emoji, prompts, table, boxen, sound, axios } = require('./util')
const profileData = require('./data')

const { gender, name, nickname, magicWaltz, startWorkDay } = profileData
const whenToStartWork = dayjs(startWorkDay)
  ; (async () => {
  const boxRow = [
      `${chalk.bold(name)} ${chalk.greenBright(nickname)} ${chalk.bold.blueBright(gender)}`,
      `\n\n${emoji.get('handbag')} ${chalk.bold.greenBright(dayjs().year() - whenToStartWork.year())} 年经验 | ${emoji.get('mortar_board')} 扬州大学-软件工程-本科`,
      `\n\n${chalk.bold.greenBright('|')} 个人优势`,
      '\n靠谱，对技术比较热爱',
      `\n\n${chalk.bold.greenBright('|')} 个人技能`,
      `\n 前端：Vue React uniapp , 后端 Nodejs Serverless\n${emoji.get('laughing')}${emoji.get('joy')}`,
      `\n\n${chalk.bold.greenBright('|')} 期望职位`,
      `\n${emoji.get('art')} 钱多 | ${emoji.get('moneybag')} 事少 | ${emoji.get('point_right')} 离家近`,
      `\n\n${chalk.bold.greenBright('|')} 工作经历`,
      '\n> 往事不堪回首月明中 \n 经历过打工人被压榨,996,看不到希望 \n 也经历过作为合伙人,为了一张空头支票而奋不顾身,最终被踢出局 \n 生死看淡,不服就干(笑~)',
      `\n\n${chalk.bold.greenBright('|')} 项目经历`,
      `\n> 雕栏玉砌应犹在，只是朱颜改。\n\n${createProjectsTree().toString()}`,
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
  const response = await prompts({
    type: 'toggle',
    name: 'play',
    message: '是否来一首钢琴曲?',
    active: 'yes',
    inactive: 'no'

  })
  if (response.play) {
    try {
      const ext = path.extname(magicWaltz)
      const targetPath = path.resolve(process.cwd(), 'MagicWaltz' + ext)

      const audio = await axios.default.get(magicWaltz, {
        responseType: 'stream',
        headers: {
          referer: 'https://www.icebreaker.top/'
        }
      })
      const ws = fs.createWriteStream(targetPath)
      audio.data.pipe(ws)
      ws.on('finish', () => {
        console.log(`${chalk.green('√')} ${chalk.bold('音乐加载完成')}`)
        sound.play(targetPath)
      })
    } catch (error) {
      console.log('出错啦，没有获取到音乐资源。')
    }
  }
})()
