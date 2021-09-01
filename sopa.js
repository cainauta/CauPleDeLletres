		var array_tabla=document.getElementsByTagName("td");
		var numero_derecha=[13, 27, 41, 55, 69, 83, 97, 111, 125, 139, 153, 167, 181, 195];
		var numero_izquierda=[0, 14, 28, 44, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182];
		
		var minusculas=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var mayusculas=[];
			for(var k=0;k<27;k++){
				mayusculas[k]=minusculas[k].toUpperCase();
			}
		
		for(var j=0;j<196;j++){
			var letra_aleatoria=Math.floor(26*Math.random()+1);
			document.getElementsByTagName("td")[j].innerHTML=minusculas[letra_aleatoria];	
		}
		
		
		for(var y=0;y<196;y++){
			document.getElementsByTagName("td")[y].addEventListener('mousedown', function() {
				document.getElementsByTagName("td")[y].style.background = "red";
				document.getElementsByTagName("td")[y].addEventListener('mouseup', function() {
					document.getElementsByTagName("td")[y].style.background = "green";
				});
			});
		}
		
		var palabra1=window.prompt("Inserta la palabra1").toUpperCase();
		var numero_caracteres_palabra1 = palabra1.length;  
		var caracteres_palabra1=[];
		var i;
		for (i = 0; i < numero_caracteres_palabra1; i++) {
			caracteres_palabra1[i] = palabra1.charAt(i);    
			if (i == numero_caracteres_palabra1 - 1) {
				document.getElementById("palabra1").textContent=palabra1;
			}
			else {}
		}
			
		var palabra2=window.prompt("Inserta la palabra2").toUpperCase();
		var caracteres_palabra2=[];
		caracteres_palabra2= palabra2.split("");
		document.getElementById("palabra2").textContent=palabra2;
		
		
		var palabra3=window.prompt("Inserta la palabra3").toUpperCase();
		var caracteres_palabra3=[];
		caracteres_palabra3= palabra3.split("");
		document.getElementById("palabra3").textContent=palabra3;
		
		var palabra4=window.prompt("Inserta la palabra4").toUpperCase();
		var caracteres_palabra4=[];
		caracteres_palabra4= palabra4.split("");
		document.getElementById("palabra4").textContent=palabra4;
		
		var palabra5=window.prompt("Inserta la palabra5").toUpperCase();
		var caracteres_palabra5=[];
		caracteres_palabra5= palabra5.split("");
		document.getElementById("palabra5").textContent=palabra5;
		
		
		var numero_aleatorio;
		var sentido;
		var i;
		
		function colocar_cinco (){
			sentido=Math.floor(4*Math.random());
			window.alert(sentido);
			numero_aleatorio=Math.floor(195*Math.random());
			switch (sentido) {
				case 0: /* VERTICAL */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[avance].textContent=caracteres_palabra1[i];
							avance=avance+14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[avance].textContent=caracteres_palabra1[i];
							avance=avance+14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=numero_caracteres_palabra1){
							var avance=numero_aleatorio;
							for (i = 0; i < numero_caracteres_palabra1; i++) {
								array_tabla[avance].textContent=caracteres_palabra1[i];
								avance=avance+14;
							}
						}
						else{
							var restas=14-numero_caracteres_palabra1;
							var numeral=numero_aleatorio;
							while(i>restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < numero_caracteres_palabra1; i++) {
								array_tabla[numeral].textContent=caracteres_palabra1[i];
								numeral=numeral+14;
							}	
						}
					}
					break;
					
				case 1:	/* HORIZONTAL */
					i=0;
					if(numero_aleatorio+numero_caracteres_palabra1<=numero_derecha[i]){
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra1[i];
							numero_aleatorio++;
						}
					}	
					i=0;
					while(numero_aleatorio+numero_caracteres_palabra1>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+numero_caracteres_palabra1==numero_derecha[i]){
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra1[i];
							numero_aleatorio++;
						}
					}
					else if(numero_aleatorio+numero_caracteres_palabra1<numero_derecha[i]){
						var resta=numero_derecha[i]-numero_caracteres_palabra1;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_izquierda[i]+elemento;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[sumas].textContent=caracteres_palabra1[i];
							sumas++;
						}	
					}
					break;
					
				case 2:	/* VERTICAL AL REVES */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							avance=avance+14;
						}
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[avance].textContent=caracteres_palabra1[i];
							avance=avance-14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							avance=avance+14;
						}
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[avance].textContent=caracteres_palabra1[i];
							avance=avance-14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=numero_caracteres_palabra1){
							var avance=numero_aleatorio;
							for (i = 0; i < numero_caracteres_palabra1; i++) {
								avance=avance+14;
							}
							for (i = 0; i < numero_caracteres_palabra1; i++) {
								array_tabla[avance].textContent=caracteres_palabra1[i];
								avance=avance-14;
							}
						}
						else{
							var restas=14-numero_caracteres_palabra1;
							var numeral=numero_aleatorio;
							while(i>=restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < numero_caracteres_palabra1; i++) {
								numeral=numeral+14;
							}
							for (i = 0; i < numero_caracteres_palabra1; i++) {
								array_tabla[numeral].textContent=caracteres_palabra1[i];
								numeral=numeral-14;
							}	
						}
					}
					break;
					
				case 3:	/* HORIZONTAL AL REVES */
					i=0;
					if(numero_aleatorio+numero_caracteres_palabra1<=numero_derecha[i]){
						var menos=numero_aleatorio+numero_caracteres_palabra1;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[menos].textContent=caracteres_palabra1[i];
							menos--;
						}
					}	
					i=0;
					while(numero_aleatorio+numero_caracteres_palabra1>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+numero_caracteres_palabra1==numero_derecha[i]){
						var menos=numero_aleatorio+numero_caracteres_palabra1;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[menos].textContent=caracteres_palabra1[i];
							menos--;
						}
					}
					else if(numero_aleatorio+numero_caracteres_palabra1<numero_derecha[i]){
						var resta=numero_derecha[i]-numero_caracteres_palabra1;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_derecha[i]-elemento;
						for (i = 0; i < numero_caracteres_palabra1; i++) {
							array_tabla[sumas].textContent=caracteres_palabra1[i];
							sumas--;
						}	
					}
					break;
			}
			sentido=Math.floor(4*Math.random());
			window.alert(sentido);
			numero_aleatorio=Math.floor(195*Math.random());
			switch (sentido) {
				case 0: /* VERTICAL */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra2[i];
							avance=avance+14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra2[i];
							avance=avance+14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra2.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra2.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra2[i];
								avance=avance+14;
							}
						}
						else{
							var restas=14-palabra2.length;
							var numeral=numero_aleatorio;
							while(i>restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra2.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra2[i];
								numeral=numeral+14;
							}	
						}
					}
					break;
					
				case 1:	/* HORIZONTAL */
					i=0;
					if(numero_aleatorio+palabra2.length<=numero_derecha[i]){
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra2[i];
							numero_aleatorio++;
						}
					}
					i=0;
					while(numero_aleatorio+palabra2.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra2.length==numero_derecha[i]){
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra2[i];
							numero_aleatorio++;
						}
					}
					else if(numero_aleatorio+palabra2.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra2.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_izquierda[i]+elemento;
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra2[i];
							sumas++;
						}	
					}
					break;
					
				case 2:	/* VERTICAL AL REVES */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra2.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra2[i];
							avance=avance-14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra2.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra2[i];
							avance=avance-14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra2.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra2.length; i++) {
								avance=avance+14;
							}
							for (i = 0; i < palabra2.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra2[i];
								avance=avance-14;
							}
						}
						else{
							var restas=14-palabra2.length;
							var numeral=numero_aleatorio;
							while(i>=restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra2.length; i++) {
								numeral=numeral+14;
							}
							for (i = 0; i < palabra2.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra2[i];
								numeral=numeral-14;
							}	
						}
					}
					break;
					
				case 3:	/* HORIZONTAL AL REVES */
					i=0;
					if(numero_aleatorio+palabra2.length<=numero_derecha[i]){
						var menos=numero_aleatorio+palabra2.length;
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra2[i];
							menos--;
						}
					}	
					i=0;
					while(numero_aleatorio+palabra2.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra2.length==numero_derecha[i]){
						var menos=numero_aleatorio+palabra2.length;
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra2[i];
							menos--;
						}
					}
					else if(numero_aleatorio+palabra2.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra2.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_derecha[i]-elemento;
						for (i = 0; i < palabra2.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra2[i];
							sumas--;
						}	
					}
					break;
			}
			sentido=Math.floor(4*Math.random());
			window.alert(sentido);
			numero_aleatorio=Math.floor(195*Math.random());
			switch (sentido) {
				case 0: /* VERTICAL */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra3[i];
							avance=avance+14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra3[i];
							avance=avance+14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra3.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra3.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra3[i];
								avance=avance+14;
							}
						}
						else{
							var restas=14-palabra3.length;
							var numeral=numero_aleatorio;
							while(i>restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra3.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra3[i];
								numeral=numeral+14;
							}	
						}
					}
					break;
					
				case 1:	/* HORIZONTAL */
					i=0;
					if(numero_aleatorio+palabra3.length<=numero_derecha[i]){
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra3[i];
							numero_aleatorio++;
						}
					}
					i=0;
					while(numero_aleatorio+palabra3.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra3.length==numero_derecha[i]){
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra3[i];
							numero_aleatorio++;
						}
					}
					else if(numero_aleatorio+palabra3.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra3.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_izquierda[i]+elemento;
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra3[i];
							sumas++;
						}	
					}
					break;
					
				case 2:	/* VERTICAL AL REVES */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra3.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra3[i];
							avance=avance-14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra3.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra3[i];
							avance=avance-14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra3.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra3.length; i++) {
								avance=avance+14;
							}
							for (i = 0; i < palabra3.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra3[i];
								avance=avance-14;
							}
						}
						else{
							var restas=14-palabra3.length;
							var numeral=numero_aleatorio;
							while(i>=restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra3.length; i++) {
								numeral=numeral+14;
							}
							for (i = 0; i < palabra3.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra3[i];
								numeral=numeral-14;
							}	
						}
					}
					break;
					
				case 3:	/* HORIZONTAL AL REVES */
					i=0;
					if(numero_aleatorio+palabra3.length<=numero_derecha[i]){
						var menos=numero_aleatorio+palabra3.length;
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra3[i];
							menos--;
						}
					}	
					i=0;
					while(numero_aleatorio+palabra3.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra3.length==numero_derecha[i]){
						var menos=numero_aleatorio+palabra3.length;
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra3[i];
							menos--;
						}
					}
					else if(numero_aleatorio+palabra3.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra3.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_derecha[i]-elemento;
						for (i = 0; i < palabra3.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra3[i];
							sumas--;
						}	
					}
					break;
			}
			sentido=Math.floor(4*Math.random());
			window.alert(sentido);
			numero_aleatorio=Math.floor(195*Math.random());
			switch (sentido) {
				case 0: /* VERTICAL */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra4[i];
							avance=avance+14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra4[i];
							avance=avance+14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra4.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra4.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra4[i];
								avance=avance+14;
							}
						}
						else{
							var restas=14-palabra4.length;
							var numeral=numero_aleatorio;
							while(i>restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra4.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra4[i];
								numeral=numeral+14;
							}	
						}
					}
					break;
					
				case 1:	/* HORIZONTAL */
					i=0;
					if(numero_aleatorio+palabra4.length<=numero_derecha[i]){
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra4[i];
							numero_aleatorio++;
						}
					}
					i=0;
					while(numero_aleatorio+palabra4.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra4.length==numero_derecha[i]){
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra4[i];
							numero_aleatorio++;
						}
					}
					else if(numero_aleatorio+palabra4.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra4.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_izquierda[i]+elemento;
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra4[i];
							sumas++;
						}	
					}
					break;
					
				case 2:	/* VERTICAL AL REVES */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra4.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra4[i];
							avance=avance-14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra4.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra4[i];
							avance=avance-14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra4.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra4.length; i++) {
								avance=avance+14;
							}
							for (i = 0; i < palabra4.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra4[i];
								avance=avance-14;
							}
						}
						else{
							var restas=14-palabra4.length;
							var numeral=numero_aleatorio;
							while(i>=restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra4.length; i++) {
								numeral=numeral+14;
							}
							for (i = 0; i < palabra4.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra4[i];
								numeral=numeral-14;
							}	
						}
					}
					break;
					
				case 3:	/* HORIZONTAL AL REVES */
					i=0;
					if(numero_aleatorio+palabra4.length<=numero_derecha[i]){
						var menos=numero_aleatorio+palabra4.length;
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra4[i];
							menos--;
						}
					}	
					i=0;
					while(numero_aleatorio+palabra4.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra4.length==numero_derecha[i]){
						var menos=numero_aleatorio+palabra4.length;
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra4[i];
							menos--;
						}
					}
					else if(numero_aleatorio+palabra4.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra4.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_derecha[i]-elemento;
						for (i = 0; i < palabra4.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra4[i];
							sumas--;
						}	
					}
					break;
			}
			sentido=Math.floor(4*Math.random());
			window.alert(sentido);
			numero_aleatorio=Math.floor(195*Math.random());
			switch (sentido) {
				case 0: /* VERTICAL */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra5[i];
							avance=avance+14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra5[i];
							avance=avance+14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra5.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra5.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra5[i];
								avance=avance+14;
							}
						}
						else{
							var restas=14-palabra5.length;
							var numeral=numero_aleatorio;
							while(i>restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra5.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra5[i];
								numeral=numeral+14;
							}	
						}
					}
					break;
					
				case 1:	/* HORIZONTAL */
					i=0;
					if(numero_aleatorio+palabra5.length<=numero_derecha[i]){
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra5[i];
							numero_aleatorio++;
						}
					}
					i=0;
					while(numero_aleatorio+palabra5.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra5.length==numero_derecha[i]){
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[numero_aleatorio].textContent=caracteres_palabra5[i];
							numero_aleatorio++;
						}
					}
					else if(numero_aleatorio+palabra5.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra5.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_izquierda[i]+elemento;
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra5[i];
							sumas++;
						}	
					}
					break;
					
				case 2:	/* VERTICAL AL REVES */
					i=0;
					if(numero_aleatorio<=numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra5.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra5[i];
							avance=avance-14;
						}
					}	
					i=0;
					while(numero_aleatorio>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio==numero_derecha[i]){
						var avance=numero_aleatorio;
						for (i = 0; i < palabra5.length; i++) {
							avance=avance+14;
						}
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[avance].textContent=caracteres_palabra5[i];
							avance=avance-14;
						}
					}
					else if(numero_aleatorio<numero_derecha[i]){
						var resta=14-i;
						if(resta>=palabra5.length){
							var avance=numero_aleatorio;
							for (i = 0; i < palabra5.length; i++) {
								avance=avance+14;
							}
							for (i = 0; i < palabra5.length; i++) {
								array_tabla[avance].textContent=caracteres_palabra5[i];
								avance=avance-14;
							}
						}
						else{
							var restas=14-palabra5.length;
							var numeral=numero_aleatorio;
							while(i>=restas){
								numeral=numeral-14;
								i--;
							}	
							for (i = 0; i < palabra5.length; i++) {
								numeral=numeral+14;
							}
							for (i = 0; i < palabra5.length; i++) {
								array_tabla[numeral].textContent=caracteres_palabra5[i];
								numeral=numeral-14;
							}	
						}
					}
					break;
					
				case 3:	/* HORIZONTAL AL REVES */
					i=0;
					if(numero_aleatorio+palabra5.length<=numero_derecha[i]){
						var menos=numero_aleatorio+palabra5.length;
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra5[i];
							menos--;
						}
					}	
					i=0;
					while(numero_aleatorio+palabra5.length>numero_derecha[i]){
						i++;
					}
					if(numero_aleatorio+palabra5.length==numero_derecha[i]){
						var menos=numero_aleatorio+palabra5.length;
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[menos].textContent=caracteres_palabra5[i];
							menos--;
						}
					}
					else if(numero_aleatorio+palabra5.length<numero_derecha[i]){
						var resta=numero_derecha[i]-palabra5.length;
						var restas=resta-numero_izquierda[i];
						var elemento=Math.floor(restas*Math.random()+1);
						var sumas=numero_derecha[i]-elemento;
						for (i = 0; i < palabra5.length; i++) {
							array_tabla[sumas].textContent=caracteres_palabra5[i];
							sumas--;
						}	
					}
					break;
			}
			var p;
			var casilla;
			for(p=0;p<196;p++){
				casilla=document.getElementsByTagName("td")[p].textContent;
				if(minusculas.includes(casilla)==true){
					var letra_aleatoria=Math.floor(26*Math.random()+1);
					document.getElementsByTagName("td")[p].innerHTML=mayusculas[letra_aleatoria];
				}
			}
		}	
			
		