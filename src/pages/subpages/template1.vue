<template>
	<div class="body">
		<!-- Header Section -->
		<header>
			<div class="row no-gutters">
				<div class="col-md-7">
					<div class="basket flex">
						<div class="image-logo">
							<img src="/img/image-logo.jpg">
						</div>
						<div class="name-title">
							<h1><b>Obisike Treasure</b><br>Chimeziri</h1>
						</div>
					</div>
				</div>
				<div class="col-md-5 text-right">
					<div class="basket basic-info">
						<table>
							<tr><td class="v-middle">{{basicInfo.address}}</td><td><ico :icon="ico.home"></ico></td></tr>
							<tr><td class="v-middle">{{basicInfo.email}}</td><td><ico :icon="ico.email"></ico></td></tr>
							<tr><td class="v-middle">{{basicInfo.phone}}</td><td><ico :icon="ico.phone"></ico></td></tr>
						</table>
					</div>
				</div>
			</div>
		</header>
		<!-- End of Header Section -->

		<!--Body-->
		<div class="row info">
			<div class="col-md-4">
				<div class="summary">
					<div class="skills">
						<div class="professional">
							<h4>professional skills</h4>
							<table>
								<tr>
									<td>IT skills</td>
									<td>
										<div class="progress-bar"><div class="bar" style="width:50%;"></div></div>
									</td>
								</tr>
								<tr>
									<td>Designing skills</td>
									<td>
										<div class="progress-bar"><div class="bar" style="width:60%;"></div></div>
									</td>
								</tr>
								<tr>
									<td>Comm. skills</td>
									<td>
										<div class="progress-bar"><div class="bar" style="width:80%;"></div></div>
									</td>
								</tr>
							</table>
						</div>
					</div>

					<div class="skills">
						<div class="personal">
							<h4>personal skills</h4>
							<table>
								<tr>
									<td>IT skills</td>
									<td>
										<div class="progress-bar"><div class="bar" style="width:50%;"></div></div>
									</td>
								</tr>
								<tr>
									<td>Designing skills</td>
									<td>
										<div class="progress-bar"><div class="bar" style="width:60%;"></div></div>
									</td>
								</tr>
								<tr>
									<td>Comm. skills</td>
									<td>
										<div class="progress-bar"><div class="bar" style="width:80%;"></div></div>
									</td>
								</tr>
							</table>
						</div>
					</div>

					<div class="skills">
						<div class="acheivement">
							<h4>Achievements</h4>
							<ul>
								<li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</li>
								<li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</li>
								<li>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</li>
							</ul>
						</div>
					</div>


					<div class="skills">
						<div class="interests">
							<h4>interest</h4>
							<div class="row">
								<div class="col-md-6">
									<div class="interest">
										<h5>Coding</h5>
										<i><ico :icon="ico.coding"></ico></i>
									</div>
								</div>

								<div class="col-md-6">
									<div class="interest">
										<h5>Singing</h5>
										<i><ico :icon="ico.music"></ico></i>
									</div>
								</div>
								<div class="w-100 p-3"></div>

								<div class="col-md-6">
									<div class="interest">
										<h5>Drawing</h5>
										<i><ico :icon="ico.drawing"></ico></i>
									</div>
								</div>

								<div class="col-md-6">
									<div class="interest">
										<h5>Reading (Comics)</h5>
										<i><ico :icon="ico.reading"></ico></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-8">
				<div class="details">
					<section id="summary">
						<h4> Summary </h4>
						<p>Donec sollicitudin molestie malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
					</section>

					<section id="career">
						<h4> Career </h4>

						<div class="career">
							<table >
								<tr><td> Company Name </td><td> Job Title </td><td> Date </td></tr>
								<tr><td colspan="3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</td></tr>
							</table>
						</div>

						<div class="career">
							<table >
								<tr><td> Company Name </td><td> Job Title </td><td> Date </td></tr>
								<tr><td colspan="3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</td></tr>
							</table>
						</div>

						<div class="career">
							<table >
								<tr><td> Company Name </td><td> Job Title </td><td> Date </td></tr>
								<tr><td colspan="3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</td></tr>
							</table>
						</div>

						<div class="career">
							<table >
								<tr><td> Company Name </td><td> Job Title </td><td> Date </td></tr>
								<tr><td colspan="3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</td></tr>
							</table>
						</div>
					</section>

					<section id="education">
						<h4> education </h4>

						<div class="education">
							<table >
								<tr><td> Year </td><td> Institutes name </td><td> Certification </td></tr>
								<tr><td> Year </td><td> Institutes name </td><td> Certification </td></tr>
								<tr><td> 2014 - 2019 </td><td> University of Portharcourt </td><td> BSC. Math & Comp Sci. </td></tr>
							</table>
						</div>
					</section>

					<section id="reference">
						<h4> references</h4>
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</p>
					</section>
				</div>
			</div>
		</div>
		<!--End of Body-->
	</div>
</template>
<script type="text/javascript">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faHome, faLaptopCode, faEnvelope, faMusic, faPencilRuler, faBookReader } from '@fortawesome/free-solid-svg-icons'

export default {
	name : "template1",
	data (){
		return {
			basicInfo : {
				address : "9 Abiodun Adeleye Street",
				phone : "09025615232",
				email : "obisiket@gmail.com"
			},
			ico : {
				phone : faPhone,
				home : faHome,
				coding : faLaptopCode,
				email : faEnvelope,
				music : faMusic,
				drawing : faPencilRuler,
				reading : faBookReader
			}
		}
	},
	components : {
		'ico' : FontAwesomeIcon
	}
};
	
</script>
<style type="text/css" scoped>
*{font-family: 'Lato', sans-serif;}

.body {
	padding: 10% 5%;
}

h1 {
	font-size: 50px;
}

header {
	margin-bottom: 100px;
	font-size: 20px;
}
.DIB {
	display: inline-block;
}

.flex {
	display: flex;
	align-items: center;
}
.text-right {
	text-align: right;
}


.v-middle {
	vertical-align: middle;
	font-size: 20px;
	padding-bottom: 5px;
	padding-right: 10px;
}

/* Header */
.image-logo {
	width: 120px;
	height: 120px;
	background: blue;
	text-align: center;
	overflow: hidden;
}
.image-logo img {
	transform: translateY(-20%);
	width: 120px;
	height: auto;
}
.name-title {
	padding-left: 10px;
}
.basic-info {
	display: inline-block;
}

/* Body */
.details  {
	color: white;
}
.info h4 {
	text-transform: uppercase;
	font-weight: bold;
}

.skills, .info section {
	margin-bottom: var(--gen-seperation);
}
.skills table {
	width: 100%;
}
.skills table tr {
	padding-bottom: 10px;
}
.skills table tr td:first-child {
	width: 40%;
}
.skills .progress-bar {
	height: 20px;
	width: 100%;
	background: grey;
}
.skills .progress-bar .bar {
	background: black;
	height: 30px;
}
.skills ul {
	padding: 0;
	margin: 0;
}
.skills ul li {
	list-style-type: none;
	margin-bottom: 20px;
	text-align: justify;
}
.skills .interests {
	padding-right: 30px;
}
.skills .interest {
	width: 100%;
	min-height:150px;
	text-align: center;
}

.interest h5 {
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	padding-top: 20px;
}
.interest i {
	display: inline-block;
	font-size: 50px;
	border-radius: 50%;
	width: 100px;
	height: 100px;
	border: 1px dashed black;
	padding: 10px;
}
.details {
	background: grey;
	padding: var(--gen-padding);
}
.details table {
	width: 100%;
}

.career {
	margin-bottom: 30px;
}
</style>