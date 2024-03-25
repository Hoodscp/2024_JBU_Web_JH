document.getElementById('Time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function gray() {
  document.body.style.backgroundColor = 'gray'
}
function color_back() {
  document.body.style.backgroundColor = 'skyblue'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.png'
  document.getElementById('dsc').innerHTML = '<b>wa!</b>html'
}

function showcss() {
  document.getElementById('fig').src = 'img/css.png'
  document.getElementById('dsc').innerHTML = '<b>wa!!</b>css'
}

function showjs() {
  document.getElementById('fig').src = 'img/js.png'
  document.getElementById('dsc').innerHTML = '<b>wa!!!</b>JAVAScrpint'
}

function showimg0() {
  document.getElementById('fig').src = 'img/secon0.jpg'
  document.getElementById('dsc').innerHTML = 'SECON 내부 사진이다.'
}

function showimg1() {
  document.getElementById('fig').src = 'img/secon1.jpg'
  document.getElementById('dsc').innerHTML = '보안 스위치의 사진이다.'
}

function showimg2() {
  document.getElementById('fig2').src = 'img/secon2.jpg'
  document.getElementById('dsc2').innerHTML =
    '실제로 다크웹에서 얻어오는 정보의 사진이다.'
}

function showimg3() {
  document.getElementById('fig').src = 'img/secon3.jpg'
  document.getElementById('dsc').innerHTML = ''
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('dsc').innerHTML = ''
}
function hide2() {
  document.getElementById('fig2').src = ''
  document.getElementById('dsc2').innerHTML = ''
}
