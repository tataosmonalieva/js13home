const numberInput = document.querySelector("#input")
const button = document.querySelector("#button")
const compRes=document.querySelector("#compRes")
const userRes = document.querySelector("#userRes")
const alert=document.querySelector("#alert")
const buttonClose = document.querySelector(".close")
const win = document.querySelector("#win")
const end = document.querySelector("#end")


const arr=[1,2,3,4,5,6,7,8,9,10]

button.addEventListener('click',()=>{
    const computer=arr[Math.floor(Math.random()*arr.length)]
    console.log(computer)
    compRes.innerHTML=computer
    if (numberInput.value<=10 && numberInput.value>=0){
        userRes.innerHTML=numberInput.value
        console.log(numberInput.value)
    }else{
        alert.style.display='block'

    }

    if(compRes.innerHTML===userRes.innerHTML){
        win.style.display='block'
    }else{
        end.style.display='block'
    }
})

buttonClose.addEventListener('click',()=>{
    alert.style.display='none'
})

win.addEventListener('click',()=>{
    win.style.display='none'
})
end.addEventListener('click',()=>{
    end.style.display='none'
})