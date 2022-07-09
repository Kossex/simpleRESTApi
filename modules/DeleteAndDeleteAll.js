const DeleteAndDeleteAll = () =>{
    const BtnDelete = document.querySelector('.btnDelete');
    const inputDelete = document.querySelector('.InputDelete');
    const BtnDeleteAll = document.querySelector('.BtnDeleteAll');
    var valueID2;
    inputDelete.addEventListener('input',()=>{
    valueID2 = inputDelete.value;
    });
    const DeleteData = async (url) =>{
        const responce = await fetch(url,{
             method:'DELETE',
             body:JSON.stringify(),
             headers:{
                 'Content-Type':'application/json'
             }
         }).then(response => response.json());
     }
     BtnDelete.addEventListener('click',(e)=>{
        e.preventDefault();
        if (valueID2 === undefined){
            inputDelete.classList.add('mistake');
            confirm('Please enter a value');
        }
        else{
        fetch(`http://localhost:3000/posts`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
                }
                }).then(response => response.json()).then(data =>{
                    console.log(data.length);
                    let i = data.length;
                    console.log(i);
                    if (valueID2>i){
                        inputDelete.classList.add('mistake');
                        confirm('There is no such coin in the database');   
                    }
                    else{
                        inputDelete.classList.remove('mistake');
                        DeleteData(`http://localhost:3000/posts/${valueID2}`)
                        confirm(`${valueID2} has been deleted`);
                    }
                }
                ).catch(err => console.log(err));
        }
    });
    //delete all coins
    BtnDeleteAll.addEventListener('click',(e)=>{
        e.preventDefault();
        fetch(`http://localhost:3000/posts`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
                }
                }).then(response => response.json()).then(data =>{
                    console.log(data.length);
                    for (var i = 0; i < data.length; i++){
                        DeleteData(`http://localhost:3000/posts/${data[i].id}`)
                    }
                    confirm(`All coins have been deleted`);
                }
                ).catch(err => console.log(err));
            });

}
export default DeleteAndDeleteAll;