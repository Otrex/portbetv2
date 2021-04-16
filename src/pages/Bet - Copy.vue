<template>
  <div class="bet">

    <!--Nav-->
    <div style="background:black;" class="clearfix">
      <div class="view">

        <div class="topnav">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="today">
                  <div class="time">{{ctime}}</div>
                  <div class="date">{{cdate}}</div>
                </div>
                <div class="fixture-date-picker" >
                  <div style="position:relative;">
                    <input type="date" class="m-info" name="date"><span class="m-ref"> Enter the Required date </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-7">
            <div class="card">
              <table border="1" id="calculations">
                <th> Sn </th>
                <th> DATE </th><th colspan="2"> MATCH </th><th> NGOALS </th>
                <th colspan="2"> GF_AVG </th><th> GA_AVG </th><th> POW </th>
                <th> PTS </th>

                <tr v-for="(calc, key) in calculations" :key="key">
                  <td>calc.sn</td><td>calc.date</td><td>calc.match[0]</td><td>calc.match[1]</td><td>calc.ngoals</td>
                  <td>calc.gf_avg[0]</td><td>calc.gf_avg[1]</td><td>calc.ga_avg[0]</td><td>calc.ga_avg[1]</td>
                  <td>calc.pow[0]</td><td>calc.pow[1]</td><td>calc.pts[0]</td><td>calc.pts[1]</td>
                </tr>

              </table>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <table border="1" id="league-table">
                 <th> NAME </th><th> RANK </th>
                 <th> PTS </th> <th> GF </th><th> GA </th><th> GD </th>
                 <tr v-for="(team, key) in table" :key="key">
                  <td>team.name</td><td>team.rank</td><td>team.pts</td><td>team.gf</td><td>team.ga</td><td>team.gd</td> 
                 </tr>
             </table>
           </div>
          </div>
        </div>
      </div>
      <nav id="subnav">
        <ul >
          <li v-for="(league, key) in leagues" :key="key">
            <div style="position:relative;">
              <a class="m-info" @click="get_leagues(league.league_id)"><img :src="league.logo"/> </a> 
              <span class="m-ref">{{league.name}}</span>
            </div>
          </li>
        </ul>
      </nav>
      <nav>
      <ul >
        <li v-for="(country, key) in countries" :key="key">
          <div style="position:relative;">
            <a class="m-info" @click="get_leagues(country)"><img :src="country_img_src(country)"/> </a> 
            <span class="m-ref">{{country}}</span>
          </div>
        </li>
      </ul>
    </nav>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
// import {defineComponent} from 'vue'
const { q, url } = require('../tools');
var moment = require('moment');

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
      c_time : null,
      leagues : [],
      fixt : [],
      show_sub_nav : true,
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
    country_img_src : (country) => {
      return `/flags/svg/${country}.svg`
    },
    get_leagues : function(country){
      this.leagues.splice(0);
      q.get(url.leagues_from_country(country), (data) => {
          data.api.leagues.forEach( ( league ) => {
            this.leagues.push({name : league.name, id : league.league_id, logo: league.logo})
          })
        }, (err) => {
          alert(err)
        }
      );
    },

    get_fixtures : function (lid, date) {
      q.get(
        url.fixtures_from_league_id_and_date(lid, date),
        (data)=>{
          var data = data.api.fixtures
          data.forEach( (fixtures) => {
            this.fixt.push({
              away : fixtures.awayTeam, 
              home: fixtures.homeTeam, 
              date : fixtures.event_date,
              timestamp: fixtures.event_timestamp,
              id : fixtures.fixture_id,
              league : fixtures.league
            })
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
  .flex-h {
    display: flex;
  }
  nav {
    width: 50px;
    background: black;
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    min-height: 100vh;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  nav ul li a {
    display: block;
    padding: 10px;
  }

  nav ul li a img {
    width: 30px;
    transition: all .3s;
    opacity: .8; 
  }

  nav ul li a img:hover {
    transform: scale(1.1);
    opacity: 1;
  }


  #subnav {
    position: relative;
    width: 50px;
    left: 50px;
    background: rgba(40,40,40,.8);
    overflow-x: none;
  }

  @media screen and (max-width: 740px) {
    nav {

      top:auto;
      bottom:30px;
      width:100%;
      height: 50px;
      min-height: 50px;
      overflow-y: hidden;
    }
    nav ul {
      overflow: scroll;
    }
    nav ul li {
      display: inline-block;
    }
    #subnav {
      width: 100%;
      position: fixed;
      bottom: 50px;
      left:0px;
    }
  }

  .view {
    position: fixed;
    width: calc(100% - 100px);
    top:0;
    left:100px;
    min-height: 100vh;
    background: white;
    padding: 10px;
  }

  input ~ span.m-ref {
    border-radius: 5px;
    width: 300px;
  }

  .fixture-date-picker {
    padding: 10px;
  }
  .fixture-date-picker input {
    border: 1px solid rgba(60, 60, 60, .3);
    padding: 5px 20px;
    border-radius: 10px;
  }
  .today {
    padding: 10px;
    font-weight: bold;
  }
  .card {
    padding: 10px;
  }
  .card table {
    width: 100%;
    border: none;
  }


</style>
