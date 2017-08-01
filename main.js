 var randomScalingFactor = function() {
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    };
    var randomColor = function(opacity) {
        return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
    };
    var scatterChartData = {
        datasets: [{
            label: "My First dataset",
			data: [{
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}]
        }, {
            label: "My Second dataset",
            data: [{
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}, {
				x: randomScalingFactor(),
				y: randomScalingFactor(),
			}]
        }]
    };
    scatterChartData.datasets.forEach(function(i, dataset){
        dataset.borderColor = randomColor(0.4);
        dataset.backgroundColor = randomColor(0.1);
        dataset.pointBorderColor = randomColor(0.7);
        dataset.pointBackgroundColor = randomColor(0.5);
        dataset.pointBorderWidth = 1;
    });
    console.log(scatterChartData);
    window.onload = function() {
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myScatter = new Chart(ctx).Scatter({
        	data: scatterChartData,
        	options: {
	            responsive: true,
	            hoverMode: 'single', // should always use single for a scatter chart
	            scales: {
	            	xAxes: [{
	            		gridLines: {
	            			zeroLineColor: "rgba(0,0,0,1)"
	            		}
	            	}]
	            }
            }
        });
    };
    $('#randomizeData').click(function() {
        scatterChartData.datasets[0].data = [{
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}];
        scatterChartData.datasets[1].data = [{
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}, {
			x: randomScalingFactor(),
			y: randomScalingFactor(),
		}]
        window.myScatter.update();
    });