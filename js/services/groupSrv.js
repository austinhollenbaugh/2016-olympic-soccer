angular
	.module('bracketApp')
	.service('groupSrv', function() {

		 this.eRanking = [];
		 this.fRanking = [];
		 this.gRanking = [];
		this.createBracket = function() {
			var groupE = $("#groupE")[0].children;
			for (var i = 0; i < 3; i++) {
				this.eRanking.push(groupE[i].childNodes[0].data);
			}
			console.log(this.eRanking);

			var groupF = $("#groupF")[0].children;
			for (var i = 0; i < 3; i++) {
				this.fRanking.push(groupF[i].childNodes[0].data);
			}
			console.log(this.fRanking);

			var groupG = $("#groupG")[0].children;
			for (var i = 0; i < 3; i++) {
				this.gRanking.push(groupG[i].childNodes[0].data);
			}
			console.log(this.fRanking);
		}
		// this.updateScore = function(id){

		// 	for (var i = 0; i < this.teams.length; i++) {
		// 		if (!(this.teams[i].clicked)) {
		// 			if (this.teams[i].id === id) {
		// 			this.teams[i].score += 3;
		// 			this.teams[i].clicked = true;
		// 			console.log(this.teams[i].name + " " + this.teams[i].score);
		// 			}

		// 		} else if (this.teams[i].clicked) {
		// 			this.teams[i].score = 0;
		// 			this.teams[i].clicked = false;
		// 			console.log(this.teams[i].name + " " + this.teams[i].score);
		// 		}

		// 	}
			
		// }

		this.teams = [
				{
					name: "Sweden",
					group: 'E',
					groupid: 3,
					score: 0,
					id: 0,
					clicked: false
				},
				{
					name: "South Africa",
					group: 'E',
					groupid: 4,
					score: 0,
					id: 1,
					clicked: false
				},
				{
					name: "Canada",
					group: 'F',
					groupid: 1,
					score: 0,
					id: 2,
					clicked: false
				},
				{
					name: "Australia",
					group: 'F',
					groupid: 2,
					score: 0,
					id: 3,
					clicked: false
				},
				{
					name: "Brazil",
					group: 'E',
					groupid: 1,
					score: 0,
					id: 4,
					clicked: false
				},
				{
					name: "China",
					group: 'E',
					groupid: 2,
					score: 0,
					id: 5,
					clicked: false
				},
				{
					name: "Zimbabwe",
					group: 'F',
					groupid: 3,
					score: 0, 
					id: 6,
					clicked: false
				},
				{
					name: "Germany",
					group: 'F',
					groupid: 4,
					score: 0,
					id: 7,
					clicked: false
				},
				{
					name: "United States",
					group: 'G',
					groupid: 1,
					score: 0,
					id: 8,
					clicked: false
				},
				{
					name: "New Zealand",
					group: 'G',
					groupid: 2,
					score: 0,
					id: 9,
					clicked: false
				},
				{
					name: "France",
					group: 'G',
					groupid: 3,
					score: 0,
					id: 10,
					clicked: false

				},
				{
					name: "Colombia",
					group: 'G',
					groupid: 4,
					score: 0,
					id: 11,
					clicked: false
				}
		]

		

		


	})