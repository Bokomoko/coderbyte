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

The code below does not use regular expressions.
*/
import axios from 'axios';

(async () => {
  const URL = 'https://coderbyte.com/api/challenges/json/age-counting';
  const request = await axios.get(URL);
  const { data } = request.data;
  const onlyKeys = data.split('key=').filter(item => item !== '');
  const onlyValues = onlyKeys
    .map(e => {
      const [key, value] = e.split(', age=');
      return [key, value];
    })
    .map(([key, value]) => {
      const theKey = key;
      const theValue = +value.replace(', ', '');
      return [theKey, theValue];
    });
  console.log(onlyValues);
})();
