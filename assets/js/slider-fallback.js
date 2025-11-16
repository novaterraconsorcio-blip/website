window.addEventListener('load',function(){
try{
var h2=[].slice.call(document.querySelectorAll('h2')).find(function(el){return (el.textContent||'').trim().includes('Por Que Escolher a Nova Terra?')});
if(!h2)return;var section=h2.closest('section');if(!section)return;
var card=section.querySelector('[class*="rounded-2xl"][class*="shadow-lg"]');if(!card)return;
var circle=card.querySelector('[class*="w-20"][class*="h-20"]');
var titleEl=card.querySelector('h3');
var descEl=card.querySelector('p');
var prevBtn=section.querySelector('[aria-label="Benefício anterior"]');
var nextBtn=section.querySelector('[aria-label="Próximo benefício"]');
var dots=[].slice.call(section.querySelectorAll('button')).filter(function(b){var a=b.getAttribute('aria-label')||'';return a.includes('Ir para benefício')});
var items=[
{title:'Consórcio de Imóveis',desc:'Conquiste sua casa própria ou invista em imóveis sem comprometer seu orçamento.',color:'#658f4c'},
{title:'Consórcio de Veículos',desc:'Adquira seu carro novo ou seminovo com parcelas que cabem no seu bolso.',color:'#346d47'},
{title:'Consórcio de Serviços',desc:'Realize reformas, viagens e outros projetos de forma planejada.',color:'#658f4c'},
{title:'Segurança e Confiança',desc:'Administradora regulamentada pelo Banco Central com total transparência.',color:'#346d47'},
{title:'Sem Juros',desc:'Pague apenas taxa de administração, sem juros abusivos.',color:'#658f4c'},
{title:'Flexibilidade',desc:'Escolha o prazo e valor que melhor se adequam ao seu planejamento.',color:'#346d47'}
];
var idx=0;var last=0;var animating=false;
function updateDots(){if(!dots.length)return;for(var k=0;k<dots.length;k++){var d=dots[k];d.classList.remove('bg-gray-300');d.classList.remove('bg-[#658f4c]');d.classList.remove('w-8');d.classList.remove('w-3');if(k===idx){d.classList.add('bg-[#658f4c]');d.classList.add('w-8')}else{d.classList.add('bg-gray-300');d.classList.add('w-3')}}}
function animateCard(dir){if(!card)return;animating=true;card.style.transition='transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms';card.style.transform='translateX('+(dir>0?'-40px':'40px')+')';card.style.opacity='0';setTimeout(function(){card.style.transform='translateX(0)';card.style.opacity='1';setTimeout(function(){animating=false},320)},320)}
function setActive(i,opts){var dir=(typeof opts==='object'&&typeof opts.dir==='number')?opts.dir:(i>last?1:-1);last=idx;idx=(i+items.length)%items.length;animateCard(dir);if(circle)circle.style.background=items[idx].color;if(titleEl)titleEl.textContent=items[idx].title;if(descEl)descEl.textContent=items[idx].desc;updateDots()}
setActive(0,{dir:1});
var timer=setInterval(function(){setActive(idx+1,{dir:1})},5000);
function go(i,dir){clearInterval(timer);setActive(i,{dir:dir});timer=setInterval(function(){setActive(idx+1,{dir:1})},5000)}
if(prevBtn)prevBtn.addEventListener('click',function(){if(animating)return;go(idx-1,-1)});
if(nextBtn)nextBtn.addEventListener('click',function(){if(animating)return;go(idx+1,1)});
if(dots.length)dots.forEach(function(d,k){d.addEventListener('click',function(){if(animating)return;go(k,k>idx?1:-1)})});
document.addEventListener('keydown',function(ev){if(!section.contains(document.activeElement))return;if(animating)return;if(ev.key==='ArrowLeft')go(idx-1,-1);else if(ev.key==='ArrowRight')go(idx+1,1)});
}catch{}
});