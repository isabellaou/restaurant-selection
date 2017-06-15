var restaurant = {
		"1" : {
			"cn" : "Tong De Yuan",
			"add": "170 University Ave W, Waterloo, ON N2L 3E9",
		},
		"2" : {
			"cn" : "Sogo",
			"add": "170 University Ave W, Waterloo, ON N2L 3E9",
		},
		"3" : {
			"cn" : "Lotus BBQ",
			"add": "150 University Ave W, Waterloo, ON N2L 6J3",
		},
		"4" : {
		  "cn" : "Seoul Soul",
		  "add": "170 University Ave W, Waterloo, ON N2L 3E9",
		},
		"5" : {
		  "cn" : "Xiang Yue Xiang Qing",
		 "add": "160 University Ave W, Waterloo, ON N2L 3G1",
		},
		"6" : {
		  "cn" : "Foodie Frutie",
		  "add": "203 Lester St #7, Waterloo, ON N2L 0B5",
		},
		"7" : {
		  "cn" : "BBT",
		  "add": "170 University Ave W, Waterloo, ON N2L 3E9",
		},
		"8" : {
		  "cn" : "Lanzhou Rame",
		  "add": "203 Lester St #7, Waterloo, ON N2L 0B5",
		},
		"9" : {
		  "cn" : "Mr.Sushi",
		  "add": "140 University Ave W, Waterloo, ON N2L 6J3",
		},
		"10" : {
		  "cn" : "Kenzo",
		  "add": "140 University Ave W, Waterloo, ON N2L 6J3",
		},
		"11" : {
		  "cn" : "SLC",
		  "add": "200 University Ave W, Waterloo, ON N2L 3G1",
		},
		"11" : {
		  "cn" : "Grace and Healthy Dumplings",
		  "add": "150 University Ave W, Waterloo, ON N2L 6J3",
		}
		};
		function lucky_draw() {
		var count = 0;
		var interval_1 = setInterval(function () {
		  var num;
		  while(restaurant[num] == undefined){
			num = Math.floor(Math.random() * 11 + 1);
		  };
		  $("#name").html(restaurant[num]['cn']);
		  $("#address").html(restaurant[num]['add']);
		  if (count >= 40) {
			clearInterval(interval_1);
			$("#content").hide(50).delay(200).show(300);
			$("#thank").delay(900).show(100);
		  }
		  count++;
		}, 100);
		var elem = document.getElementById("myAnimation");   
		  var pos = 0;
		  var id = setInterval(frame, 10);
		  function frame() {
				if (pos == 400) {
				  clearInterval(id);
				} 
				else {
				  pos++; 
				  elem.style.left = pos + 'px'; 
				}
			}	
		}