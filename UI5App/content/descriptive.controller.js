sap.ui.controller("content.descriptive", {
	// controller logic goes here
	onInit: function() {

		var dataModel = new sap.ui.model.odata.ODataModel("service/DiagnosisAgeCalculationView.xsodata");

		this.getView().setModel(dataModel);

	},

	// this function updates the details panel
	updateDetails: function(oEvent) {
		// first, we need to get the context of the selected
		// row from the event
		var rowContext = oEvent.getParameter("rowContext");
		// next, we need the Input control that we want
		// to manipulate
		var Patient = this.getView().byId("PatientID");
		// now we can set the Input to the value of a
		// field of the selected row
		Patient.setValue(rowContext.getObject().PatientID);
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