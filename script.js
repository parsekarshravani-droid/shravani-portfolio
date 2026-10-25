/* ===== EDIT YOUR CONTENT HERE ===== */
const CONFIG={
 email:"parsekarshravani@gmail.com",          // TODO: replace with your real email
 github:"https://github.com/parsekarshravani-droid",                // e.g. "https://github.com/parsekarshravani-droid"
 linkedin:"https://www.linkedin.com/in/parsekarshravani/",         // e.g. "https://www.linkedin.com/in/parsekarshravani/"
 facts:[["3","featured projects"],["6","skill areas"],["2025–26","Joint Secretary"]],
 timeline:[
  ["Foundations","Programming in Python, Java and C++, and the fundamentals of computer engineering."],
  ["Web development","Frontend with HTML, CSS, JavaScript and React; backend with Flask and Spring Boot."],
  ["AI & machine learning","Exploring NLP and computer vision with scikit-learn and face-api.js."],
  ["Now","Combining all of it into full-stack projects that solve real problems."]],
 skills:{
  "Programming":["Python","Java","C++"],"Frontend":["HTML","CSS","JavaScript","React"],"Backend":["Flask","Spring Boot"],
  "Databases":["MySQL","PostgreSQL","Supabase"],"AI / ML":["scikit-learn","NLP","Computer vision","TF-IDF",
  "Logistic Regression",
  "Kaggle Dataset (ISOT)"],"Tools":["Git","GitHub","VS Code","Node.js","npm","Netlify","Render"]},
 projects:[ // Leave live/source empty until you have real links; buttons show as unavailable.
  {key:"A",title:"SpendWise AI",sub:"Personal expense analyzer",
   desc:"A finance dashboard that helps users manage expenses, analyze spending patterns, track budgets, and explore AI-powered financial insights.",
   tech:["Python","Flask","HTML","CSS","JavaScript","PostgreSQL (Supabase)","Vite","React.js"],live:"https://spenvise.netlify.app/",source:"https://github.com/parsekarshravani-droid/spendwise"},
  {key:"B",title:"AI Driver Monitoring System",sub:"Computer vision for road safety",
   desc:"A computer vision project designed to monitor driver attention and detect potential signs of drowsiness.",
   tech:["JavaScript","face-api.js","HTML","CSS","Vite","Node.js & npm","React"],live:"https://driver-monitor.netlify.app/",source:"https://github.com/parsekarshravani-droid/driver-monitor"},
  {key:"C",title:"Fake News Detection",sub:"NLP text classifier",
   desc:"A machine learning application that classifies news text using natural language processing and displays prediction confidence.",
   tech:["Python","Flask","scikit-learn","TF-IDF","React.js","Vite","Kaggle Fake and Real News Dataset (ISOT)"],live:"https://fake-news-detectorz.netlify.app/",source:"https://github.com/parsekarshravani-droid/fake-news-detector",dataset: "https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset"}]
};
/* ================================== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const mock={
 A:`<div class="mockup mA"><div class="kpi">₹ 24,380<small>spent this month</small></div><div class="donut"></div><div class="bars"><i style="height:45%"></i><i style="height:70%"></i><i style="height:38%"></i><i style="height:90%"></i><i style="height:60%"></i><i style="height:76%"></i></div></div>`,
 B:`<div class="mockup mB"><div class="face"><div class="eyes"><i></i><i></i></div></div><div class="ear"><i></i></div></div>`,
 C:`<div class="mockup mC"><div class="news"><i></i><i></i><i></i><i style="width:60%"></i><div class="verdict"><span>Likely real</span><span>87%</span></div><div class="meter"><i></i></div></div></div>`};
const link=(href,t,cls="")=>href?`<a class="btn ${cls}" href="${href}" target="_blank" rel="noopener">${t}</a>`:`<a class="btn ${cls}" aria-disabled="true" role="link" title="Add this link in CONFIG">${t} (soon)</a>`;
const acts = p => `
  <div class="acts">
    ${link(p.live, "View project")}
    ${link(p.source, "View source", "ghost")}
    ${p.dataset ? link(p.dataset, "View dataset", "ghost") : ""}
  </div>
`;

$('#projects').innerHTML=CONFIG.projects.map((p,i)=>`<article class="proj rv">
 <button class="shot" data-i="${i}" aria-label="Open details for ${p.title}">${mock[p.key].replace('class="mockup','style="position:absolute;inset:0" class="mockup')}</button>
 <div><h3>${p.title}</h3><p class="sub">${p.sub}</p><p>${p.desc}</p><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join("")}</ul>${acts(p)}</div></article>`).join("");
const dlg=$('#dlg');
$('#projects').addEventListener('click',e=>{const b=e.target.closest('.shot');if(!b)return;const p=CONFIG.projects[b.dataset.i];
 $('#dbody').innerHTML=`<h3 id="dt">${p.title}</h3><p>${p.desc}</p><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join("")}</ul>${acts(p)}`;dlg.showModal();});
dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('.x'))dlg.close()});
$('#facts').innerHTML=CONFIG.facts.map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join("");
$('#tl').innerHTML=CONFIG.timeline.map(([h,t])=>`<li><h3>${h}</h3><p>${t}</p></li>`).join("");
const cols=['var(--coral)','var(--mustard)','var(--periwinkle)'];
$('#sk').innerHTML=Object.entries(CONFIG.skills).map(([g,a],gi)=>`<div class="rv"><h3>${g}</h3><div class="chips">${a.map(s=>`<span class="chip" style="--c:${cols[(gi)%3]}">${s}</span>`).join("")}</div></div>`).join("");
const mail=$('#mail');mail.href="mailto:"+CONFIG.email;mail.textContent=CONFIG.email;
$('#soc').innerHTML=[["GitHub",CONFIG.github],["LinkedIn",CONFIG.linkedin]].map(([t,h])=>link(h,t,"ghost")).join("");
$$('#soc .btn').forEach(b=>b.style.color='var(--cream)');
$('#yr').textContent=new Date().getFullYear();
/* contact form: validates, then opens the visitor's email app */
$('#f').addEventListener('submit',e=>{e.preventDefault();let ok=true;
 [['n','en','Please enter your name.'],['e','ee','Enter a valid email, like name@example.com.'],['m','em','Write a short message.']].forEach(([i,er,msg])=>{
  const el=$('#'+i),bad=!el.value.trim()||(i==='e'&&!el.validity.valid&&!/^\S+@\S+\.\S+$/.test(el.value));
  el.setAttribute('aria-invalid',bad);$('#'+er).textContent=bad?msg:"";if(bad)ok=false;});
 const st=$('#st');if(!ok){st.textContent="Fix the highlighted fields and try again.";st.style.color='var(--coral)';return}
 location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Hello from "+$('#n').value)}&body=${encodeURIComponent($('#m').value+"\n\n"+$('#e').value)}`;
 st.textContent="Your email app should open with the message ready to send.";st.style.color='#7ddf8a';});
/* loader */
addEventListener('load',()=>setTimeout(()=>{$('#loader').classList.add('out');document.body.classList.add('ready')},reduce?0:1200));
setTimeout(()=>document.body.classList.add('ready'),3500);
/* flip layer: clone hero, reveal under a soft lens */
const hero=$('#top'),alt=document.createElement('div');alt.className='alt';alt.setAttribute('aria-hidden','true');
const cl=$('#heroInner').cloneNode(true);cl.removeAttribute('id');cl.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));cl.querySelectorAll('a,button').forEach(n=>n.tabIndex=-1);alt.appendChild(cl);hero.appendChild(alt);
let tx=0,ty=0,x=0,y=0,r=0,tr=0,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,t0=0;
const hb=()=>hero.getBoundingClientRect();
function move(cx,cy){const b=hb();tx=cx-b.left;ty=cy-b.top;tr=Math.min(240,innerWidth*.32)}
hero.addEventListener('pointermove',e=>{if(reduce)return;move(e.clientX,e.clientY)});
hero.addEventListener('pointerleave',()=>{if(fine)tr=0});
hero.addEventListener('pointerdown',e=>{if(!fine&&!reduce)move(e.clientX,e.clientY)});
(function loop(t){const b=hb();
 if(!fine&&!reduce&&tr===0||(!fine&&!reduce&&t-t0>4000&&t0===0)){} 
 if(!fine&&!reduce&&!loop.touched){tx=b.width*(.5+.35*Math.sin(t/1800));ty=b.height*(.45+.25*Math.cos(t/2300));tr=Math.min(150,innerWidth*.28)}
 x+=(tx-x)*.14;y+=(ty-y)*.14;r+=(tr-r)*.1;
 alt.style.setProperty('--x',x+'px');alt.style.setProperty('--y',y+'px');alt.style.setProperty('--r',r+'px');
 if(b.bottom>0)requestAnimationFrame(loop);else setTimeout(()=>requestAnimationFrame(loop),300)})(0);
hero.addEventListener('touchstart',()=>{},{passive:true});
/* cursor + magnetic buttons */
const cur=$('#cur');
if(fine&&!reduce){addEventListener('pointermove',e=>{cur.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;cur.classList.toggle('big',!!e.target.closest('a,button,.chip'))});
 $$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')})}
/* reveals, count-in, nav indicator */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.15});
$$('.rv').forEach(n=>io.observe(n));
const links=$$('#nl a'),pill=$('#pill');
function setPill(a){if(!a)return;links.forEach(l=>l.classList.toggle('on',l===a));pill.style.left=a.offsetLeft+'px';pill.style.width=a.offsetWidth+'px';pill.style.opacity=1}
pill.style.opacity=0;
const so=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const a=links.find(l=>l.getAttribute('href')==='#'+en.target.id);if(a)setPill(a);else{links.forEach(l=>l.classList.remove('on'));pill.style.opacity=0}}}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(s=>so.observe(s));
addEventListener('resize',()=>setPill(links.find(l=>l.classList.contains('on'))));
const menu=$('#menu');menu.onclick=()=>{const o=$('#nl').classList.toggle('open');menu.setAttribute('aria-expanded',o)};
links.forEach(l=>l.addEventListener('click',()=>{$('#nl').classList.remove('open');menu.setAttribute('aria-expanded',false)}));
