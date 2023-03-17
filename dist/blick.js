(()=>{"use strict";const e={full:"100%",half:"50%",min:"min-content",fit:"fit-content",max:"max-content",screen:"100vw"},t={full:"100%",half:"50%",min:"min-content",fit:"fit-content",max:"max-content",screen:"100vh"},r={c:"center",bl:"baseline",s:"start",e:"end",sb:"space-between",sa:"space-around",se:"space-evenly"},o={c:"center",bl:"baseline",s:"start",e:"end",st:"stretch"},n={c:"center",bl:"baseline",s:"start",e:"end",sb:"space-between",sa:"space-around",se:"space-evenly"},p={c:"center",bl:"baseline",s:"start",e:"end",st:"stretch"},i={c:"center",bl:"baseline",s:"start",e:"end",sb:"space-between",sa:"space-around",se:"space-evenly"},a={c:"center",bl:"baseline",s:"start",e:"end",st:"stretch"},s={class:{m:{prop:"margin:$",def:"px"},my:{prop:"margin-top:$;margin-bottom:$",def:"px"},mx:{prop:"margin-left:$;margin-right:$",def:"px"},mt:{prop:"margin-top:$",def:"px"},mr:{prop:"margin-right:$",def:"px"},mb:{prop:"margin-bottom:$",def:"px"},ml:{prop:"margin-left:$",def:"px"},center:"margin:auto",p:{prop:"padding:$",def:"px"},py:{prop:"padding-top:$;padding-bottom:$",def:"px"},px:{prop:"padding-left:$;padding-right:$",def:"px"},pt:{prop:"padding-top:$",def:"px"},pr:{prop:"padding-right:$",def:"px"},pb:{prop:"padding-bottom:$",def:"px"},pl:{prop:"padding-left:$",def:"px"},b:{prop:"border-width:$",def:"px"},bt:{prop:"border-top-width:$",def:"px"},br:{prop:"border-right-width:$",def:"px"},bb:{prop:"border-bottom-width:$",def:"px"},bl:{prop:"border-left-width:$",def:"px"},bc:{prop:"border-color:$",vals:{f:"#fff",0:"#000",tp:"transparent",cc:"currentcolor"}},bs:{prop:"border-style:$"},border:{one:"border:1px solid",prop:"border:$",def:"px"},outline:{prop:"outline:$",def:"px"},fill:{prop:"fill:$",vals:{f:"#fff",0:"#000",tp:"transparent",cc:"currentcolor"}},stroke:{prop:"stroke:$",vals:{f:"#fff",0:"#000",tp:"transparent",cc:"currentcolor"}},unappearance:"appearance:none",scale:{prop:"scale:$"},rotate:{prop:"rotate:$",def:"deg"},translate:{prop:"translate:$",def:"px"},skew:{prop:"transform:skew($)",def:"deg",join:",",x:{prop:"transform:skewX($)",def:"deg"},y:{prop:"transform:skewY($)",def:"deg"}},flip:{one:"scale:-1 -1",prop:"scale:$",vals:{x:"-1 1",y:"1 -1"}},tf:{prop:"transform:$",sc:{prop:"transform:scale($)"},sc3d:{prop:"transform:scale3d($)",join:","},scx:{prop:"transform:scaleX($)"},scy:{prop:"transform:scaleY($)"},scz:{prop:"transform:scaleZ($)"},rt:{prop:"transform:rotate($)",def:"deg"},rt3d:{prop:"transform:rotate3d($)",join:","},rtx:{prop:"transform:rotateX($)",def:"deg"},rty:{prop:"transform:rotateY($)",def:"deg"},rtz:{prop:"transform:rotateZ($)",def:"deg"},tl:{prop:"transform:translate($)",def:"px"},tl3d:{prop:"transform:translate3d($)",join:","},tlx:{prop:"transform:translateX($)",def:"px"},tly:{prop:"transform:translateY($)",def:"px"},tlz:{prop:"transform:translateZ($)",def:"px"},sk:{prop:"transform:skew($)",def:"deg",join:","},skx:{prop:"transform:skewX($)",def:"deg"},sky:{prop:"transform:skewY($)",def:"deg"}},w:{prop:"width:$",vals:e,def:"px"},h:{prop:"height:$",vals:t,def:"px"},max:{w:{prop:"max-width:$",vals:e,def:"px"},h:{prop:"max-height:$",vals:t,def:"px"}},min:{w:{prop:"min-width:$",vals:e,def:"px"},h:{prop:"min-height:$",vals:t,def:"px"}},minW:{prop:"min-width:$",vals:e,def:"px"},minH:{prop:"min-height:$",vals:t,def:"px"},maxW:{prop:"max-width:$",vals:e,def:"px"},maxH:{prop:"max-height:$",vals:t,def:"px"},d:{prop:"display:$",vals:{inblock:"inline-block",inflex:"inline-flex",ingrid:"inline-grid"}},inline:"display:inline",block:"display:block",inblock:"display:inline-block",inflex:"display:inline-flex",ingrid:"display:inline-grid",hide:"display:none",upper:"text-transform:uppercase",uppercase:"text-transform:uppercase",lower:"text-transform:lowercase",lowercase:"text-transform:lowercase",capit:"text-transform:capitalize",capitalize:"text-transform:capitalize",pos:{prop:"position:$"},abs:"position:absolute",absolute:"position:absolute",rel:"position:relative",relative:"position:relative",sticky:"position:sticky",fixed:"position:fixed",r:{prop:"border-radius:$",def:"px"},round:{one:"border-radius:9999px",prop:"border-radius:$",def:"px"},sharp:"border-radius:0",transition:{prop:"transition:$",def:"ms"},time:{prop:"transition:$",def:"ms"},select:{prop:"user-select:$"},fit:{prop:"object-fit:$"},bg:{prop:"background:$",tp:"background-color:transparent",cc:"background-color:currentcolor",f:"background-color:#fff",0:"background-color:#000",fixed:"background-attachment:fixed",local:"background-attachment:local",scroll:"background-attachment:scroll",clip:{border:"background-clip:border-box",padding:"background-clip:padding-box",content:"background-clip:content-box",text:"background-clip:text"},origin:{border:"background-origin:border-box",padding:"background-origin:padding-box",content:"background-origin:content-box"}},c:{prop:"color:$",vals:{f:"#fff",0:"#000",tp:"transparent",cc:"currentcolor"}},accent:{prop:"accent-color:$",vals:{f:"#fff",0:"#000",tp:"transparent",cc:"currentcolor"}},caret:{prop:"caret-color:$",vals:{f:"#fff",0:"#000",tp:"transparent",cc:"currentcolor"}},over:{prop:"overflow:$",x:{prop:"overflow-x:$"},y:{prop:"overflow-y:$"}},snap:{x:"scroll-snap-type:x mandatory",y:"scroll-snap-type:y mandatory",start:"scroll-snap-align:start",center:"scroll-snap-align:center",end:"scroll-snap-align:end",stop:"scroll-snap-stop: always"},shadow:{box:{prop:"box-shadow:$",one:"box-shadow:3px 4px 3px #0000004d",def:"px"},text:{prop:"text-shadow:$",one:"text-shadow:3px 4px 3px #0000004d",def:"px"}},cursor:{prop:"cursor:$"},resize:{prop:"resize:$",vals:{x:"horizontal",y:"vertical"}},top:{prop:"top:$",def:"px"},right:{prop:"right:$",def:"px"},bottom:{prop:"bottom:$",def:"px"},left:{prop:"left:$",def:"px"},ratio:{prop:"aspect-ratio:$",vals:{sqr:"1 / 1",vid:"16 / 9"}},box:{prop:"box-sizing:$",vals:{content:"content-box",border:"border-box"}},float:{prop:"float:$"},clear:{prop:"clear:$",vals:{x:"horizontal",y:"vertical"}},z:{prop:"z-index:$"},visible:"visibility:visible",invisible:"visibility:hidden",collapse:"visibility:collapse",opacity:{prop:"opacity:$"},blend:{prop:"mix-blend-mode:$"},hue:{prop:"filter:hue-rotate($)",def:"deg"},invert:{one:"filter:invert(1)",prop:"filter:invert($)"},blur:{prop:"filter:blur($)",def:"px"},brightness:{prop:"filter:brightness($)"},contrast:{prop:"filter:contrast($)"},saturate:{prop:"filter:saturate($)"},contrast:{prop:"filter:contrast($)"},grayscale:{prop:"filter:grayscale($)",def:"%"},sepia:{prop:"filter:sepia($)",def:"%"},pointer:"cursor:pointer",ws:{prop:"white-space:$"},space:{prop:"white-space:$"},list:{prop:"list-style:$"},fs:{prop:"font-size:$",def:"px"},fsz:{prop:"font-size:$",def:"px"},fst:{prop:"font-style:$"},fw:{prop:"font-weight:$"},medium:"font-weight:500",semibold:"font-weight:600",bold:"font-weight:700",extrabold:"font-weight:800",fv:{prop:"font-variant:$"},ff:{prop:"font-family:$",vals:{sans:"var(--font-sans)",serif:"var(--font-serif)",mono:"var(--font-mono)"}},lh:{prop:"line-height:$"},ta:{prop:"text-align:$"},td:{prop:"text-decoration:$",vals:{line:"underline"},def:"px"},wb:{prop:"word-break:$",vals:{all:"break-all",keep:"keep-all"}},break:{prop:"word-break:$",vals:{all:"break-all",keep:"keep-all"}},grad:{prop:"background:linear-gradient($)",def:"deg",join:","},fullscreen:"position:absolute;left:0;top:0;width:100%;height:100%",flex:{one:"display:flex",prop:"flex:$",center:"justify-content:center;align-items:center",col:{one:"flex-direction:column",rev:"flex-direction:column-reverse"},row:{one:"flex-direction:row",rev:"flex-direction:row-reverse"},space:"justify-content:space-between;align-items:center",wrap:{one:"flex-wrap:wrap",rev:"flex-wrap:wrap-reverse"},nowrap:"flex-wrap:nowrap",stretch:"align-items:stretch"},col:{one:"flex-direction:column",rev:"flex-direction:column-reverse"},row:{one:"flex-direction:row",rev:"flex-direction:row-reverse"},gap:{prop:"gap:$",def:"px",x:{prop:"column-gap:$",def:"px"},y:{prop:"row-gap:$",def:"px"}},jc:{prop:"justify-content:$",vals:r},ji:{prop:"justify-items:$",vals:o},ac:{prop:"align-content:$",vals:r},ai:{prop:"align-items:$",vals:o},order:{prop:"order:$"},basis:{prop:"flex-basis:$"},grow:{one:"flex-grow:1",prop:"flex-grow:$"},shrink:{one:"flex-shrink:1",prop:"flex-shrink:$"},grid:{one:"display:grid",cols:{prop:"grid-template-columns:repeat($,1fr)"},rows:{prop:"grid-template-rows:repeat($,1fr)"}}},flex:{col:{one:"flex-direction:column",vals:{start:"flex-direction:column;align-items:flex-start",center:"flex-direction:column;align-items:center",end:"flex-direction:column;align-items:flex-end",rev:"flex-direction:column-reverse"}},row:{one:"flex-direction:row",vals:{start:"flex-direction:row;justify-content:flex-start",center:"flex-direction:row;justify-content:center",end:"flex-direction:row;justify-content:flex-end",rev:"flex-direction:row-reverse"}},order:{prop:"order:$",def:""},basis:{prop:"flex-basis:$"},center:"justify-content:center;align-items:center",space:"justify-content:space-between;align-items:center",stretch:"align-items:stretch",grow:{one:"flex-grow:1",prop:"flex-grow:$",def:""},shrink:{one:"flex-shrink:1",prop:"flex-shrink:$",def:""},wrap:{one:"flex-wrap:wrap",prop:"flex-wrap:$",vals:{rev:"wrap-reverse"}},jc:{prop:"justify-content:$",vals:n},ji:{prop:"justify-items:$",vals:p},ac:{prop:"align-content:$",vals:n},ai:{prop:"align-items:$",vals:p}},grid:{cols:{prop:"grid-template-columns:repeat($,1fr)",def:""},rows:{prop:"grid-template-rows:repeat($,1fr)",def:""},jc:{prop:"justify-content:$",vals:i},ji:{prop:"justify-items:$",vals:a},ac:{prop:"align-content:$",vals:i},ai:{prop:"align-items:$",vals:a}},text:{tp:{one:"color:transparent!important"},cols:{prop:"columns:$"},lh:{prop:"line-height:$",def:""},bold:{one:"font-weight:bold"},bolder:{one:"font-weight:bolder"},wg:{prop:"font-weight:$",def:""},thin:{one:"font-weight:lighter"},normal:{one:"font-weight:normal"},italic:{one:"font-style: italic"},delete:{one:"text-decoration-line:line-through"},line:{one:"text-decoration-line:underline"},overline:{one:"text-decoration-line:overline"},up:{one:"text-transform:uppercase"},low:{one:"text-transform:lowercase"},cap:{one:"text-transform:capitalize"},center:{one:"text-align:center"},left:{one:"text-align:left"},right:{one:"text-align:right"},justify:{one:"text-align:justify"},mono:{one:"font-family:var(--font-mono)"},serif:{one:"font-family:var(--font-serif)"},sans:{one:"font-family:var(--font-sans)"},font:{prop:"font-family:$"},vertical:{one:"writing-mode:vertical-lr"},wrap:{one:"word-wrap:break-word"},dots:{one:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%"},align:{prop:"vertical-align:$"},space:{prop:"white-space:$"},shadow:{one:"text-shadow:3px 3px 2px #0000004d",prop:"text-shadow:$",def:"px"},stroke:{prop:"-webkit-text-stroke:$",def:"px"},break:{prop:"word-break:$",vals:{all:"break-all",keep:"keep-all"}}},screen:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"},states:{h:":hover",f:":focus",c:":checked",a:":active",first:">*:first-child",last:">*:last-child",odd:">*:nth-child(odd)",even:">*:nth-child(even)",ft:">*:first-child",lt:">*:last-child",od:">*:nth-child(odd)",ev:">*:nth-child(even)",all:" *","*":" *",every:">*",">":">*",bt:">*+*",between:">*+*",aft:"::after",bef:"::before",after:"::after",before:"::before"},attr:{text:"text",flex:"flex",grid:"grid"},colors:{black:{def:"#000"},white:{def:"#fff"},gray:{def:"#888",1:"#dbdbdb",2:"#b8b8b8",3:"#585858",4:"#353535"},red:{def:"#f03333",1:"#ebb1b1",2:"#e69292",3:"#e77171",4:"#e34949"},green:{def:"#2ab72a",1:"#a7eea7",2:"#71cf71",3:"#5ec65e",4:"#44c044"},blue:{def:"#0077ff",1:"#a1c5ee",2:"#70a9ea",3:"#539bed",4:"#338aef"},yellow:{def:"#efef21",1:"#efefb3",2:"#efef8c",3:"#e8e84c",4:"#c7c720"},orange:{def:"#febd44",1:"#ffebc6",2:"#ffdd9f",3:"#ffd483",4:"#ffc861"},pink:{def:"#f1aab6",1:"#f0cad0",2:"#e0a6b0",3:"#d47b8a",4:"#c45265"},purple:{def:"#9d319d",1:"#efafef",2:"#d87ed8",3:"#c76bc7",4:"#b351b3"}},font:{main:"system-ui,-apple-system,sans-serif",serif:"serif",mono:"monospace",sans:"sans-serif"},autoTheme:!1,reset:!0,root:!0,time:!1,wrapper:!0,useAttr:!0,beautify:!1,maxPrefix:"m",add:function(e={}){"object"==typeof e?(e.class&&(this.class={...e.class,...this.class}),e.flex&&(this.flex={...e.flex,...this.flex}),e.text&&(this.text={...e.text,...this.text}),e.grid&&(this.grid={...e.grid,...this.grid})):console.error("BlickCSS. The blick.add function must contain an object.")},config:function(e={}){if("object"==typeof e)for(const t in e)this[t]=e[t];else console.error("BlickCSS. The blick.config function must contain an object.")}},l=(e,t,r)=>e?e.split("+").map((e=>e.includes("/")?parseFloat((e.split("/")[0]/e.split("/")[1]*100).toFixed(2))+"%":e.includes("$")?`var(--${e.slice(1)})`:isNaN(e)?e:e+(t.p?.def??("class"!==r?"px":"")))).join(t.p?.join??" ").replaceAll("_"," "):"",c=(e,t)=>{let r=e;return Array.from(new Set(r.match(/[^\w-_]/g)))?.forEach((e=>r=r.replaceAll(e,`\\${e}`))),"class"===t?`.${r}`:`[${t}~="${e}"]`},f=(e,t,r,o,n)=>{let p=e,i=!!e.includes("!")&&(e=e.replaceAll("!","")),a=e.split(":"),f=1!==a.length&&a.slice(0,a.length-1),d=((e,t,r)=>e.v?e.p?"function"==typeof e.p?e.p({prop:e.s?.prop,val:e.v,sel:e.s}):e.p.prop?e.p.prop.replaceAll("$",e.p.vals?.[e.v]??l(e.v,e,t)):e.p.vals[e.v]:"class"!==t&&("text"===t?parseFloat(e.v)?"font-size:"+l(e.v,!1,t):"color:"+l(e.v,!1,t):"gap:"+l(e.v,!1,t)):"string"==typeof e.p?e.p:"function"==typeof e.p?e.p():e.p?.one)(((e,t)=>{let r,o,n=t.split("-"),p=e;for(const e in n){if(p=p[n[e]],!p)return{p:r,v:n.slice(e).join("-"),s:o};o=r,r=p}return{p:r,v:!1}})(s[t],a[a.length-1]),t);if(d){if(i&&(d+="!important"),t=s.attr[t]||"class",f)for(const e of f)return n.includes(e)?(o[e][c(p,t)]=d,c(p,t)+`{${d}}`):e.includes("&")?(r[c(p,t)+e.replaceAll("_"," ").replace("&","")]=d,c(p,t)+e.replaceAll("_"," ").replace("&","")+`{${d}}`):(r[c(p,t)+(s.states[e]??":"+e)]=d,c(p,t)+(s.states[e]??":"+e)+`{${d}}`);else r[c(p,t)]=d;return c(p,t)+`{${d}}`}return!1},d={class:[],flex:[],text:[],grid:[]};let x={},b="",m=Object.fromEntries([...Object.keys(s.screen).map((e=>[e,{}])),...Object.keys(s.screen).map((e=>[s.maxPrefix+"-"+e,{}])),["dark",{}]]),$=Object.fromEntries(Object.keys(m).map((e=>[e,""]))),g=Object.keys(m),h={...$};window.blick=s;const u=document.currentScript;u?.src.includes("?")&&new URLSearchParams(u.src).forEach(((e,t)=>{s[t.split("?")[1]??t]=!!+e}));const w=document.createElement("style");w.id="blick-styles",document.head.append(w),new MutationObserver((e=>function(e,t){if(document.body&&((e=>{const t=["STYLE","SCRIPT","HEAD","#text"];function r(e){return!t.includes(e?.nodeName)&&!!(e?.getAttribute("class")||e?.getAttribute(blick.attr.flex)||e?.getAttribute(blick.attr.text)||e?.getAttribute(blick.attr.grid))}return 1!==e.length||!(!r(e[0].target)||e[0].addedNodes)||e[0].addedNodes.length>1||!!r(e[0].addedNodes[0])||void 0})(e)||!t.textContent)){let e=document.querySelectorAll(`[class],[${s.attr.flex}],[${s.attr.text}],[${s.attr.grid}]`);if(e.length){s.time&&console.time("blick. styles upd");for(const t of e)for(const e in d){let r=s.attr[e]||"class";if(t.hasAttribute(r))for(const o of t.getAttribute(r).trim().split(" ").filter((e=>e)))d[e].includes(o)||(f(o,e,x,m,g),d[e].push(o))}$={...h};for(const e in m)for(const[t,r]of Object.entries(m[e]))$[e]+=s.beautify?`\n${t} {${r}}`:`${t}{${r}}`;b="";for(const[e,t]of Object.entries(x))b+=s.beautify?`\n${e} {${t}}`:`${e}{${t}}`;((e,t,r,o)=>{r.textContent="/* ! blickcss v1.0.7 | MIT License | https://blick.netlify.app */\n"+(s.reset?'*,::after,::before{text-decoration:none;object-fit:cover;box-sizing:border-box;-webkit-tap-highlight-color:transparent;font-feature-settings:"pnum" on,"lnum" on;outline:0;border:0;margin:0;padding:0;border-style:solid;color:inherit}h1,h2,h3,h4,h5,h6{font-size:var(--fsz);font-weight:700;line-height:1.2}h1{--fsz:2.5rem}h2{--fsz:2rem}h3{--fsz:1.75rem}h4{--fsz:1.5rem}h5{--fsz:1.25rem}h6{--fsz:1rem}a{color:var(--blue)}hr{width:100%;margin:20px 0;border-top:1px solid #aaa}ul[role="list"],ol[role="list"]{list-style:none}html:focus-within{scroll-behavior:smooth}body{text-rendering:optimizeSpeed;font-family:var(--font-main)}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%}input,button,textarea,select{font:inherit}[hidden]{display:none}option{color:#000;background-color:#fff}.theme-dark{background-color:#222}.theme-dark *{color:#fff}':"")+(s.root?(e=>{let t="",r="";for(const[r,o]of Object.entries(e.font))t+=`--font-${r}:${o};`;for(const[t,o]of Object.entries(e.colors))for(const[e,n]of Object.entries(o))r+=`--${t+("def"===e?"":"-"+e)}:${n};`;return`:root{${r+t}}`})(s):"")+(s.useAttr?`[${s.attr.flex}]:not([${s.attr.flex}~=off]){display:flex}[${s.attr.grid}]:not([${s.attr.grid}~=off]){display:grid}`:"")+(s.wrapper?".wrapper{width:100%;margin:0 auto;padding-left:var(--wrapper-padding,15px);padding-right:var(--wrapper-padding,15px)}":"")+e+((e,t)=>{let r="";for(const o in t)o.startsWith(blick.maxPrefix+"-")?e[o]&&(r+=blick.beautify?`\n\n@media(max-width:${blick.screen[o.slice(blick.maxPrefix.length+1)]}){${e[o]}\n}`:`@media(max-width:${blick.screen[o.slice(blick.maxPrefix.length+1)]}){${e[o]}}`):blick.screen[o]&&(e[o]||blick.wrapper)&&(r+=blick.beautify?`\n\n@media(min-width:${blick.screen[o]}){${blick.wrapper?`\n.wrapper {max-width:${blick.screen[o]}}`:""}${e[o]}\n}`:`@media(min-width:${blick.screen[o]}){${blick.wrapper?`.wrapper{max-width:${blick.screen[o]}}`:""}${e[o]}}`);return r})(t,o)+(s.autoTheme?"@media(prefers-color-scheme:dark){"+t.dark+"}":document.body?.classList.contains("theme-dark")?t.dark:"")})(b,$,t,m),s.time&&console.timeEnd("blick. styles upd")}}}(e,w))).observe(document.documentElement,{attributeFilter:["class",s.attr.text,s.attr.flex,s.attr.grid],childList:!0,attributes:!0,subtree:!0})})();