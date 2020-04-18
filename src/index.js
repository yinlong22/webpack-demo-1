import './x.js'
import jpg1 from './images/1.jpg'
import jpg2 from './images/73.jpg'

const div = document.getElementById('app')
div.innerHTML = `
    <img src="${jpg1}">
    <img src="${jpg2}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}

div.appendChild(button)