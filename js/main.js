const arrH = document.querySelector('.arrH')
const arrM = document.querySelector('.arrM')
const arrS = document.querySelector('.arrS')
const dotS = document.querySelector('.dotS')
const dotM = document.querySelector('.dotM')
const dotH = document.querySelector('.dotH')
const SS = document.querySelector('.SS')
const MM = document.querySelector('.MM')
const HH = document.querySelector('.HH')
const numS = document.querySelector('.numS')
const numM = document.querySelector('.numM')
const numH = document.querySelector('.numH')

clock()
function clock(){
  const time = new Date()
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  let hours = time.getHours()
  
  arrS.style.transform = `rotate(${seconds*6}deg)`
  arrM.style.transform = `rotate(${minutes*6}deg)`
  arrH.style.transform = `rotate(${hours*30 + (minutes/2)}deg)`
  
  dotS.style.transform = `rotate(${seconds*6}deg)`
  SS.style.strokeDashoffset = 440 - 440 * seconds / 60
  numS.innerHTML = seconds<10?`0${seconds}`:seconds
  
  dotM.style.transform = `rotate(${minutes*6}deg)`
  MM.style.strokeDashoffset = 440 - 440 * minutes / 60
  numM.innerHTML = minutes<10?`0${minutes}`:minutes
  
  numH.innerHTML = hours<10?`0${hours}`:hours
  if(hours >= 12){hours = hours - 12}
  dotH.style.transform = `rotate(${hours*30}deg)`
  HH.style.strokeDashoffset = 440 - 440 * hours / 12
  
  setTimeout(clock, 1000)
}
// tabs
const links = document.querySelectorAll('.tabpanel__links a')
const items = document.querySelectorAll('.item')

console.log(links);
links.forEach(function(link, linkKey){
  link.addEventListener('click', function(){
    links.forEach(function(a, key){
      links[key].classList.remove('active')
      items[key].classList.remove('active')
    })
    links[linkKey].classList.add('active')
    items[linkKey].classList.add('active')
  })
})
// stopwatch
const startBtn = document.querySelector('.start')
const resultBtn = document.querySelector('.result')
const stopwatchDotS = document.querySelector('.stopwatch-dotS')
const stopwatchDotM = document.querySelector('.stopwatch-dotM')
const stopwatchDotH = document.querySelector('.stopwatch-dotH')
const stopwatchS = document.querySelector('.stopwatch-SS')
const stopwatchM = document.querySelector('.stopwatch-MM')
const stopwatchH = document.querySelector('.stopwatch-HH')
const stopwatchNumS = document.querySelector('.stopwatch-numS')
const stopwatchNumM = document.querySelector('.stopwatch-numM')
const stopwatchNumH = document.querySelector('.stopwatch-numH')

startBtn.addEventListener('click', function(){
  if(startBtn.innerHTML == 'start'){
    startBtn.innerHTML = 'stop'
    stopwatch(startBtn,0,0,0)
  }else if(startBtn.innerHTML == 'stop'){
    startBtn.innerHTML = 'clear'
  }else{
    startBtn.innerHTML = 'start'
  }
})
function stopwatch(btn,s,m,h){
  if(btn.innerHTML == 'stop'){   
    if(s == 59){
      s=0
      stopwatchNumS.innerHTML = s<10?`0${s}`:s
      stopwatchDotS.style.transform = `rotate(${s*6}deg)`
      stopwatchS.style.strokeDashoffset = 440 - 440 * s / 60 
      if(m == 59){
        m=0
        stopwatchNumM.innerHTML = m<10?`0${m}`:m
        stopwatchDotM.style.transform = `rotate(${m*6}deg)`
        stopwatchM.style.strokeDashoffset = 440 - 440 * m / 60 
        if(h == 23){
          h=0
        }else{
          h++
        }
      }else{
        m++
        stopwatchNumM.innerHTML = m<10?`0${m}`:m
        stopwatchDotM.style.transform = `rotate(${m*6}deg)`
        stopwatchM.style.strokeDashoffset = 440 - 440 * m / 60 
      }
    }else{
      s++
      stopwatchNumS.innerHTML = s<10?`0${s}`:s
      stopwatchDotS.style.transform = `rotate(${s*6}deg)`
      stopwatchS.style.strokeDashoffset = 440 - 440 * s / 60
    }
    setTimeout(function(){
      stopwatch(btn,s,m,h)
    },10)
  }
}