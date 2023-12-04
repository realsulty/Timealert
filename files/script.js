// const d = new Date(2023, 5, 10, 15, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();


// switch (month) {
//     case 1:
//         console.log('Its January');
//         break;
        
//     case 2:
//         console.log('Its Febuary');
//         break;
//     case 3:
//         console.log('Its March');
//         break;
//         default:
//             console.log('It is just another Normal Day!')
// }



// switch (true) {
//     case hour < 12:
//     console.log('Good morning you lucky charm');
//     break;
 
//     case hour < 18:
//     console.log('Its Gym time buddy, move dat Ass');
//     break;
 
//     case hour === 22:
//     console.log('Better be on you bed by now!');
//     break;
 
// }


// // Ternary operator will be used very ofter

// const age = 2;

// age >= 18 ? console.log('you can vote!') : console.log('You can not vote!')

// // Assigning a condintioanl value to a variable 
// const canVote = age >= 18 ? true : false;
// const canVote2 = age >= 18 ? 'You can vote' : 'You can not Vote!';

// console.log(canVote);
// console.log(canVote2);

// const auth = true;
// let redirect
// // will use the longer method first 
// if (auth) {

//     alert('Welocome to the dashboard');
//     redirect = '/dashboard';
//  } else {
//     alert('Access Denied');
//     redirect = '/login';

//  }
 // this is the shortcut way
//  const redirect = auth 
// ? (alert('welcome to the dashboard'), '/dashboard')
// : (alert('Acces Denied'), '/login');
 
//  console.log(redirect);

//  auth ? console.log('Welcome to the dashboard') : null; // there must be a null value here <<
// auth && console.log('Welcome to the dashboard'); // here no need since u used && opretator

// for loops ( you know this already, but only for practises reasons )
// for ( inital Expression ; condionExpression; incrementExpression)
//  Statement ;
// initilaize a variable/ counter 
// codition that the loop will continue to run until meet
// Expression that will be excuted after each iteration of the loop
// Statement code that will be executed each time the loop is run

// for (let i =0; i<=10; i++){
//     if (i === 7 ){
//         console.log('7 is my lucky number');

//     } else{
//         console.log('Number ' + i);
//     }
// }

// Nest Loops
// for ( let i = 1; i <=10; i++){
//     console.log('number '+ i);
    
//     for (let j = 1; j<=10; j++) {
//         console.log(`${i} * ${j} = ${i * j }`); // youcan insert a break; or continue 
//     }
// }

// FizzBuzz challenge

// let i = 1;

// do {
//     console.log(i);
// i++;
// {
//     let j = 5
//     console.log('Fizz');
//     j++
//     {
//         while ( j === 3 ); 
//     }
// }
// }
// while (i <= 100);


// // For Loop
// for (let i =1; i<=100; i++){
         
//     if (i % 15 === 0 ) {
//         console.log('FizzBuzz')
//     }
//     else if ( i % 3 ===0 ) {
//             console.log('Fizz');
//         }
//         else 
//             if (i %5  ===0 ){
//                 console.log('Buzz');
//             }     
//          else 
//             console.log(i);
          
//     }

// // While loop 
// let j = 1;
// while ( j <=100 ){
//     if (i % 15 === 0 ) {
//         console.log('FizzBuzz')
//     }
//     else if ( i % 3 ===0 ) {
//             console.log('Fizz');
//         }
//         else 
//             if (i %5  ===0 ){
//                 console.log('Buzz');
//             }     
//          else {

//              console.log(i);
//          }
//           j++ 

// }

// Normal looping
const items = ['book', 'table', 'chair', 'desk'];

for (let i = 0; i<items.length; i++){
    console.log(items[i]);
}

// a cleaner way of doing it ^ The Of Loop 

for ( const item of items){ // here the item is a name you introduced 
    console.log(item);
}

// Loop over maps
const map = new Map();
map.set('name', 'john');
map.set('age', 30);

for ( const [key, value]of map) {
    console.log(key, value);
}

// For Each loop

// const socials = ['X', 'LinkedIn', 'Facebook', 'Instagram'];

// socials.forEach((item) => console.log(item)); 

// // Filter

// const numbers =[1,2,3,4,5,6,7,8,9,10,11,12];

// // const evenNumbers = numbers.filter(function(number){
// // return number % 2 === 0;

// // });
// // Shirt version 
// const evenNumbers = numbers.filter(number => number %2 === 0);
// console.log(evenNumbers);

const companies = [
    {name:'company one', catagorey:'Finance',start:1981, end:2004},
    {name:'company Two', catagorey:'Retail',start:1992, end:2008},
    {name:'company three', catagorey:'Auto',start:1999, end:2007},
    {name:'company Four', catagorey:'Retail',start:1989, end:2010},
    {name:'company Five', catagorey:'Technology',start:2009, end:2014},
    {name:'company Six', catagorey:'Finance',start:1987, end:2010},
    {name:'company Seven', catagorey:'Auto',start:1986, end:1996},
    {name:'company eight', catagorey:'Technology',start:2011, end:2016},
    {name:'company Nine', catagorey:'Retail',start:1981, end:1989},
];
// Get Retail companies only using filter or map
 const retailCompanies = companies.filter((company) => company.catagorey === 'Retail');
 console.log(retailCompanies);



 // Get companies that started in or after 1980 and ended in or before 2005 
 const earlyCompanies = companies.filter(
    (company) =>company.start >= 1980 && company.end <= 2005 
    );

    console.log(earlyCompanies);

    const longCompanies = companies.filter(
        (company) => company.end - company.start >= 10 
        );

        console.log(longCompanies);
// Using map

const companyNames = companies.map ((company) => company.name);
// console.log(companyNames);

// calling two infos from the company object 
const companyInfo = companies.map ((company) => {
    return {
        name: company.name,
        catagorey: company.catagorey,
    };
});
console.log(companyInfo);

        // Using Map 
        const numbers = [1,2,3,4,5];
        const doubleNumbers = numbers.map ((number) => number * 2 );
        console.log(doubleNumbers);

