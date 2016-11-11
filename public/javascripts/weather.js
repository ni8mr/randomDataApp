$(document).ready(function(){
	var astroApiUrl = 'http://uinames.com/api/?amount=40';
	$.getJSON(astroApiUrl).done(function (data) {
		var randomData = [];
		for(var i=0; i<data.length; i++){
			randomData.push([data[i]['name'],data[i]['gender'], data[i]['region']]);
		}
		var table = $('#weatherTable').DataTable({
		  data: randomData,
		  columns: [
            {title: "Name"},
            {title: "Gender"},
            {title: "Region"}
          ],
          "aaSorting": [[2, "asc"]],
          dom: 'lBftipr'
	  });
	});
});