const fish = document.getElementById('fish_colored')
const fishGrayscale = document.getElementById('fish_frayscaled')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.drawImage(fish, 0, 0, fish.width, fish.hight)
let data = ctx.getImageData(0, 0, fish.width, fish.hight)
ctx.putImageData(data, 0, 0)

console.log(data)

ctx.drawImage(fishGrayscale, 0, 0, fishGrayscale.width, fishGrayscale.hight)
let grayData = ctx.getImageData(0, 0, fishGrayscale.width, fishGrayscale.hight)
ctx.putImageData(grayData, 0, 0)

console.log(grayData)

