// we write a function to convert Fahrenhiet to Celcius

// formula (32F -32) x 5/9 = 0C


const farenheitValues = [23,140,212,41];
const celciusEquivalence = [];

const getCelcius = () =>{
//   return  farenheitValues.map(value =>(value-32) * 5/9);
    for(let i =0; i<farenheitValues.length; i++){
        var celciusValue= (farenheitValues[i]-32) * 5/9;
        celciusEquivalence.push(celciusValue);
    }
    return celciusEquivalence;
}


