//Q1

for(var i= 0; i<5; i++){
    console.log("Hello World !")
}

//Q2

for(var i=1 ; i<=10; i++){
    console.log(i)
}

//Q3

var num=prompt("Enter Number For Multipilcation \n")
    for(i=1; i<=15; i++){
        console.log(num+" "+"x"+" "+i+" "+"="+num*i+"\n")
    }
 
//Q4

var A=["Nokia","Samsung","Apple","Sony","Huawei"];
for(var i=0; i<A.length; i++){
    console.log(A[i])
}


//Q5

var fruit =["Apple","Banana","Mango","Orange","Strawberry"]
for(var i=0; i<fruit.length; i++){
    console.log("Element At Index"+" "+i+" "+"is"+" "+fruit[i])
}

//Q6

var empty_list=prompt("Enter Number Of Item's \n")
var item1=prompt("Enter First Item \n")
var item2=prompt("Enter Second Item \n")
var item3=prompt("Enter Third Item \n")
var item4=prompt("Enter Forth Item \n")
console.log(empty_list+"\n"+item1+"\n"+item2+"\n"+item3+"\n"+item4)   


//Q7

//a)

for (i=1; i<=15; i++){
    console.log(i)
}

//b)

for (i=10; i>=1; i--){
    console.log(i)
}

//c)

for (i=0; i<=20; i= i+2){
    console.log(i)
}


//d)

for (i=1; i<=20; i= i+2){
    console.log(i)
}

//e)

for (i=0; i<=20; i= i+2){
    console.log(i+"K")
}


//Q8

var bakery_item = ['cake', 'apple pie', 'cookie', 'chips', 'cookie', 'patties']
var user=prompt("Enter What You Want To Eat \n")
var itemfonud=false
for(var i=0; i< bakery_item.length; i++){
   debugger
    if(bakery_item[i] === user){
        alert("Available ")
    
        itemfound=true
        break
    }
    }
if (itemfonud === false) {
    alert('Sorry! Entered Item is not Available')
}

//Q9

var num=[24, 53, 78, 91, 12]
var largest_number=0
for(var i=0; i<num.length; i++){
    if(num[i]>largest_number){
        largest_number=num[i]
    }
}
alert(largest_number)

//10

var num=[24, 53, 78, 91, 12]
var Smallest_number=num[0]
for(var i=0; i<num.length; i++){
    if(num[i]<Smallest_number){
    Smallest_number=num[i]    
    }
}
alert(Smallest_number)

//11

var num=[24, 53, 78, 91, 12]
var Smallest_number=num[0]
var Largest_number=0
for(var i=0; i<num.length; i++){
    if(num[i]<Smallest_number){
    Smallest_number=num[i]    
    
}else if(num[i]>Largest_number){
    Largest_number=num[i]    
    }
}
alert("Array Item is:"+" "+num)
alert("The Smallest Number is "+" "+Smallest_number)
alert("The Largest Number is "+" "+Largest_number)

//Q12

for(var i=5; i<=100; i= i+5){
    console.log(i)
}


//Q16

var num=prompt("Enter The value \n")
for(i=num; i>1; i= i-0.5){
    console.log(i)
}

//Q17

for(var i=0; i<=20; i++){
    if(i % 2===0){
        console.log(i+" "+"Number Is Odd")
    }else{
        console.log(i+" "+"Number Is Even")
    }
}