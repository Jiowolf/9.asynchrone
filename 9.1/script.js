const BUTTON_SELECT = document.querySelector('#arrToLi');


async function getJson() {
    // let arr = await jsonArr.json();
    // return arr;
    try {
        let jsonArr = await fetch(`9.1.json`);
        let arr = await jsonArr.json();
        return arr;
    } catch (error) {
        console.log("404 Not Found");
        return
    }
}
console.log(getJson());

BUTTON_SELECT.addEventListener('click', async() => {
    let arr = await getJson();
    console.log(arr);
    const ul = document.createElement('ul');
    for(let i = 0; i < arr.length; i++){
      const li = document.createElement('li');
      li.innerHTML = `${arr[i].name} - ${arr[i].age}`;
      ul.appendChild(li);
  };
  document.body.appendChild(ul);
});

