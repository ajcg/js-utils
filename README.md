# js-utils
JavaScript utilities for firmata/nodejs.

### Moving Average - movingAverage.js
    First call will determine the number of elements to average.
    Subsequent calls will return the average of all of the non-null elements.
    
##### Example:
```javascript
const mAvg = require('./movingAverage.js');  // Include the script in your nodejs code

var tempAverageC = mAvg.Avg(60);             // Return a function to Average over 60 elements
var avgC = tempAverageC(20.1);               // Return the current average when you pass in the 
                                             //  next value to average

console.log('Temp Average: ' + celsius.toFixed(1) + '\xB0C');
```
###### Outputs to the console: 
Temp Average: 20.1°C
