const input = document.querySelector("input");
const myButton = document.getElementById("button");
const list = document.querySelector("#list");



myButton.addEventListener("click", () => {

    if (input.value != ""){
        const myItem = input.value;
        let newLi = document.createElement("li");
        let liText = document.createElement("span");
        let DelBtn = document.createElement("button");
        liText.textContent = myItem;
        DelBtn.textContent = "X";
        newLi.appendChild(liText);
        newLi.appendChild(DelBtn);
        list.appendChild(newLi);
        DelBtn.addEventListener("click", () =>
        {list.removeChild(newLi)});

        input.value = "";
    } 
        
    input.focus();
});