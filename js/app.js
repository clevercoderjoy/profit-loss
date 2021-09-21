const btn = document.querySelector("#submit-btn");
const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const output = document.querySelector(".output")


function calculateProfitAndLoss(){

    if(initialPrice.value > 0 && currentPrice.value > 0 &&stocksQuantity.value > 0){

        if(currentPrice.value > initialPrice.value){
            profit = getProfit()
            profitPercentage = getProfitPercentage(profit)
            output.innerText = "Your profit is " + profit + " and profit percentage is " + profitPercentage.toFixed(2) + "%"
            output.style.background = "#34A853";
            output.style.padding = "0.5rem";
            output.style.color = "white";
            }

            else if(initialPrice.value > currentPrice.value){
            loss = getLoss()
            lossPercentage = getLossPercentage(loss)
            output.innerText = "Your loss is " + loss + " and loss percentage is " + lossPercentage.toFixed(2) + "%"
            output.style.background = "#EA4335";
            output.style.padding = "0.5rem";
            output.style.color = "white";
            }

            else{
                output.innerText = "No pain no gain and No gain no pain."
                output.style.background = "#4285F4";
                output.style.padding = "0.5rem";
                output.style.color = "white";
            }
    }
    else{
        output.innerText = "Enter valid values"
        output.style.background = "#FBBC05";
        output.style.padding = "0.5rem";
        output.style.color = "white";
    }
    
}

// calculates profit
function getProfit(){
    return ((currentPrice.value - initialPrice.value) * stocksQuantity.value);
}

// calculates profit %
function getProfitPercentage(profit){
    return ((profit / initialPrice.value) * 100);
}

// calculates loss
function getLoss(){
    return ((initialPrice.value - currentPrice.value) * stocksQuantity.value);
}

// calculates loss %
function getLossPercentage(loss){
    return ((loss / initialPrice.value) * 100);
}








btn.addEventListener("click", calculateProfitAndLoss);