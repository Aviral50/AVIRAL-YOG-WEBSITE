/*{   
  const form = document.getElementById('contactFormData');

  form.addEventListener('Submit' ,
      function (event) {
        event.preventDefault();
      }

      const name : document.getElementById('name').value;
      cyonst email : document.getElementById('email').value;


      const formData = {
        name: name,
        email: email,
      };

      const formDataJSON = JSON.stringify(formData)
      localStorage.setItem('contactFormData', formDataJSON);

      alert('Form submitted successfully!');
    } );*/
  

/*function validateForm(){
  let name= document.getElementById('name').value
  let email= document.getElementById('Email').value
  let regExpName = newRegExp(/^\d/)
  let regExpEmail = newRegExp(/^\d/)

  if (name===" ")
    {
      alert("Name cannot be empty")
      return false
    }

}*/

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Capture the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Create a contact object
  const contact = { name: name, email: email };

  // Get existing contacts from localStorage
  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  // Add the new contact to the list
  contacts.push(contact);

  // Save back to localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));

  console.log("Contact data has been added to localStorage.");
  
  // Clear the form fields after successful submission
  document.getElementById('contactForm').reset();
});
