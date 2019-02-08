//Carga Inicial
$(document).ready(
	$("#form-perfil").hide(),
	$("#formResumen").hide()

);

$("#modify-perfil").click(function(){
	$("#form-perfil").show("slow");
	$("#formResumen").hide()
});

$("#add-resume").click(function(){
	$("#form-perfil").hide(),
	$("#formResumen").show("slow");
});

$("#submit-button").click(function(){
	$("#formResumen").hide()
	$("#form-perfil").hide("slow");
});

//Realizando prueba
/*function getDataPerfil(){
	var nombrePerfil= $("#nombre-perfil").val();
	var funcionPerfil= $("#funcion-perfil").val();
	var nombreInterno= $("#nombre-interno").text();
	var funcionInterno=$("#funcion-interno").text();
	console.log(nombrePerfil,funcionPerfil,nombreInterno,funcionInterno);
	//En este punto haria el objeto de este perfil pero aun no se
	//si me conviene hacer un objeto para este caso
};*/

function modifyPerfil(){
	//obteniendo valores del form
	var nombrePerfil= $("#nombre-perfil").val();
	var funcionPerfil= $("#funcion-perfil").val();
	//asignandolos al nuevo
	var nombreInterno= $("#nombre-interno").text(nombrePerfil);
	var funcionInterno=$("#funcion-interno").text(funcionPerfil);
}
$("#submit-button").on("click", function() {
	modifyPerfil();
});
