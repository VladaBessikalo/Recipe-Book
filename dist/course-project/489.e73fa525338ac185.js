"use strict";(self.webpackChunkcourse_project=self.webpackChunkcourse_project||[]).push([[489],{3489:(D,g,p)=>{p.r(g),p.d(g,{RecipesModule:()=>L});var a=p(167),c=p(95),e=p(4946),u=p(6492),m=p(6814);const Z=function(t){return[t]};let _=(()=>{var t;class r{ngOnInit(){}}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&i&&(e.Q6J("routerLink",e.VKq(5,Z,n.index)),e.xp6(3),e.hij(" ",n.recipe.name," "),e.xp6(2),e.hij(" ",n.recipe.description," "),e.xp6(2),e.s9C("src",n.recipe.imagePath,e.LSH),e.s9C("alt",n.recipe.name))},dependencies:[a.rH,a.Od]}),r})();function R(t,r){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const i=r.index;e.Q6J("recipe",r.$implicit)("index",i)}}let C=(()=>{var t;class r{constructor(i,n,s){this.recipeService=i,this.router=n,this.route=s}ngOnInit(){this.subscription=this.recipeService.recipeChanged.subscribe(i=>{this.recipes=i}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(a.F0),e.Y36(a.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3," New Recipe "),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,R,1,2,"app-recipe-item",3),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},dependencies:[m.sg,_]}),r})(),T=(()=>{var t;class r{constructor(){}ngOnInit(){}}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[a.lC,C]}),r})();var A=p(8180),S=p(7398),b=p(2848);let F=(()=>{var t;class r{constructor(i,n){this.authService=i,this.router=n}canActivate(i,n){return this.authService.user.pipe((0,A.q)(1),(0,S.U)(s=>!!s||this.router.createUrlTree(["/auth"])))}}return(t=r).\u0275fac=function(i){return new(i||t)(e.LFG(b.e8),e.LFG(a.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var U=p(6853);function w(t,r){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.AsE(" ",o.name," - ",o.amount," ")}}let I=(()=>{var t;class r{constructor(i,n,s){this.recipeService=i,this.router=n,this.route=s}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"],{relativeTo:this.route})}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(a.F0),e.Y36(a.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-width","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu",2,"cursor","pointer"],[3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),e._uU(11," Manage Recipe "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"ul",6)(14,"li")(15,"a",7),e.NdJ("click",function(){return n.onAddToShoppingList()}),e._uU(16,"To Shopping List"),e.qZA()(),e.TgZ(17,"li")(18,"a",7),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(19,"Edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",8),e.YNc(29,w,2,2,"li",9),e.qZA()()()),2&i&&(e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.hij(" ",n.recipe.name," "),e.xp6(19),e.hij(" ",n.recipe.description," "),e.xp6(4),e.Q6J("ngForOf",n.recipe.ingredients))},dependencies:[U.w,m.sg]}),r})();function y(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._UZ(2,"input",19),e.qZA(),e.TgZ(3,"div",20),e._UZ(4,"input",21),e.qZA(),e.TgZ(5,"div",20)(6,"button",4),e.NdJ("click",function(){const s=e.CHM(o).index,l=e.oxw();return e.KtG(l.onDeleteIngredient(s))}),e._uU(7," X "),e.qZA()()()}2&t&&e.Q6J("formGroupName",r.index)}let v=(()=>{var t;class r{constructor(i,n,s){this.route=i,this.recipeService=n,this.router=s,this.editMode=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}initForm(){let i="",n="",s="",l=new c.Oe([]);if(this.editMode){const d=this.recipeService.getRecipe(this.id);if(i=d.name,n=d.imagePath,s=d.description,d.ingredients)for(let f of d.ingredients)l.push(new c.cw({name:new c.NI(f.name,c.kI.required),amount:new c.NI(f.amount,[c.kI.required,c.kI.pattern(/^[1-9]+[0+9]*$/)])}))}this.recipeForm=new c.cw({name:new c.NI(i,c.kI.required),imagePath:new c.NI(n,c.kI.required),description:new c.NI(s,c.kI.required),ingredients:l})}get controls(){return this.recipeForm.get("ingredients").controls}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new c.cw({name:new c.NI(null,c.kI.required),amount:new c.NI(null,[c.kI.required,c.kI.pattern(/^[1-9]+[0+9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(i){this.recipeForm.get("ingredients").removeAt(i)}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(a.gz),e.Y36(u.j),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:40,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-fluid",2,"width","300px",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6," Save "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(8," Cancel "),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA()()(),e.TgZ(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",9,10),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",1),e._UZ(24,"img",11),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),e._uU(29,"Description"),e.qZA(),e.TgZ(30,"textarea",13),e._uU(31,"                        "),e.qZA()()()(),e.TgZ(32,"div",0)(33,"div",14),e.YNc(34,y,8,1,"div",15),e._UZ(35,"hr"),e.TgZ(36,"div",0)(37,"div",1)(38,"button",16),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(39,"Add ingredient"),e.qZA()()()()()()()()),2&i){const s=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",s.value,e.LSH),e.xp6(10),e.Q6J("ngForOf",n.controls)}},dependencies:[c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,m.sg],styles:["button[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),r})(),x=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Please select a Recipe!"),e.qZA())}}),r})();var N=p(4993);let h=(()=>{var t;class r{constructor(i,n){this.dataSrorageService=i,this.recipeService=n}resolve(i,n){const s=this.recipeService.getRecipes();return 0===s.length?this.dataSrorageService.fetchRecipes():s}}return(t=r).\u0275fac=function(i){return new(i||t)(e.LFG(N.Z),e.LFG(u.j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();const q=[{path:"",component:T,canActivate:[F],children:[{path:"",component:x},{path:"new",component:v},{path:":id",component:I,resolve:[h]},{path:":id/edit",component:v,resolve:[h]}]}];let k=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(q),a.Bz]}),r})();var J=p(6208);let L=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz,c.UX,k,J.m]}),r})()}}]);