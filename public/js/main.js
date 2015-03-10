var app;

$(function() {
	app = {
		server: '/userdata',

		init: function() {
			app.fetch();
			console.log("in init()");
		},

		fetch: function() {
			$.ajax({
				url: app.server,
				type: 'GET',
				contentType: 'application/json',
				success: function(data) {
					console.log(data);
					console.log("Fetched Fitbit Data");
					$steps = $('#steps-count');
					$distance = $('#distance');
					$floors = $('#floors');
					var newSteps = data.user["_json"].summary.steps;
					var distance =  data.user["_json"].summary.distances[5].distance; 
					var floors = data.user["_json"].summary.floors; 
					var goal = data.user["_json"].goals.steps;
					var steps = newSteps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					var stepGoal = Math.floor((newSteps/goal) * 100);
					console.log(goal);
					console.log(newSteps);
					console.log(goal/newSteps);
					console.log(stepGoal);

					$('<h1>' + steps + ' steps' + '</h1>').appendTo($steps);

					$('<h1>' + distance.toFixed(1) + ' miles' + '</h1>').appendTo($distance);

					$('<h1>' + floors.toFixed(1) + ' floors' + '</h1>').appendTo($floors);
					
					  $('#steps').circleProgress({
					    value: '0.'+stepGoal,
					    size: 140,
					    thickness: 10,
					    fill: {
					      gradient: ["red", "orange"]
					    }
					  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('strong').html(parseInt(stepGoal * progress) + '<i>%</i>');
					});	
				},
				error: function(data) {
					console.error('Failed to get data');
				}
			});
		},

	bodyStats: {
		name: 'William',
		age: 23,
		weight: 156,
		height: "5'10",
		bloodType: 'A-',
		heartRate: 76,
		bodyFat: '15.8%'
	}
	// /app	
	}
var date = moment().format("MMMM D");
$('<h3>' + date + '</h3>').appendTo('#date-today');
console.log(date);

(function updateTime(){ 
    var now = moment().format('h:mm:ss A');
    $('#now').text(now);
    setTimeout(updateTime, 1000);
})();

$('.weight').text(app.bodyStats.weight + " lbs");
$('.height').text(app.bodyStats.height + " ft");
$('.blood').text(app.bodyStats.bloodType);
$('.heart').text(app.bodyStats.heartRate + " bpm");
$('.age').text(app.bodyStats.age)
$('.fat').text(app.bodyStats.bodyFat);


/* Fin */
});


