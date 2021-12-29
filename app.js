console.log("hi there");

let myBtn = document.getElementById("submit-btn");

myBtn.addEventListener('click',word);


function getData(){
    
    console.log("Started getData")
    
    let searchBtn = document.getElementById("search-btn");
        let s = searchBtn.value;
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${s}`;
    
    let str=""; 
        
        let content = document.getElementById("defi");
        
        
        fetch(url).then((response)=>{
            //console.log("Inside first then")
            let obj = response.json();
            console.log(obj);
            return def = obj;
        }).then((data)=>{
            console.log(data);
                console.log("Inside second then")
            data.forEach( (element,index) => { 
                if(element.meanings[0].definitions[0].definition!=undefined){
                    str+=`<li class="list-group-item list"><hr><b>Definition ${index+1} </b> : ${element.meanings[0].definitions[0].definition}</li>
                    <li class="list-group-item list"><hr><b>Origin</b> : ${element.origin}</li>
                    <li class="list-group-item list"><hr><b>text</b> : ${element.phonetics[0].text}</li>
                    <li class="list-group-item list"><hr><b>Part Of Speech</b> : ${element.meanings[0].partOfSpeech}</li>`; 
                }
            });
            content.innerHTML = str;
        })
}

function word(){
    getData();
}