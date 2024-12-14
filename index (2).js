//<!DOCTYPE html>
//<html lang="en">
//<head>
 // <meta charset="UTF-8">
  //<meta name="viewport" content="width=device-width, initial-scale=1.0">
  //<title>Contact Form</title>
//</head>
//<body>


  <script>
{   
  const form = document.getElementById('contactFormData');

  form.addEventListener('Submit' ,
      function (event) {
        event.preventDefault();
      }

      const name : document.getElementById('name').value;
      const email : document.getElementById('email').value;


      const formData = {
        name: name,
        email: email,
      };

      const formDataJSON = JSON.stringify(formData)
      localStorage.setItem('contactFormData', formDataJSON);

      alert('Form submitted successfully!');
    } );
  </script>

//</body>
//</html>
