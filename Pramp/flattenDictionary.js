/*
Given a dictonary flatten it to reproduce the following result:
input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
*/

function flattenDictionary(dict) {
    let newDict = {};
    
    for (let key in dict) {
      
      let val = dict[key];
      //console.log(typeof(val));
      if ( typeof(val) === 'object' ) {
        flattenObject(newDict, key, val);
           
      } else {
        newDict[key]=val;
      }
    }
    // go through keys
        //if key contains an object 
    return newDict;
  }
  
  function flattenObject(dict,prevKey,object) {
    //return a new key and value
  
    for (let key in object) {
      let val = object[key];
     
       if (typeof(val) === 'object') {
         if (key.length > 0){
           flattenObject(dict,prevKey+'.'+key,val);
         } else {
           flattenObject(dict,prevKey,val);
         }
  
       } else {
         if (key.length > 0) {
           dict[prevKey+'.'+key] = val;
         } else {
           dict[prevKey] = val;
         }
         
       }
    }
    return;
    
  }
  
  let dict = {
              "Key1" : "1",
              "Key2" : {
                  "a" : "2",
                  "b" : "3",
                  "c" : {
                      "d" : "3",
                      "e" : {
                          "" : "1"
                      }
                  }
              }
          };
  console.log(flattenDictionary(dict));
  
  