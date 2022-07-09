const GetInfo = () =>
{
    const inputInfo = document.querySelector('.inputInfo');
    const BtnGetInfo = document.querySelector('.GetInfo');
    const InfoOutput = document.querySelector('.InfoOutput');
    var valueInfo;
    inputInfo.addEventListener('input',()=>{
        valueInfo = inputInfo.value;
        valueInfo = valueInfo.toUpperCase();
    }
    );
    BtnGetInfo.addEventListener('click',(e)=>{
        e.preventDefault();
      fetch(`https://min-api.cryptocompare.com/data/top/pairs?fsym=${valueInfo}&limit=20&api_key=d562b3f990f1a116efcecd5b691a35df3abe71a1acdb443d110ec44079f8c690`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
            }
            }).then(response => response.json()).then(data =>{
                console.log(data);
                console.log(valueInfo);
                if (valueInfo === undefined){
                    inputInfo.classList.add('mistake');
                    confirm('Please enter a value');
                }
                else{
                valueInfo=valueInfo.toUpperCase();
                InfoOutput.innerHTML='';
               // console.log(data.Data[valueInfo]);
                if (data.Response === "Error"){
                    inputInfo.classList.add('mistake');
                    confirm(`${valueInfo} is not a valid currency`);
                }
                else{
                    inputInfo.classList.remove('mistake');
                    InfoOutput.innerHTML += `<table>
                    <tr>
                    <th>Currency</th>
                    <th>${valueInfo}</th>
                    <th>Amount of currency spent</th>
                    <th>Price 1 ${valueInfo} in currency</th>
                    </tr></table>`;
                    for (var i = 0; i < data.Data.length; i++){
                        InfoOutput.innerHTML += `<table>
                        <tr>
                        <td>${data.Data[i].toSymbol}</td>
                        <td>${data.Data[i].volume24h}</td>
                        <td>${data.Data[i].volume24hTo}</td>
                        <td>${data.Data[i].price}</td>
                        </tr>
                        </table>`;
                    }
               console.log(data.Data[0].toSymbol);

                }
                }
            }
            ).catch(err => console.log(err));
    }
    );
}
export default GetInfo;