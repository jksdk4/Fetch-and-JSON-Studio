// TODO: add code here
window.addEventListener("load", function(){
	let fetchURL = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
	fetchURL.then(function(response){
		response.json().then(function(json){
			const containerDiv = document.getElementById("container");
			for (let i = 0; i < json.length; i++){
				let color = "initial";
				if (json[i].active){
					color = "green";
				}
				containerDiv.innerHTML += `
					<div class="astronaut">
					   <div class="bio">
					      <h3>${json[i].firstName} ${json[i].lastName}</h3>
					      <ul>
					         <li>Hours in space: ${json[i].hoursInSpace}</li>
					         <li style=color:${color}>Active: ${json[i].active}</li>
					         <li>Skills: ${json[i].skills.join(", ")}</li>
					      </ul>
					   </div>
					   <img class="avatar" src="${json[i].picture}">
					</div>
				`;
			}
		});
	});
});