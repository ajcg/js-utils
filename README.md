# js-utils
JavaScript utilities for firmata/nodejs.

### Moving Average - movingAverage.js
    First call will determine the number of elements to average.
    Subsequent calls will return the average of all of the non-null elements.
    
##### Example:
```javascript
const mAvg = require('./js-utils/movingAverage.js');  // Include the script in your nodejs code

var tempAverageC = mAvg.Avg(60);             // Return a function to Average over 60 elements
var avgC = tempAverageC(20.1);               // Return the current average when you pass in the 
                                             //  next value to average

console.log('Temp Average: ' + avgC.toFixed(1) + '\xB0C');
```
###### Outputs to the console: 
```Temp Average: 20.1°C```

### Get Random - getRandom.js
    Return a random number between min and max

##### Example:
```javascript
const random = require('./js-utils/getRandom.js');                  // Include the script in your nodejs code

console.log('Random number: ' + random.getRandom(1, 10));  // Show a random number between 
                                                           //  1 and 10 (inclusive)
```
###### Outputs to the console:
```Random number: 3```
