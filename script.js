// disply number in text box
function displayNumber(num){
    result.value+=num
}

// clear text box
function clearBox(){
    result.value=""
}

// evaluate expression
function evaluateExp(){
    result.value=eval(result.value)
}

// remove last item from the box
function removelastitem(){
    result.value=result.value.slice(0,-1)
}