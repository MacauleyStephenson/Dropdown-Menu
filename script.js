let menuToggle = docuemnt.querySlector('.menuToggle');
let navigation = docuemnt.querySlector('.navigation');
menuToggle.onClick = function () {
	navigation.classList.toggle('acive')
}