//	HYPE.documents["Hype_world"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Hype_world.hyperesources",c="Hype_world",e="hypeworld_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/hypeworld_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"say",source:"function(hypeDocument, element, event) {\t\nvar name = hypeDocument.getElementById('name').value;\nwindow.webkit.messageHandlers.helloWorld.postMessage(name);  // post the to address\n}",identifier:"5"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Scene 1",o:"1",X:[0]},{n:"Scene 2",o:"29",X:[1]}],[{o:"3",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"6_pressed":{i:"6_pressed",n:"6_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#009193",s:"#F0F0F0",o:"39"},{y:1,i:"g",s:"#009193",z:0,o:"39",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["44","38","40","39","41","42","43","45","46"],n:"Untitled Layout","_":0,v:{"39":{b:179,z:1,K:"Solid",c:90,L:"Solid",d:15,aE:{a:[{p:4,h:"5"}]},M:1,bD:"none",aS:6,N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"6_pressed",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"Say Hello",x:"visible",I:"Solid",a:136,y:"preserve",J:"Solid"},"42":{G:"#000000",aU:8,c:351,d:151,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:14,g:"#E8EBED",Z:"break-word",w:"\n<span style=\"color:purple\">function</span> say(hypeDocument, element, event) {\n\n<br><br>\n\n<span style=\"color:purple\">var </span> name = hypeDocument.getElementById(' <span style=\"color:brown\">name </span>').value;\n<br><br>\nwindow.webkit.messageHandlers.helloWorld.postMessage(name);<br><br>\n\n}",aI:12,j:"absolute",x:"visible",k:"div",y:"preserve",aJ:12,z:8,aS:8,aK:12,aT:8,a:5,aL:12,b:285},"45":{c:382,d:0,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:1,k:"div",C:"#D8DDE4",z:9,O:1,D:"#D8DDE4",a:-4,b:514},"40":{c:153,d:27,I:"None",J:"None",K:"None",L:"None",M:0,i:"form_",w:"\t<form>\n\n  <input type=\"text\" id=\"name\" name=\"name\"><br>\n  \n</form>",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:112,b:131},"43":{aV:8,w:"This function posts the name Value to the App.<br>The App then speaks the Name<br>",x:"visible",a:7,Z:"break-word",b:456,y:"preserve",j:"absolute",z:5,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:36,c:346,aS:8,t:16,G:"#000000",aU:8,r:"inline"},"38":{aV:8,w:"Type Your Name",x:"visible",a:120,Z:"break-word",b:88,y:"preserve",j:"absolute",z:3,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#000000"},"46":{G:"#000000",aU:8,c:346,aV:8,d:36,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"Now Click the <b><font color=\"#0879f9\"><i>Scene</i></font></b> Button in the Apps Navigation Bar<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:7,F:"center",b:553},"41":{aV:8,w:"The Say Hello Button runs a Hype Function",x:"visible",a:26,Z:"break-word",b:224,y:"preserve",j:"absolute",z:4,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#000000"},"44":{G:"#000000",aU:8,c:254,aV:8,d:20,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Hype -&gt; Xcode App messaging<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:53,b:51}}},{o:"31",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["48","47","50","49"],n:"Untitled Layout","_":1,v:{"49":{G:"#000000",aU:8,c:351,d:69,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:14,g:"#E8EBED",Z:"break-word",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; font-style: normal; font-variant-caps: normal; font-stretch: normal; font-size: 13px; line-height: normal; font-family: Menlo; color: rgb(196, 26, 22); background-color: rgb(255, 255, 255);\"><span style=\"color: #3f6e74\">webView</span><span style=\"color: #000000\">!.</span><span style=\"color: #2e0d6e\">evaluateJavaScript</span><span style=\"color: #000000\">(</span>\"HYPE.documents['Hype_world'].showSceneNamed('scene2', HYPE.documents['Hype_world'].kSceneTransitionCrossfade, 0.2);\"<span style=\"color: #000000\">, completionHandler:</span><span style=\"color: #aa0d91\">nil</span><span style=\"color: #000000\"> )</span></p>",aI:12,j:"absolute",x:"visible",k:"div",y:"preserve",aJ:12,z:3,aS:8,aK:12,aT:8,a:5,aL:12,b:302},"50":{G:"#000000",aU:8,c:351,d:13,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:14,g:"#E8EBED",Z:"break-word",w:"Example code in an IBAction or #Selector Action",aI:12,j:"absolute",x:"visible",k:"div",y:"preserve",aJ:12,z:2,aS:8,aK:12,aT:8,a:6,aL:12,b:264},"48":{G:"#000000",aU:8,c:238,aV:8,d:20,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Xcode App -&gt; Hype  messaging ",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:58,b:51},"47":{G:"#000000",aU:8,c:351,d:39,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:14,g:"#E8EBED",Z:"break-word",w:"We reached this scene via a message being posted to Hype from the App",aI:12,j:"absolute",x:"visible",k:"div",y:"preserve",aJ:12,z:1,aS:8,aK:12,aT:8,a:5,aL:12,b:158}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();