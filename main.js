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

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('dsc').innerHTML = ''
}
