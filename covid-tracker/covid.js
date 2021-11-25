
function foo() {
    let cc = document.getElementById("countryname").value;
    console.log(cc);
    async function foo1(){
        let data = await fetch(`https://api.covid19api.com/dayone/country/${cc}`);
        let result = await data.json();
        console.log(result);
        for(var i in result){
            var compute = result[i].Confirmed;
            console.log(compute);

        }
        

    }
    foo1();
}
(foo());