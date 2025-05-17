const input=document.getElementById("input");
const saveInput = document.getElementById("saveInput");
const saveTab = document.getElementById("saveTab");
const LS_leads = JSON.parse(localStorage.getItem("myLeads"))
let myLeads = []
if (LS_leads) {
    myLeads = LS_leads
    
}


saveInput.addEventListener("click", function () {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
})


saveTab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
    })
})