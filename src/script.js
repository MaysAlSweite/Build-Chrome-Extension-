const input=document.getElementById("input");
const saveInput = document.getElementById("saveInput");
const saveTab = document.getElementById("saveTab");
const LS_leads = JSON.parse(localStorage.getItem("myLeads"))
const ul = document.getElementById("ul");
let myLeads = []
if (LS_leads) {
    myLeads = LS_leads
    render(myLeads)
}


saveInput.addEventListener("click", function () {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


saveTab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ul.innerHTML = listItems
}