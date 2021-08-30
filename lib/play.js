
const path = require('path')
const fs = require('fs')
const { chalk, sound, axios } = require('./util')

async function playMusicByUrl (url) {
  try {
    const basename = path.basename(url)

    const targetPath = path.resolve(process.cwd(), basename)

    const audio = await axios.default.get(url, {
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

module.exports = {
  playMusicByUrl
}
