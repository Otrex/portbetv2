<template>
  <router-view />
  <footer>
    &copy; Apex Foundations
  </footer>
</template>

<script>

export default {
  name: 'App',
};

</script>

<style>


body {
	background-color: var(--bg-color) !important;
}
h1 {
	font-family: 'Oswald', sans-serif !important;
	font-weight: 700;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.m-info ~ span.m-ref {
	position: fixed;
	top: 60px;
	left:120px;
	display: none;
}
.m-info:hover ~ span.m-ref {
	display: inline-block;
	z-index: 910;
}

@media screen and (max-width: 732px) {
	.m-info ~ span.m-ref {
	position: absolute;
	top: 0%;
	left:100%;
	display: none;
}
.m-info:hover ~ span.m-ref {
	display: inline-block;
	z-index: 910;
}
}

.m-ref {
	background: rgba(150,150,150,1);
	color: white;
	padding: 10px;
	border-radius: 0px 0px 5px 0px;
}

.mrow {
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
}
.vcenter {
	display: inline-flex;
	align-items: center;
}
.mrow.right {
	justify-content: flex-end;
}
.mrow.space-btwn {
	justify-content: space-between;
}
</style>