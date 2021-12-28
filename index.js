
window.onload = function () { 
let i = 0,
timer = 0,
  str = '这真的是一个测试示例,绝对是比珍珠还真的哦';
let box = document.getElementsByClassName('box')[0]
box.addEventListener('click', () => { 
  typing()  
})
function typing () {
  if (i <= str.length) {
    box.innerHTML = str.slice(0, i++) + '_'
    timer = setTimeout(typing, 200)
  }
  else {
    box.innerHTML = str//结束打字,移除 _ 光标
    clearTimeout(timer)
  }
}

}