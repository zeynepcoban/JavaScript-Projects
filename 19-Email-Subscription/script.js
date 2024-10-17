 const scriptURL = 'https://script.google.com/macros/s/AKfycbyWX5bpDRSSH0lo9FCzXAO2p6NdPvDTltDXUBXw2pPZq6s8dJcth3N7WnlDMOqHfRaEbQ/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
  e.preventDefault()
    fetch(scriptURL,{ method: 'POST', body: new FormData(form)})
      .then(response => {
       msg.innerHTML="Thank You For Subscribing!";
       setTimeout(function(){
        msg.innerHTML="";
       },5000)
       form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
