

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    let clone = {};
  
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        clone[prop] = deepClone(obj[prop]);
      }
    }
  
    return clone;
  }
  
  const obj = {
    name: 'test',
    age: 25,
    etc: {
      uk: 'test',
      countries: [
        'test',
        'test',
        'test',
        {
          key: 'alaki'
        }
      ]
    }
  }
  
  let clone = deepClone(obj);
  console.log(clone,obj);