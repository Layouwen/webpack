import './lyw.scss'
import './style.less'
import './llq.styl'
import jpg from './assets/1.jpg'

let div = document.querySelector('div')
div.innerHTML = `
    <img src='${jpg}'>
`

let button = document.createElement('button')
button.innerText = '我是懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        module.default()
    }, () => {
        console.log('加载失败')
    })
}
div.appendChild(button)