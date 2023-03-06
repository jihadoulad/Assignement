export default 

function Checkbox(){

  let groupCheck = Array.from(
    document.getElementsByName('group'))
  
  // Returns the separate checkbox
  let sepCheck = document.getElementById('sep')
  sepCheck.checked = false;
  groupCheck.forEach(element => {
  
    // Setting onChange event for every
    // checkbox in the group
    element.onchange = () => {
        if (element.checked) {
  
            // Unchecking the checkbox
            sepCheck.checked = false;
        }
    }
  })
  console.log(sepCheck);
  // Setting onChange event for the
  // separate checkbox 
 sepCheck.onchange = () => {
   if (sepCheck.checked) {
       groupCheck.forEach(element => {
 
      // Unchecking the checkbox
         element.checked = false; 
       })
   }
}
}