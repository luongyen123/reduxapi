const url ="http://apidev.canvasee.com/api/search/wiki";

export default (page)=>{
    return fetch(url,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            key:'react',
            page:page
        })
    }).then((reponse)=>reponse.json());
};
