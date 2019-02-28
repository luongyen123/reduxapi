import {AsyncStorage} from 'react-native';


const url ="http://apidev.canvasee.com/api/homefeed";



export default (page)=>{

    return fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjEuMzIvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE1NTEzMjQ3MjEsImV4cCI6MTU1Mzk1MjcyMSwibmJmIjoxNTUxMzI0NzIxLCJqdGkiOiJvb1B4cU9zQW5XSGJ5UUZuIn0._VDUooTJJnNzPbdGlBWAX9wJ1SBQ44Ke2PFQCn-XAT8"
        },
        body: JSON.stringify({
            order:1,
            page:page
        })
    }).then((reponse)=>reponse.json());
};
