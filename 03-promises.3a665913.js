function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("7Y9D8");function i(e,t){const n=Math.random()>.3,o={position:e,delay:t};return new Promise(((e,t)=>{n?e(o):t(o)}))}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(t.target.delay.value),o=parseInt(t.target.step.value),r=parseInt(t.target.amount.value);(function({delay:t,step:n,amount:o}){for(let r=1;r<=o;r+=1)i(r,t).then((({position:t,delay:n})=>{setTimeout((()=>{e(a).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}),n)})).catch((({position:t,delay:n})=>{setTimeout((()=>{e(a).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}),n)})),t+=n})({delay:n,step:o,amount:r}),t.target.delay.value="",t.target.step.value="",t.target.amount.value=""}));
//# sourceMappingURL=03-promises.3a665913.js.map