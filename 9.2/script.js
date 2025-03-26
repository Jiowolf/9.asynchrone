let INPUT__SELECT = document.querySelector("input");
let SUBMIT__SELECT = document.querySelector("#submit");

async function selectData(name){
try {
    let ageOfName = await fetch(`https://api.agify.io?name=${name}`);
    let ageOfNameJson = await ageOfName.json();
    return ageOfNameJson;
}catch (error) {
    console.log("404 Not Found");
    return
}
}

SUBMIT__SELECT.addEventListener("click",async function () {
    let input = INPUT__SELECT.value;
    let objName = await selectData(input);
    console.log(objName);
    if(objName){
        const div = document.createElement('div');
        div.innerHTML = `${objName.name} - ${objName.age}`;
        document.body.appendChild(div)
    }
});

