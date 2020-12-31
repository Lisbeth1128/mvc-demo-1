import './app1.css'
import $ from 'jquery'

const $button1 = $('#addOne')
const $button2 = $('#minusOne')
const $button3 = $('#multiTwo')
const $button4 = $('#divideTwo')

const n = localStorage.getItem("n")
const $app1Number = $('#app1Number')
$app1Number.text(n || 100)

$button1.on('click', () => {
    let n = parseInt($app1Number.text())
    n += 1
    localStorage.setItem("n", n)
    $app1Number.text(n)
})

$button2.on('click', () => {
    let n = parseInt($app1Number.text())
    n -= 1
    localStorage.setItem("n", n)
    $app1Number.text(n)
})

$button3.on('click', () => {
    let n = parseInt($app1Number.text())
    n *= 2
    localStorage.setItem("n", n)
    $app1Number.text(n)
})

$button4.on('click', () => {
    let n = parseInt($app1Number.text())
    n /= 2
    localStorage.setItem("n", n)
    $app1Number.text(n)
})