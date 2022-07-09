const put = ()=>{
    const btnPUT = document.querySelector('.btnPUT'); 
    const input1 = document.querySelector('.inputPUT');
    const inputID = document.querySelector('.inputID');
    var valueID;
    inputID.addEventListener('input',()=>{
    valueID = inputID.value;
}
);
const putData = async (url,data) =>{
    const responce = await fetch(url,{
         method:'PUT',
         body:JSON.stringify(data),
         headers:{
             'Content-Type':'application/json'
         }
     }).then(response => response.json());
 }
 btnPUT.addEventListener('click',(e)=>{
    e.preventDefault();
    let value1 = input1.value;
    if (value1 === ''){
        input1.classList.add('mistake');
        confirm('Please enter a value');
    }
    value1 = value1.toUpperCase();
    if (value1.match(/[!@#$%*,<>()]/)){
        input1.classList.add('mistake');
        confirm('Please enter a value');
    }
    else{
    input1.classList.remove('mistake');
    let cryptocurrency1 = {
        name: value1.replace(/[^A-Z]/g,''),
        price:+(value1.replace(/[A-Z]/g,"").slice(1)),
    }

    console.log(cryptocurrency1);
// how many coins are in the database
    fetch('http://localhost:3000/posts',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response => response.json()).then(data =>{
        console.log(data);
        console.log(data.length);
        let i = data.length;
        if (valueID>i){
            input1.classList.add('mistake');
            confirm('There is no such coin in the database');   
        }
        else{
   putData(`http://localhost:3000/posts/${valueID}`,cryptocurrency1);
        }
});
}
});
}
export default put;