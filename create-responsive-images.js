const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

const inputDir = './static/files'
const outputDir = './static/files/derivatives'
const test = /\.(jpe?g|png)$/i

function loadFormats () {
  return [
    { name: 'small', width: 480, height: 320 },
    { name: 'medium', width: 680, height: 320 },
    { name: 'large', width: 680, height: 1024 },
    { name: 'giant', width: 1280, height: 1024 },
    { name: 'story', width: 920, height: 350 }
  ]
}

async function loadImages (inputDir, test) {
  const files = await fs.readdir(inputDir)
  return files.filter(file => path.extname(file).match(test))
}

function createDerivatives (file, outputDir) {
  const formats = loadFormats()
  formats.forEach(async (format) => {
    const input = path.join(inputDir, file)
    const output = await prepareOutputPath(file, outputDir, format)
    formatImage(input, output, format)
  })
}

async function prepareOutputPath (file, outputDir, format) {
  const outputFormatDir = path.join(outputDir, format.name)
  await fs.mkdir(outputFormatDir, {recursive: true})
  return path.join(outputFormatDir, file)
}

async function formatImage (input, output, format) {
  sharp(input)
    .resize(format.width, format.height)
    .toFile(output)
}

loadImages(inputDir, test)
  .then(images => {
    images.forEach(file => createDerivatives(file, outputDir))
  })
  .catch(err => console.error(err))
