let myLeads = []

const inputEl = document.getElementById("input")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let ulEl = document.getElementById("ul-el")


const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsLocalStorage && Array.isArray(leadsLocalStorage)){
    myLeads = leadsLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    if(inputEl.value){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads) 
    })
})

deleteBtn.addEventListener("dblclick", function(){
    myLeads = []
    localStorage.clear()
    render(myLeads)
    

})

function render(array){
    let listItems = ""
    for(let i = 0; i < array.length; i++){
    //listItems +=  "<li><a href = " + array[i] + " target = '_blank'>" + array[i] + "</a></li>"
    listItems +=  `
    <li>
        <a href = '${array[i]}' target = '_blank'>${array[i]}</a>
    </li>`
  // const li = document.createElement("li")
  // li.textContent = array[i]
   //ulEl.append(li)
    }
    ulEl.innerHTML = listItems


}
