﻿function SlideMenu(id,O,o,Y,I,A,e,U,Z,z,X,W,w,V,v,T,t,S,R,r,Q,P,N,n){ this.M="3.3.1.0"; this.id=id; this.m=O+""; this.L=0; this.speed=o; this.l= false; this.parent=I; this.K=A; this.k=e; this.J=U; this.j=Z; this.H=z; this.h=X; this.G=W; this.g=w; this.F=V; this.f=v; this.D=T; this.d=t; this.C=S; this.c=R; this.B=r; if (Y!=null && Y== true){ this.l= true; } this.o0=Q; this.minHeight=P; this.O0=null; this.l0=null; this.i0=null; this.I0=null; this.o1=null; this.O1=null; this.l1=null; this.i1=null; this.I1=null; this.o2= false; this.O2= false; this.l2= false; this.i2=null; this.I2= true; this.o3=null; this.O3=null; this.l3=N; this.i3=n; this.I3=new Array(); this.o4=new Array(); this.O4=new Array(); this.l4= false; this.i4=(navigator.userAgent.toLowerCase().indexOf("msie")==-1)? false : true; this.I4=(navigator.userAgent.toLowerCase().indexOf("safari")!=-1); } ; SlideMenu.prototype.o5= function (O5,l5){var i5=""; if (document.I5 && document.I5.o6){var O6=document.I5.o6(O5,null); if (!O6){try {if (O5.style.display=="none"){O5.style.display=""; O6=document.I5.o6(O5,null); if (O6){i5=O6.l6(l5); }O5.style.display="none"; }}catch (i6){}}if (O6 && i5==""){i5=O6.l6(l5); }}else if (O5.currentStyle){try {l5=l5.replace(/-(\w)/g, function (I6,o7){return o7.toUpperCase(); } ); i5=O5.currentStyle[l5]; }catch (i6){}}return i5; } ; SlideMenu.prototype.addFunction= function (O7,l7){ this.I3[this.I3.length]=O7; this.o4[this.o4.length]=l7; } ; SlideMenu.prototype.getFunction= function (l7){var i=0; for (i; i<this.o4.length; i++){if (this.o4[i]==l7){return this.I3[i]; }}return ( function (){} ); } ; SlideMenu.prototype.SafeAddOnload= function (i7,I7){if (window.onload){if (!this.l4){ this.l4= true; this.O4[0]=window.onload; window.onload=( function (o8){I7.O8();} ); } this.O4[this.O4.length]=i7; }else {window.onload=i7; }} ; SlideMenu.prototype.O8= function (){for (var i=0; i<this.O4.length; i++){ this.O4[i](); }} ; SlideMenu.prototype.l8= function (i8){if (this.i4 || this.I4)if ((document.documentElement && document.documentElement.clientWidth) || this.I4){var I8=this.o5(i8,"padding-top"); var o9=this.o5(i8,"padding-bottom"); var O9=this.o5(i8,"padding-left"); var l9=this.o5(i8,"padding-right"); var i9=this.o5(i8,"width"); var I9=this.o5(i8,"height"); var oa=(O9=="")?0: (parseInt(O9)); var Oa=(I8=="")?0: (parseInt(I8)); oa+=(l9=="")?0: (parseInt(l9)); Oa+=(o9=="")?0: (parseInt(o9)); if (this.I4){var la=parseInt(this.o5(i8.parentNode,"width")); if (la==i8.offsetWidth)i9="auto"; if (i8.id==this.id)I9="auto"; }if (!isNaN(parseInt(i9)))i8.style.width=(parseInt(i9)-oa)+"px"; if (!isNaN(parseInt(I9)))i8.style.height=(parseInt(I9)-Oa)+"px"; }};SlideMenu.prototype.buildMenu= function (){var i,ia; var Ia,ob,Ob,lb; Ia=document.getElementById(this.id); if (this.h!=null){Ia.className=this.h; this.l8(Ia); }for (i=0; i<Ia.childNodes.length; i++){ob=Ia.childNodes[i]; if (ob.id.substring(0,2)!="__"){ this.ib(ob.id,0); lb=this.l0; if (this.g!=null && this.c!=null){document.getElementById("__i"+lb.id).className=this.c; }if (this.m==lb.id || this.i3){ this.mouseOverOutSelected(lb.id,0, true); lb.Ib= true; this.mouseOverOutSelected(lb.id,2, false); }else { this.mouseOverOutSelected(lb.id,0, true); } this.l8(ob); }else {if (this.G!=null){ob.className=this.G; this.l8(ob); }for (ia=0; ia<ob.childNodes.length; ia++){Ob=ob.childNodes[ia]; this.ib(Ob.id,1); if (this.D!=null && this.B!=null){document.getElementById("__i"+Ob.id).className=this.B; }lb.oc= true; if (this.m==this.l0.id){ this.m=lb.id; this.mouseOverOutSelected(lb.id,0, true); lb.Ib= true; this.mouseOverOutSelected(lb.id,2, false); this.mouseOverOutSelected(this.l0.id,3, true); this.i2=this.l0.id; this.mouseOverOutSelected(this.l0.id,5, false); }else { this.mouseOverOutSelected(this.l0.id,3, false); } this.l8(Ob); }}}if (this.o0>0){ this.collapseAll(); }} ; SlideMenu.prototype.collapseAll= function (){var i8=this.O0; var Oc; while (i8!=null){if (i8.type==0){if (i8.oc){Oc=document.getElementById("__"+i8.id); Oc.style.overflow="auto"; if (this.o0<=0){if (this.minHeight<Oc.offsetHeight){i8.l1=Oc.offsetHeight; Oc.style.height=i8.l1+"px"; }else {i8.l1=this.minHeight; Oc.style.height=this.minHeight+"px"; }}else {Oc.style.height=this.o0+"px"; if (this.l3!=null){Oc.scrollTop=this.l3; }}Oc.style.display="none"; if (i8.Ib || this.i3){Oc.style.display="block"; if (!this.l){ this.i0=Oc; }}}}i8=i8.lc(); }document.getElementById(this.id).style.visibility="visible"; } ; SlideMenu.prototype.ic= function (Ic,od){var i8; if (Ic!=null && od!=null){i8=document.getElementById(Ic); if (i8!=null && i8.className!=od){i8.className=od; }document.getElementById(Ic).offsetHeight; }} ; SlideMenu.prototype.Od= function (Ic,ld){if (ld==null || ld=="null"){return; }var Oc=document.createElement("img"); Oc.src=ld; var i8; if (Ic!=null && ld!=null){i8=document.getElementById(Ic); if (i8!=null){Oc.className=i8.className; Oc.id=Ic; i8.src=Oc.src; }}} ; SlideMenu.prototype.mouseOverOutSelected= function (Ic,Id,oe){var Oe,ld,le; if (Ic==null || Id==null || Id<0 || Id>5 || oe==null){return; }le=this.getElementById(Ic); if (le==null){return; }if (oe && (le.Ib || this.i2==le.id)){return; }switch (Id){case 0:Oe=this.parent; ld=this.g; break; case 1:Oe=this.K; ld=this.F; break; case 2:Oe=this.k; ld=this.f; break; case 3:Oe=this.J; ld=this.D; break; case 4:Oe=this.j; ld=this.d; break; case 5:Oe=this.H; ld=this.C; break; default:return; } this.ic(Ic,Oe); this.Od("__i"+Ic,ld); } ; SlideMenu.prototype.saveHidden= function (Ic){if (this.o3==null){ this.o3=document.getElementsByName("h_"+this.id)[0]; }if (this.o3!=null){ this.o3.value=Ic; }if (Ic=="-1"){return; }if (this.O3==null){ this.O3=document.getElementsByName("h_"+this.id+"scroll")[0]; }if (this.O3!=null){var i8=this.getElementById(Ic); if (i8.type==0 && i8.oc){ this.O3.value="__"+Ic+","+document.getElementById("__"+Ic).scrollTop; }else { this.O3.value=document.getElementById(Ic).parentNode.scrollTop; }}} ; SlideMenu.prototype.parentClick= function (Ic){if (this.o2){return; }var le,i8; this.o2= true; le=this.getElementById(Ic); if (le==null){ this.o2= false; return; }if (!le.oc){if (le.Ib){ this.o2= false; this.saveHidden(Ic); return; } this.mouseOverOutSelected(Ic,2, false); if (this.l){le.Ib= true; this.o2= false; this.saveHidden(Ic); return; } this.mouseOverOutSelected(this.m,0, false); this.m=Ic; i8=this.ie(); le.Ib= true; this.saveHidden(Ic); if (i8==null){ this.o2= false; return; }Ic=i8.id; le=i8; if (!this.l && !le.oc){ this.mouseOverOutSelected(le.id,0, false); le.Ib= false; this.o2= false; return; }} this.i1=0; this.I0=0; this.O1=document.getElementById("__"+Ic); if (le.Ib){ this.I0=le.l1; this.o1=this.I0; this.i0=this.O1; this.mouseOverOutSelected(Ic,0, false); this.O2= false; this.O1=null; le.Ib= false; this.saveHidden("-1"); this.I1=window.setInterval("oboutSM"+this.id+".closeParent()",1); return; } this.l1=le.l1; this.O2= true; this.l2= false; i8=this.ie(); if (!this.l){if (i8==null){ this.o1=0; }else {if (i8.oc){ this.o1=i8.l1; }else { this.mouseOverOutSelected(i8.id,0, false); }i8.Ib= false; }i8=null; if (this.i0!=null){ this.I0=this.o1; this.l2= true; this.mouseOverOutSelected(this.m,0, false); if (this.o1>this.l1){ this.O2= false; }else { this.O2= true; }}} this.mouseOverOutSelected(Ic,2, false); this.m=Ic; le.Ib= true; this.I2= true; this.saveHidden(Ic); this.I1=window.setInterval("oboutSM"+this.id+".openParent()",1); } ; SlideMenu.prototype.closeParent= function (){if (this.I0<1){ this.i0.style.display="none"; if (!this.O2){window.clearInterval(this.I1); this.i0=this.O1; this.o2= false; }return; } this.i0.style.overflow="hidden"; this.i0.style.height=this.I0+"px"; this.I0-=this.speed; } ; SlideMenu.prototype.openParent= function (){if (this.l2){ this.closeParent(); }if (this.i1>=this.l1){ this.O1.style.height=this.l1+"px"; this.O1.style.overflow="auto"; this.O1.style.display="block"; if (this.O2){window.clearInterval(this.I1); this.o2= false; this.i0=this.O1; }return; } this.O1.style.overflow="hidden"; this.O1.style.height=this.i1+"px"; if (!this.I2){ this.O1.style.display="block"; }else { this.I2= false; } this.i1+=this.speed; } ; SlideMenu.prototype.ib= function (Ic,Ie){var i8=new of(Ic,Ie); if (this.o0>0){i8.l1=this.o0; } this.L++; if (this.O0==null){ this.O0=i8; this.l0=this.O0; }else { this.l0.Of(i8); this.l0=this.l0.lc(); }} ; function of(Ic,Ie){ this.id=Ic; this.type=Ie; this.If=null; this.l1=null; this.Ib= false; this.oc= false; } ; of.prototype.Of= function (item){ this.If=item; } ; of.prototype.lc= function (){return this.If; } ; SlideMenu.prototype.getElementById= function (Ic){var i8=this.O0; while (i8!=null && i8.id!=Ic){i8=i8.lc(); }return i8; } ; SlideMenu.prototype.ie= function (){var i8=this.O0; while (i8!=null && i8.Ib!= true){i8=i8.lc(); }if (i8!=null){return i8; }return null; } ;