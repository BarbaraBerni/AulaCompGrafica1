import imageLab from "./imageLab.js"

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

document.getElementById('btn1').addEventListener('click', brilho);
document.getElementById('btn2').addEventListener('click', monocromatico);
document.getElementById('btn3').addEventListener('click', negativo);

function brilho() {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let brilho = 1.5
            pixel.r = 0//pixel.r * brilho
            pixel.g = 0//pixel.g * brilho
            pixel.b = 0//pixel.b * brilho
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

function monocromatico(){
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = (pixel.r+pixel.b+pixel.g)/3
            pixel.r = media 
            pixel.g = media
            pixel.b = media
            imageLab.image2.setPixel(x,y,pixel)
}
    imageLab.image2.refresh()

    }
}
function negativo(){
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = (pixel.r+pixel.g+pixel.b)/3
            pixel.r = 255-media 
            pixel.g = 255-media
            pixel.b = 255-media
            imageLab.image2.setPixel(x,y,pixel)
}
    imageLab.image2.refresh()

    }
}