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


// Ternary operator will be used very ofter