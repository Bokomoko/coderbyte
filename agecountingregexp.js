/* 
in the javascript file, write a program to perform a GET request on the route
https://coderbyte.com/api/challenges/json/age-counting

which cointains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER.

Your goal is to count how many intem exist that have an age equal to 32.
The you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on 
a separate line in the order they appeard in the json file( the filhe shoud end with a new line character on its own line).
Finally, then output the SHA1 hash of the file.

Example Input:
{ "data": "key=IAfpK, age= 32, key=WNVdi, age=65, key=jp9zt, age=40, key=9snd2, age=32"}

The code below does use regular expressions and is much simpler.
*/
import axios from 'axios';

(async () => {
  const URL = 'https://coderbyte.com/api/challenges/json/age-counting';
  const request = await axios.get(URL);
  const { data } = request.data;

  const regExpAge = new RegExp(/(?<=age=)\d+/, 'g');
  const regExpKey = new RegExp(/(?<=key=)\w+/, 'g');
  const regBoth = new RegExp(/(?<=age=)\d+|(?<=key=)\w+/g);
  const keysArray = data.match(regExpKey);
  const valuesArray = data.match(regExpAge);
  const pairValues = data.match(regBoth);
  console.log(keysArray);
  console.log(valuesArray);
  console.log(pairValues);
})();
/*
  create a regular expression that will get key= and age= values from string
  */
