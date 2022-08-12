const question = [
{
    id : 0,
    q :"1. Capital Of India",
    a : [
   
            {text:"a. New Delhi" ,
             value : "true"},

           { text :"b. Mumbai" , 
           value : "false"},
           
           { text :"c. Hyderabad" , 
           value : "false"},

           { text :"d. Karnataka" , 
           value : "false"},
        
    ]
},
{
    id:1,
    q:"2. Capital Of Ireland",
    a:[
        {
            text : "a. Dublin", 
            value : "true"},
           {
             text : "b. London" ,
              value : "false",
        },

        { text :"c. Netherlands" , 
           value : "false"},

           { text :"d. Paris" , 
           value : "false"},
    ]
},

{
    id:2,
    q:"3. Caital Of Afghanistan",
    a:[
        {
            text : "a. Afgan", 
            value : "false"},
           {
             text : "b. Kabul" ,
              value : "true",
        },
        { text :"c. Punjab" , 
           value : "false"},

           { text :"d. Karachi" , 
           value : "false"},
    ]
},
{
    id:3,
    q:"4. Capital Of   Algeria",
    a:[
        {
            text : "a. Dublin", 
            value : "false"},
           {
             text : "a. Algiers" ,
              value : "true",
        },
        { text :"b. Ntreh" , 
           value : "false"},

           { text :"b. Mands" , 
           value : "false"},
    ]
},

{
    id:4,
    q:"5. Capital Of  Albania",
    a:[
        {
            text : "a. xxxxx", 
            value : "false"},
           {
             text : "b. Tirana" ,
              value : "true",
        },
        { text :"b. Nhgds" , 
           value : "false"},
           
           { text :"b. Pttre" , 
           value : "false"},
    ]
},

{
    id : 5,
    q:"6. Capital Of Pakistan",
    a:[
        {
            text : "a. Islamabad",
            value : "true"
        },
        {
            text : "b. Karachi",
            value:"false",
        },
        { text :"b. Lahore" , 
           value : "false"},
           { text :"b. Ravalpindi" , 
           value : "false"},
    ]

}

]
 var start = true;
 function iterate(id){
 
 const que = document.getElementById('question');
 que.innerText = question[id].q;

 const op1 = document.getElementById('op1');
 const op2 = document.getElementById('op2');
 const op3 = document.getElementById('op3');
 const op4 = document.getElementById('op4')

 op1.innerText = question[id].a[0].text;
 op2.innerText = question[id].a[1].text;
op3.innerText = question[id].a[2].text;
op4.innerText = question[id].a[3].text;

 op1.value = question[id].a[0].value;
 op2.value = question[id].a[1].value;
 op3.value = question[id].a[2].value;
 op4.value = question[id].a[3].value;
 var selected = "";
 
}
 if(start){
    iterate(0);
 }
 const next = document.getElementById('next');
//const option = document.getElementsByClassName('option');
//option.style.backgroundColor = "white";
var id = 0;
const prevDiv = document.getElementById('prev');
 next.addEventListener('click',()=>{
    start = false;
    if(id < question.length-1){
        id++
question[id].a[0]
        iterate(id);
    }
    
    if(prevDiv.style.display === 'none'){
        prevDiv.style.display = 'block';
    }
    if(op1.style.backgroundColor == 'yellow'){
        op1.style.backgroundColor = "antiquewhite"
    }
    if(op2.style.backgroundColor == 'yellow'){
        op2.style.backgroundColor = "antiquewhite"
    }
    if(op3.style.backgroundColor == 'yellow'){
        op3.style.backgroundColor = "antiquewhite"
    }
    if(op4.style.backgroundColor == 'yellow'){
        op4.style.backgroundColor = "antiquewhite"
    }
    

 })

 const btn = document.getElementsByClassName('sub')[0];
 var sum = 0;
 
  
 op1.addEventListener('click',()=>{
 op1.style.backgroundColor = "yellow";
 /*op2.style.backgroundColor = "blue";
 op3.style.backgroundColor = "blue";
 op4.style.backgroundColor = "blue";*/
if(op1.value == "true")
{
    sum = sum + 1
}
 })

 op2.addEventListener('click',()=>{
  
    op2.style.backgroundColor = "yellow";
    
    if(op2.value == "true"){
        sum  = sum + 1;
    }
 })

 op3.addEventListener('click',()=>{
   
    op3.style.backgroundColor = "yellow";
  
   if(op1.value == "true")
   {
       sum = sum + 1
   }
    })

    op4.addEventListener('click',()=>{
       
        op4.style.backgroundColor = "yellow";
       if(op1.value == "true")
       {
           sum = sum + 1
       }
        })
 btn.addEventListener('click',()=>{
    alert(sum);
 })
 
 
 prevDiv.addEventListener('click',prevQuest)
 function prevQuest(){
    id--;
    iterate(id);
 }
 
 const reSet = document.getElementById('reset');

 reSet.addEventListener('click',()=>{
    if(prevDiv.style.display == 'block'){
        prevDiv.style.display = 'none';
    }
    iterate(0);
 })