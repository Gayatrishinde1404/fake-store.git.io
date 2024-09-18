
const server = new XMLHttpRequest()

let data;
server.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        data = JSON.parse(this.responseText);
        console.log(data)

        data.map((product) => {
            document.querySelector('#result').innerHTML+=`
            <div class="border w-[18rem] rounded-md shadow-md h-[110vh] ">
                 <img src="${product.image}" class="h-[40vh]">  
             <div class = "p-2"> 
                 <h2 class="test-sm">${product.title}</h2>
                 <p class="text-xs">${product.description}</p>
                 <h3 class="text-sm text-blue-900">${product.price}Rs/-</h3>
                 <button class="text-white bg-rose-900 shadow w-[80%] rounded-md p-2">Buy Now</button>
             </div>    
            </div>
         `
        })  
    }
          
} 


server.open('GET','https://fakestoreapi.com/products',true);
server.send();


function filterData(){
   const newData = data.filter((product) => {
        return product.price >=0 && product.price <=30;
    })

    console.log('newData', newData)

   document.querySelector('#result').innerHTML="";

    newData.map((product) => {
        document.querySelector('#result').innerHTML+=`
        <div class="border w-[18rem] rounded-md shadow-md h-[110vh] ">
             <img src="${product.image}" class="h-[40vh]">  
         <div class = "p-2"> 
             <h2 class="test-sm">${product.title}</h2>
             <p class="text-xs">${product.description}</p>
             <h3 class="text-sm text-blue-900">${product.price}Rs/-</h3>
             <button class="text-white bg-rose-900 shadow w-[80%] rounded-md p-2">Buy Now</button>
         </div>    
        </div>
     `
    })  
}



function filterPrice(){
    const newData1 = data.filter((product) => {
         return product.price >=30 && product.price <=80;
     })
 
     console.log('newData1', newData1)                           
 
    document.querySelector('#result').innerHTML="";
 
     newData1.map((product) => {
         document.querySelector('#result').innerHTML+=`
         <div class="border w-[18rem] rounded-md shadow-md h-[110vh] ">
              <img src="${product.image}" class="h-[40vh]">  
          <div class = "p-2"> 
              <h2 class="test-sm">${product.title}</h2>
              <p class="text-xs">${product.description}</p>
              <h3 class="text-sm text-blue-900">${product.price}Rs/-</h3>
              <button class="text-white bg-rose-900 shadow w-[80%] rounded-md p-2">Buy Now</button>
          </div>    
         </div>
      `
     })  
 }





 function filterPrice2(){
    const newData3 = data.filter((product) => {
         return product.price >=100 && product.price <=200;
     })
 
     console.log('newData3', newData3)                           
 
    document.querySelector('#result').innerHTML="";
 
     newData3.map((product) => {
         document.querySelector('#result').innerHTML+=`
         <div class="border w-[18rem] rounded-md shadow-md h-[110vh] ">
              <img src="${product.image}" class="h-[40vh]">  
          <div class = "p-2"> 
              <h2 class="test-sm">${product.title}</h2>
              <p class="text-xs">${product.description}</p>
              <h3 class="text-sm text-blue-900">${product.price}Rs/-</h3>
              <button class="text-white bg-rose-900 shadow w-[80%] rounded-md p-2">Buy Now</button>
          </div>    
         </div>
      `
     })  
 }



 function filterPrice3(){
    const newData4 = data.filter((product) => {
         return product.price >=200 && product.price <=600;
     })
 
     console.log('newData4', newData4)                           
 
    document.querySelector('#result').innerHTML="";
 
     newData4.map((product) => {
         document.querySelector('#result').innerHTML+=`
         <div class="border w-[18rem] rounded-md shadow-md h-[110vh] ">
              <img src="${product.image}" class="h-[40vh]">  
          <div class = "p-2"> 
              <h2 class="test-sm">${product.title}</h2>
              <p class="text-xs">${product.description}</p>
              <h3 class="text-sm text-blue-900">${product.price}Rs/-</h3>
              <button class="text-white bg-rose-900 shadow w-[80%] rounded-md p-2">Buy Now</button>
          </div>    
         </div>
      `
     })  
 }