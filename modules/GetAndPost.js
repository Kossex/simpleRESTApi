const GetAndPost = () =>
{
    const btn = document.querySelector('button');
    let output = document.querySelector('.output');
    let input = document.querySelector('.input');
    const btnPOST = document.querySelector('.btnPOST');
    var cryptocurrency={
        name:'',
        price:'',
        };
        var value;
        input.addEventListener('input',()=>{
        value = input.value;
       });
       const postData = async (url,data) =>{
        const responce = await fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => response.json());
       // console.log(responce);
    }
    function getAndPostData(url){
        let responce = fetch(url)
        .then(response => response.json()).then(data =>{
             console.log(data);
             console.log(value);
             if (value === undefined){
                 confirm('Please enter a value');
             }
             else{
             value=value.toUpperCase();
             console.log(data.rates[value]);
             if (data.rates[value] === undefined){
                 output.classList.add('mistake');
                 output.innerHTML += `<b>${value} is not a valid currency</b>`;
             }
             else{
             output.classList.remove('mistake');
             output.innerHTML += `<b> Course of ${value} = ${data.rates[value]}$</b>`;
             btnPOST.onclick = (e)=>{
             e.preventDefault();
             cryptocurrency.name = value;
             cryptocurrency.price = data.rates[value];
             console.log(cryptocurrency);
             let InfoOfCoin = output.textContent;
             console.log(InfoOfCoin);
             if (cryptocurrency===undefined)
             {
                 confirm("Please enter a value");
             }
             postData('http://localhost:3000/posts',cryptocurrency);
             }
             }
        }
        }   
         ).catch(err => console.log(err));
          } 
     
         btn.addEventListener('click',(e)=>{
             e.preventDefault();
             output.innerHTML='';
             getAndPostData('http://api.coinlayer.com/api/live?access_key=3c9ad27fc653cc0ca8f4da2654acdf85');
         });


}
export default GetAndPost;