const d = new Date(2023, 5, 10, 15, 0, 0);
const month = d.getMonth();
const hour = d.getHours();


switch (month) {
    case 1:
        console.log('Its January');
        break;
        
    case 2:
        console.log('Its Febuary');
        break;
    case 3:
        console.log('Its March');
        break;
        default:
            console.log('It is just another Normal Day!')
}



switch (true) {
    case hour < 12:
    console.log('Good morning you lucky charm');
    break;
 
    case hour < 18:
    console.log('Its Gym time buddy, move dat Ass');
    break;
 
    case hour === 22:
    console.log('Better be on you bed by now!');
    break;
 
}


// // Ternary operator will be used very ofter

// const age = 2;

// age >= 18 ? console.log('you can vote!') : console.log('You can not vote!')

// // Assigning a condintioanl value to a variable 
// const canVote = age >= 18 ? true : false;
// const canVote2 = age >= 18 ? 'You can vote' : 'You can not Vote!';

// console.log(canVote);
// console.log(canVote2);

const auth = false;
let redirect
// will use the longer method first 
if (auth) {

    alert('Welocome to the dashboard');
    redirect = '/dashboard';
 } else {
    alert('Access Denied');
    redirect = '/login';

 }

console.log(redirect);
