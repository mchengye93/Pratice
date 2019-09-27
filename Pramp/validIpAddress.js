/*
Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X 
is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", 
"1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

Examples:

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false
*/
function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/

	// your code goes here
  /*
  Input: String
  Output: Boolean (valid or not IP Address)
  
  Steps: O(n), space O(n)array of split
    - Split by '.'
    - Length !=4 it's invalid
    - go through each of element, element >=0 and element <=255
    
    Number('oops') : NaN  //if isNan then return false
    Number('1'): 1  //check it is meets condition
    isNaN
  */
  
  let ipArr = ip.split('.');
  
  if (ipArr.length !== 4) return false;
  
  // Array.map, reduce, filter 
  // ipArr[i].every
  for (let i = 0; i < ipArr.length ; i++) {
    if(ipArr[i].length === 0) return false;
    if (ipArr[i].length >= 2 && ipArr[i][0] == 0) return false;
    
    let num = Number(ipArr[i]);
    
    // 0x1  3 letters
    // if ipArr[i].length >= 2: isArr[i][0] !== 0
    // we can't have leading 0
    
    if (isNaN(num)) {
      return false;
    } else {
      if (!(num >= 0 && num <= 255) ) {
        return false;
      }
    }
  }
  return true;
  
}


// '0.0.0.0'
// '123.24.59.99'
// '192.168.123.456'

// Number('') : 0

let ipArr = ['0.0.0.0','123.24.59.99','192.168.123.456'];
for (let i = 0; i < ipArr.length; i++) {
  
  console.log(validateIP(ipArr[i]));
}

