 
// let myLead = `["www.awesomelead.com"]`
// myLead = JSON.parse(myLead)
// myLead.push("www.google.com")
// myLead = JSON.stringify(myLead)
// console.log(typeof myLead)

// // .parse converts string to array
// myLeads = JSON.parse(myLeads)

let myLeads = []
// myLeads = JSON.stringify(myLeads)

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)

// console.log(localStorage.getItem("myLeads"))

// localStorage.setItem("myName", "lukman")
// let name = localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()
// localStorage.clear()

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage
render(myLeads)
}



tabBtn.addEventListener("click", function(){    
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})


})

function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem += `<li><a target= '_blank' href =' ${ leads[i]}'> ${leads[i]} </a></li>`
    
    }
    
    ulEl.innerHTML = listItem
    
}


deleteBtn.addEventListener("dblclick", function() {
localStorage.clear()
myLeads = []
render(myLeads)
})


inputBtn.addEventListener("click", function() {
myLeads.push(inputEl.value)
inputEl.value = ""
localStorage.setItem("myLeads", JSON.stringify(myLeads))

render(myLeads)
console.log(localStorage.getItem("myLeads"))
})







