/* eslint-disable */
const key = "804811b02dmshbadd07e1acc10c5p173522jsnafc61a432fc7"
const host = "api-football-v1.p.rapidapi.com"

function Query (options){
  let opts = { headers : {}, loading: false}
  this.options = {...opts, ...options}
  
  this.loadingHook = (loading) =>loading
  this.get = (url, successcb, failurecb) => {
  	this.options.loading = true 
    this.options.headers = {
      ...this.options.headers,...options
    }
    this.loadingHook(true)
    
	fetch(url, {
	  method: "GET",
	  headers: {
	  	...this.options.headers
	  }
	})
	  
	  .then(response => response.json()) 
	  .then(json => {
	  	this.options.loading = false
	  	this.loadingHook(false)
	    if (successcb) successcb(json)
	    return json
	  })
	  .catch(err => {
	  	this.options.loading = false
	  	this.loadingHook(false)
	    if (failurecb) failurecb(err)
	    return err
	  })
	}
}

const url = {// get league_id, fixture_id, team_id
	leagues_from_country : function(country) {
		return `https://api-football-v1.p.rapidapi.com/v2/leagues/current/${country}`
	},
	teams_from_league_id : function(league_id) {
		return `https://api-football-v1.p.rapidapi.com/v2/teams/league/${league_id}`
	},
	fixtures_from_league_id_and_date : function(lid, date/* yyyy-mm-dd */){
		return `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${lid}/${date}`
	},
	league_standing : function(league_id) {
		return `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${league_id}`
	},
	odds_from_fixture_id : function(fixture_id) {
		return `https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${fixture_id}`
	},
	prediction_from_fixture_id : function(fixture_id) {
		return `https://api-football-v1.p.rapidapi.com/v2/predictions/${fixture_id}`
	}
}



const q = new Query ({
	headers : {
		"x-rapidapi-key": key,
		"x-rapidapi-host": host,
		"useQueryString": true
	}
})

module.exports = {
	q, url
}