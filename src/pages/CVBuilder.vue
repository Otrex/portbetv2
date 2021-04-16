<template>
	<div class="container-fluid x-h">
		<div class="cv-nav row">
			<div class="col-md-6">
				<label>Select Template:</label>
				<select v-model="template">
					<option value="template1"> Template 1</option>
					<option value="template2"> Template 2</option>
				</select>
			</div>
			<div class="col-md-6">
				<div style="text-align:right;">
					<ul>
						<li><a href="#/"> Home </a></li>
						<li><a href="#/bet"> Bet Predictor </a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4">
				<form class="forms-sample">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="exampleInputFirstName1">First Name</label>
                          <input type="text" class="form-control r1" id="exampleInputFirstName1" placeholder="FirstName">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="exampleInputFirstName1">LastName</label>
                          <input type="text" class="form-control r1" id="exampleInputLastName1" placeholder="LastName">
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control r1" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputConfirmPassword1">Confirm Password</label>
                      <input type="password" class="form-control r1" id="exampleInputConfirmPassword1" placeholder="Password">
                    </div>
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input">
                        Remember me
                      <i class="input-helper"></i></label>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2 r1">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
			</div>
			<div class="col-md-8">
				<iframe :src="'/#/cv/'+template"></iframe>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "CVBuilder",
		data() {
			return {
				template : "template1"
			}
		}
	};
</script>
<style type="text/css">
	.x-h {
		overflow: hidden;
		overflow-y: auto;
	}
	iframe {
		width: 100%;
		border: 2px solid rgba(255,255,10,.25);
		min-height: 100vh;
	}
	.cv-nav {
		padding: 10px 0px;
		font-weight: bold;
	}
	.cv-nav select {
		width: 200px;
		height: 30px;
		border: 1px solid rgba(50,50,50,.2);
		margin-left: 20px;
	}
	.cv-nav ul {
		list-style-type: none;
		margin: 0px;
		padding: 0px;
	}

	.cv-nav ul li {
		display: inline-block;
	}

	.cv-nav ul li a {
		display: block;
		padding: 5px 15px;
	}
</style>