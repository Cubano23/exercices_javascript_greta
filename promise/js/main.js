let log = (msg) => console.log(msg);            

 
/*  const f1 = (callback) => {
     
    log("first");

     setTimeout(() => callback("second"),1000);

 }


 f1((msg) => log(msg)); */



/* function delay(ms) {

  return new Promise(resolve => setTimeout(() => {
      resolve(window.location.href = "http://www.google.com")

  },ms));
}

delay(3000).then((msg) => msg); */


let init = () => {
    
document.getElementById('posts').innerHTML = "";
let id = document.getElementById('id').value = "";

fetch('https://jsonplaceholder.typicode.com/posts')

    .then((response) => { response.json()
            .then((value) => {
                for(let obj of value){
                    let post = document.createElement("p"); 
                    post.innerHTML = `id: &nbsp; ${obj.id} <br><br> title: &nbsp; ${obj.title} <br><br> Body: &nbsp; ${obj.body}`;
                    document.getElementById('posts').appendChild(post);
                }
                console.log(value);
            });
    });
}

init();



    let filterId = () => {

        document.getElementById('posts').innerHTML = "";
        
        let post = document.createElement("p");

        let id = document.getElementById('id').value;

        fetch('https://jsonplaceholder.typicode.com/posts')

            .then((response) => { response.json()
                    .then((value) => {
                        for(let obj of value){

                            if(obj.id == id){               
                            
                            post.innerHTML = `id: &nbsp; ${obj.id} <br><br> title: &nbsp; ${obj.title} <br><br> Body: &nbsp; ${obj.body}`;
                            document.getElementById('posts').appendChild(post);

                            }
                        }
                        console.log(value);
                    });
                });
            }


    







  