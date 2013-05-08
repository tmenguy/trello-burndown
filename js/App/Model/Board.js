(function (App) {
   App.Models.Board = Backbone.Model.extend({
      initialize: function (board) {
         this.set("board", board);
         this.fetchOrganization();
         this.fetchBoardDateAndWork();
      },

      fetchOrganization: function () {
         var that = this;

         var orgId = this.get("board").idOrganization;

         if (orgId == null || typeof (orgId) == 'undefined' || orgId.length == 0) {
            return;
         }

         Trello.get("/organizations/" + orgId, function (organization) {
            that.set("organization", organization);
         });
      },
      
      fetchBoardDateAndWork: function () {
         var that = this;

         var bName = this.get("board").name;


	     var regex = /.*\(.*start\:\s*([0-3][0-9])\/([0-1][0-9])\/([0-9][0-9][0-9][0-9]).*end\:\s*([0-3][0-9])\/([0-1][0-9])\/([0-9][0-9][0-9][0-9]).*WF\:\s*([0-9]+).*\).*/;
	     
	     if (bName.match(regex)) {
	         var result = regex.exec(bName);
	     
		     var yearS = parseInt(result[3]);
	      	 var monthS = parseInt(result[2]);
	      	 var dayS = parseInt(result[1]);
	
	      	 startDate =  new Date(yearS, monthS - 1, dayS);
	      	 
	      	 
		     var yearE = parseInt(result[6]);
	      	 var monthE = parseInt(result[5]);
	      	 var dayE = parseInt(result[4]);
	
	      	 endDate =  new Date(yearE, monthE - 1, dayE);
	      	 
	      	 workForce =  parseInt(result[7]) 
	      	 
	      	 that.set("start", startDate)
	      	 that.set("end", endDate) 
	      	 that.set("work", workForce)     	 
	     }
      }      
   });
} (App))
