// the controller for the view Main
sap.ui.controller("content.Main", { // controller logic goes here

	onInit: function() {

		var shell = this.getView().byId("shell");

		if (shell.getContent().length === 0) {

			var worksetItems = shell.getWorksetItems();
			if (worksetItems.length > 0) {
				shell.setContent(
					this.getContent(worksetItems[0].getKey())
				);
			}
		}

	},
	onExit: function() {
		// this function is called when the view is destroyed.
		// Used for clean-up activities
	},
	onAfterRendering: function() {
		// this function is called when the view has been rendered.
		// Used for post-rendering manipulation of the HTML code
	},
	onBeforeRendering: function() {
		// this function is called before the view is re-rendered // (not before first rendering)
	},

	// here we define what happens when a user clicks on a navigation item
	itemSelected: function(oEvent) {
		// first, we have to get the key of the selected navigation item
		var itemKey = oEvent.getParameter("key");
		// next, we need to get the shell to be able to manipulate it
		var oShell = oEvent.oSource;
		// next, we have to get the right page (content) for the key.
		// For convenience reasons, this is done in a different function
		var content = this.getContent(itemKey);
		// last, we put the content that we retrieved to the content
		// section of the shell. the first argument for the function is
		// the content, the second one defines if we want to destroy old // content (if present) before adding the new content oShell.setContent(content, true);
		oShell.setContent(content, true);

	},

	// this functions gets the correct page and creates the view
	getContent: function(key) {
		var content = null;
		// because the application will have several pages,
		// we use the switch-case contruct to check the key

		switch (key) {
			case "overview":
				// when the navigation item "overview" is selected,
				// we return the respective view
				content = sap.ui.view({
					// location and name of the view
					viewName: "content.Overview",
					// type of the view, i.e. XML, JavaScript, JSON...
					type: sap.ui.core.mvc.ViewType.XML
				});
				break;
			case "dataViewer":
				// when the navigation item "salesOrders" is selected,
				// we return the respective view
				content = sap.ui.view({
					// location and name of the view
					viewName: "content.dataViewer",
					// type of the view, i.e. XML, JavaScript, JSON...
					type: sap.ui.core.mvc.ViewType.XML
				});
				break;
			case "about":
				// when the navigation item "salesOrders" is selected,
				// we return the respective view
				content = sap.ui.view({
					// location and name of the view
					viewName: "content.about",
					// type of the view, i.e. XML, JavaScript, JSON...
					type: sap.ui.core.mvc.ViewType.XML
				});
				break;
			case "descriptive":
				content = sap.ui.view({
					// location and name of the view
					viewName: "content.descriptive",
					// type of the view, i.e. XML, JavaScript, JSON...
					type: sap.ui.core.mvc.ViewType.XML
				});
				break;
			case "predictive":
				content = sap.ui.view({
					// location and name of the view
					viewName: "content.predictive",
					// type of the view, i.e. XML, JavaScript, JSON...
					type: sap.ui.core.mvc.ViewType.XML
				});
				break;
			default:
				// when we get an item that we do not know,
				// we return nothing
				content = null;
				break;
		}
		return content;

	}

});