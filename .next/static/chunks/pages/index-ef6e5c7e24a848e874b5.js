(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(n,e,t){"use strict";var r=t(3038),i=t(862);e.default=void 0;var o=i(t(7294)),a=t(1689),u=t(2441),c=t(5749),s={};function d(n,e,t,r){if(n&&(0,a.isLocalURL)(e)){n.prefetch(e,t,r).catch((function(n){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:n&&n.locale;s[e+"%"+t+(i?"%"+i:"")]=!0}}var p=function(n){var e=!1!==n.prefetch,t=(0,u.useRouter)(),i=t&&t.asPath||"/",p=o.default.useMemo((function(){var e=(0,a.resolveHref)(i,n.href,!0),t=r(e,2),o=t[0],u=t[1];return{href:o,as:n.as?(0,a.resolveHref)(i,n.as):u||o}}),[i,n.href,n.as]),l=p.href,f=p.as,m=n.children,x=n.replace,h=n.shallow,g=n.scroll,b=n.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var v=o.Children.only(m),w=v&&"object"===typeof v&&v.ref,k=(0,c.useIntersection)({rootMargin:"200px"}),j=r(k,2),y=j[0],z=j[1],Z=o.default.useCallback((function(n){y(n),w&&("function"===typeof w?w(n):"object"===typeof w&&(w.current=n))}),[w,y]);(0,o.useEffect)((function(){var n=z&&e&&(0,a.isLocalURL)(l),r="undefined"!==typeof b?b:t&&t.locale,i=s[l+"%"+f+(r?"%"+r:"")];n&&!i&&d(t,l,f,{locale:r})}),[f,l,z,b,e,t]);var F={ref:Z,onClick:function(n){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(n),n.defaultPrevented||function(n,e,t,r,i,o,u,c){("A"!==n.currentTarget.nodeName||!function(n){var e=n.currentTarget.target;return e&&"_self"!==e||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,a.isLocalURL)(t))&&(n.preventDefault(),null==u&&(u=r.indexOf("#")<0),e[i?"replace":"push"](t,r,{shallow:o,locale:c,scroll:u}))}(n,t,l,f,x,h,g,b)},onMouseEnter:function(n){(0,a.isLocalURL)(l)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(n),d(t,l,f,{priority:!0}))}};if(n.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:t&&t.locale,C=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(f,E,t&&t.locales,t&&t.domainLocales);F.href=C||(0,a.addBasePath)((0,a.addLocale)(f,E,t&&t.defaultLocale))}return o.default.cloneElement(v,F)};e.default=p},5749:function(n,e,t){"use strict";var r=t(3038);e.__esModule=!0,e.useIntersection=function(n){var e=n.rootMargin,t=n.disabled||!a,c=(0,i.useRef)(),s=(0,i.useState)(!1),d=r(s,2),p=d[0],l=d[1],f=(0,i.useCallback)((function(n){c.current&&(c.current(),c.current=void 0),t||p||n&&n.tagName&&(c.current=function(n,e,t){var r=function(n){var e=n.rootMargin||"",t=u.get(e);if(t)return t;var r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var e=r.get(n.target),t=n.isIntersecting||n.intersectionRatio>0;e&&t&&e(t)}))}),n);return u.set(e,t={id:e,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(n,e),o.observe(n),function(){a.delete(n),o.unobserve(n),0===a.size&&(o.disconnect(),u.delete(i))}}(n,(function(n){return n&&l(n)}),{rootMargin:e}))}),[t,e,p]);return(0,i.useEffect)((function(){if(!a&&!p){var n=(0,o.requestIdleCallback)((function(){return l(!0)}));return function(){return(0,o.cancelIdleCallback)(n)}}}),[p]),[f,p]};var i=t(7294),o=t(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},4458:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ve}});var r=t(5893),i=(t(7294),t(2465)),o=t(9163);function a(){var n=(0,i.Z)(["\n  display: flex;  \n  height: ",";\n\n  @media "," {\n    height: ",";\n  }\n\n  @media "," {\n    height: ",";\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,i.Z)(["\n  margin-left: ",";\n  transition: 0.3s ease;\n  justify-content: center;\n  border-radius: 50px;\n  padding: 8px;\n\n  &:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n\n  @media "," {\n    margin-left: ",";\n\n  }\n  @media "," {\n    margin-left: ",";\n  }\n"]);return u=function(){return n},n}function c(){var n=(0,i.Z)(["\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ",";\n  opacity: ",";\n  transition: .4s ease;\n  font-size: ",";\n  font-weight: 600;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: ",";\n\n  &:hover {\n    opacity: 0;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    opacity: 1;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  &:disabled{\n    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);\n    opacity: 0.5;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    font-size: 14px;\n  }\n"]);return c=function(){return n},n}function s(){var n=(0,i.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  font-size: ",";\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: ",";\n  color: #fff;\n  background: ",";\n  cursor: pointer;\n  transition: 0.5s ease;\n  position: relative;\n  overflow: hidden;\n  opacity: ",";\n\n  @media "," {\n    width: ",";\n    height: ",";\n    font-size: ",";\n    margin-bottom: ",";\n  }\n\n  @media "," {\n    width: 100%;\n    height: 32px;\n    font-size: 14px;\n    margin-bottom: ",";\n  }\n"]);return s=function(){return n},n}function d(){var n=(0,i.Z)(["\n  color: #FFF;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.33);\n  box-sizing: border-box;\n  border-radius: 999px;\n  padding: 16px 24px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 16px;\n  width: fit-content;\n  margin-top: 32px;\n  margin-bottom: 80px;\n  cursor: pointer;\n  transition: 0.4s ease;\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    color: #0f1624;\n    background: #fff;\n    border: 1px solid #fff;\n  }\n\n  &:active {\n    background: #e0e4eb;\n    border: 1px solid #304169;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media ","{\n    margin-top: 24px; \n    margin-bottom: 64px;\n    padding: 16px 24px;\n    width: fit-content;\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  @media "," {\n    margin-top: 16px;\n    margin-bottom: 40px;\n    padding: 8px 16px;\n    width: 100%;\n    font-size: 14px;\n    line-height: 16px;\n  }\n"]);return d=function(){return n},n}function p(){var n=(0,i.Z)(["\n  max-width: 800px;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n\n@media "," {\n    max-width: 672px;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  @media "," {\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return p=function(){return n},n}function l(){var n=(0,i.Z)(["\n\n  width: 64px;\n  height: 6px;\n  border-radius: 10px;\n  background-color: #fff;\n  background: ",";\n\n    margin: ",";\n\n  @media "," {\n    width: 48px;\n    height: 4px;\n  }\n\n  @media "," {\n    width: 32px;\n    height: 2px;\n  }\n"]);return l=function(){return n},n}function f(){var n=(0,i.Z)(["\n  max-width: 800px;\n  font-size: 24px;\n  line-height: 40px;\n  font-weight: 300;\n  padding-bottom: 3.6rem;\n  color: rgba(255, 255, 255, 0.5);\n\n  @media "," {\n    max-width: 670px;\n    font-size: 20px;\n    line-height: 32px;\n    padding-bottom: 24px;\n  }\n\n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n    padding-bottom: 16px;\n  }\n"]);return f=function(){return n},n}function m(){var n=(0,i.Z)(["\n  font-weight: 800;\n  font-size: ",";\n  line-height: ",";\n  width: max-content;\n  max-width: 100%;\n  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 16px;\n  padding: ",";\n\n  @media ","{\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 12px;\n    padding: ",";\n  }\n\n  @media ","{\n    font-size: 32px;\n    line-height: 40px;\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 8px;\n    padding: ",";\n    max-width: 100%;\n  }\n"]);return m=function(){return n},n}function x(){var n=(0,i.Z)(["\n  display: ",";\n  flex-direction: ",";\n  padding: "," ;\n  margin: 0 auto;\n  max-width: 1040px;\n  box-sizing: content-box;\n  position: relative;\n  overflow: hidden;\n  grid-template-columns: 1fr 1fr;\n\n  @media "," {\n    padding: 24px 48px 0;\n    flex-direction: column;\n  }\n\n  @media "," {\n    padding: "," ;\n\n    width: calc(100vw - 32px);\n    flex-direction: column;\n  }\n"]);return x=function(){return n},n}var h=o.default.section(x(),(function(n){return n.grid?"grid":"flex"}),(function(n){return n.row?"row":"column"}),(function(n){return n.nopadding?"0":"32px 48px 0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.nopadding?"0":"16px 16px 0"})),g=o.default.h2(m(),(function(n){return n.main?"65px":"56px"}),(function(n){return n.main?"72px":"56px"}),(function(n){return n.main?"58px 0 16px":"0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"40px 0 12px":"0"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.main?"28px":"32px"}),(function(n){return n.main?"32px":"40px"}),(function(n){return n.main?"16px 0 8px":"0"})),b=o.default.p(f(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),v=o.default.div(l(),(function(n){return n.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.divider?"4rem 0":""}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}));o.default.p(p(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.button(d(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.div(s(),(function(n){return n.alt?"150px":"262px"}),(function(n){return n.alt?"52px":"64px"}),(function(n){return n.alt?"20px":"24px"}),(function(n){var e=n.alt,t=n.form;return e||t?"0":"0 0 80px"}),(function(n){return n.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"150px":"184px"}),(function(n){return n.alt?"52px":"48px"}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.alt?"0":"64px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.alt?"0":"32px"})),o.default.button(c(),(function(n){return n.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.alt?"20px":"24px"}),(function(n){return n.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.theme.breakpoints.sm})),o.default.div(u(),(function(n){return n.large?"24px":"16px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.large?"16px":"8px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"0":"8px"})),o.default.div(a(),(function(n){return n.large?"32px":"24px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.nav?"16px":"24px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"32px":"16px"}));function w(){var n=(0,i.Z)(["\n  display: flex;\n\n  @media ","{\n    width: 160px;\n    justify-content: space-between;\n  }\n"]);return w=function(){return n},n}function k(){var n=(0,i.Z)(["\n  display: flex;\n  font-size: 24px;\n  line-height: 40px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.5);\n\n@media ","{\n  line-height: 32px;\n  font-size: 20px;\n};\n\n@media ","{\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0 0 16px;\n}\n"]);return k=function(){return n},n}function j(){var n=(0,i.Z)(["\n  display: flex;\n  max-width: 1040px;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 80px;\n\n  @media ","{\n    display: flex;\n    justify-content: center;\n    padding-bottom: 64px;\n  }\n\n  @media ","{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 32px;\n  }\n"]);return j=function(){return n},n}function y(){var n=(0,i.Z)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ","{\n    font-size: 16px;\n    line-height: 20px;\n  };\n\n  @media "," {\n    font-size: 10px;\n    line-height: 14px;\n  }\n"]);return y=function(){return n},n}function z(){var n=(0,i.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 40px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  margin-bottom: 8px;\n\n  @media "," {\n    font-size: 28px;\n    line-height: 32px;\n  }\n  @media "," {\n    font-size: 24px;\n    line-height: 26px;\n}\n"]);return z=function(){return n},n}function Z(){var n=(0,i.Z)(["\n  background: #212D45;\n  border-radius: 12px;\n  height: 144px;\n  padding: 24px;\n  @media "," {\n    height: 210px;\n\n  }\n\n  @media "," {\n    height: 135px;\n    padding: 16px;\n  }\n\n  @media "," {\n    height: 110px;\n    padding: 12px;\n    \n    &:nth-child(2n){\n      grid-row:2;\n    }\n  }\n"]);return Z=function(){return n},n}function F(){var n=(0,i.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin: 24px 0 40px;\n\n  @media ","{\n    gap: 16px;\n    margin: 20px 0 32px;\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  }\n\n  @media ","{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    max-width: 500px;\n    margin: 24px auto;\n  }\n"]);return F=function(){return n},n}var E=o.default.div(F(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),C=o.default.div(Z(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),R=o.default.h5(z(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),D=o.default.p(y(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),O=(o.default.div(j(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.h5(k(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.div(w(),(function(n){return n.theme.breakpoints.sm})),[{number:1,text:"Python"},{number:2,text:"Java"},{number:3,text:"C"},{number:4,text:"Javascript"},{number:5,text:"Blockchain Solidity"},{number:6,text:"Bootstrap 5"},{number:7,text:"Android Native"},{number:8,text:"React, Next"}]),P=function(){return(0,r.jsxs)(h,{id:"acomplishments",children:[(0,r.jsx)(g,{children:"Skills"}),(0,r.jsx)(E,{children:O.map((function(n,e){return(0,r.jsxs)(C,{children:[(0,r.jsx)(R,{children:"".concat(n.number)}),(0,r.jsx)(D,{children:n.text})]},e)}))}),(0,r.jsx)(v,{})]})};function I(){var n=(0,i.Z)(["\n  width: 100%;\n  @media "," {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n  }\n  @media "," {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n  }\n"]);return I=function(){return n},n}var M=o.default.div(I(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md})),N=function(n){return(0,r.jsx)(h,{row:!0,nopadding:!0,children:(0,r.jsxs)(M,{children:[(0,r.jsxs)(g,{main:!0,center:!0,children:["I'm Sekou SOW ",(0,r.jsx)("br",{}),"Welcome To My Personal Portfolio"]}),(0,r.jsx)(b,{children:"I'm a FullStack developer, I'm here to help you to build your professional modern UI/UX website or mobile app  from design to Deployment."})]})})};function _(){var n=(0,i.Z)(["\ncolor: #d8bfbf;\nfont-size: 1.5rem;\n"]);return _=function(){return n},n}function S(){var n=(0,i.Z)(["\ndisplay: flex;\njustify-content: space-around;\npadding: 2rem;\n"]);return S=function(){return n},n}function B(){var n=(0,i.Z)(["\ncolor:#d4c0c0;\nfont-size: 1.6rem;\npadding:1rem 1.5rem;\nbackground: #6b3030;\nborder-radius: 15px;\ntransition: 0.5s;\n&:hover{\n  background: #801414;\n\n}\n"]);return B=function(){return n},n}function L(){var n=(0,i.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  margin: 2.5rem 0;\n"]);return L=function(){return n},n}function T(){var n=(0,i.Z)(["\n  width: 100%;\n  padding: 0 50px;\n  color: #e4e6e7;\n  font-style: 2rem;\n  line-height: 24px;\n  text-align: justify;\n  @media "," {\n    padding:.3rem\n  \n}\n"]);return T=function(){return n},n}function A(){var n=(0,i.Z)(["\n  width: 170px;\n  margin: 0 auto;\n  color: #dce3e7;\n  font-family: 'Droid Serif', serif;\n  font-size: 13px;\n  font-style: italic;\n  line-height: 18px;\n"]);return A=function(){return n},n}function U(){var n=(0,i.Z)(["\n  width: 50px;\n  height: 3px;\n  margin: 20px auto;\n  border: 0;\n  background: #d0bb57;\n"]);return U=function(){return n},n}function W(){var n=(0,i.Z)(["\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: #9cc9e3;\n  padding: .5rem 0;\n  font-size: ",";\n"]);return W=function(){return n},n}function H(){var n=(0,i.Z)(["\n  text-align: center;\n  z-index: 20;\n  width: 100%;\n\n"]);return H=function(){return n},n}function J(){var n=(0,i.Z)(["\n  border-radius: 10px;\n  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);\n  text-align: center;\n  width: 400px;\n  @media "," {\n    width: 100%;\n  }\n"]);return J=function(){return n},n}function K(){var n=(0,i.Z)(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\npadding: 3rem;\nplace-items: center;\ncolumn-gap: 2rem;\nrow-gap: 3rem;\n@media "," {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  padding-bottom: 0;\n}\n\n"]);return K=function(){return n},n}function X(){var n=(0,i.Z)(["\n  width:100%;\n  height:100%;\n  object-fit: cover;\n  overflow: hidden;\n"]);return X=function(){return n},n}var G=o.default.img(X()),q=o.default.section(K(),(function(n){return n.theme.breakpoints.sm})),Y=o.default.div(J(),(function(n){return n.theme.breakpoints.sm})),Q=o.default.div(H()),V=o.default.h3(W(),(function(n){return n.title?"3rem":"2rem"})),$=o.default.hr(U()),nn=(o.default.div(A()),o.default.p(T(),(function(n){return n.theme.breakpoints.sm}))),en=o.default.ul(L()),tn=o.default.a(B()),rn=o.default.ul(S()),on=o.default.li(_()),an=[{title:"ChatGPT-3",description:"This is web3 website build with React",image:"./images/1.png",tags:["React","CSS BEM","Responsive","Node"],source:"https://cerveaugeek.github.io/sow-gpt3-react-app",visit:"https://github.com/Cerveaugeek/sow-gpt3-react-app",id:0},{title:"Hoobank",description:"Modern day Bank app build in React",image:"./images/2.png",tags:["React","JavaScript","Vite","Tailwind"],source:"https://cerveaugeek.github.io/sow-hoobank-app/",visit:"https://github.com/Cerveaugeek/sow-hoobank-app",id:1},{title:"Gericht Restaurant",description:"A fullResponse and fancy website for a Luxurious Restaurant from a Figma file",image:"./images/3.png",tags:["React","React Internal Components"],source:"https://cerveaugeek.github.io/sow-gerlicht-restaurant/",visit:"https://github.com/Cerveaugeek/sow-gerlicht-restaurant/tree/master",id:2},{title:"REWA-Mali Portfolio",description:"A Professional Portfolio website for a Market Research Firm",image:"./images/4.png",tags:["Bootstrap 5","Node","FontAwesome"],source:"https://cerveaugeek.github.io/Rewa-mali-portfolio",visit:"https://github.com/Cerveaugeek/Rewa-mali-portfolio/tree/main",id:3}],un=function(){return(0,r.jsxs)(h,{nopadding:!0,id:"projects",children:[(0,r.jsx)(v,{}),(0,r.jsx)(g,{main:!0,children:"Projects"}),(0,r.jsx)(q,{children:an.map((function(n,e){return(0,r.jsxs)(Y,{children:[(0,r.jsx)(G,{src:n.image}),(0,r.jsxs)(Q,{children:[(0,r.jsx)(V,{title:!0,children:n.title}),(0,r.jsx)($,{})]}),(0,r.jsx)(nn,{className:"card-info",children:n.description}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Q,{children:"Stack"}),(0,r.jsx)(rn,{children:n.tags.map((function(n,e){return(0,r.jsx)(on,{children:n},e)}))})]}),(0,r.jsxs)(en,{children:[(0,r.jsx)(tn,{href:n.visit,children:"Code"}),(0,r.jsx)(tn,{href:n.source,children:"Live Site"})]})]},e)}))})]})},cn=t(859);function sn(){var n=(0,i.Z)(["\n  display: block;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 10px;\n  \n  @media ","{\n    width: 40px;\n    height: 40px;\n    margin-bottom: 8px;\n  }\n\n  @media ","{\n    width: 32px;\n    height: 32px;\n    margin-bottom: 0px;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=(0,i.Z)(["\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n\n@media ","{\n  max-width: 203px;\n}\n\n@media ","{\n  margin-bottom: 14px;\n  max-width: 320px;\n  flex-direction: row;\n}\n"]);return dn=function(){return n},n}function pn(){var n=(0,i.Z)(["\n  font-size: 18px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ","{\n    font-size: 16px;\n    line-height: 28px;\n  }\n\n  @media ","{\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return pn=function(){return n},n}function ln(){var n=(0,i.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  color: #FFFFFF;\n  margin-bottom: 8px;\n\n@media ","{\n  font-size: 24px;\n  line-height: 28px;\n}\n\n@media ","{\n  font-size: 20px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  margin-bottom: 4px;\n}\n"]);return ln=function(){return n},n}function fn(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media ","{\n    display: flex;\n    margin-left: 18px;\n  }\n"]);return fn=function(){return n},n}function mn(){var n=(0,i.Z)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 40px;\n  margin: 3rem 0;\n  \n  @media ","{\n    margin: 64px 0;\n  }\n\n  @media ","{\n    margin: 64px 0;\n    gap: 24px\n  }\n  \n  @media ","{\n    display: flex;\n    flex-direction: column;\n    margin: 32px 0;\n  }\n"]);return mn=function(){return n},n}function xn(){var n=(0,i.Z)(["\n  width: 100%;\n"]);return xn=function(){return n},n}function hn(){var n=(0,i.Z)(["\n  text-align: center;\n  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);\n  width: 100%;\n  padding: 60px;\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media "," {\n    background-image: none;\n    padding: 0;\n    margin-top: 40px;\n  }\n  @media "," {\n    background-image: none;\n    padding: 0;\n    margin-top: 16px;\n  }\n"]);return hn=function(){return n},n}o.default.div(hn(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md})),o.default.img(xn());var gn=o.default.ul(mn(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),bn=o.default.div(fn(),(function(n){return n.theme.breakpoints.sm})),vn=o.default.h4(ln(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),wn=o.default.p(pn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),kn=o.default.li(dn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),jn=(o.default.img(sn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),function(){return(0,r.jsxs)(h,{id:"tech",children:[(0,r.jsx)(v,{divider:!0}),(0,r.jsx)(g,{children:"Technologies"}),(0,r.jsx)(b,{children:"I've worked with a range a technologies in the web development world. From Back-end To Design"}),(0,r.jsxs)(gn,{children:[(0,r.jsxs)(kn,{children:[(0,r.jsx)("picture",{children:(0,r.jsx)(cn.GR$,{size:"3rem"})}),(0,r.jsxs)(bn,{children:[(0,r.jsx)(vn,{children:"Front-End"}),(0,r.jsxs)(wn,{children:["Experiece with ",(0,r.jsx)("br",{}),"React.js,  Bootstrap and Tailwind"]})]})]}),(0,r.jsxs)(kn,{children:[(0,r.jsx)("picture",{children:(0,r.jsx)(cn.BwW,{size:"3rem"})}),(0,r.jsxs)(bn,{children:[(0,r.jsx)(vn,{children:"Back-End"}),(0,r.jsxs)(wn,{children:["Experience with ",(0,r.jsx)("br",{}),"Node and Databases (Django, Mysql, Oracle, SQLite)"]})]})]}),(0,r.jsxs)(kn,{children:[(0,r.jsx)("picture",{children:(0,r.jsx)(cn.MSM,{size:"3rem"})}),(0,r.jsxs)(bn,{children:[(0,r.jsx)(vn,{children:"UI/UX"}),(0,r.jsxs)(wn,{children:["Experience with ",(0,r.jsx)("br",{}),"tools like Figma, Adobe Photoshop"]})]})]})]}),(0,r.jsx)(v,{colorAlt:!0})]})});function yn(){var n=(0,i.Z)(["\n  background-color: white;\n  border-radius: 10px;\n  margin: auto;\n  width: 3px;\n  height: 3px;\n"]);return yn=function(){return n},n}function zn(){var n=(0,i.Z)(["\n  box-sizing: border-box;\n  background: none;\n  padding: 4px;\n  border: none;\n  cursor: pointer;\n  margin-right: 4px;\n  opacity: ",";\n  transform: ",";\n\n  &:focus {\n    outline: none;\n  }\n"]);return zn=function(){return n},n}function Zn(){var n=(0,i.Z)(["\n  width: 288px;\n\n  display: none;\n  visibility: hidden;\n\n  @media "," {\n    display: flex;\n    visibility: visible;\n    margin-bottom: 48px;\n  }\n"]);return Zn=function(){return n},n}function Fn(){var n=(0,i.Z)(["\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  color: rgba(255, 255, 255, 0.75);\n  padding-right: 16px;\n\n  @media "," {\n    font-size: 12px;\n    line-height: 18px;\n    padding-right: 32px;\n  }\n  @media "," {\n    font-size: 10px;\n    line-height: 16px;\n    padding-right: 0;\n  }\n"]);return Fn=function(){return n},n}function En(){var n=(0,i.Z)(["\n  margin-left: 21px;\n  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));\n  width: 100%;\n\n  @media "," {\n    -webkit-mask-image: none;\n    margin-left: 16px;\n    overflow: visible;\n  }\n"]);return En=function(){return n},n}function Cn(){var n=(0,i.Z)(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  display: flex;\n  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */\n  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 8px;\n\n  @media "," {\n    font-size: 20px;\n    line-height: 28px;\n    margin-bottom: 4px;\n  }\n  \n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]);return Cn=function(){return n},n}function Rn(){var n=(0,i.Z)(["\n  background: #0F1624;\n  border-radius: 3px;\n  max-width: 196px;\n\n  @media "," {\n    max-width: 124px;\n  }\n  \n  @media "," {\n    margin-left: 32px;\n    min-width: 120px;\n    background: #0E131F;\n    padding: 4px;\n    align-content: start;\n    scroll-snap-align: start;\n    border-radius: 3px;\n    overflow: visible;\n    position: relative;\n    height: fit-content;\n    \n    ","; \n  }\n"]);return Rn=function(){return n},n}function Dn(){var n=(0,i.Z)(["\n  @media "," {\n    display: flex;\n    min-width: ","\n  }\n"]);return Dn=function(){return n},n}function On(){var n=(0,i.Z)(["\n  max-width: 1040px;\n  background: #0F1624;\n  padding: 0rem;\n  list-style:none;\n  display: flex;\n  justify-content: space-between; \n  /* overflow-x: hidden; */\n\n  margin-left: 32px;\n  &:first-of-type{\n    margin-left: 0px;\n  }\n\n  margin-bottom: 80px;\n\n  //remove scrollbar\n  scrollbar-width: none;  \n   &::-webkit-scrollbar {\n     display: none;\n   }\n\n  @media "," {\n    overflow-x: scroll;\n    -webkit-overflow-scrolling: touch;\n    scroll-snap-type: x mandatory;\n    touch-action: pan-x;\n    justify-content: initial;\n    margin-bottom: 8px;\n  }\n"]);return On=function(){return n},n}o.default.ul(On(),(function(n){return n.theme.breakpoints.sm})),o.default.div(Dn(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.final?"120%;":"min-content"})),o.default.div(Rn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.active===n.index?"opacity: 1":"opacity: 0.5"})),o.default.h4(Cn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.svg(En(),(function(n){return n.theme.breakpoints.sm})),o.default.p(Fn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.div(Zn(),(function(n){return n.theme.breakpoints.sm})),o.default.button(zn(),(function(n){return n.active===n.index?"1":".33"}),(function(n){return n.active===n.index?"scale(1.6)":"scale(1)"})),o.default.div(yn());var Pn=t(2821),In=t(1649);function Mn(){var n=(0,i.Z)(["\ntransition: 0.3s ease;\ncolor: white;\nborder-radius: 50px;\n  padding: 8px;\n&:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n    \n  }\n"]);return Mn=function(){return n},n}function Nn(){var n=(0,i.Z)(["\n  margin-left: 8px;\n  display: flex;\n  align-self: center;\n  transition: 0.3s ease;\n  opacity: ",";\n  transform: ",";\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @media "," {\n    margin: 2px 0 0 2px;\n    width: 15px;\n  }\n"]);return Nn=function(){return n},n}function _n(){var n=(0,i.Z)(["\n  border: none;\n  display: flex;\n  position: relative;\n  background: none;\n  font-size: 1.7rem;\n\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: #fff;\n  }\n\n  @media "," {\n    padding: 0.4rem 0;\n  }\n  @media "," {\n    padding: 0;\n  }\n"]);return _n=function(){return n},n}function Sn(){var n=(0,i.Z)(["\n  font-size: 2rem;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  transition: 0.4s ease;\n  &:hover {\n    color: #fff;\n    opacity: 1;\n    cursor: pointer;\n  }\n  @media "," {\n    padding: 0.5rem;\n  }\n"]);return Sn=function(){return n},n}function Bn(){var n=(0,i.Z)(["\n  grid-area: 1 / 5 / 2 / 6;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media "," {\n    align-items: center;\n    grid-area: 1 / 4 / 2 / 6;\n  }\n"]);return Bn=function(){return n},n}function Ln(){var n=(0,i.Z)(["\n  grid-area: 1 / 2 / 2 / 4;\n  display: flex;\n  justify-content: space-around;\n  @media "," {\n    grid-area: 2 / 2 / 3 / 5;\n  }\n"]);return Ln=function(){return n},n}function Tn(){var n=(0,i.Z)(["\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  @media "," {\n    grid-area: 1 / 1 / 2 / 3;\n  }\n"]);return Tn=function(){return n},n}function An(){var n=(0,i.Z)(["\n  font-size: 2rem;\n"]);return An=function(){return n},n}function Un(){var n=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 2rem;\n  padding: 1rem;\n  padding-top: 2rem;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 60px);\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n"]);return Un=function(){return n},n}var Wn=o.default.div(Un(),(function(n){return n.theme.breakpoints.sm})),Hn=(o.default.a(An()),o.default.div(Tn(),(function(n){return n.theme.breakpoints.sm}))),Jn=o.default.div(Ln(),(function(n){return n.theme.breakpoints.sm})),Kn=o.default.div(Bn(),(function(n){return n.theme.breakpoints.sm})),Xn=o.default.a(Sn(),(function(n){return n.theme.breakpoints.sm})),Gn=(o.default.button(_n(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md})),(0,o.default)(In.U0j)(Nn(),(function(n){return n.isOpen?"1":".75"}),(function(n){return n.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(n){return n.theme.breakpoints.sm})),o.default.a(Mn()));function qn(){var n=(0,i.Z)(["\n\tfont-style: normal;\n\tfont-weight: 600;\n\tfont-size: 12px;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: rgba(255, 255, 255, 0.4);\n\tmargin-bottom: 16px;\n\n\t@media "," {\n\t\tfont-size: 10px;\n\t\tline-height: 12px;\n\t\tmargin-bottom: 8px;\n\t}\n"]);return qn=function(){return n},n}function Yn(){var n=(0,i.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 220px;\n\twidth: 100%;\n"]);return Yn=function(){return n},n}function Qn(){var n=(0,i.Z)(["\n\tborder-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: grid;\n\tgrid-template-columns: repeat(3, minmax(85px, 220px));\n\tgap: 40px;\n  padding: 40px 0 28px;\n\n\t@media "," {\n\t\tpadding: 32px 0 16px;\n\t}\n\n\t@media "," {\n\t\twidth: 100%;\n\t\tpadding: 32px 0 16px;\n\t\tgap: 16px;\n\t}\n\t@media "," {\n\t\twidth: 100%;\n\t\tpadding: 32px 4px 16px;\n\t\tgap: 5px;\n\t}\n"]);return Qn=function(){return n},n}function Vn(){var n=(0,i.Z)(["\n\tdisplay: flex;\n  align-items: center;\n\n\t@media ","{\n\t\tjustify-content: center;\n\t\tpadding-right: 16px;\n\t\tflex-wrap: wrap;\n\t}\n"]);return Vn=function(){return n},n}function $n(){var n=(0,i.Z)(["\n\tcolor: rgba(255, 255, 255, 0.5);\n\tmin-width: 280px;\n\tletter-spacing: 0.02em;\n\tfont-size: 18px;\n\tline-height: 30px;\n\tpadding: 1rem;\n\n\t@media ","{\n\t\tfont-size: 16px;\n\t\tline-height: 28px;\n\t}\n\n\t@media ","{\n\t\tline-height: 22px;\n\t\tfont-size: 14px;\n\t\tmin-width: 100px;\n\t}\n"]);return $n=function(){return n},n}function ne(){var n=(0,i.Z)(["\n  display: flex;\n\talign-items:baseline;\n\tflex-wrap: wrap;\n\tmargin-right: auto;\n\t\n\n\t@media ","{\n\t\tflex-direction: column;\n\t\talign-items: baseline;\n\t}\n\n\t@media ","{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin: 0 0 32px;\n\t\talign-items: center;\n\t}\n"]);return ne=function(){return n},n}function ee(){var n=(0,i.Z)(["\nmax-width: 1040px;\ndisplay: flex;\njustify-content: space-between;\n\n@media ","{\n  display: flex;\n  justify-content: space-between;\n}\n\n@media ","{\n  display: flex;\n\twidth: 100%;\n  flex-direction: column;\n}\n"]);return ee=function(){return n},n}function te(){var n=(0,i.Z)(["\n\tfont-size: 18px;\n\tline-height: 30px;\n\tcolor: rgba(255, 255, 255, 0.75);\n\tmargin-bottom: 16px;\n\ttransition: .3s ease;\n\tposition: relative;\n\tleft: 0;\n\n\t&:hover {\n\t\tcolor: #fff;\n\t\tleft: 6px;\n\t}\n\n\t@media "," {\n\t\tfont-size: 16px;\n\t\tline-height: 28px;\n\t\tdisplay: flex;\n\t}\n\n\t@media "," {\n\t\tfont-size: 8px;\n\t\tline-height: 14px;\n\t\tmargin-bottom: 8px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"]);return te=function(){return n},n}function re(){var n=(0,i.Z)(["\n\twidth: calc(100vw - 96px);\n  max-width: 1040px;\n  padding: 2rem 48px 40px;\n  margin: 1rem auto;\n  box-sizing: content-box;\n\n\n  @media "," {\n    padding: 0 16px 48px;\n    width: calc(100vw - 32px);\n  }\n"]);return re=function(){return n},n}var ie=o.default.section(re(),(function(n){return n.theme.breakpoints.sm})),oe=o.default.a(te(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),ae=o.default.div(ee(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),ue=o.default.div(ne(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),ce=o.default.p($n(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),se=o.default.div(Vn(),(function(n){return n.theme.breakpoints.md})),de=o.default.ul(Qn(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),pe=o.default.div(Yn()),le=o.default.h4(qn(),(function(n){return n.theme.breakpoints.sm})),fe=function(){return(0,r.jsxs)(ie,{children:[(0,r.jsxs)(de,{children:[(0,r.jsxs)(pe,{children:[(0,r.jsx)(le,{children:"Call"}),(0,r.jsx)(oe,{href:"tel:+223-94-03-84-28",children:"+223-94-03-84-28"})]}),(0,r.jsxs)(pe,{children:[(0,r.jsx)(le,{children:"Email"}),(0,r.jsx)(oe,{href:"mailto:contact@jsmastery.com",children:"sekousow260@gmail.com"})]})]}),(0,r.jsxs)(ae,{children:[(0,r.jsx)(ue,{children:(0,r.jsx)(ce,{children:"Innovating one project at a time"})}),(0,r.jsxs)(se,{children:[(0,r.jsx)(Gn,{href:"https://google.com",children:(0,r.jsx)(Pn.RrF,{size:"3rem"})}),(0,r.jsx)(Gn,{href:"https://google.com",children:(0,r.jsx)(Pn._iD,{size:"3rem"})}),(0,r.jsx)(Gn,{href:"https://google.com",children:(0,r.jsx)(Pn.s5I,{size:"3rem"})})]})]})]})},me=t(1664),xe=function(){return(0,r.jsxs)(Wn,{children:[(0,r.jsx)(Hn,{children:(0,r.jsx)(me.default,{href:"/",children:(0,r.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20px"},children:[(0,r.jsx)(cn.JAz,{size:"3rem"})," ",(0,r.jsx)("span",{children:"Portfolio"})]})})}),(0,r.jsxs)(Jn,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(me.default,{href:"#projects",children:(0,r.jsx)(Xn,{children:"Projects"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(me.default,{href:"#tech",children:(0,r.jsx)(Xn,{children:"Technologies"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(me.default,{href:"#acomplishments",children:(0,r.jsx)(Xn,{children:"Skills"})})})]}),(0,r.jsxs)(Kn,{children:[(0,r.jsx)(Gn,{href:"https://github.com/Cerveaugeek",children:(0,r.jsx)(Pn.RrF,{size:"3rem"})}),(0,r.jsx)(Gn,{href:"https://linkedin.com/in/aekou-sow-cg99",children:(0,r.jsx)(Pn._iD,{size:"3rem"})}),(0,r.jsx)(Gn,{href:"https://facebook.com/modibovan.konare",children:(0,r.jsx)(Pn.s5I,{size:"3rem"})})]})]})};function he(){var n=(0,i.Z)(["\nmax-width: 1280px;\nwidth: 100%;\nmargin: auto;\n"]);return he=function(){return n},n}var ge=o.default.div(he()),be=function(n){var e=n.children;return(0,r.jsxs)(ge,{children:[(0,r.jsx)(xe,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(fe,{})]})},ve=function(){return(0,r.jsxs)(be,{children:[(0,r.jsx)(N,{}),(0,r.jsx)(un,{}),(0,r.jsx)(jn,{}),(0,r.jsx)(P,{})]})}},8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4458)}])},1664:function(n,e,t){n.exports=t(6071)},4405:function(n,e,t){"use strict";t.d(e,{w_:function(){return s}});var r=t(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};function c(n){return n&&n.map((function(n,e){return r.createElement(n.tag,a({key:e},n.attr),c(n.child))}))}function s(n){return function(e){return r.createElement(d,a({attr:a({},n.attr)},e),c(n.child))}}function d(n){var e=function(e){var t,i=n.attr,o=n.size,c=n.title,s=u(n,["attr","size","title"]),d=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,s,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}}},function(n){n.O(0,[866,921,617,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);