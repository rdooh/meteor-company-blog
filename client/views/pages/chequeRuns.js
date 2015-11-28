

Template.chequeRuns.events({
  'change input#testFile': function (event) {
    this.testFile = event.target.checked;
  },

  'click .testSaveButton': function (event) {
    // console.log(event);
    console.log(this); // all data is available here
    let flatData = this.generateFlatData();
    let blob = new Blob([flatData], {type: "text/plain;charset=utf-8"});
    saveAs(blob, this.chequeRunNumber+'_'+this._id+'.txt');
  },

  'submit .lookup-cheque-run': function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    var chequeRun = event.target.text.value;
    // alert(chequeRun);
    Meteor.call('lookupChequeRunData',[chequeRun]);
    // TODO: Try refactor of these into named functions instead of anon
    event.target.text.value = '';
  }
});


Template.chequeRuns.helpers({
  runList: function () {
    return ChequeRunCollection.find({},{sort:[['createdAt','desc']],limit:10});
  }
});
