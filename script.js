$(document).ready(function(){

	$('.clickt').click(
		function(){
			let texte = $(this).attr('data-p');
			$('.containerslider,.containerslider2').find('p').html(texte);
		},
	);
	
	$('.table').find('label').children('img').click(
		function(){
			let texte = $(this).attr('data-p');
			$('.stylecondensed').html(texte);
		},
	);
		
	$('.affiche').click(
		function(){
			$('.typopap').css({"display":"none"})
			$('.typopapa').css({"display":"block","transition-duration":"500ms"})
		}
	)
	$('.effacer').click(
		function(){
			$('.typopap').css({"display":"block","transition":"all 2s ease-out"})
			$('.typopapa').css({"display":"none","transition":"all 2s ease-out"})
		}
	)

	let fontSizev = $('.stylecondensed').css('font-size');

	$('.Pixel').click(
		function(){
			$('.stylecondensed').css({"font-family":"PixelPapyrus","font-size": fontSizev,"text-align":"center"})
		}
	)
	$('.Smooth').click(
		function(){
			$('.stylecondensed').css({"font-family":"Smooth_Papyrus_Demo","font-size": fontSizev})
		}
	)
	$('.Condensed').click(
		function(){
			$('.stylecondensed').css({"font-family":"PAPYRUS","font-size": fontSizev})
		}
	)
	
//Selct typo table
	$('.Pixel').click(
		function(){
			$('.textarea').css({"font-family":"PixelPapyrus","font-size": fontSizev,"text-align":"center"})
		}
	)
	$('.Smooth').click(
		function(){
			$('.textarea').css({"font-family":"Smooth_Papyrus_Demo","font-size": fontSizev})
		}
	)
	$('.Condensed').click(
		function(){
			$('.textarea').css({"font-family":"PAPYRUS","font-size": fontSizev})
		}
	)


	
	let fontSize = $('.placeholder').css('font-size');

	// Dès qu'il y a un changement sur l'input
	$('.barretypo').on('change mousemove', function(){
	
		let value = $(this).val();
		console.log(value);
		let nouvelleTaille = parseInt(fontSize) * value;
		$('.placeholder').css({'font-size': nouvelleTaille})
		$('.tailletypo').html(nouvelleTaille);

	})
	

	//Select 
	let textArea = document.querySelector("textarea");
	let selection = document.querySelector("select");
	
	selection.addEventListener("change",function(){
			if (selection.value ==  "PAPYRUS"){
				$('textarea').css('font-family','PAPYRUS')
			}
			else if (selection.value ==  "PixelPapyrus"){
				$('textarea').css('font-family','PixelPapyrus')
			}
			else if (selection.value ==  "Smooth Papyrus Demo"){
				$('textarea').css('font-family','Smooth Papyrus Demo')
			}
			
		// else if (selection.value == "PixelPapyrus"){
		// 	textArea.style.fontFamily = "PixelPapyrus";
		// }
		
	})
	
	
	


	



});

// paralaxe

