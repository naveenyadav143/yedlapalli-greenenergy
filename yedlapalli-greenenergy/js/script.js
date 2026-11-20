document.addEventListener('DOMContentLoaded',()=>{
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const form=document.getElementById('enquiryForm');
  if(form){form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const recipient='';const subject=encodeURIComponent('Website enquiry - '+data.get('category'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nEnquiry type: ${data.get('category')}\n\nMessage:\n${data.get('message')}`);const note=document.getElementById('formMessage');if(!recipient){note.textContent='Demo only: the form is ready, but no recipient email has been supplied by the company. Add the official email address in js/script.js before publishing.';return;}window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;});}
});
