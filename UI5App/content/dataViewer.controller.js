sap.ui.controller("content.dataViewer", {
	// controller logic goes here
	onInit: function() {

		var dataModel = new sap.ui.model.odata.ODataModel("service/BaseCalculationViews.xsodata");

		this.getView().setModel(dataModel);

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
	}
});
