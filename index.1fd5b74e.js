const e={second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,fortnight:12096e5,month:2592e6,year:31536e6,leapYear:316224e5,olympiad:126144e6,decade:31536e7,jubilee:15768e8,century:31536e8},a=e=>isNaN(Date.parse(e)),l=e=>a(e)?null:new Date(e),t=e=>l(e)?.getTime(),n=e=>a=>e-a.getTime(),r=(a,l=Date.now())=>Math.floor(n(l)(a)/e.day);var o=Object.assign(e,{invalidDateString:a,t:t,timeFromString:t,d:l,dateFromString:l,timeDiff:n,daysSince:r,daysFrom:(e,a)=>Math.abs(r(e,a)),daysBetween:(l,n)=>{if(a(l)||a(n))return null;const r=t(n)??0,o=t(l)??0,[u,b]=[o,r].sort(((e,a)=>a-e));return Math.round(Math.abs((u-b)/e.day))}});Math.floor,console.log;const u=[{label:"M̅",value:1e6},{label:"C̅M̅",value:9e5},{label:"D̅",value:5e5},{label:"C̅D̅",value:4e5},{label:"C̅",value:1e5},{label:"X̅C̅",value:9e4},{label:"L̅",value:5e4},{label:"X̅L̅",value:4e4},{label:"X̅",value:1e4},{label:"I̅X̅",value:9e3},{label:"V̅",value:5e3},{label:"I̅V̅",value:4e3},{label:"M",value:1e3},{label:"CM",value:900},{label:"D",value:500},{label:"CD",value:400},{label:"C",value:100},{label:"XC",value:90},{label:"L",value:50},{label:"XL",value:40},{label:"X",value:10},{label:"IX",value:9},{label:"V",value:5},{label:"IV",value:4},{label:"I",value:1}],b=(e,a=[],l=u)=>{console.log(e,a,l);const t=l.find((a=>Math.floor(e/a.value)));return t?b(e-t.value,[...a,t.label]):a.join("")};var s=b;const v=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];var i=e=>{var a;var l;return`${(a=e.getDate())<10?`0${a}`:a} ${l=e.getMonth(),v[l]} ${e.getFullYear()}`};const d=window.document;Array.from(d.querySelectorAll("[data-type]")).forEach((e=>{const{type:a}=e.dataset;switch(a){case"time-span":{const{begin:a,end:l}=e.dataset;if("now"===l){e.innerText=s(o.daysBetween(a,new Date));break}e.innerText=s(o.daysBetween(a,l));break}case"date":{const{date:a}=e.dataset;e.innerText=s(o.daysFrom(o.d(a)));break}case"now":e.innerText=i(new Date)}}));
//# sourceMappingURL=index.1fd5b74e.js.map