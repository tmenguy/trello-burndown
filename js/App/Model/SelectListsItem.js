(function (App, Backbone) {
   App.Models.SelectListsItem = Backbone.Model.extend({
      initialize: function (list) {
         this.set("list", list);


		 if ( (list.name == "DONE")  || (list.name == "Done") || (list.name == "done") ) {
         	this.set("isTodoList", false);
         	this.set("isDoneList", true);
		 }else{
         	this.set("isTodoList", true);
         	this.set("isDoneList", false); 
		 }        	
      }
   });
} (App, Backbone));
