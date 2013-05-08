(function (App) {
   App.Views.SelectListsItemView = Backbone.View.extend({
      tagName: "li",

      events: {
         "change input[name=IsTodoList]": "onTodoSelected",
         "change input[name=IsDoneList]": "onDoneSelected"
      },

      initialize: function () {
      },

      render: function () {
      	 ds = ""
      	 ts = ""
      	 if(this.model.get("isTodoList"))
      	 	ts = "checked"
      	 if(this.model.get("isDoneList"))
      	 	ds = "checked"
      	 	      	
         this.$el.html(App.Templates.SelectListsItemTemplate({
            List: this.model.get("list"),
            DoneStatus: ds,
            TodoStatus: ts
         }));
      },

      onTodoSelected: function () {
         this.model.set("isTodoList", this.$("input[name=IsTodoList]").is(":checked"));
      },

      onDoneSelected:function () {
         this.model.set("isDoneList", this.$("input[name=IsDoneList]").is(":checked"));
      }
   });
} (App));
