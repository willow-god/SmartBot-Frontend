import{r as b,a2 as ee,ao as L,a3 as W,R as a,ac as D,as as te,ah as ae,c as S,bh as ne,G as re,an as oe}from"./index-6uUUDMWa.js";var ie=L.ESC,le=L.TAB;function se(e){var c=e.visible,o=e.triggerRef,s=e.onVisibleChange,f=e.autoFocus,n=e.overlayRef,r=b.useRef(!1),u=function(){if(c){var t,i;(t=o.current)===null||t===void 0||(i=t.focus)===null||i===void 0||i.call(t),s==null||s(!1)}},h=function(){var t;return(t=n.current)!==null&&t!==void 0&&t.focus?(n.current.focus(),r.current=!0,!0):!1},p=function(t){switch(t.keyCode){case ie:u();break;case le:{var i=!1;r.current||(i=h()),i?t.preventDefault():u();break}}};b.useEffect(function(){return c?(window.addEventListener("keydown",p),f&&ee(h,3),function(){window.removeEventListener("keydown",p),r.current=!1}):function(){r.current=!1}},[c])}var ue=b.forwardRef(function(e,c){var o=e.overlay,s=e.arrow,f=e.prefixCls,n=b.useMemo(function(){var u;return typeof o=="function"?u=o():u=o,u},[o]),r=W(c,n==null?void 0:n.ref);return a.createElement(a.Fragment,null,s&&a.createElement("div",{className:"".concat(f,"-arrow")}),a.cloneElement(n,{ref:D(n)?r:void 0}))}),v={adjustX:1,adjustY:1},d=[0,0],ce={topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:d},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:d},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:d}},fe=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function ve(e,c){var o,s=e.arrow,f=s===void 0?!1:s,n=e.prefixCls,r=n===void 0?"rc-dropdown":n,u=e.transitionName,h=e.animation,p=e.align,g=e.placement,t=g===void 0?"bottomLeft":g,i=e.placements,_=i===void 0?ce:i,j=e.getPopupContainer,$=e.showAction,K=e.hideAction,B=e.overlayClassName,H=e.overlayStyle,G=e.visible,A=e.trigger,M=A===void 0?["hover"]:A,I=e.autoFocus,N=e.overlay,y=e.children,w=e.onVisibleChange,X=te(e,fe),Y=a.useState(),E=ae(Y,2),q=E[0],x=E[1],R="visible"in e?G:q,P=a.useRef(null),V=a.useRef(null),k=a.useRef(null);a.useImperativeHandle(c,function(){return P.current});var T=function(l){x(l),w==null||w(l)};se({visible:R,triggerRef:k,onVisibleChange:T,autoFocus:I,overlayRef:V});var z=function(l){var C=e.onOverlayClick;x(!1),C&&C(l)},F=function(){return a.createElement(ue,{ref:V,overlay:N,prefixCls:r,arrow:f})},J=function(){return typeof N=="function"?F:F()},Q=function(){var l=e.minOverlayWidthMatchTrigger,C=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?l:!C},U=function(){var l=e.openClassName;return l!==void 0?l:"".concat(r,"-open")},Z=a.cloneElement(y,{className:S((o=y.props)===null||o===void 0?void 0:o.className,R&&U()),ref:D(y)?W(k,y.ref):void 0}),O=K;return!O&&M.indexOf("contextMenu")!==-1&&(O=["click"]),a.createElement(ne,re({builtinPlacements:_},X,{prefixCls:r,ref:P,popupClassName:S(B,oe({},"".concat(r,"-show-arrow"),f)),popupStyle:H,action:M,showAction:$,hideAction:O,popupPlacement:t,popupAlign:p,popupTransitionName:u,popupAnimation:h,popupVisible:R,stretch:Q()?"minWidth":"",popup:J(),onPopupVisibleChange:T,onPopupClick:z,getPopupContainer:j}),Z)}const ge=a.forwardRef(ve);export{ge as D};