<template>
  <div class="bet">
    <div class="floater">
      <div class="float">
        <button @click="toggletheme" > Change theme </button>
      </div>
    </div>
    <div id="sidebar2">
      <div class="wrapperh">
        <ul >
          <li v-for="(league, key) in leagues" :key="key">
            <div style="position:relative;">
              <a class="m-info" @click="get_league_table(league.id)"><img :src="league.logo"/> </a> 
              <span class="m-ref">{{league.name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="sidebar1">
      <div class="wrapperh">
        <ul >
          <li v-for="(country, key) in countries" :key="key">
            <div style="position:relative;">
              <a class="m-info" @click="get_leagues(country)"><img :src="country_img_src(country)"/> </a> 
              <span class="m-ref">{{country}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div id="main">

      <div id="topbar">
        <div class="wrapperp">
          <div class="mrow space-btwn vcenter">
            <div class="vcenter"><b>Today:</b> {{cdate}}</div>
            <div class="fixture-date-picker" >
              <div style="position:relative;">
                <input type="date" @keyup.enter="get_all_fixtures" v-model="end_date" class="date-picker m-info" name="date"><span class="m-ref bottom"> Enter the Required date </span>
              </div>
            </div>
            <div class="vcenter"><b>Time:</b> {{ctime}}</div>
          </div>
        </div>
      </div>

      <div id="panels">
        <div class="loader-wrapper" v-if="loading">
          <div class="loader"> Loading ...</div>
        </div>
        <div class="centralized-entry" v-if="!current_league_id"> 
          <div>Please select a country and league of your choice, Then Select a date</div> </div>
        <div class="row no-gutters">
          <div class="col-md-7">
            <div id="panel1">
              <div class="card">
                <table border="1" id="calculations">
                  <th> Sn </th>
                  <th> DATE </th><th colspan="2"> MATCH </th><th> NGOALS </th>
                  <th colspan="2"> GF_AVG </th><th colspan="2"> GA_AVG </th><th colspan="2"> POW </th>
                  <th colspan="2"> PTS </th>

                  <tr v-for="(calc, key) in calculations" :key="key">
                    <td>{{calc.sn}}</td><td>{{calc.timestamp}}</td><td>{{calc.teams_name[0]}}</td><td>{{calc.teams_name[1]}}</td><td>{{to2dp(calc.ngoals)}}</td>
                    <td>{{to2dp(calc.gf_avg[0]) }}</td><td>{{to2dp(calc.gf_avg[1])}}</td><td>{{to2dp(calc.ga_avg[0])}}</td><td>{{to2dp(calc.ga_avg[1])}}</td>
                    <td>{{to2dp(calc.pow[0])}}</td><td>{{to2dp(calc.pow[1])}}</td><td>{{calc.pts[0]}}</td><td>{{calc.pts[1]}}</td>
                  </tr>

                </table>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div id="panel2">
              <div class="card">
                <table border="1" id="league-table">
                   <th> NAME </th><th> RANK </th>
                   <th> PTS </th> <th> GF </th><th> GA </th><th> GD </th><th>FORM</th>
                   <tr v-for="(xteam, key) in leagues_table" :key="key">
                    <td>{{xteam.name}}</td><td>{{xteam.rank}}</td><td>{{xteam.points}}</td><td>{{xteam.data.goalsFor}}</td><td>{{xteam.data.goalsAgainst}}</td><td>{{xteam.data.GD}}</td> <td>{{xteam.form}}</td>
                   </tr>
               </table>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import {defineComponent} from 'vue'
const { q, url } = require('../tools');
var moment = require('moment');
var r = document.querySelector(':root');

export default {
  name: 'Bet',
  props: {
    msg: String
  },
  computed : {
    cdate : function(){
      return moment().format("MM-DD-YYYY");
    },
    ctime : function() {
      return this.c_time
    }
  },
  created() {
    let self = this
    setInterval(function(){
      self.c_time = moment().format("hh:mm:ss");
    }, 1000)
  },
  data() {
    return {
      current_league_id : null,
      end_date : moment().add(7,'d').format('YYYY-MM-DD'),
      start_date : moment().format('YYYY-MM-DD'),
      c_time : null,
      leagues : [],
      leagues_table : [],
      fixt : [],
      loading : false,
      show_sub_bar : true,
      countries : [ 
        "england", "france", "spain", 
        "netherlands", "germany", "italy",
        "scotland", "romania", "russia",
        "belgium", "sweden", "nigeria"
      ],
      calculations : []
    }
  },
  methods : {
    to2dp : function(value) {
      return(Math.round(value * 100) / 100);
    },
    run_calculations : function(fix) {
      // console.log(fix)
      let data = {}
      let teamAWAY = this.leagues_table.find((l)=>l.id == fix.away.team_id)
      let teamHOME = this.leagues_table.find((l)=>l.id == fix.home.team_id)
      // if (!teamAWAY || !teamAWAY) {alert("Errror"); return}
      if (!teamHOME && !teamAWAY) return
      // console.log([teamAWAY, teamHOME])

      data.sn = 0
      data.gf_avg = [teamHOME.data.goalsFor/teamHOME.data.matchsPlayed, teamAWAY.data.goalsFor/teamAWAY.data.matchsPlayed]
      data.ga_avg = [teamHOME.data.goalsAgainst/teamHOME.data.matchsPlayed, teamAWAY.data.goalsAgainst/teamAWAY.data.matchsPlayed]
      data.teams_logo = [teamHOME.logo, teamAWAY.logo]
      data.teams_name = [teamHOME.name, teamAWAY.name]
      data.ngoals = data.gf_avg.reduce((total, value) => total + value)/2
      data.pow = [data.gf_avg[0]/data.ga_avg[0], data.gf_avg[1]/data.ga_avg[1]]
      data.pts = [teamHOME.points, teamAWAY.points]
      data.timestamp = moment(fix.timestamp).format('DD, HH:mm')

      this.calculations.push(data)
      console.log(this.calculations)
    },
    get_all_fixtures : function() {
      this.fixt.splice(0)
      this.calculations.splice(0)
      if (this.leagues_table === []) {alert("Please select a League"); return}
      if (moment(this.end_date) < moment()) {alert("Please use a date in the future"); return}
      console.log([this.start_date, this.end_date])
      var dates = this.getDates(this.start_date, this.end_date)
      console.log(dates) 
      dates.forEach(date => {
        setTimeout(()=>{
          this.get_fixtures(this.current_league_id, date)
        }, 300)
      })
    },
    getDates : function (startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    },
    toggletheme : () => {
      let rs = getComputedStyle(r);
      if (rs.getPropertyValue('--bg-color-2') === 'white') {
        r.style.setProperty('--bg-color-2', 'black');
        r.style.setProperty('--bg-color', 'rgba(0,0,0, .5)');
        r.style.setProperty('--color', 'white');
      } else {
        r.style.setProperty('--bg-color-2', 'white');
        r.style.setProperty('--bg-color', 'rgba(240, 245, 255, 1)');
        r.style.setProperty('--color', 'black');
      }
    },
    country_img_src : (country) => {
      return `/flags/svg/${country}.svg`
    },
    get_leagues : function(country){
      this.leagues.splice(0);
      q.loadingHook = (loading) => {
        this.loading = loading
      }
      q.get(url.leagues_from_country(country), (data) => {
          data.api.leagues.forEach( ( league ) => {
            this.leagues.push({name : league.name, id : league.league_id, logo: league.logo})
          })
        }, (err) => {
          alert(err)
        }
      );
    },
    get_league_table : function(lid) {
      this.current_league_id = lid;
      this.leagues_table.splice(0);
      q.get(url.league_standing(lid), (data)=>{
          data.api.standings[0].forEach( (team) => {
            this.leagues_table.push({
              name : team.teamName,
              rank : team.rank,
              id : team.team_id,
              points : team.points,
              logo : team.logo,
              form : team.forme,
              data : {
                GD : team.goalsDiff,
                ...team.all
              }
            })
          })
      console.log([this.leagues_table])
        },
        (err) => {

        }
      )
    },

    get_fixtures : function (lid, date) {
      let x = {}
      q.get(url.fixtures_from_league_id_and_date(lid, date), (data)=>{
          data.api.fixtures.forEach( (fixtures) => {
            x = {
              away : fixtures.awayTeam, 
              home: fixtures.homeTeam, 
              date : fixtures.event_date,
              timestamp: fixtures.event_timestamp,
              id : fixtures.fixture_id,
              league : fixtures.league
            }
            this.fixt.push(x)
            this.run_calculations(x)
          })
        },
        (err) => {

        }
      )
    }
  }
};

</script>
<style>
.bet * {
  color : var(--color);
}
.loader-wrapper {
  position: fixed;
  z-index: 30000;
  background: white;
}
.floater {
  position: fixed;
  z-index: 20000;
  top:-30px;
  right: 170px;
  background: var(--bg-color-2);
  display: inline-block;
  height: 40px;
  transition: all .3s;
}

.centralized-entry {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  top:18px;
  padding-left: 10%;
  padding-right: 10%;
  left: 0px;
  background: var(--bg-color-2);
}
.centralized-entry div {
  font-size: 50px;
  font-weight: bolder;
}

.floater:hover {
  top:0px;
}

.float button {
  display: inline-block;
  height: 30px;
  padding-top: 8px;
  border-radius: 0px 0px 5px 5px;
  color: white;
  border: none;
  background: green;
}
#panels {
  position: fixed;
  top:60px;
  width: 100%;
  height: calc(100vh - 60px);
  width: calc(100% - 120px);
  padding: 10px 15px;
}
.bottom {
  top: 101% !important;
  left: 0px !important;
  border-radius: 8px !important;
}

input.date-picker {
  border: 1px solid rgba(10,10,10,.1);
  padding: 2.5px 20px;
  background-color: var(--bg-color);
}

.vcenter b {
  padding-right: 6px;
}

.bottom::before {
  content: "";
  display: inline-block;
  height: 10px;
  width: 15px;
  background-color: black;
  position: absolute;
  top:-10px;
  left: calc(50% - 8px);
  clip-path: polygon(50% 50%, 100% 100%, 0 100%);

}
.wrapperp {
  width: 100%;
}
.wrapperh {

}
.wrapperh ul {
  margin: 0;
  padding: 0;
}

.wrapperh ul li {
  display: inline-block;
}
.wrapperh ul li a {
  display: block;
  text-align: center;
  padding: 14px;
  width: 60px;
  height: 60px;
}
.wrapperh ul li a:hover {
  background-color: rgba(50,50,50,.5);
  border-radius: 0px 5px 5px 0px;
  width: calc(100% - 5px);
}
.wrapperh ul li a img {
  width: 34px;
  height: 34px;
}
.bet * {
  /*border: 1px solid rgba(255,5,5,.3);*/
}
#sidebar1, #sidebar2 {
  position: fixed;
  left:0px;
  width: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  /*box-shadow: 2px 0px 10px rgba(10,10,10,.1);*/
  height: 100vh;
  z-index: 10;
  background-color: var(--bg-color-2);
}

#sidebar1 {
  box-shadow: 2px 0px 30px rgba(10,10,10,.1);
}
#sidebar2 {
  left:60px;
}
#main {
  position: fixed;
  top:0px;
  left:120px;
  width: calc(100% - 120px);
  height: 100vh;
  z-index: 0;
}
#topbar{
  position: fixed;
  box-shadow: 2px 0px 10px rgba(10,10,10,.1);
  top: 0px;
  width: calc(100% - 120px);
  min-height: 60px;
  z-index: 10;
  padding-top: 14px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: var(--bg-color-2);
}

#panel1, #panel2 {
  overflow: auto;
}
#panel1 {
  overflow-x: auto;
  margin-right: 15px;
}
#panel1 table {
  width: 700px !important;
}

.card{
  background-color: var(--bg-color-2) !important;
  overflow: auto;
}
#panels table {
  font-size: 14px;
  border: none;
  color: rgba(40,40,40,1);
  background: transparent !important;
}
#panels table th {
  text-align: center;
}


@media screen and (min-width: 900px) {
  #panel1 table {
    width: 100% !important;
  }
}


@media only screen and (max-width: 732px) {
  #panel1 {
    margin-right: 0px;
  }
  #panels {
    top:50px;
    width: 100%;
  }
  #topbar{
  position: fixed;
  box-shadow: 2px 0px 10px rgba(10,10,10,.1);
  top: 0px;
  width: calc(100% - 120px);
  min-height: 48px;
  z-index: 10;
  padding-top: 9px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
}
  #sidebar1, #sidebar2 {
    bottom: 0px;
    height: 50px;
    padding-bottom: 5px;
    width: 100% !important;
  }
  #topbar {
    width: 100%;
  }
  .wrapperh ul {
    display: inline-block;
  }
  .wrapperh ul li a {
  display: block;
  text-align: center;
  padding: 10px;
  width: 45px;
  height: 45px;
}
.wrapperh ul li a img {
  width: 20px;
  height: 20px;
}
  #sidebar1 {
    z-index: 30;
  }
  #sidebar2 {
    left:0px;
    bottom: 50px;
  }
  #main {
    width: 100%;
    left:0px;
    z-index: 0px;
  }
  .wrapperh {
    width: auto;
    height: 45px;
    overflow-y: hidden;
    text-align: center;
  overflow-x: auto;
  white-space: nowrap;
  }
}

</style>
