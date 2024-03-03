// This function recieves an array of objects and filters their fields
// returning a nwe array of objects.
// arr is an array of objects.
// fields is an array of strings.

export const getDataFilteredByFields = (arr, fields) => {

  return arr.map(obj => {
    const filteredObj = {};
    fields.forEach(field => {
      if (fields.includes(field)){
        filteredObj[field] = obj[field];
      }
    });
    return filteredObj;
  }).filter(obj => Object.keys(obj).length > 0);

}