<template>
  <div class="index">
    <section class="header">
      <div class="nav">
        <div class="">
          <ul>
            <li><a class="active">Home</a></li>
            <li><a class="active">About</a></li>
            <li><a class="active">Contact</a></li>
          </ul>
        </div>
      </div>
      <header>
        <div class="title">
          <h1> Create Your CV and Get Predictions for your Favourite FootBall Teams </h1>
          <h4> Close to 90% accuracy on our prediction of your football matches based on tested algorithms. Also we offer many themes to build your CV with.</h4> 
          <div class="action">
            <a href="#/Bet" class="btn"> Bet Prediction </a><a href="#/cv-builder" class="btn"> Cv Builder </a>
          </div>
        </div>
      </header>
    </section>
   
   <section id="about" class="container">
    <div class="nsection">
       <div class="row">
         <div class="col-md-9">
          
          <div class="center2 col-md-8">
            <h1> About Me </h1>
            My name is <b>Obisike Treasure</b>, the creator of this platform.<br>
            I have worked on several things including this project which was inspired by a very good friend of mine that is into the betting industry.<br>I also added a CV builder because i know most people looking for jobs need it.<br><br>
            This App is a combination of both. The predictions are done by viewing several others prediction as well as mine.
          </div>
        </div>
         <div class="col-md-3">
           <div class="img-cont">
             <img src="/img/image-logo.jpg" />
           </div>
         </div>
       </div>
     </div>
   </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section.header {
  background-image: url('../assets/bg.jpg');
  background-repeat: no-repeat;
}
header {
  /*background-image : linear-gradient(to bottom right, rgba(20,20,250, .9),rgb(20,100,100), rgb(20,255, 20));*/
  min-height:90vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

header .title {
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
}

header .title h1 {
  font-size: 56px;
}

header .title h4 {
  background: rgba(50,50,50,.5);
  padding: 10px;
  margin-top: 10px;
  font-weight: 300;
  border-radius: 8px;
}

.nav ul {
  display: inline-block;
  background-color: white;
}

.nav ul a {
  display: block;
}
.nav ul a:hover {
  background: rgba(255,255,0,.5);
  color: green;
  text-decoration: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

header .action a {
  background: black;
  box-shadow: 0px 5px 10px rgba(50,50,50, .3);
  padding: 15px 40px;
  width: 150px;
}

.center2 {
  height: 100%;
  margin-top: 50px;
}
header .action a:first-child {
  border-radius: 40px 0px 0px 40px;
  border-right: 2px solid rgba(255,255, 0, .5);
}

header .action a:last-child {
  border-radius: 0px 40px 40px 0px;
}

.nsection {
  padding: 70px 0px;
}

.nsection h1 {
  border-bottom: 5px solid yellow;
}
.img-cont {
  text-align: right;
}
.img-cont img {
  width: 100%;
  height: auto;
}

</style>
