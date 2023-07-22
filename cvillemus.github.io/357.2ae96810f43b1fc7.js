"use strict";(self.webpackChunkflechettes=self.webpackChunkflechettes||[]).push([[357],{7357:(S,p,r)=>{r.r(p),r.d(p,{SetPlayersComponent:()=>Z});var a=r(95),i=r(6814),c=r(8645),y=r(9360),h=r(8251),m=r(4829),v=r(2420);function u(n){return(0,y.e)((o,t)=>{(0,m.Xf)(n).subscribe((0,h.x)(t,()=>t.complete(),v.Z)),!t.closed&&o.subscribe(t)})}var e=r(4946),d=r(9275);const f=["input"];let C=(()=>{class n{constructor(t){this.playerService=t,this.destroy$=new c.x,this.playerControl=new a.p4("",[a.kI.maxLength(10),a.kI.minLength(2)])}ngOnInit(){this.playerControl.valueChanges.pipe(u(this.destroy$)).subscribe(t=>{this.playerService.patchPlayerName(this.player.id,t)})}removePlayer(t){this.playerService.deletePlayer(t)}ngOnDestroy(){this.destroy$.next(!0)}ngAfterViewInit(){this.input?.nativeElement.focus()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.l))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-player-card"]],viewQuery:function(t,l){if(1&t&&e.Gf(f,5),2&t){let s;e.iGM(s=e.CRH())&&(l.input=s.first)}},inputs:{player:"player"},standalone:!0,features:[e.jDz],decls:11,vars:2,consts:[["placeholder","Nom du joueur",1,"card__main","card__input",3,"value","formControl"],["input",""],[1,"card__controls"],[1,"button-flat",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-user-minus"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"],["d","M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128"],["d","M16 19h6"]],template:function(t,l){1&t&&(e._UZ(0,"input",0,1),e.TgZ(2,"span",2)(3,"ul")(4,"li")(5,"button",3),e.NdJ("click",function(){return l.removePlayer(l.player.id)}),e.O4$(),e.TgZ(6,"svg",4),e._UZ(7,"path",5)(8,"path",6)(9,"path",7)(10,"path",8),e.qZA()()()()()),2&t&&e.Q6J("value",l.player.name)("formControl",l.playerControl)},dependencies:[a.UX,a.Fj,a.JJ,a.oH]}),n})();var g=r(6538);function P(n,o){if(1&n&&(e.TgZ(0,"li"),e._UZ(1,"app-player-card",16),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("player",t)}}let Z=(()=>{class n{constructor(t){this.playerService=t,this.destroy$=new c.x,this.playerCount=0,this.playersList$=this.playerService.getPlayers()}addPlayer(){this.playerService.addPlayer("")}ngOnInit(){this.playersList$.pipe(u(this.destroy$)).subscribe(t=>{this.playerCount=t.length})}ngOnDestroy(){this.destroy$.next(!0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.l))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-players-selection"]],standalone:!0,features:[e.jDz],decls:20,vars:4,consts:[[1,"section-main"],[1,"container"],[1,"title-section"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-device-gamepad-2"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"],["d","M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"],["d","M8 9v2"],["d","M7 10h2"],["d","M14 10h2"],[1,"list-cards"],[4,"ngFor","ngForOf"],[1,"card","card--button-ghost"],["type","submit",1,"button-flat",3,"click"],[1,"page-controls"],["routerLink","/jeux",1,"button",3,"disabled"],[1,"card",3,"player"]],template:function(t,l){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9),e.qZA(),e._uU(10," Entrez la liste des joueurs "),e.qZA(),e.kcU(),e.TgZ(11,"ul",10),e.YNc(12,P,2,1,"li",11),e.ALo(13,"async"),e.TgZ(14,"li",12)(15,"button",13),e.NdJ("click",function(){return l.addPlayer()}),e._uU(16," + Ajouter un joueur "),e.qZA()()(),e.TgZ(17,"div",14)(18,"button",15),e._uU(19,"Continuer"),e.qZA()()()()),2&t&&(e.xp6(12),e.Q6J("ngForOf",e.lcZ(13,2,l.playersList$)),e.xp6(6),e.Q6J("disabled",0==l.playerCount))},dependencies:[i.ez,i.sg,i.Ov,a.UX,C,g.rH]}),n})()}}]);