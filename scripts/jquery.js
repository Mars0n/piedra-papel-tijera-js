$(document).ready(function() {
	
	//declaracion variables globales.
	var userSelected =null;
	var cpuSelected =null;
	

	//funciones para eventos.
	function Comparar()
	{
		$("h2").remove();
		if (userSelected == cpuSelected) 
		{
			$('.result-box').append("<h2>Empate</h2>");
		}
		else if (userSelected == "piedra" && cpuSelected == "tijera")
		{
			Ganar();
		}
		else if (userSelected == "piedra" && cpuSelected == "papel") 
		{
			Perder()
		}
		else if (userSelected == "papel" && cpuSelected == "piedra")
		{
			Ganar();
		}
		else if (userSelected == "papel" && cpuSelected == "tijera")
		{
			Perder();
		}
		else if (userSelected == "tijera" && cpuSelected == "papel")
		{
			Ganar();
		}
		else 
		{
			Perder();
		};
	};
	function Ganar(){$('.result-box').append("<h2>Ganaste!</h2>");};
	function Perder(){$('.result-box').append("<h2>Perdiste!</h2>");};
	//funcion reinicio juego
	function otroJuego()
	{
		userSelected =null,cpuSelected =null;
	};

	//efectos seleccion usuario - cpu
	$('.user-select').mouseleave(function()
	{
		$(this).fadeTo(0,1),
		$(this).css('box-shadow','0px 0px 0px');
	});
	$('.user-select').mouseenter(function()
	{
		$(this).fadeTo(0,0.5),
		$(this).css('box-shadow','0px 0px 10px black');
	});

	//user selection
	$('.user-select').click(function()
	{
		userSelected = $(this).text().toLowerCase();
		$('.user-select').css('border','0');
		$(this).css('border','2px solid black');
	});

	//cpu selection
	$('.btn-play').click(function()
	{
		$('.console-select').css('background-color','crimson');
		if(userSelected == null)
		{
						$('.user-select').css('border','0');
			alert("Primero debes elegir!");

			otroJuego();
		}
		else
		{
			var	auxMath = Math.random();
			if (auxMath < 0.33) 
			{
				cpuSelected = "piedra";
			}
			else if (auxMath>=0.34 && auxMath<0.66) 
			{
				cpuSelected = "papel";
			}
			else
			{
				cpuSelected = "tijera";
			}

			//comparo
			Comparar();

			if (cpuSelected == "piedra")
			{
				$(document.getElementById('piedra')).css('background-color','#16A085');
			}
			else if (cpuSelected == "papel")
			{
				$(document.getElementById('papel')).css('background-color','#16A085');
			}
			else
			{
				$(document.getElementById('tijera')).css('background-color','#16A085');
			};

			//otro juego
			otroJuego();



		}
	});

});