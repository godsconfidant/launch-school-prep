// Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'

let weather = 'hail';

switch(weather) {
  case 'sunny':
    console.log('Beach day')
    break;
  case 'rainy': 
    console.log('Get your umbrella cause I\'m brain storming');
    break;
  case 'foggy': 
    console.log('Slow it down on those roads');
    break;
  default:
    console.log('Stay inside');
}