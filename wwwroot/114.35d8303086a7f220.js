"use strict";(self.webpackChunkmatx_angular_latest_test=self.webpackChunkmatx_angular_latest_test||[]).push([[114],{92114:(V,_,n)=>{n.r(_),n.d(_,{CommunicationModule:()=>R});var h=n(37262),r=n(36895),C=n(19132),f=n(69814),P=n(33269),M=n(52054),b=n(71589),t=n(94650);let O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-communication"]],decls:2,vars:0,template:function(i,a){1&i&&(t.TgZ(0,"p"),t._uU(1,"communication works!"),t.qZA())}}),e})();var m=n(24006),d=n(4859),g=n(59549),A=n(44144),p=n(47957),u=n(3238),l=n(96338),y=n(44850),v=n(97392),S=n(55829);const I=["endOfChat"];function Z(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"mat-option",23),t.NdJ("click",function(){const c=t.CHM(i).$implicit,G=t.oxw();return t.KtG(G.createChat(c))}),t._uU(1),t.qZA()}if(2&e){const i=o.$implicit;t.Q6J("value",""),t.xp6(1),t.hij(" ",i.displayName," ")}}function T(e,o){if(1&e&&(t.TgZ(0,"mat-list-option",24),t._UZ(1,"img",25),t.TgZ(2,"p",8)(3,"span",9),t._uU(4),t.qZA(),t.TgZ(5,"span",10),t._uU(6),t.ALo(7,"dateDisplay"),t.qZA()(),t.TgZ(8,"p",11),t._uU(9),t.qZA(),t._UZ(10,"mat-divider"),t.qZA()),2&e){const i=o.$implicit;t.Q6J("value",i.id),t.xp6(1),t.Q6J("src",i.chatPic?i.chatPic:"assets/images/image-placeholder.png",t.LSH),t.xp6(3),t.Oqu(i.chatName),t.xp6(2),t.Oqu(t.lcZ(7,5,i.lastMessageDate)),t.xp6(3),t.Oqu(i.lastMessage)}}function k(e,o){if(1&e&&(t.TgZ(0,"div",26),t._UZ(1,"img",27),t.TgZ(2,"h2"),t._uU(3),t.qZA()()),2&e){const i=o.ngIf;t.xp6(1),t.Q6J("src",i.chatPic?i.chatPic:"assets/images/image-placeholder.png",t.LSH),t.xp6(2),t.Oqu(i.chatName)}}function w(e,o){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Messages"),t.qZA())}const L=function(e){return{sender:e}};function N(e,o){if(1&e&&(t.TgZ(0,"div",29)(1,"div",30),t._uU(2),t.TgZ(3,"span",31),t._uU(4),t.ALo(5,"dateDisplay"),t.qZA()()()),2&e){const i=o.$implicit,a=t.oxw(2).ngIf;t.Q6J("ngClass",t.VKq(5,L,i.senderId===a.uid)),t.xp6(2),t.hij(" ",i.text," "),t.xp6(2),t.Oqu(t.lcZ(5,3,i.sentDate))}}function F(e,o){if(1&e&&(t.ynx(0),t.YNc(1,N,6,7,"div",28),t.BQk()),2&e){const i=o.ngIf;t.xp6(1),t.Q6J("ngForOf",i)}}function Q(e,o){if(1&e&&(t.ynx(0),t.YNc(1,F,2,1,"ng-container",17),t.ALo(2,"async"),t.BQk()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.messages$))}}let U=(()=>{class e{constructor(){this.searchControl=new m.NI(""),this.messageControl=new m.NI(""),this.chatListControl=new m.NI("")}ngOnInit(){}sendMessage(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chatapp"]],viewQuery:function(i,a){if(1&i&&t.Gf(I,5),2&i){let s;t.iGM(s=t.CRH())&&(a.endOfChat=s.first)}},decls:40,vars:15,consts:[[1,"container"],[1,"chat-list","mat-elevation-z5"],[1,"search-input"],["matInput","","placeholder","Search for users and start a chat",3,"matAutocomplete"],["users","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[3,"multiple"],["matListAvatar","","src","../../../../assets/images/home-bg.jpg"],["mat-line","",1,"chat-title"],[1,"chat-name"],[1,"chat-date"],["mat-line",""],[3,"value",4,"ngFor","ngForOf"],[1,"messages","mat-elevation-z5"],["class","messages-header",4,"ngIf","ngIfElse"],["noChatSelected",""],[1,"chat-area"],[4,"ngIf"],["endOfChat",""],[1,"input-area"],["appearance","outline"],["matInput","","placeholder","Enter your message...",3,"keydown.enter"],["mat-icon-button","","matSuffix","",3,"click"],[3,"value","click"],[3,"value"],["matListAvatar","",3,"src"],[1,"messages-header"],[3,"src"],["class","chat-bubble-container",3,"ngClass",4,"ngFor","ngForOf"],[1,"chat-bubble-container",3,"ngClass"],[1,"chat-bubble"],[1,"chat-time"]],template:function(i,a){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-form-field"),t._UZ(4,"input",3),t.qZA(),t.TgZ(5,"mat-autocomplete",null,4),t.YNc(7,Z,2,2,"mat-option",5),t.ALo(8,"async"),t.qZA()(),t.TgZ(9,"mat-selection-list",6),t._UZ(10,"mat-divider"),t.TgZ(11,"mat-list-option"),t._UZ(12,"img",7),t.TgZ(13,"p",8)(14,"span",9),t._uU(15,"Team Chat"),t.qZA(),t.TgZ(16,"span",10),t._uU(17,"02/01/2023"),t.qZA()(),t.TgZ(18,"p",11),t._uU(19,"0kkdkddd"),t.qZA(),t._UZ(20,"mat-divider"),t.qZA(),t.YNc(21,T,11,7,"mat-list-option",12),t.ALo(22,"async"),t.qZA()(),t.TgZ(23,"div",13),t.YNc(24,k,4,2,"div",14),t.ALo(25,"async"),t.YNc(26,w,2,0,"ng-template",null,15,t.W1O),t._UZ(28,"mat-divider"),t.TgZ(29,"div",16),t.YNc(30,Q,3,3,"ng-container",17),t.ALo(31,"async"),t._UZ(32,"div",null,18),t.qZA(),t.TgZ(34,"div",19)(35,"mat-form-field",20)(36,"input",21),t.NdJ("keydown.enter",function(){return a.sendMessage()}),t.qZA(),t.TgZ(37,"button",22),t.NdJ("click",function(){return a.sendMessage()}),t.TgZ(38,"mat-icon"),t._uU(39,"send"),t.qZA()()()()()()),2&i){const s=t.MAs(6),c=t.MAs(27);t.xp6(4),t.Q6J("matAutocomplete",s),t.xp6(3),t.Q6J("ngForOf",t.lcZ(8,7,a.users$)),t.xp6(2),t.Q6J("multiple",!1),t.xp6(12),t.Q6J("ngForOf",t.lcZ(22,9,a.myChats$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(25,11,a.selectedChat$))("ngIfElse",c),t.xp6(6),t.Q6J("ngIf",t.lcZ(31,13,a.user$))}},dependencies:[r.mk,r.sg,r.O5,d.lW,g.KE,g.R9,A.Nt,p.XC,p.ZL,u.ey,l.eA,u.X2,l.Ub,l.vS,y.d,v.Hw,S.oO,r.Ov],styles:['@import"https://fonts.googleapis.com/css2?family=Cairo:wght@300;400";.container[_ngcontent-%COMP%]{display:flex;height:calc(100vh - 70px)}.container[_ngcontent-%COMP%] > .chat-list[_ngcontent-%COMP%]{width:40%;margin:16px;background:#c5cae9;border-radius:16px}.container[_ngcontent-%COMP%] > .chat-list[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container[_ngcontent-%COMP%] > .chat-list[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .chat-name[_ngcontent-%COMP%]{font-weight:500}.container[_ngcontent-%COMP%] > .chat-list[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .chat-date[_ngcontent-%COMP%]{font-size:.7rem;color:#000000b3}.container[_ngcontent-%COMP%] > .chat-list[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{margin:24px}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]{width:60%;padding:24px;margin:16px 16px 16px 8px;border-radius:16px;background:rgba(0,0,0,.05)}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%]{display:flex;margin-bottom:8px}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:50%;object-fit:cover;margin-right:16px;height:35px}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]{height:calc(100vh - 270px);display:flex;flex-direction:column;align-items:flex-start;overflow:auto}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{margin-top:auto}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chat-bubble-container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-start}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chat-bubble-container[_ngcontent-%COMP%] > .chat-bubble[_ngcontent-%COMP%]{background:white;padding:8px 100px 18px 8px;margin-bottom:16px;border-radius:8px;width:-moz-fit-content;width:fit-content;position:relative}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chat-bubble-container[_ngcontent-%COMP%] > .chat-bubble[_ngcontent-%COMP%] > .chat-time[_ngcontent-%COMP%]{position:absolute;bottom:2px;right:8px;font-size:.7rem;color:#0009}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chat-bubble-container.sender[_ngcontent-%COMP%]{justify-content:flex-end}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%]   .chat-bubble-container.sender[_ngcontent-%COMP%] > .chat-bubble[_ngcontent-%COMP%]{background:#c5cae9}.container[_ngcontent-%COMP%] > .messages[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}']}),e})();var x=n(3056),J=n(73546);function D(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.submitAT())}),t._uU(1,"Submit"),t.qZA()}}function j(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-title-card"),t._uU(2," Recommendations Project"),t.qZA()())}const B=[{path:"communication",component:O,data:{title:"communication",breadcrumb:"Connect"}},{path:"chat",component:U,data:{title:"Chat",breadcrumb:"Chat"}},{path:"Skills",component:(()=>{class e{constructor(i){this.fb=i,this.isButtonVisible=!1,this.isButtonVisibleAI=!1,this.dropdownList=[],this.selectedItems=[],this.dropdownSettings={},this.count=0}ngOnInit(){this.dropdownList=[{item_id:1,item_text:"\tHTML\t "},{item_id:2,item_text:"\tCSS\t "},{item_id:3,item_text:"\tJavaScript\t "},{item_id:4,item_text:"\tPHP or Python\t "},{item_id:5,item_text:"\tMySQL or PostgreSQL\t "},{item_id:6,item_text:"\tReact or Angular or Vue.js\t "},{item_id:7,item_text:"\tREST API\t "},{item_id:8,item_text:"\tAJAX\t "},{item_id:9,item_text:"\tC++\t "},{item_id:10,item_text:"\tUnity or Unreal Engine\t "},{item_id:11,item_text:"\tGame development frameworks\t "},{item_id:12,item_text:"\tGraphics design and Animation\t "},{item_id:13,item_text:"\tPython\t "},{item_id:14,item_text:"\tNatural Language Processing (NLP)\t "},{item_id:15,item_text:"\tMachine Learning\t "},{item_id:16,item_text:"\tDeep Learning\t "},{item_id:17,item_text:"\tNeural Networks\t "},{item_id:18,item_text:"\tComputer Vision\t "},{item_id:19,item_text:"\tJava or Kotlin or Swift\t "},{item_id:20,item_text:"\tReact Native or Flutter\t "},{item_id:21,item_text:"\tD3.js\t "},{item_id:22,item_text:"\tPlotly\t "},{item_id:23,item_text:"\tPandas\t "},{item_id:24,item_text:"\tMatplotlib\t "},{item_id:25,item_text:"\tARKit or ARCore\t "},{item_id:26,item_text:"\tC\t "},{item_id:27,item_text:"\tNode.js\t "},{item_id:28,item_text:"\tRaspberry Pi or Arduino\t "},{item_id:29,item_text:"\tMQTT or HTTP\t "},{item_id:30,item_text:"\tIoT platforms\t "},{item_id:31,item_text:"\tBlockchain\t "},{item_id:32,item_text:"\tSmart Contracts\t "},{item_id:33,item_text:"\tSolidity\t "},{item_id:34,item_text:"\tWeb3.js\t "},{item_id:35,item_text:"\tEthereum\t "},{item_id:36,item_text:"\tDjango or Flask (for backend)\t "},{item_id:37,item_text:"\tJavaScript (for frontend)\t "},{item_id:38,item_text:"\tPayPal or Stripe API (for payment processing)\t "},{item_id:39,item_text:"\tNumpy\t "},{item_id:40,item_text:"\tOpenCV\t "},{item_id:41,item_text:"\tScikit-Learn\t "},{item_id:42,item_text:"\tAWS or Azure\t "},{item_id:43,item_text:"\tDatabase Management\t "},{item_id:44,item_text:"\tNLP\t "},{item_id:45,item_text:"\tDjango/Flask\t "},{item_id:46,item_text:"\tMySQL/PostgreSQL\t "},{item_id:47,item_text:"\tSQL\t "},{item_id:48,item_text:"\tScikit-learn\t "},{item_id:49,item_text:"\tCybersecurity\t "},{item_id:50,item_text:"\tCloud\t "},{item_id:51,item_text:"\tAWS/Azure\t "},{item_id:52,item_text:"\tBlender\t "},{item_id:53,item_text:"\tCAD software\t "},{item_id:54,item_text:"\t3D printing technologies\t "},{item_id:55,item_text:"\tSignal Processing\t "},{item_id:56,item_text:"\tUnity/Unreal Engine\t "},{item_id:57,item_text:"\tARKit/ARCore\t "},{item_id:58,item_text:"\tGraphics Design\t "},{item_id:59,item_text:"\tAnimation\t "},{item_id:60,item_text:"\tQuantum Computing\t "},{item_id:61,item_text:"\tQuantum Mechanics\t "},{item_id:62,item_text:"\tCloud Computing\t "},{item_id:63,item_text:"\tIoT\t "},{item_id:64,item_text:"\tRaspberry Pi/Arduino\t "},{item_id:65,item_text:"\tMQTT/HTTP\t "},{item_id:66,item_text:"\tCryptocurrency\t "},{item_id:67,item_text:"\tDjango or Flask (for web development)\t "},{item_id:68,item_text:"\tJavaScript (for frontend development)\t "},{item_id:69,item_text:"\tSQL or NoSQL databases\t "},{item_id:70,item_text:"\tMachine Learning (optional)\t "},{item_id:71,item_text:"\tRobotics\t "},{item_id:72,item_text:"\tFinancial Markets\t "},{item_id:73,item_text:"\tRaspberry Pi or Arduino (for hardware programming)\t "},{item_id:74,item_text:"\tAlgorithmic Trading\t "},{item_id:75,item_text:"\tCollaborative Filtering\t "},{item_id:76,item_text:"\tNetwork Analysis\t "},{item_id:77,item_text:"\tGraph Theory\t "},{item_id:78,item_text:"\tData Visualization\t "},{item_id:79,item_text:"\tRaspberry Pi\t "},{item_id:80,item_text:"\tMQTT\t "},{item_id:81,item_text:"\tDjango or Flask\t "},{item_id:82,item_text:"\tPayment Gateway Integration\t "},{item_id:83,item_text:"\tUnity\t "},{item_id:84,item_text:"\t3D Modeling Software\t "},{item_id:85,item_text:"\tMySQL or MongoDB\t "},{item_id:86,item_text:"\tFirebase or MongoDB\t "},{item_id:87,item_text:"\tSpoonacular API\t "},{item_id:88,item_text:"\tSensors\t "},{item_id:89,item_text:"\tFirebase or OpenWeather API\t "},{item_id:90,item_text:"\tBlockchain Integration\t "},{item_id:91,item_text:"\tGoogle Maps API Integration\t "},{item_id:92,item_text:"\tNetworkX or Gephi\t "},{item_id:93,item_text:"\tData Visualization Libraries\t "},{item_id:94,item_text:"\tFirebase or Socket.io\t "},{item_id:95,item_text:"\tMachine Learning Libraries\t "},{item_id:96,item_text:"\tFlask Framework\t "},{item_id:97,item_text:"\tFirebase\t "},{item_id:98,item_text:"\tPlaid API Integration\t "},{item_id:99,item_text:"\tLMS Framework\t "},{item_id:100,item_text:"\tUltrasonic Sensors\t "},{item_id:101,item_text:"\tNatural Language Processing Libraries\t "},{item_id:102,item_text:"\tGoogle Maps API\t "},{item_id:103,item_text:"\tGoogle Fit or Apple Health API\t "},{item_id:104,item_text:"\tVideo Conferencing API\t "},{item_id:105,item_text:"\tNutrition API Integration\t "},{item_id:106,item_text:"\tGoogle Translate API\t "},{item_id:107,item_text:"\tRecipe API integration\t "},{item_id:108,item_text:"\tDialogflow or Wit.ai or IBM Watson\t "},{item_id:109,item_text:"\tNode.js or Python\t "},{item_id:110,item_text:"\tIntegration with messaging platforms (e.g. Facebook Messenger\t "},{item_id:111,item_text:"\tSlack)\t "},{item_id:112,item_text:"\tIntegration with Google Maps API\t "},{item_id:113,item_text:"\tIntegration with Job Search APIs (e.g. Indeed\t "},{item_id:114,item_text:"\tGlassdoor)\t "},{item_id:115,item_text:"\tMongoDB or PostgreSQL\t "},{item_id:116,item_text:"\tIntegration with Music APIs (e.g. Spotify\t "},{item_id:117,item_text:"\tApple Music)\t "},{item_id:118,item_text:"\tIntegration with Weather APIs (e.g. OpenWeatherMap\t "},{item_id:119,item_text:"\tAccuWeather)\t "},{item_id:120,item_text:"\tNLTK\t "},{item_id:121,item_text:"\tDialogflow or IBM Watson\t "},{item_id:122,item_text:"\tFitness Tracking API Integration\t "}],this.dropdownSettings={idField:"item_id",textField:"item_text",enableCheckAll:!1,allowSearchFilter:!0},this.selectedItems=[],this.dropDownForm=this.fb.group({myItems:[this.selectedItems]})}onItemSelect(i){console.log("onItemSelect",i),this.selectedItems=i,this.isButtonVisible=!0,this.count++,console.log(this.count)}onItemDeSelect(i){this.count--,console.log("onItemDeSelectAll",i),0==this.count&&(this.isButtonVisible=!1)}submitAT(){this.isButtonVisibleAI=!0}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(m.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-skills"]],decls:9,vars:5,consts:[[2,"height","400px"],[2,"width","60%"],[3,"formGroup"],["formControlName","myItems",3,"settings","data","onSelect","onDeSelect"],["class","submitclass","mat-flat-button","",3,"click",4,"ngIf"],["style","height:400px; ",4,"ngIf"],["mat-flat-button","",1,"submitclass",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"mat-card"),t._uU(1," Add Your Skills\n"),t.qZA(),t.TgZ(2,"mat-card",0)(3,"div",1)(4,"form",2)(5,"ng-multiselect-dropdown",3),t.NdJ("onSelect",function(c){return a.onItemSelect(c)})("onDeSelect",function(c){return a.onItemDeSelect(c)}),t.qZA()()()(),t.TgZ(6,"mat-card"),t.YNc(7,D,2,0,"button",4),t.qZA(),t.YNc(8,j,3,0,"mat-card",5)),2&i&&(t.xp6(4),t.Q6J("formGroup",a.dropDownForm),t.xp6(1),t.Q6J("settings",a.dropdownSettings)("data",a.dropdownList),t.xp6(2),t.Q6J("ngIf",a.isButtonVisible),t.xp6(1),t.Q6J("ngIf",a.isButtonVisibleAI))},dependencies:[x.OP,r.O5,d.lW,J.a8,m._Y,m.JJ,m.JL,m.sg,m.u],styles:[".mat-card[_ngcontent-%COMP%]{background-color:#faebd7}.submitclass[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-left:85%;margin-top:22%;border-bottom:#faebd7;border-color:#faebd7;border-style:initial;width:120px;background-color:#304156;color:#faebd7;font-family:Josefin Sans,sans-serif;font-size:1.5vw}"]}),e})(),data:{title:"Skills",breadcrumb:"Skills"}}];let R=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[x.ZQ.forRoot(),r.ez,h.m,f.o9,P.vQ,M.Ns.forRoot({echarts:()=>n.e(701).then(n.bind(n,81701))}),b.D,m.u5,m.UX,C.Bz.forChild(B)]}),e})()}}]);