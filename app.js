(function(){
const SB_URL='https://vdfjwqpupnvplnszenfn.supabase.co';
const SB_KEY='sb_publishable_XJAjrirx-qzebMEdhkV51w_eX3LBlwG';
const OWNER='bahgat.aipowered@gmail.com';
const sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,storageKey:'ops-hq-auth'}});
const $=s=>document.querySelector(s);
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const AR=n=>Number(n).toLocaleString('ar-EG');
const state={items:[],cmds:[],meta:{},ok:true,last:null,session:null};
const TEAM=[{"k": "karim", "n": "كريم", "r": "مدير العمليات", "d": "مركز القيادة، اللابتوب، PayPal", "c": "#2ee6c8"}, {"k": "salma", "n": "سلمى", "r": "الأفلييت والدروبشيبنج", "d": "CJ، JForce، Linqin، Payoneer", "c": "#e8c36a"}, {"k": "yousef", "n": "يوسف", "r": "الفريلانس", "d": "Mostaql، Truelancer، Khamsat", "c": "#7aa2ff"}, {"k": "nour", "n": "نور", "r": "الوظائف", "d": "التقديم والمتابعة", "c": "#ff8fb1"}, {"k": "hani", "n": "هاني", "r": "الفرص والمسابقات والتمويل", "d": "فرص ومسابقات ومنح وتمويل", "c": "#ffb454"}, {"k": "layla", "n": "ليلى", "r": "الدومينات", "d": "شراء وتجديد وربط الدومينات", "c": "#b48cff"}, {"k": "omar", "n": "عمر", "r": "الإيميلات وردود الشركات", "d": "قراءة الإيميلات ومتابعة الردود", "c": "#5fd38d"}, {"k": "mariam", "n": "مريم", "r": "الذاكرة", "d": "حفظ وترتيب كل اللي اتقال واتعمل", "c": "#ff6b7a"}, {"k": "adam", "n": "آدم", "r": "القيمة الاستباقية", "d": "أفكار الدخل واقتراحات مبادرة", "c": "#5ad1ff"}];
const TEAM_SVG={"karim": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"bkarim\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2ee6c8\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"ckarim\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#ckarim)\"><rect width=\"100\" height=\"100\" fill=\"url(#bkarim)\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#2ee6c8\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#c98f66\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#c98f66\"/><path d=\"M29 36c3-13 11-18 21-18s18 5 21 18c-8-4-14-6-21-6s-13 2-21 6z\" fill=\"#3b2a20\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#2ee6c8\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#2ee6c8\" text-anchor=\"middle\">AI</text></svg>", "salma": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"bsalma\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#e8c36a\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"csalma\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#csalma)\"><rect width=\"100\" height=\"100\" fill=\"url(#bsalma)\"/><path d=\"M26 40c-3-16 6-26 24-26s27 10 24 26l3 30H23z\" fill=\"#2a1a14\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#e8c36a\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#e0a97c\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#e0a97c\"/><path d=\"M30 34c4-8 12-12 20-12s16 4 20 12c-6-3-12-4-20-4s-14 1-20 4z\" fill=\"#2a1a14\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#e8c36a\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#e8c36a\" text-anchor=\"middle\">AI</text></svg>", "yousef": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"byousef\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#7aa2ff\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"cyousef\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#cyousef)\"><rect width=\"100\" height=\"100\" fill=\"url(#byousef)\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#7aa2ff\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#b97c52\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#b97c52\"/><circle cx=\"33\" cy=\"28\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"41\" cy=\"22\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"50\" cy=\"19\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"59\" cy=\"22\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"67\" cy=\"28\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"30\" cy=\"37\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"70\" cy=\"37\" r=\"7\" fill=\"#1c1410\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><g fill=\"none\" stroke=\"#111\" stroke-width=\"1.6\"><circle cx=\"42\" cy=\"46\" r=\"6\"/><circle cx=\"58\" cy=\"46\" r=\"6\"/><path d=\"M48 46h4\"/></g><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#7aa2ff\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#7aa2ff\" text-anchor=\"middle\">AI</text></svg>", "nour": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"bnour\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ff8fb1\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"cnour\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#cnour)\"><rect width=\"100\" height=\"100\" fill=\"url(#bnour)\"/><path d=\"M27 38c-2-16 7-24 23-24s25 8 23 24l-2 20H29z\" fill=\"#4a2c1c\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#ff8fb1\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#e8b690\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#e8b690\"/><path d=\"M29 33c5-9 12-12 21-12s16 3 21 12c-7-3-13-3-21-3s-14 0-21 3z\" fill=\"#4a2c1c\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#ff8fb1\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#ff8fb1\" text-anchor=\"middle\">AI</text></svg>", "hani": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"bhani\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ffb454\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"chani\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#chani)\"><rect width=\"100\" height=\"100\" fill=\"url(#bhani)\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#ffb454\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#d9a074\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#d9a074\"/><path d=\"M30 35c4-4 8-6 20-6s16 2 20 6c-1-9-9-15-20-15s-19 6-20 15z\" fill=\"#2a2a2a\" opacity=\".55\"/><path d=\"M38 56c3 8 21 8 24 0c-4 3-8 4-12 4s-8-1-12-4z\" fill=\"#2a2a2a\" opacity=\".9\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><g fill=\"none\" stroke=\"#111\" stroke-width=\"1.6\"><circle cx=\"42\" cy=\"46\" r=\"6\"/><circle cx=\"58\" cy=\"46\" r=\"6\"/><path d=\"M48 46h4\"/></g><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#ffb454\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#ffb454\" text-anchor=\"middle\">AI</text></svg>", "layla": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"blayla\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#b48cff\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"clayla\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#clayla)\"><rect width=\"100\" height=\"100\" fill=\"url(#blayla)\"/><circle cx=\"50\" cy=\"12\" r=\"8\" fill=\"#1f1410\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#b48cff\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#d49a70\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#d49a70\"/><path d=\"M29 36c3-12 11-17 21-17s18 5 21 17c-7-4-13-5-21-5s-14 1-21 5z\" fill=\"#1f1410\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#b48cff\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b48cff\" text-anchor=\"middle\">AI</text></svg>", "omar": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"bomar\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5fd38d\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"comar\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#comar)\"><rect width=\"100\" height=\"100\" fill=\"url(#bomar)\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#5fd38d\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#c28660\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#c28660\"/><path d=\"M29 37c0-13 9-19 21-19s21 6 21 19c-8-2-17-8-24-12-3 6-9 10-18 12z\" fill=\"#120d0a\"/><path d=\"M38 56c3 8 21 8 24 0c-4 3-8 4-12 4s-8-1-12-4z\" fill=\"#120d0a\" opacity=\".9\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#5fd38d\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#5fd38d\" text-anchor=\"middle\">AI</text></svg>", "mariam": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"bmariam\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ff6b7a\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"cmariam\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#cmariam)\"><rect width=\"100\" height=\"100\" fill=\"url(#bmariam)\"/><path d=\"M26 40c-3-16 6-26 24-26s27 10 24 26l3 30H23z\" fill=\"#3a2418\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#ff6b7a\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#eec3a0\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#eec3a0\"/><path d=\"M30 34c4-8 12-12 20-12s16 4 20 12c-6-3-12-4-20-4s-14 1-20 4z\" fill=\"#3a2418\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><g fill=\"none\" stroke=\"#111\" stroke-width=\"1.6\"><circle cx=\"42\" cy=\"46\" r=\"6\"/><circle cx=\"58\" cy=\"46\" r=\"6\"/><path d=\"M48 46h4\"/></g><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#ff6b7a\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#ff6b7a\" text-anchor=\"middle\">AI</text></svg>", "adam": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><linearGradient id=\"badam\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5ad1ff\" stop-opacity=\".95\"/><stop offset=\"1\" stop-color=\"#0d1430\"/></linearGradient><clipPath id=\"cadam\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></clipPath></defs><g clip-path=\"url(#cadam)\"><rect width=\"100\" height=\"100\" fill=\"url(#badam)\"/><path d=\"M14 100c2-20 16-28 36-28s34 8 36 28z\" fill=\"#10183a\" stroke=\"#5ad1ff\" stroke-width=\"2\"/><rect x=\"44\" y=\"62\" width=\"12\" height=\"12\" rx=\"4\" fill=\"#d8a37a\"/><ellipse cx=\"50\" cy=\"46\" rx=\"17\" ry=\"20\" fill=\"#d8a37a\"/><path d=\"M29 36l3-14 7 8 5-14 6 12 6-12 5 14 7-8 3 14c-7-4-13-5-21-5s-14 1-21 5z\" fill=\"#2b1d14\"/><circle cx=\"43\" cy=\"46\" r=\"2\" fill=\"#111\"/><circle cx=\"57\" cy=\"46\" r=\"2\" fill=\"#111\"/><path d=\"M44 57q6 5 12 0\" stroke=\"#7a3b2e\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></g><rect x=\"62\" y=\"70\" width=\"34\" height=\"22\" rx=\"8\" fill=\"#070b1a\" stroke=\"#5ad1ff\" stroke-width=\"2\"/><text x=\"79\" y=\"86\" font-family=\"Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#5ad1ff\" text-anchor=\"middle\">AI</text></svg>"};
const TABS=[
 ['today','النهارده','☀'],['approvals','موافقات','✔'],['board','مين بيعمل إيه','⇄'],['lines','خطوط الشغل','☰'],
 ['trade','التجارة','▣'],['orders','الأوردرات','📦'],['money','الفلوس','◎'],['commands','أوامر','⌘'],['escape','خطة الهروب','🛡'],['team','الفريق','👥']];
const ST={run:'شغال',wait:'مستني',block:'واقف',pause:'متوقف',done:'خلص',open:'مستني قرارك',approved:'اتوافق',rejected:'اترفض',help:'محتاج مساعدة',listed:'اتحط للمراجعة',waiting_price:'مستني سعرك',sent:'اتبعت',seen:'اتشاف',pending:'مستني',draft:'مسودة'};
const badge=s=>`<span class="badge b-${E(s)}">${E(ST[s]||s||'-')}</span>`;
const est=p=>p&&p.estimate?'<span class="est">تقديري</span>':'';
const money=n=>n==null||n===''?'-':AR(n)+' جنيه';
function stars(){const s=$('#stars');let h='';for(let i=0;i<46;i++)h+=`<i style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${(Math.random()*4).toFixed(1)}s"></i>`;s.innerHTML=h}
const LAMP=`<svg class="lamp" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff2b8"/><stop offset=".5" stop-color="#e8c36a"/><stop offset="1" stop-color="#a8761f"/></linearGradient><radialGradient id="gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2ee6c8" stop-opacity=".55"/><stop offset="1" stop-color="#2ee6c8" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="150" cy="230" rx="110" ry="14" fill="url(#gl)"/>
<g class="smoke"><path d="M214 100c20-24-18-36 2-62 12-16 34-8 24 14" fill="none" stroke="#2ee6c8" stroke-width="5" stroke-linecap="round"/><circle cx="244" cy="24" r="5" fill="#f6e2a4"/><circle cx="262" cy="52" r="3" fill="#2ee6c8"/><circle cx="228" cy="10" r="3" fill="#e8c36a"/></g>
<path d="M60 168c0-40 36-66 86-66 38 0 62 14 76 36l34-22-10 40c-6 40-40 72-92 72-58 0-94-20-94-60z" fill="url(#g)" stroke="#6b4a0e" stroke-width="3"/>
<path d="M60 168c-14-2-30-14-38-34 20 4 34 14 42 26" fill="none" stroke="#e8c36a" stroke-width="9" stroke-linecap="round"/>
<path d="M110 100c8-14 22-20 36-20s28 6 36 20" fill="none" stroke="#e8c36a" stroke-width="8" stroke-linecap="round"/>
<ellipse cx="146" cy="76" rx="22" ry="8" fill="#e8c36a" stroke="#6b4a0e" stroke-width="2"/>
<path d="M90 160c20 14 70 18 104 0" fill="none" stroke="#fff2b8" stroke-width="3" opacity=".7"/>
<circle cx="146" cy="150" r="10" fill="#2ee6c8" opacity=".9"/><circle cx="146" cy="150" r="4" fill="#fff"/>
<rect x="104" y="214" width="84" height="14" rx="7" fill="url(#g)" stroke="#6b4a0e" stroke-width="2"/></svg>`;
const byKind=k=>state.items.filter(i=>i.kind===k).sort((a,b)=>(a.sort-b.sort)||String(a.title).localeCompare(String(b.title),'ar'));
const meta=k=>(state.meta[k]||{}).value||null;
function fmtTime(t){if(!t)return '-';const d=new Date(t);return d.toLocaleString('ar-EG',{timeZone:'Africa/Cairo',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}
function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>t.hidden=true,3500)}
function loginView(msg){
 $('#app').innerHTML=`<div class="login"><div class="box">${LAMP}<h1>مركز القيادة</h1><p>دخول خاص بيك بس. هنبعتلك كود على الإيميل.</p>
 <div id="s1"><input id="em" type="email" placeholder="الإيميل" value="${OWNER}" autocomplete="email"><button class="btn gold" id="sendc" style="width:100%;justify-content:center">ابعتلي الكود</button></div>
 <div id="s2" hidden><input id="cd" inputmode="numeric" autocomplete="one-time-code" placeholder="الكود اللي وصلك"><button class="btn gold" id="ver" style="width:100%;justify-content:center">دخول</button></div>
 <div class="err" id="er">${E(msg||'')}</div></div></div>`;
 $('#sendc').onclick=async()=>{const em=$('#em').value.trim().toLowerCase();
  if(em!==OWNER){$('#er').textContent='الموقع ده خاص بصاحبه بس.';return}
  $('#sendc').disabled=true;$('#er').textContent='';
  const {error}=await sb.auth.signInWithOtp({email:em,options:{shouldCreateUser:true}});
  $('#sendc').disabled=false;
  if(error){$('#er').textContent='ماقدرناش نبعت الكود: '+error.message;return}
  $('#s1').hidden=true;$('#s2').hidden=false;$('#er').textContent='الكود اتبعت. بص في الإيميل (وفي الاسبام لو مش باين).'};
 $('#ver').onclick=async()=>{const em=$('#em').value.trim().toLowerCase();const token=$('#cd').value.replace(/\s/g,'');
  $('#ver').disabled=true;
  const {data,error}=await sb.auth.verifyOtp({email:em,token,type:'email'});
  $('#ver').disabled=false;
  if(error){$('#er').textContent='الكود غلط أو انتهى. جرب تاني.';return}
  state.session=data.session;start()};
}
async function load(){
 try{
  const [a,b,c]=await Promise.all([sb.from('ops_items').select('*'),sb.from('ops_state').select('*'),sb.from('ops_commands').select('*').order('created_at',{ascending:false}).limit(60)]);
  if(a.error||b.error||c.error)throw (a.error||b.error||c.error);
  state.items=a.data;state.meta=Object.fromEntries(b.data.map(r=>[r.key,r]));state.cmds=c.data;state.ok=true;state.last=new Date();
 }catch(e){state.ok=false;console.warn(e)}
}
function route(){return ((location.hash||'#today').slice(1)||'today').split('/')[0]}
function sub(){return decodeURIComponent(((location.hash||'').slice(1).split('/')[1])||'')}
function pendingCount(){return byKind('decision').filter(d=>d.status==='open'&&!state.cmds.some(c=>c.ref===d.key&&['approval','reject'].includes(c.kind))).length+byKind('input').filter(d=>d.status==='open'&&!state.cmds.some(c=>c.ref===d.key)).length}
function shell(inner,title){
 const r=route();
 const nav=TABS.map(([k,n,ic])=>`<a href="#${k}" class="${r===k?'on':''}"><span class="ic">${ic}</span>${n}${k==='approvals'&&pendingCount()?`<span class="bd">${AR(pendingCount())}</span>`:''}</a>`).join('');
 const snap=meta('snapshot');
 return `<div class="shell"><aside class="side"><div class="brand"><svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0d1430"/><path d="M14 38c0-8 7-13 16-13s14 4 17 8l8-5-2 9c-1 8-8 14-19 14-12 0-20-5-20-13z" fill="#e8c36a"/><path d="M24 25c0-5 3-8 8-8" stroke="#2ee6c8" stroke-width="3" fill="none" stroke-linecap="round"/></svg><div><b>مركز القيادة</b><small>بهجت + الفريق</small></div></div><nav class="nav">${nav}</nav>
 <div class="foot"><div>آخر تحديث للبيانات: ${snap&&snap.at?fmtTime(snap.at):'لسه ما اتحدثتش'}</div><button class="btn" style="margin-top:8px;width:100%;justify-content:center" id="out">خروج</button></div></aside>
 <main class="main"><div class="top"><h1>${title}</h1><div class="sync"><span class="dot ${state.ok?'':'off'}"></span>${state.ok?'متصل':'مفيش اتصال'}${state.last?' · '+fmtTime(state.last):''}</div></div>${inner}</main></div>`;
}
function det(i){const d=i.payload&&i.payload.details;return d?`<div class="btns"><button class="btn" data-a="details" data-k="${E(i.key)}">📋 التفاصيل والخطوات</button></div>`:''}
async function loadFiles(list){for(const k of list){if(window.OPS_FILES&&window.OPS_FILES[k])continue;await new Promise(r=>{const x=document.createElement('script');x.src='f-'+k+'.js';x.onload=r;x.onerror=r;document.head.appendChild(x)})}}
async function showDetails(it){const d=(it.payload||{}).details||{};const m=$('#modal');await loadFiles((d.files||[]).filter(f=>f.file).map(f=>f.file));
 const steps=(d.steps||[]).length?`<h5>الخطوات</h5><ol class="steps">${d.steps.map(x=>`<li>${E(x)}</li>`).join('')}</ol>`:'';
 const blocks=(d.blocks||[]).map((b,n)=>`<div class="cb"><div class="row"><b>${E(b.label||'')}</b><button class="btn" data-copy="${n}">نسخ</button></div><pre id="cb${n}">${E(b.text||'')}</pre></div>`).join('');
 const files=(d.files||[]).length?`<h5>ملفات للتحميل</h5><div class="btns">${d.files.map(f=>`<a class="btn" href="${f.file?((window.OPS_FILES||{})[f.file]||'#'):E(f.url)}" ${f.file?'':'target="_blank" rel="noopener" '}download="${E(f.save||f.name||'file')}">⬇ ${E(f.name||'ملف')}</a>`).join('')}</div>`:'';
 m.innerHTML=`<div class="m det"><h3>${E(it.title)}</h3>${it.body?`<p>${E(it.body)}</p>`:''}${steps}${blocks}${files}${it.link?`<div class="btns"><a class="btn cta" href="${E(it.link)}" target="_blank" rel="noopener">${E((it.payload&&it.payload.cta)||'افتح اللينك')} ↗</a></div>`:''}<div class="btns"><button class="btn" id="dx">إغلاق</button></div></div>`;m.hidden=false;
 $('#dx').onclick=()=>{m.hidden=true};m.onclick=e=>{if(e.target===m)m.hidden=true};
 m.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{const t=d.blocks[+b.dataset.copy].text||'';try{await navigator.clipboard.writeText(t)}catch(e){const r=document.createRange();r.selectNodeContents($('#cb'+b.dataset.copy));const sl=getSelection();sl.removeAllRanges();sl.addRange(r);document.execCommand('copy')}b.textContent='اتنسخ ✓';setTimeout(()=>b.textContent='نسخ',1500)})}
function cta(i,def){if(!i.link)return'';const l=(i.payload&&i.payload.cta)||def;return `<div class="btns"><a class="btn cta" href="${E(i.link)}" target="_blank" rel="noopener">${E(l)} ↗</a></div>`}
function itemCard(i,extra){return `<div class="card item"><div class="row"><h4>${E(i.title)}</h4>${badge(i.status)}</div>${i.body?`<p>${E(i.body)}</p>`:''}${extra||''}${det(i)}${cta(i,'افتح اللينك')}</div>`}
function cmdFor(ref,kinds){return state.cmds.find(c=>c.ref===ref&&kinds.includes(c.kind))}
function decisionCard(d){
 const c=cmdFor(d.key,['approval','reject']);
 const p=d.payload||{};
 let acts='';
 if(d.status==='open'&&!c) acts=`<div class="btns">${(p.options&&p.options.length)?p.options.map(o=>`<button class="btn ok" data-a="choose" data-k="${E(d.key)}" data-v="${E(o)}">${E(o)}</button>`).join(''):`<button class="btn ok" data-a="approve" data-k="${E(d.key)}">موافق</button>`}<button class="btn no" data-a="reject" data-k="${E(d.key)}">رفض</button></div>`;
 else if(c) acts=`<div class="note">${c.kind==='approval'?'وافقت':'رفضت'}${c.body?' ('+E(c.body)+')':''} · ${fmtTime(c.created_at)} · ${badge(c.status)}${c.reply?'<br>رد الفريق: '+E(c.reply):''}</div>`;
 return `<div class="card item"><div class="row"><h4>${E(d.title)}</h4>${badge(c&&d.status==='open'?'sent':d.status)}</div>${d.body?`<p>${E(d.body)}</p>`:''}${p.amount?`<div class="kv"><span>المبلغ</span><b>${money(p.amount)}${est(p)}</b></div>`:''}${p.what?`<div class="kv"><span>نوع القرار</span><b>${E(p.what)}</b></div>`:''}${det(d)}${cta(d,'افتح اللينك')}${acts}</div>`}
function inputCard(i){
 const c=cmdFor(i.key,['message']);const f=(i.payload&&i.payload.fields)||[];
 let acts='';
 if(i.status==='open'&&!c) acts=f.map((x,n)=>`<label>${E(x.label)}</label><input data-f="${n}" data-key="${E(i.key)}" ${x.inputmode?'inputmode="'+E(x.inputmode)+'"':''} autocomplete="off">`).join('')+`<div class="btns"><button class="btn gold" data-a="submit" data-k="${E(i.key)}">ابعت</button></div>`;
 else if(c) acts=`<div class="note">اتبعت · ${fmtTime(c.created_at)} · ${badge(c.status)}${c.reply?'<br>رد الفريق: '+E(c.reply):''}</div>`;
 return itemCard(i,acts).replace(/(<span class="badge b-open">)[^<]*/,'$1مستني بياناتك')}
function taskHim(t){
 const c=cmdFor(t.key,['task_done','task_help']);
 let acts='';
 if(t.status==='open'&&!c) acts=`<div class="btns"><button class="btn ok" data-a="task_done" data-k="${E(t.key)}">خلصت</button><button class="btn" data-a="task_help" data-k="${E(t.key)}">محتاج مساعدة</button></div>`;
 else if(c) acts=`<div class="note">${c.kind==='task_done'?'قلت خلصت':'طلبت مساعدة'} · ${fmtTime(c.created_at)} · ${badge(c.status)}${c.reply?'<br>رد الفريق: '+E(c.reply):''}</div>`;
 return itemCard(t,acts).replace(/(<span class="badge b-open">)[^<]*/,'$1عليك')}
function goalBlock(){
 const g=meta('goal')||{target:1000000,earned:0};const pct=Math.max(0,Math.min(100,(g.earned/g.target)*100));
 let days='';if(g.deadline){const d=Math.ceil((new Date(g.deadline)-new Date())/864e5);days=`<span>باقي ${AR(Math.max(d,0))} يوم</span>`}
 return `<div class="goal"><div class="bar"><i style="width:${pct}%"></i></div><div class="nums"><span><b>${money(g.earned)}</b> دخلت فعلا</span>${days}<span>الهدف ${money(g.target)}</span></div>${g.note?`<div class="note">${E(g.note)}</div>`:''}</div>`}
const VIEWS={
 team(){const T=(state.meta.team||{}).value||null;const ag=T&&T.agents||{};const upd=T&&T.updated;
  const id=sub();const a=TEAM.find(x=>x.k===id);
  if(a){const d=ag[a.k]||{};const msgs=state.cmds.filter(c=>c.kind==='message'&&c.ref==='agent:'+a.k);
   return `<div class="btns" style="margin-bottom:14px"><a class="btn" href="#team">→ كل الفريق</a></div>
   <div class="card" style="display:flex;gap:16px;align-items:center;border-color:${a.c}66"><div style="width:96px;height:96px;flex:none">${TEAM_SVG[a.k]}</div><div><h4 style="font-size:20px">${a.n} <span class="est">وكيل AI</span></h4><div style="color:${a.c};font-weight:700">${a.r}</div><div class="note">آخر تحديث: ${upd?fmtTime(upd):'لسه'} · ${E(d.at||'')}</div></div></div>
   <div class="sec">بيعمل إيه دلوقتي</div><div class="card"><p>${E(d.now||'مفيش تقرير متاح.')}</p></div>
   <div class="sec">اللي قدامه <span class="c">${AR((d.next||[]).length)}</span></div><div class="card">${(d.next||[]).length?'<ul class="steps">'+d.next.map(x=>`<li>${E(x)}</li>`).join('')+'</ul>':'<p>مفيش.</p>'}</div>
   <div class="sec">اللي خلصه <span class="c">${AR((d.done||[]).length)}</span></div><div class="grid g2">${(d.done||[]).map(x=>`<div class="card"><p style="color:var(--text)">${E(x.t)}</p><div class="note">${E(x.at||'')}</div></div>`).join('')||'<div class="empty">مفيش سجل.</div>'}</div>
   <div class="sec">كلّم ${a.n}</div><div class="card"><textarea id="tm" placeholder="اكتب رسالتك لـ${a.n} بالعربي"></textarea><div class="btns"><button class="btn gold" id="ts" data-agent="${a.k}">ابعت</button></div>
   <div class="note">الرسالة بتتسجل هنا وبتوصل للمنسق (مش للوكيل مباشرة) وهو بيوجهها لـ${a.n}، في حدود ١٠ دقايق تقريبا. مفيش رد فوري. ${a.n} وكيل ذكاء اصطناعي مش موظف.</div></div>
   ${msgs.length?'<div class="sec">رسايلك</div><div class="grid g2">'+msgs.map(c=>`<div class="card"><div class="row"><h4>رسالة</h4>${badge(c.status)}</div><p>${E(c.body||'')}</p><div class="note">${fmtTime(c.created_at)}</div></div>`).join('')+'</div>':''}`}
  return `<div class="card" style="margin-bottom:16px"><p>الفريق ده تسعة وكلاء ذكاء اصطناعي (AI) بيشتغلوا لحساب بهجت، مش موظفين حقيقيين. الصور مرسومة. دوس على أي كارت تشوف بيعمل إيه ومحتاج إيه. البيانات من تقارير الوكلاء الفعلية، آخر تحديث: ${upd?fmtTime(upd):'لسه'}.</p></div><div class="grid g3">${TEAM.map(a=>{const d=ag[a.k]||{};return `<a href="#team/${a.k}" class="card" style="text-align:center;border-color:${a.c}66;text-decoration:none;color:inherit;display:block"><div style="width:110px;height:110px;margin:0 auto 10px">${TEAM_SVG[a.k]}</div><h4>${a.n} <span class="est">وكيل AI</span></h4><div style="color:${a.c};font-weight:700;margin:4px 0">${a.r}</div><p class="sub" style="font-size:13px">${E((d.now||a.d).slice(0,95))}${(d.now||'').length>95?'…':''}</p><div class="note">${E(d.at||'')}</div></a>`}).join('')}</div>`}, escape(){const its=byKind('escape');
  const G={1:'١. حسابات جيميل (الأول)',2:'٢. الدومينات',3:'٣. الفلوس والعمل',4:'٤. أدوات التقنية',5:'٥. السوشيال'};
  const STEPS=['غيّر الباسورد','اعمل خروج من كل الأجهزة','راجع إيميل ورقم الاسترجاع','راجع التحقق بخطوتين (2FA)','راجع آخر نشاط','شيل أي جهاز أو تطبيق مش عارفه'];
  const ld=k=>{try{return JSON.parse(localStorage.getItem('esc:'+k)||'[]')}catch(e){return []}};
  let tot=0,dn=0;its.forEach(i=>{tot+=STEPS.length;dn+=ld(i.key).length});
  const blocks=[1,2,3,4,5].map(g=>{const l=its.filter(i=>((i.payload||{}).g||3)===g);if(!l.length)return '';
   return `<div class="sec">${G[g]} <span class="c">${AR(l.length)}</span></div><div class="grid g2">${l.map(i=>{const p=i.payload||{};const d=ld(i.key);
    return `<div class="card"><b>${E(i.title)}</b>${p.id?`<div class="note">${E(p.id)}</div>`:''}
    <div style="margin:10px 0">${i.link?`<a class="btn gold" target="_blank" rel="noopener" href="${E(i.link)}">${p.exact?'افتح صفحة الأمان':'افتح الموقع'}</a>`:'<span class="est">مفيش رابط</span>'}</div>
    ${p.note?`<div class="note">${E(p.note)}</div>`:''}
    ${STEPS.map((t,n)=>`<label style="display:flex;gap:10px;align-items:center;padding:6px 0;font-size:16px"><input type="checkbox" data-esc="${E(i.key)}" data-n="${n}" ${d.includes(n)?'checked':''} style="width:22px;height:22px"> ${E(t)}</label>`).join('')}</div>`}).join('')}</div>`}).join('');
  return `<div class="hero"><div><h2>خطة الهروب</h2><p>لو بعتّ «اهرب» ننفّذ الخطة دي. افتح كل حساب بالترتيب وعلّم كل خطوة بعد ما تخلصها. الباسوردات مش متخزنة هنا خالص.</p><p class="note">بعد ما تغيّر باسورد حساب، قولنا عشان نحدّث الخزنة برابط آمن، من غير ما تكتبه في الشات. العلامات بتتحفظ في المتصفح ده بس.</p></div></div>
  <div class="goal"><div class="bar"><i style="width:${tot?dn/tot*100:0}%"></i></div><div class="nums"><span><b>${AR(dn)}</b> من ${AR(tot)} خطوة خلصت</span></div></div>${blocks||'<div class="empty">القائمة لسه بتتحمل</div>'}`},

 today(){
  const dec=byKind('decision').filter(d=>d.status==='open'&&!cmdFor(d.key,['approval','reject']));
  const mine=byKind('task_him').filter(t=>t.status==='open'&&!cmdFor(t.key,['task_done','task_help']));
  const run=byKind('task_us').filter(t=>['run','wait'].includes(t.status));
  const lines=byKind('line');
  return `<div class="hero"><div><h2>ماكينة المليون</h2><p>هنا كل حاجة قدامك: اللي مستني قرارك، اللي إنت عليك، واللي إحنا شغالين فيه. اتكلم معانا من تبويب أوامر.</p>${goalBlock()}</div>${LAMP}</div>
  <div class="grid g4 k"><div class="card kpi"><div class="v">${AR(dec.length)}</div><div class="l">قرارات مستنياك</div></div><div class="card kpi"><div class="v">${AR(mine.length)}</div><div class="l">مهام عليك</div></div><div class="card kpi"><div class="v">${AR(run.length)}</div><div class="l">شغال دلوقتي</div></div><div class="card kpi"><div class="v">${AR(lines.length)}</div><div class="l">خطوط شغل</div></div></div>
  <div class="sec">مستني موافقتك <span class="c">${AR(dec.length)}</span></div>
  <div class="grid g2">${dec.map(decisionCard).join('')||'<div class="empty">مفيش قرارات واقفة عليك دلوقتي</div>'}</div>
  ${byKind('input').filter(x=>x.status==='open'&&!cmdFor(x.key,['message'])).length?`<div class="sec">محتاجين منك بيانات</div><div class="grid g2">${byKind('input').filter(x=>x.status==='open'&&!cmdFor(x.key,['message'])).map(inputCard).join('')}</div>`:''}
  <div class="sec">مطلوب منك <span class="c">${AR(mine.length)}</span></div>
  <div class="grid g2">${mine.map(taskHim).join('')||'<div class="empty">مفيش مهام عليك دلوقتي</div>'}</div>
  <div class="sec">إحنا شغالين دلوقتي <span class="c">${AR(run.length)}</span></div>
  <div class="grid g2">${run.map(t=>itemCard(t)).join('')||'<div class="empty">مفيش حاجة شغالة مسجلة</div>'}</div>`},
 approvals(){
  const all=byKind('decision');
  const open=all.filter(d=>d.status==='open'&&!cmdFor(d.key,['approval','reject']));
  const rest=all.filter(d=>!open.includes(d));
  return `<div class="note" style="margin:0 0 14px">كل فلوس أو نشر لازم يعدي من هنا بزرار موافق. الموافقة هنا على القرار نفسه، وأي دفع أو إعلان لايف بيتأكد معاك في الشات قبل التنفيذ.</div>
  <div class="sec">مستنية قرارك <span class="c">${AR(open.length)}</span></div><div class="grid g2">${open.map(decisionCard).join('')||'<div class="empty">مفيش حاجة مستنية</div>'}</div>
  <div class="sec">محتاجين منك بيانات <span class="c">${AR(byKind('input').filter(x=>x.status==='open'&&!cmdFor(x.key,['message'])).length)}</span></div><div class="grid g2">${byKind('input').map(inputCard).join('')||'<div class="empty">مفيش</div>'}</div>
  <div class="sec">اتقرر قبل كده</div><div class="grid g2">${rest.map(decisionCard).join('')||'<div class="empty">لسه مفيش</div>'}</div>`},
 board(){
  const us=byKind('task_us'),him=byKind('task_him');
  return `<div class="two"><div class="col"><h3 class="ch">⚙ إحنا بنعمل</h3><div class="stack">${us.map(t=>itemCard(t)).join('')||'<div class="empty">لسه مفيش</div>'}</div></div>
  <div class="col him"><h3 class="ch">👤 إنت تعمل</h3><div class="stack">${him.map(taskHim).join('')||'<div class="empty">مفيش مهام عليك</div>'}</div></div></div>
  <div class="note">لما تخلص مهمة دوس خلصت، ولو واقف في حاجة دوس محتاج مساعدة. تحب تدينا أمر جديد روح تبويب أوامر.</div>`},
 lines(){const l=byKind('line');
  return `<div class="grid g2">${l.map(i=>{const p=i.payload||{};return itemCard(i,(p.next?`<div class="kv"><span>الخطوة الجاية</span><b>${E(p.next)}</b></div>`:'')+(p.blocker?`<div class="kv"><span>واقف على</span><b>${E(p.blocker)}</b></div>`:''))}).join('')||'<div class="empty">لسه مفيش خطوط</div>'}</div>`},
 trade(){const pr=byKind('product');
  return `<div class="note" style="margin:0 0 14px">الأرباح كلها تقديرية لحد ما يجي أوردر حقيقي. الأسعار والتكلفة من تقارير الفريق.</div>
  <div class="grid g3">${pr.map(i=>{const p=i.payload||{};return itemCard(i,['cost','price','commission','profit'].map(k=>p[k]!=null&&p[k]!==''?`<div class="kv"><span>${{cost:'التكلفة',price:'سعر البيع',commission:'عمولة المنصة',profit:'ربح الوحدة'}[k]}</span><b>${k==='commission'?E(p[k]):money(p[k])}${k==='profit'?est({estimate:1}):''}</b></div>`:'').join('')+(p.platform?`<div class="kv"><span>المنصة</span><b>${E(p.platform)}</b></div>`:''))}).join('')||'<div class="empty">لسه مفيش منتجات</div>'}</div>`},
 orders(){const o=byKind('order');
  return `<div class="grid g2">${o.map(i=>{const p=i.payload||{};return itemCard(i,(p.amount?`<div class="kv"><span>القيمة</span><b>${money(p.amount)}</b></div>`:'')+(p.ref?`<div class="kv"><span>رقم الأوردر</span><b>${E(p.ref)}</b></div>`:''))}).join('')||'<div class="empty">لسه مفيش أوردرات</div>'}</div>`},
 money(){const m=byKind('money');const g=meta('goal')||{target:1000000,earned:0};
  return `<div class="card"><h3>◎ التحدي</h3>${goalBlock()}</div>
  <div class="sec">حركة الفلوس</div>
  <div class="grid g2">${m.map(i=>{const p=i.payload||{};return `<div class="card item"><div class="row"><h4>${E(i.title)}</h4>${badge(i.status)}</div>${i.body?`<p>${E(i.body)}</p>`:''}<div class="kv"><span>${p.type==='income'?'دخل':p.type==='expense'?'مصروف':'رقم'}</span><b>${money(p.amount)}${est(p)}</b></div></div>`}).join('')||'<div class="empty">لسه مفيش حركة مسجلة</div>'}</div>`},
 commands(){
  const lines=byKind('line');
  const rows=state.cmds.map(c=>`<div class="card item"><div class="row"><h4>${E({command:'أمر',approval:'موافقة',reject:'رفض',task_done:'خلصت مهمة',task_help:'طلب مساعدة',message:'رسالة'}[c.kind]||c.kind)}${c.line?' · '+E(c.line):''}</h4>${badge(c.status)}</div>${c.body?`<p>${E(c.body)}</p>`:''}${c.ref?`<div class="note">${E((state.items.find(i=>i.key===c.ref)||{}).title||c.ref)}</div>`:''}<div class="note">${fmtTime(c.created_at)}${c.seen_at?' · اتشاف '+fmtTime(c.seen_at):''}${c.done_at?' · اتنفذ '+fmtTime(c.done_at):''}</div>${c.reply?`<div class="kv"><span>رد الفريق</span><b style="text-align:start">${E(c.reply)}</b></div>`:''}</div>`).join('');
  return `<div class="card"><h3>⌘ أمر جديد للفريق</h3><label>الخط</label><select id="cl"><option value="">عام</option>${lines.map(l=>`<option>${E(l.title)}</option>`).join('')}</select><label>الأمر</label><textarea id="ct" placeholder="اكتب اللي عايزه بالعربي"></textarea><div class="btns"><button class="btn gold" id="cs">ابعت</button></div>
  <div class="note">الأمر بيتسجل وبيتقرا من الفريق كل ١٠ دقايق تقريبا، مش لحظي. الحالة: اتبعت ثم اتشاف ثم اتنفذ. لو مستعجل ابعتلنا على واتساب. الأوامر هنا مفيهاش دفع ولا نشر، دول بس بزرار موافق.</div></div>
  <div class="sec">آخر الأوامر</div><div class="grid g2">${rows||'<div class="empty">لسه ما بعتش حاجة</div>'}</div>`}
};
const TITLES=Object.fromEntries(TABS.map(t=>[t[0],t[1]]));
async function send(kind,ref,body,line){
 const {error}=await sb.from('ops_commands').insert({kind,ref:ref||null,body:body||null,line:line||null});
 if(error){toast('ماوصلش: '+error.message);return false}
 toast('اتبعت. الفريق هيشوفه خلال دقايق.');await load();render();return true}
function confirmBox(title,text,ok,withNote){
 return new Promise(res=>{const m=$('#modal');m.hidden=false;
  m.innerHTML=`<div class="m"><h3>${E(title)}</h3><p>${E(text)}</p>${withNote?'<textarea id="mn" placeholder="ملاحظة (اختياري)" style="min-height:70px"></textarea>':''}<div class="btns"><button class="btn ok" id="my">${E(ok)}</button><button class="btn" id="mx">إلغاء</button></div></div>`;
  $('#my').onclick=()=>{const v=withNote?$('#mn').value:'';m.hidden=true;res({ok:true,note:v})};
  $('#mx').onclick=()=>{m.hidden=true;res({ok:false})}})}
function bind(){
 const out=$('#out');if(out)out.onclick=async()=>{await sb.auth.signOut();state.session=null;loginView()};
 document.querySelectorAll('[data-a]').forEach(b=>b.onclick=async()=>{
  const a=b.dataset.a,k=b.dataset.k,it=state.items.find(i=>i.key===k)||{};
  if(a==='details'){showDetails(it);return}
  if(a==='approve'){const r=await confirmBox('تأكيد الموافقة','هتوافق على: '+it.title+'. الموافقة دي على القرار بس، وأي دفع أو نشر لايف هيتأكد معاك في الشات قبل التنفيذ.','موافق',true);if(r.ok)await send('approval',k,r.note)}
  else if(a==='choose'){const v=b.dataset.v;const r=await confirmBox('تأكيد الاختيار','اختيارك: '+v+' ('+it.title+'). ده اختيار بس، وأي دفع أو نشر بيتأكد معاك في الشات.','تأكيد',true);if(r.ok)await send('approval',k,'اختار: '+v+(r.note?' | '+r.note:''))}
  else if(a==='submit'){const f=((it.payload||{}).fields)||[];const vals=f.map((x,n)=>{const el=document.querySelector(`[data-key="${k}"][data-f="${n}"]`);return [x.label,(el&&el.value||'').trim()]});
   if(vals.some(v=>!v[1])){toast('كمل كل الخانات الأول');return}
   await send('message',k,vals.map(v=>v[0]+': '+v[1]).join('\n'))}
  else if(a==='reject'){const r=await confirmBox('تأكيد الرفض','هترفض: '+it.title,'رفض',true);if(r.ok)await send('reject',k,r.note)}
  else if(a==='task_done'){const r=await confirmBox('خلصت؟','هنسجل إنك خلصت: '+it.title,'خلصت',true);if(r.ok)await send('task_done',k,r.note)}
  else if(a==='task_help'){const r=await confirmBox('محتاج مساعدة','اكتب لنا واقف فين','ابعت',true);if(r.ok)await send('task_help',k,r.note)}});
 const ts=$('#ts');if(ts)ts.onclick=async()=>{const t=$('#tm').value.trim();if(!t){toast('اكتب الرسالة الأول');return}ts.disabled=true;const ok=await send('message','agent:'+ts.dataset.agent,t,'الفريق');if(!ok)ts.disabled=false};
 const cs=$('#cs');if(cs)cs.onclick=async()=>{const t=$('#ct').value.trim();if(!t){toast('اكتب الأمر الأول');return}
  cs.disabled=true;const ok=await send('command',null,t,$('#cl').value);if(!ok)cs.disabled=false};
}
function bindEsc(){
 document.querySelectorAll('[data-esc]').forEach(c=>c.onchange=()=>{const k=c.dataset.esc,n=+c.dataset.n;let a;try{a=JSON.parse(localStorage.getItem('esc:'+k)||'[]')}catch(e){a=[]}a=a.filter(x=>x!==n);if(c.checked)a.push(n);localStorage.setItem('esc:'+k,JSON.stringify(a));render()});
}
function render(){const r=VIEWS[route()]?route():'today';const y=window.scrollY;$('#app').innerHTML=shell(VIEWS[r](),TITLES[r]);bind();bindEsc();window.scrollTo(0,y)}
let timer;
async function start(){await load();render();clearInterval(timer);timer=setInterval(async()=>{if($('#modal').hidden===false||(document.activeElement&&['TEXTAREA','INPUT','SELECT'].includes(document.activeElement.tagName)))return;await load();render()},20000)}
window.addEventListener('hashchange',()=>{window.scrollTo(0,0);if(state.session)render()});
stars();
(async()=>{const {data}=await sb.auth.getSession();
 if(data.session&&(data.session.user.email||'').toLowerCase()===OWNER){state.session=data.session;start()}
 else{if(data.session)await sb.auth.signOut();loginView()}})();
})();
