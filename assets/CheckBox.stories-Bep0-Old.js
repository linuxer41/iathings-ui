import{p as t,a as b,t as h,d as g,r as v,i as x}from"./props-BNxVHmQm.js";import{t as C,e as _,f as w,p as z,d as B}from"./runtime-CCPs69FA.js";import{s as V}from"./attributes-CuQYaReS.js";import{t as E,c as M,d as S}from"./create-runtime-stories-DeZTNhv2.js";import{b as j}from"./input-CdNcO_N-.js";import{f as O}from"./index-Bhnr57Wm.js";import"./index-Cu4lwwaE.js";import"./index-BBo-_xnV.js";import"./_commonjsHelpers-Cpj98o6Y.js";var P=h('<label class="checkbox svelte-1ry94w0"><input type="checkbox" class="input svelte-1ry94w0"> <span></span></label>');function d(a,e){let c=t(e,"checked",15,!1),p=t(e,"disabled",3,!1),m=t(e,"elevated",3,!0),y=t(e,"size",3,"md"),k=t(e,"onChange",3,()=>{}),f=v(e,["$$slots","$$events","$$legacy","checked","disabled","elevated","size","onChange"]);var o=P(),s=_(o);s.__change=function(...u){var l;(l=k())==null||l.apply(this,u)};var i=w(s,2);let n;C(()=>{s.disabled=p(),n=V(i,n,{class:`checkmark size-${y()??""} iathings-border-radius iathings-elevation`,...f},"svelte-1ry94w0"),E(i,"iathings-elevation",m())}),j(s,c),b(a,o)}g(["change"]);d.__docgen={data:[{name:"checked",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"elevated",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"sm",text:'"sm"'},{kind:"const",type:"string",value:"md",text:'"md"'},{kind:"const",type:"string",value:"lg",text:'"lg"'}],text:'"sm" | "md" | "lg"'},static:!1,readonly:!1,defaultValue:'"md"'},{name:"onChange",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"CheckBox.svelte"};const R={title:"Example/CheckBox",component:d,tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},size:{control:{type:"select"},options:["sm","md","lg"]},elevated:{control:{type:"boolean"}},onChange:{action:"onChange"}},args:{onChange:O()},parameters:{docs:{description:{component:""}}}},{Story:T}=S();function r(a,e){z(e,!1),x(),T(a,{name:"Checked",args:{disabled:!1,checked:!0},parameters:{docs:{description:{story:"More on writing stories with args: https://storybook.js.org/docs/writing-stories/args"}},__svelteCsf:{rawCode:"<CheckBox {...args} />"}}}),B()}r.__docgen={version:3,name:"CheckBox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const q=M(r,R),N=["Checked"],Q=q.Checked;export{Q as Checked,N as __namedExportsOrder,R as default};
