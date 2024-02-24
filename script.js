function place(info,name,image) {
    this.info=info;
    this.name=name;
    this.image=image;
}

// let places=[]

async function fetchCity(){
    const quoteContainer=document.getElementById('quoteContainer')
    quoteContainer.innerHTML='<p>Loading</p>';
    const response=await fetch('https://api.npoint.io/7bbd3a59c401f616bb89');
    console.log(response,"\n");
    const data=await response.json();
    console.log(data);
    seenNames = new Set();
    let htmlString = ``;
    for(i=0;i<data.places.length;i++){
    if(!seenNames.has(data.places[i].name)){
    seenNames.add(data.places[i].name);    
    htmlString+=`<p id="name" >${data.places[i].name}</p>
    <p><img src="${data.places[i].image}" id='image'></p>
    <p id="info">${data.places[i].info}</p>
    `}}
    console.log(seenNames)
    quoteContainer.innerHTML=htmlString;
    
    
}
document.addEventListener('DOMContentLoaded',fetchCity)
