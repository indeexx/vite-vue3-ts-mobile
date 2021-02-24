const baseSize: number = 37.5;
function setRem(): void{
    // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750
    const scale: number = document.documentElement.clientWidth / 375;
      // “Math.min(scale, 2)” 指最高放大比例为2
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + "px";
}

setRem();

window.onresize = function(): void{
    setRem();
}