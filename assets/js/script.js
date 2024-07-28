// add click effect for buttons
const buttons=document.querySelectorAll(".items .item button");
let rate_value;
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click",(event) => {
        if (event.target.classList.contains("selected")){
            event.target.classList.remove("selected");
            console.log("removed");
        }
        else{
            event.target.classList.add("selected");
            rate_value=event.target.id;
            console.log("added " + rate_value);
        }
        buttons.forEach(unSelectedBt =>{ 
            if (unSelectedBt !== event.target){
                unSelectedBt.classList.remove("selected")
            }
        });

    });
});

// thanks message script
const chooseRateContainer=document.querySelector(".container");

const submitBt=document.getElementById("submitBt");

const thanksMsg=document.querySelector(".thanks-msg");
let rate_msg=thanksMsg.querySelector("p");
submitBt.addEventListener("click", ()=>{
    
    rate_msg.innerHTML=`You selected ${rate_value} out of 5`;
    chooseRateContainer.style.display="none"
    thanksMsg.style.display="flex";
});














