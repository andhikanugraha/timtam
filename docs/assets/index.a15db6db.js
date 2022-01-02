import{r as U,a as T,w as L,c as b,b as F,s as J,o as l,d as u,e as i,f as _,g as z,h as g,i as D,j as w,u as c,t as f,k as h,l as q,m as x,F as p,z as W,n as m,p as E,q as v,v as K,x as I,y as Y}from"./vendor.508339be.js";const Q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}};Q();const X=["years","months","weeks","days","hours","minutes","seconds"],k=U({useCurrentTime:!0,manualTime:new Date,manualTimeZone:"",manipulations:[{operation:"add",count:0,unit:"hours"}],viewTimeZones:[]});function N(){return k}const P=T(new Date);function Z(){return window.setInterval(()=>{P.value=new Date},1e3)}const R=T(Z());L(()=>{k.useCurrentTime?(P.value=new Date,R.value=Z()):window.clearInterval(R.value)});const aa=b(()=>k.useCurrentTime?P.value:k.manualTime);function ea(){return P}function ia(){return b(()=>{let n=aa.value;for(const a of k.manipulations)a.operation==="add"?n=F(n,{[a.unit]:a.count}):n=J(n,{[a.unit]:a.count});return n})}var M=(n,a)=>{const e=n.__vccOpts||n;for(const[o,r]of a)e[o]=r;return e};const ra={},na={class:"float-right -m-1 p-1 cursor-pointer hover:bg-purple-100 text-gray-300 hover:text-red-500 rounded-lg"},ta=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[i("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),i("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),oa=[ta];function sa(n,a){return l(),u("div",na,oa)}var j=M(ra,[["render",sa]]);function ca(){if("supportedValuesOf"in Intl)return Intl.supportedValuesOf("timeZone");const n=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmera","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/La_Rioja","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Buenos_Aires","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Catamarca","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Cordoba","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indianapolis","America/Inuvik","America/Iqaluit","America/Jamaica","America/Jujuy","America/Juneau","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Louisville","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Mendoza","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port_of_Spain","America/Port-au-Prince","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Katmandu","Asia/Khandyga","Asia/Kirov","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Saigon","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faeroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CST6CDT","Etc/GMT","EST5EDT","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MST7MDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","PST8PDT"];function a(e){try{if(new Intl.DateTimeFormat("en",{timeZone:e}).resolvedOptions().timeZone==e)return!0}catch{}return!1}return n.filter(a)}const la=ca().filter(n=>n.includes("/"));function C(n){const a=n.lastIndexOf("/");return n.substring(a+1).replaceAll("_"," ")}const ua=la.map(n=>[n,C(n)]),ma={class:"mb-4 bg-white -mx-2 p-4 rounded-lg"},Aa={class:"text-purple-500 block mb-1"},da={key:0,class:"font-semibold text-purple-800 mr-1"},pa=i("br",{class:"hidden"},null,-1),fa={class:"block mb-1"},_a=i("br",{class:"hidden"},null,-1),ha={class:"text-4xl font-bold font-mono block"},y=_({props:{date:null,closable:{type:Boolean},timezone:null,label:null},emits:["close"],setup(n,{emit:a}){const e=n,o="PPPP",r="pp",s="'UTC'xxx zzzz",t=b(()=>e.timezone?z(e.date,e.timezone,o):g(e.date,o)),A=b(()=>e.timezone?z(e.date,e.timezone,r):g(e.date,r)),d=b(()=>e.label?e.label:e.timezone?C(e.timezone):"\u{1F4CD}"),$=b(()=>{if(e.timezone){let B=s;return e.timezone.includes("GMT")&&(B="zzzz"),z(e.date,e.timezone,B)}else return g(e.date,s)});function V(){a("close")}return(B,_e)=>(l(),u("div",ma,[e.closable?(l(),D(j,{key:0,onClick:V})):w("",!0),i("span",Aa,[c(d)?(l(),u("span",da,f(c(d)),1)):w("",!0),h(" "+f(c($)),1)]),pa,i("span",fa,f(c(t)),1),_a,i("span",ha,f(c(A)),1)]))}}),ba={},ga={type:"button",class:"bg-purple-500 hover:bg-purple-600 block w-full text-white p-2 rounded-lg shadow"};function va(n,a){return l(),u("button",ga,[q(n.$slots,"default")])}var S=M(ba,[["render",va]]);const ka=["value"],G=_({setup(n){return(a,e)=>(l(!0),u(p,null,x(c(ua),([o,r])=>(l(),u("option",{key:o,value:o,class:"bg-white text-gray-800"},f(r),9,ka))),128))}}),ya=i("h1",{class:"text-lg font-bold mb-4"},"1. Set initial time",-1),Ta={class:"-mx-2"},wa=h("Set manually"),xa={class:"-mx-2 rounded-lg"},Ea=i("option",{disabled:"",selected:""},"Select a time zone",-1),Pa={value:""},Ma={class:"-mx-2"},Ca=h("Use current time"),Sa=_({setup(n){const a=N(),e=ea(),o=T(g(e.value,"yyyy-MM-dd'T'HH:mm:ss"));L(()=>{a.manualTimeZone?a.manualTime=W(new Date(o.value),a.manualTimeZone):a.manualTime=new Date(o.value)});const r=g(new Date,"zzzz");return(s,t)=>(l(),u(p,null,[ya,c(a).useCurrentTime?(l(),u(p,{key:0},[m(y,{date:c(e)},null,8,["date"]),i("div",Ta,[m(S,{onClick:t[0]||(t[0]=A=>c(a).useCurrentTime=!1)},{default:E(()=>[wa]),_:1})])],64)):(l(),u(p,{key:1},[m(y,{date:c(a).manualTime,timezone:c(a).manualTimeZone},null,8,["date","timezone"]),i("div",xa,[v(i("input",{type:"datetime-local","onUpdate:modelValue":t[1]||(t[1]=A=>o.value=A),class:"block w-full p-4 rounded-lg bg-white mb-4 border shadow"},null,512),[[K,o.value]]),v(i("select",{class:"block w-full rounded-lg p-4 bg-white mb-4 border shadow focus:outline focus:outline-purple-500","onUpdate:modelValue":t[2]||(t[2]=A=>c(a).manualTimeZone=A)},[Ea,i("option",Pa,"\u{1F4CD} "+f(c(r)),1),m(G)],512),[[I,c(a).manualTimeZone]])]),i("div",Ma,[m(S,{onClick:t[3]||(t[3]=A=>c(a).useCurrentTime=!0)},{default:E(()=>[Ca]),_:1})])],64))],64))}}),$a={},Ba={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-player-track-next",width:"16",height:"16",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},za=i("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),Da=i("path",{d:"M3 5v14l8 -7z"},null,-1),Ia=i("path",{d:"M14 5v14l8 -7z"},null,-1),Na=[za,Da,Ia];function Va(n,a){return l(),u("svg",Ba,Na)}var H=M($a,[["render",Va]]);const La={},Ka={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-player-track-prev",width:"16",height:"16",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},Za=i("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),Ra=i("path",{d:"M21 5v14l-8 -7z"},null,-1),ja=i("path",{d:"M10 5v14l-8 -7z"},null,-1),Ga=[Za,Ra,ja];function Ha(n,a){return l(),u("svg",Ka,Ga)}var O=M(La,[["render",Ha]]);const Oa=i("h1",{class:"text-lg font-bold mb-4"},"2. Manipulate it",-1),Ua={key:0,class:"text-purple-500"},Fa=h("\xA0Add "),Ja={key:1,class:"text-purple-500"},qa=h("\xA0Subtract "),Wa=["onUpdate:modelValue"],Ya=["onUpdate:modelValue"],Qa={class:"flex gap-4 -mx-2"},Xa={class:"flex-1"},ae=h("\xA0Subtract "),ee={class:"flex-1"},ie=h(" Add\xA0 "),re=_({setup(n){const a=N();function e(r){a.manipulations.push({operation:r,count:1,unit:"hours"})}function o(r){a.manipulations.splice(r,1)}return(r,s)=>(l(),u(p,null,[Oa,(l(!0),u(p,null,x(c(a).manipulations,(t,A)=>(l(),u("div",{key:A,class:"bg-white -mx-2 px-4 py-2 mb-4 rounded-lg"},[m(j,{onClick:d=>o(A),class:"-my-0"},null,8,["onClick"]),t.operation==="add"?(l(),u("span",Ua,[m(H,{class:"inline-block"}),Fa])):t.operation==="sub"?(l(),u("span",Ja,[m(O,{class:"inline-block"}),qa])):w("",!0),v(i("input",{type:"number","onUpdate:modelValue":d=>t.count=d,size:"4",class:"bg-white border p-1 text-base mx-4 rounded shadow-sm focus:outline focus:outline-purple-500"},null,8,Wa),[[K,t.count,void 0,{number:!0}]]),v(i("select",{"onUpdate:modelValue":d=>t.unit=d,class:"bg-white border p-1 text-base rounded shadow-sm focus:outline focus:outline-purple-500"},[(l(!0),u(p,null,x(c(X),d=>(l(),u("option",{key:d},f(d),1))),128))],8,Ya),[[I,t.unit]])]))),128)),i("div",Qa,[i("div",Xa,[m(S,{onClick:s[0]||(s[0]=t=>e("sub"))},{default:E(()=>[m(O,{class:"inline-block"}),ae]),_:1})]),i("div",ee,[m(S,{onClick:s[1]||(s[1]=t=>e("add"))},{default:E(()=>[ie,m(H,{class:"inline-block"})]),_:1})])])],64))}}),ne={disabled:"",value:"",class:"italic bg-white p-1"},te=_({props:{label:null,autoclear:{type:Boolean}},emits:["select"],setup(n,{emit:a}){const e=n,o=T("");function r(){a("select",o.value,C(o.value)),e.autoclear&&(o.value="")}return(s,t)=>v((l(),u("select",{onChange:r,"onUpdate:modelValue":t[0]||(t[0]=A=>o.value=A)},[i("option",ne,f(e.label),1),m(G)],544)),[[I,o.value]])}}),oe=i("h1",{class:"text-lg font-bold mb-4"},"3. Results",-1),se={class:"mb-6 -mx-2"},ce=_({setup(n){const a=N(),e=ia();function o(s,t){a.viewTimeZones.push([s,t])}function r(s){a.viewTimeZones.splice(s,1)}return(s,t)=>(l(),u(p,null,[oe,!c(a).useCurrentTime&&c(a).manualTimeZone?(l(),D(y,{key:0,date:c(e),timezone:c(a).manualTimeZone,label:c(C)(c(a).manualTimeZone)},null,8,["date","timezone","label"])):w("",!0),m(y,{date:c(e)},null,8,["date"]),(l(!0),u(p,null,x(c(a).viewTimeZones,([A,d],$)=>(l(),D(y,{date:c(e),key:A,timezone:A,label:d,closable:"",onClose:V=>r($)},null,8,["date","timezone","label","onClose"]))),128)),i("div",se,[m(te,{onSelect:o,class:"p-2 w-full bg-purple-500 hover:bg-purple-600 shadow text-white border rounded-lg appearance-none text-center cursor-pointer",label:"Show in another timezone",autoclear:""})])],64))}}),le={class:"container mx-auto"},ue=i("p",{class:"text-lg mt-8 lg:mt-16 font-bold mb-4 border-b pb-3 px-4"},"timtam",-1),me={class:"lg:flex lg:gap-12 mx-4"},Ae={class:"flex-1 mb-8"},de={class:"flex-1 mb-8"},pe={class:"flex-1"},fe=_({setup(n){return(a,e)=>(l(),u("div",le,[ue,i("div",me,[i("div",Ae,[m(Sa)]),i("div",de,[m(re)]),i("div",pe,[m(ce)])])]))}});Y(fe).mount("#app");