let headsOrTails = () => {
    let result = document.getElementById("result");
    let randomNumber = Math.floor(Math.random() * 1001);

    if(isEven(randomNumber)){
        result.innerText = "Heads";
    }
    else{
        result.innerText = "Tails";
    }
}

let isEven = (value) => {
	if (value%2 == 0)
		return true;
	else
		return false;
}

