document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  if (btn && list) btn.addEventListener('click', () => list.style.display = list.style.display === 'flex' ? 'none' : 'flex');

  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      try{
        const res = await fetch('/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
        const json = await res.json();
        document.getElementById('formResult').textContent = json.message || 'Sent';
        form.reset();
      }catch(err){
        document.getElementById('formResult').textContent = 'An error occurred.';
      }
    });
  }
});
