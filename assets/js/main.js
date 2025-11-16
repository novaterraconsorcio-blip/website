const navToggle=document.querySelector('.nav-toggle');const navList=document.getElementById('primary-nav');if(navToggle&&navList){navToggle.addEventListener('click',()=>{const open=navList.classList.toggle('open');navToggle.setAttribute('aria-expanded',open?'true':'false')})}

document.addEventListener('DOMContentLoaded',()=>{
  const buttons=[...document.querySelectorAll('button[aria-expanded]')];
  buttons.forEach((btn)=>{
    const item=btn.closest('.border');
    let panel=(item?item.querySelector('.overflow-hidden'):null)||btn.nextElementSibling;
    if(!panel||!(panel instanceof Element)){
      panel=document.createElement('div');
      panel.className='overflow-hidden hidden';
      const inner=document.createElement('div');
      inner.className='px-6 py-4 text-gray-600';
      inner.textContent=btn.getAttribute('data-answer')||'Estamos atualizando esta resposta. Entre em contato pelo formulário.';
      panel.appendChild(inner);
      btn.parentElement.insertBefore(panel, btn.nextSibling);
    }
    const icon=btn.querySelector('.transition-transform');
    function set(open){
      btn.setAttribute('aria-expanded',open?'true':'false');
      const holder=item||btn.parentElement; if(holder){ holder.setAttribute('data-state',open?'open':'closed') }
      if(icon) icon.classList.toggle('rotate-180',open);
      if(panel){
        panel.style.overflow='hidden';
        panel.style.transition='height 300ms cubic-bezier(0.4,0,0.2,1), opacity 300ms';
        panel.removeAttribute('hidden'); panel.classList.remove('hidden'); panel.setAttribute('aria-hidden',open?'false':'true');
        if(open){
          panel.style.height='auto';
          const h=panel.scrollHeight;panel.style.height='0px';panel.style.opacity='0';
          requestAnimationFrame(()=>{panel.style.height=h+'px';panel.style.opacity='1'});
          setTimeout(()=>{panel.style.height='auto'},330);
        }else{
          const h=panel.scrollHeight;panel.style.height=h+'px';panel.style.opacity='1';
          requestAnimationFrame(()=>{panel.style.height='0px';panel.style.opacity='0'});
          setTimeout(()=>{panel.classList.add('hidden')},330);
        }
      }
    }
    set(btn.getAttribute('aria-expanded')==='true');
    btn.addEventListener('click',()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      const group=item?item.parentElement:null;
      if(group){
        [...group.querySelectorAll('button[aria-expanded="true"]')].forEach((b)=>{
          if(b!==btn){b.setAttribute('aria-expanded','false');const p=(b.closest('.border')?.querySelector('.overflow-hidden'))||b.nextElementSibling;if(p){p.style.height='0px';p.style.opacity='0'}const ic=b.querySelector('.transition-transform');if(ic){ic.classList.remove('rotate-180')}}
        });
      }
      set(!open);
    });
    btn.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();btn.click();}});
  });
});