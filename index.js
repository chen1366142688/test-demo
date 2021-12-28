
window.onload = function () { 
  let box = document.getElementsByClassName('box')[0]
  box.addEventListener('click', () => { 
    box.innerHTML = '这真的是一个测试示例'
  })
}
