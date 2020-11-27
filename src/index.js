const fish = document.getElementById('fish_colored')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.drawImage(fish, 0, 0, fish.width, fish.hight)
ctx.getImageData(0, 0, fish.width, fish.hight)

