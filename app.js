(function(){
const SB_URL='https://vdfjwqpupnvplnszenfn.supabase.co';
const SB_KEY='sb_publishable_XJAjrirx-qzebMEdhkV51w_eX3LBlwG';
const OWNER='bahgat.aipowered@gmail.com';
const sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,storageKey:'ops-hq-auth'}});
const $=s=>document.querySelector(s);
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const AR=n=>Number(n).toLocaleString('ar-EG');
const state={items:[],cmds:[],meta:{},ok:true,last:null,session:null};
const TABS=[
 ['today','النهارده','☀'],['approvals','موافقات','✔'],['board','مين بيعمل إيه','⇄'],['lines','خطوط الشغل','☰'],
 ['trade','التجارة','▣'],['orders','الأوردرات','📦'],['money','الفلوس','◎'],['commands','أوامر','⌘']];
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
function route(){return (location.hash||'#today').slice(1)||'today'}
function pendingCount(){return byKind('decision').filter(d=>d.status==='open'&&!state.cmds.some(c=>c.ref===d.key&&['approval','reject'].includes(c.kind))).length+byKind('input').filter(d=>d.status==='open'&&!state.cmds.some(c=>c.ref===d.key)).length}
function shell(inner,title){
 const r=route();
 const nav=TABS.map(([k,n,ic])=>`<a href="#${k}" class="${r===k?'on':''}"><span class="ic">${ic}</span>${n}${k==='approvals'&&pendingCount()?`<span class="bd">${AR(pendingCount())}</span>`:''}</a>`).join('');
 const snap=meta('snapshot');
 return `<div class="shell"><aside class="side"><div class="brand"><svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0d1430"/><path d="M14 38c0-8 7-13 16-13s14 4 17 8l8-5-2 9c-1 8-8 14-19 14-12 0-20-5-20-13z" fill="#e8c36a"/><path d="M24 25c0-5 3-8 8-8" stroke="#2ee6c8" stroke-width="3" fill="none" stroke-linecap="round"/></svg><div><b>مركز القيادة</b><small>بهجت + الفريق</small></div></div><nav class="nav">${nav}</nav>
 <div class="foot"><div>آخر تحديث للبيانات: ${snap&&snap.at?fmtTime(snap.at):'لسه ما اتحدثتش'}</div><button class="btn" style="margin-top:8px;width:100%;justify-content:center" id="out">خروج</button></div></aside>
 <main class="main"><div class="top"><h1>${title}</h1><div class="sync"><span class="dot ${state.ok?'':'off'}"></span>${state.ok?'متصل':'مفيش اتصال'}${state.last?' · '+fmtTime(state.last):''}</div></div>${inner}</main></div>`;
}
function cta(i,def){if(!i.link)return'';const l=(i.payload&&i.payload.cta)||def;return `<div class="btns"><a class="btn cta" href="${E(i.link)}" target="_blank" rel="noopener">${E(l)} ↗</a></div>`}
function itemCard(i,extra){return `<div class="card item"><div class="row"><h4>${E(i.title)}</h4>${badge(i.status)}</div>${i.body?`<p>${E(i.body)}</p>`:''}${extra||''}${cta(i,'افتح اللينك')}</div>`}
function cmdFor(ref,kinds){return state.cmds.find(c=>c.ref===ref&&kinds.includes(c.kind))}
function decisionCard(d){
 const c=cmdFor(d.key,['approval','reject']);
 const p=d.payload||{};
 let acts='';
 if(d.status==='open'&&!c) acts=`<div class="btns">${(p.options&&p.options.length)?p.options.map(o=>`<button class="btn ok" data-a="choose" data-k="${E(d.key)}" data-v="${E(o)}">${E(o)}</button>`).join(''):`<button class="btn ok" data-a="approve" data-k="${E(d.key)}">موافق</button>`}<button class="btn no" data-a="reject" data-k="${E(d.key)}">رفض</button></div>`;
 else if(c) acts=`<div class="note">${c.kind==='approval'?'وافقت':'رفضت'}${c.body?' ('+E(c.body)+')':''} · ${fmtTime(c.created_at)} · ${badge(c.status)}${c.reply?'<br>رد الفريق: '+E(c.reply):''}</div>`;
 return `<div class="card item"><div class="row"><h4>${E(d.title)}</h4>${badge(c&&d.status==='open'?'sent':d.status)}</div>${d.body?`<p>${E(d.body)}</p>`:''}${p.amount?`<div class="kv"><span>المبلغ</span><b>${money(p.amount)}${est(p)}</b></div>`:''}${p.what?`<div class="kv"><span>نوع القرار</span><b>${E(p.what)}</b></div>`:''}${cta(d,'افتح اللينك')}${acts}</div>`}
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
  if(a==='approve'){const r=await confirmBox('تأكيد الموافقة','هتوافق على: '+it.title+'. الموافقة دي على القرار بس، وأي دفع أو نشر لايف هيتأكد معاك في الشات قبل التنفيذ.','موافق',true);if(r.ok)await send('approval',k,r.note)}
  else if(a==='choose'){const v=b.dataset.v;const r=await confirmBox('تأكيد الاختيار','اختيارك: '+v+' ('+it.title+'). ده اختيار بس، وأي دفع أو نشر بيتأكد معاك في الشات.','تأكيد',true);if(r.ok)await send('approval',k,'اختار: '+v+(r.note?' | '+r.note:''))}
  else if(a==='submit'){const f=((it.payload||{}).fields)||[];const vals=f.map((x,n)=>{const el=document.querySelector(`[data-key="${k}"][data-f="${n}"]`);return [x.label,(el&&el.value||'').trim()]});
   if(vals.some(v=>!v[1])){toast('كمل كل الخانات الأول');return}
   await send('message',k,vals.map(v=>v[0]+': '+v[1]).join('\n'))}
  else if(a==='reject'){const r=await confirmBox('تأكيد الرفض','هترفض: '+it.title,'رفض',true);if(r.ok)await send('reject',k,r.note)}
  else if(a==='task_done'){const r=await confirmBox('خلصت؟','هنسجل إنك خلصت: '+it.title,'خلصت',true);if(r.ok)await send('task_done',k,r.note)}
  else if(a==='task_help'){const r=await confirmBox('محتاج مساعدة','اكتب لنا واقف فين','ابعت',true);if(r.ok)await send('task_help',k,r.note)}});
 const cs=$('#cs');if(cs)cs.onclick=async()=>{const t=$('#ct').value.trim();if(!t){toast('اكتب الأمر الأول');return}
  cs.disabled=true;const ok=await send('command',null,t,$('#cl').value);if(!ok)cs.disabled=false};
}
function render(){const r=VIEWS[route()]?route():'today';const y=window.scrollY;$('#app').innerHTML=shell(VIEWS[r](),TITLES[r]);bind();window.scrollTo(0,y)}
let timer;
async function start(){await load();render();clearInterval(timer);timer=setInterval(async()=>{if($('#modal').hidden===false||(document.activeElement&&['TEXTAREA','INPUT','SELECT'].includes(document.activeElement.tagName)))return;await load();render()},20000)}
window.addEventListener('hashchange',()=>{window.scrollTo(0,0);if(state.session)render()});
stars();
(async()=>{const {data}=await sb.auth.getSession();
 if(data.session&&(data.session.user.email||'').toLowerCase()===OWNER){state.session=data.session;start()}
 else{if(data.session)await sb.auth.signOut();loginView()}})();
})();
