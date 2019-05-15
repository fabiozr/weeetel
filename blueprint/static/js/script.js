//3 Scripts: SMOOTH SCROLL, GOOGLE MAPS, CHANGE CLASS

//SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//CHANGE CSS CLASS IN HTML
	$(document).scroll(function() {
	var swap_class = document.getElementById("change_class");

	   if($(window).scrollTop() === 0) {
	     swap_class.classList.remove("menu_color_change");
	   } else {
	   		swap_class.classList.add("menu_color_change");
	   	}
	});

//GOOGLE MAPS
function initMap() {
  var myLatLng = { lat: -27.261725, lng: -49.3910057 };
  var biguacu = { lat: -27.501136, lng: -48.656643 };
  var brusque = { lat: -27.115846, lng: -48.935495 };
  var agronomica1 = { lat: -27.575353, lng: -48.526831 };
  var agronomica2 = { lat: -27.573640, lng: -48.530696 };
  var canasvieiras = { lat: -27.432607, lng: -48.4591217 };
  var capoeiras1 = { lat: -27.6009615, lng: -48.5968218 };
  var capoeiras2 = { lat: -27.5970218, lng: -48.6050725 };
  var centro1 = { lat: -27.5922144, lng: -48.5533062 };
  var centro2 = { lat: -27.596435, lng: -48.549908 };
  var coloninha = { lat: -27.58860, lng: -48.590879 };
  var corregog = { lat: -27.599757, lng: -48.511385 };
  var estreito = { lat: -27.591601, lng: -48.586988 };
  var ingleses1 = { lat: -27.436897, lng: -48.398322 };
  var ingleses2 = { lat: -27.435348, lng: -48.410008 };
  var itacorubi = { lat: -27.577941, lng: -48.512439 };
  var jardimatl = { lat: -27.576084, lng: -48.595220 };
  var joaopaulo = { lat: -27.571213, lng: -48.509045 };
  var jurere = { lat: -27.443743, lng: -48.506352 };
  var lagoa = { lat: -27.602494, lng: -48.470791 };
  var morrodacruz = { lat: -27.5894918, lng: -48.5345441 };
  var morrodaspedras1 = { lat: -27.715585, lng: -48.505806 };
  var morrodaspedras2 = { lat: -27.588171, lng: -48.590946 };
  var riotavares1 = { lat: -27.661250, lng: -48.499551 };
  var riotavares2 = { lat: -27.6507696, lng: -48.4789648 };
  var sacogrande1 = { lat: -27.544376, lng: -48.500222 };
  var sacogrande2 = { lat: -27.5540362, lng: -48.5004977 };
  var trindade = { lat: -27.600756, lng: -48.519242 };
  var gaspar = { lat: -27.929986, lng: -48.948974 };
  var guaramirimcdl = { lat: -26.474538, lng: -49.003019 };
  var guaramirimcaz = { lat: -26.465714, lng: -48.978194 };
  var guaramirimfameg = { lat: -26.475135, lng: -49.026720 };
  var guaramirimradio = { lat: -26470794, lng: -49.001005 };
  var guaramirimweg = { lat: -26.460041, lng: -48.941242 };
  var icara = { lat: -28.714581, lng: -49.301387 };
  var itajai = { lat: -26.898670, lng: -48.717445 };
  var jaraguacarinhoso = { lat: -26.513281, lng: -49.126433 };
  var jaraguacdl = { lat: -26.478242, lng: -49.080259 };
  var jaraguamalwee = { lat: -26.513281, lng: -49.126433 };
  var jaraguaprefeitura = { lat: -26.504851, lng: -49.090766 };
  var jaraguaradio = { lat: -26.487262, lng: -49.080307 };
  var jaraguauc = { lat: -26.467302, lng: -49.113717 };
  var jaraguaxbramar = { lat: -27.597155, lng: -48.584184 };
  var joinvillebubi = { lat: -26.303070, lng: -48.823606 };
  var joinvillecc = { lat:-26.284488, lng: -48.780883 };
  var joinvillecf = { lat: -26.360921, lng: -48.807572 };
  var joinvillecm = { lat: -26.343538, lng: -48.773748 };
  var joinvilleconstroi = { lat: -26.330720, lng: -48.800746 };
  var joinvilleilumina = { lat: -26.204938, lng: -48.910903 };
  var joinvillegil = { lat: -26.206906, lng: -48.829062 };
  var joinvillemessias1 = { lat: -26.273071, lng: -48.871964 };
  var joinvillemessias2 = { lat: -26.283361, lng: -48.802301 };
  var joinvillenardell = { lat: -26.326538, lng: -48.908137 };
  var joinvillepj = { lat: -27.608995, lng: -48.632574 };
  var joinvillerocha = { lat: -26.2613339, lng: -48.8068447 };
  var joinvillesantosdumont = { lat: -26.2339685, lng: -48.8140959 };
  var palhocaacip = { lat: -27.6511876, lng: -48.6708085 };
  var palhocacaixa = { lat: -27.6473579, lng: -48.6685006 };
  var palhocacartorio = { lat: -27.6496976, lng: -48.6727798 };
  var palhocafatenp = { lat: -27.6648776, lng: -48.6657113 };
  var palhocaviacatarina = { lat: -27.642052, lng: -48.6736717 };
  var palhocainaitec = { lat: -27.6229041, lng: -48.6776787 };
  var palhocayazigi = { lat: -27.6488065, lng: -48.6690232 };
  var palhocaoab = { lat: -27.643934, lng: -48.6820667 };
  var palhocamaisinternet = { lat: -27.6838606, lng: -48.7138509 };
  var paulopopes = { lat: -27.9652973, lng: -48.6879841 };
  var saojoseunivali = { lat: -27.598276, lng: -48.6222526, };
  var saojoseaemflo = { lat: -27.5756492, lng: -48.6059502 };
  var tijucas = { lat: -27.4330218, lng: -48.643111 };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 9
  });

  var icon = {
    url: "/static/img/TEWEBLUE.png",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  var pev1 = new google.maps.Marker({
    map: map,
    position: biguacu,
    title: 'PEV Univali \nCoan, 400 – R. João Comi \n\nStatus: 100%\nCarga: 200.00Kg ',
    icon: icon
  });

  var pev2 = new google.maps.Marker({
    map: map,
    position: brusque,
    title: 'PEV Cidade Limpa\nRua Alberto Knop, 400 – Jardim Maluche\n\n Status: 50%\nCarga: 153.00Kg ',
    icon: icon
  });

  var pev3 = new google.maps.Marker({
    map: map,
    position: agronomica1,
    title: 'PEV Angeloni\nAv Irineu Bornhausen, nº 5288 – Agronômica\n\nStatus: 20%\nCarga: 40.12Kg ',
    icon: icon
  });

  var pev4 = new google.maps.Marker({
    map: map,
    position: agronomica2,
    title: 'PEV OAB Cidadã\nAv. Gov. Irineu Bornhausen, 4860 – Agronômica\n\nStatus: 0%\nCarga: 5.04Kg',
    icon: icon
  });

  var pev5 = new google.maps.Marker({
    map: map,
    position: canasvieiras,
    title: 'PEV CIAC\nCanas Vieiras - R. José Rosa, 408\n\nStatus: 10%\nCarga: 23.78Kg ',
    icon: icon
  });

  var pev6 = new google.maps.Marker({
    map: map,
    position: capoeiras1,
    title: 'PEV Angeloni Capoeiras\nAv. Gov. Ivo Silveira, nº 2445 – Capoeiras\n\nStatus: 20%\nCarga: 51.64Kg ',
    icon: icon
  });

  var pev7 = new google.maps.Marker({
    map: map,
    position: capoeiras2,
    title: 'PEV Comcap\nR. Professor Egídio Ferreira, nº 1770 – Capoeiras\n\nStatus: 80%\nCarga: 232.48Kg ',
    icon: icon
  });

  var pev8 = new google.maps.Marker({
    map: map,
    position: centro1,
    title: 'PEV Angeloni Centro\nRua: Esteves Júnior, 307 – Centro\n\nStatus: 90%\nCarga: 198.15Kg  ',
    icon: icon
  });

  var pev9 = new google.maps.Marker({
    map: map,
    position: centro2,
    title: 'PEV Pro-cidadão Centro\nRua Tenente Silveira, nº 60 – Centro\n\nStatus: 100%\nCarga: 203.67Kg ',
    icon: icon
  });

  var pev10 = new google.maps.Marker({
    map: map,
    position: coloninha,
    title: 'PEV CIAC Continente\nRua João Evangelista da Costa- 827- Coloninha\n\nStatus: 70%\nCarga: 156.54Kg ',
    icon: icon
  });

  var pev11 = new google.maps.Marker({
    map: map,
    position: corregog,
    title: 'PEV Parque Ecológico\nCórrego Grande R. João Pio Duarte Silva, 535 – Córrego Grande\n\nStatus: 30%\nCarga: 58.98Kg ',
    icon: icon
  });

  var pev11 = new google.maps.Marker({
    map: map,
    position: estreito,
    title: 'PEV Biblioteca Pública Munipal\nR. João Evangelista da Costa, 1160 – Estreito\n\nStatus: 40%\nCarga: 64.33Kg ',
    icon: icon
  });

  var pev12 = new google.maps.Marker({
    map: map,
    position: ingleses1,
    title: 'PEV Angeloni Ingleses\nRodovia SC 403, nº 6.375 – Ingleses\n\nStatus: 60%\nCarga: 129.74Kg ',
    icon: icon
  });

  var pev13 = new google.maps.Marker({
    map: map,
    position: ingleses2,
    title: 'PEV Pro-Cidadão Ingleses\nR. Três Marias, 1046 – Ingleses\n\nStatus: 30%\nCarga: 46.01Kg ',
    icon: icon
  });

  var pev14 = new google.maps.Marker({
    map: map,
    position: itacorubi,
    title: 'PEV Comcap\nRodovia Admar Gonzaga, nº72 – SC-404 – Itacorubi\n\nStatus: 100%\nCarga: 256.51Kg ',
    icon: icon
  });

  var pev15 = new google.maps.Marker({
    map: map,
    position: jardimatl,
    title: 'PEV Angeloni - Jardim Atlântico\nAv Mar. Max Schramm, nº 3.450 – Jardim Atlântico\n\nStatus: 80%\nCarga: 176.37Kg ',
    icon: icon
  });

  var pev16 = new google.maps.Marker({
    map: map,
    position: joaopaulo,
    title: 'PEV Celta - Parque Tecnológico Alfa\nRodovia SC 401 Km 01, João Paulo\n\nStatus: 70%\nCarga: 144.66Kg ',
    icon: icon
  });

  var pev17 = new google.maps.Marker({
    map: map,
    position: jurere,
    title: 'PEV Jurere Sports Center\nAv. dos Dourados, 481 – Jurerê Internacional\n\nStatus: 50%\nCarga: 97.00Kg ',
    icon: icon
  });

   var pev18 = new google.maps.Marker({
    map: map,
    position: lagoa,
    title: 'PEV CIAC Lagoa da Conceição\nR. Crisógono Viêira da Cruz – Lagoa da Conceição\n\nStatus: 0%\nCarga: 3.13Kg ',
    icon: icon
  });

   var pev19 = new google.maps.Marker({
    map: map,
    position: morrodacruz,
    title: 'PEV RBS Morro da Cruz\nRua General Vieira da Rosa, 1570\n\nStatus: 80%\nCarga: 164.89Kg ',
    icon: icon
  });

    var pev20 = new google.maps.Marker({
    map: map,
    position: morrodaspedras1,
    title: 'PEV Centro Comunitário Morro das Pedras\nRua Sagrado Coração de Jesus, 138, Morro das Pedras\n\nStatus: 100%\nCarga: 205.78Kg ',
    icon: icon
  });
   
   var pev21 = new google.maps.Marker({
    map: map,
    position: morrodaspedras2,
    title: 'PEV Comcap - Morro das Pedras\nR. Santa Rita de Cássia, 128, Morro das Pedras\n\nStatus: 20%\nCarga: 24.89Kg ',
    icon: icon
  }); 
  
   var pev22 = new google.maps.Marker({
    map: map,
    position: riotavares1,
    title: 'PEV CIAC Rio Tavares\nRodovia Francisco Magno Vieira, 1318 – Rio Tavares\n\nStatus: 40%\nCarga: 55.81Kg ',
    icon: icon
  });
      
   var pev23 = new google.maps.Marker({
    map: map,
    position: riotavares2,
    title: 'PEV Pedrita Rodovia\nDr. Antônio Luiz Moura Gonzaga, 2146 – Rio Tavares\n\nStatus: 60%\nCarga: 57.52Kg ',
    icon: icon
  });
  
   var pev24 = new google.maps.Marker({
    map: map,
    position: sacogrande1,
    title: 'PEV Diário Catarinense\nRodovia SC – 401, 4190 Saco Grande\n\nStatus: 30%\nCarga: 22.10Kg ',
    icon: icon
  });


   var pev25 = new google.maps.Marker({
    map: map,
    position: sacogrande2,
    title: 'PEV Floripa Shopping\nRodovia SC-401, 3116 – Saco Grande\n\nStatus: 70%\nCarga: 89.76Kg ',
    icon: icon
  });


   var pev26 = new google.maps.Marker({
    map: map,
    position: trindade,
    title: 'PEV UFSC\nR. Eng. Agronômico Andrei Cristian Ferreira, s/n – Trindade\n\nStatus: 100%\nCarga: 212.99Kg ',
    icon: icon
  });    
  

   var pev27 = new google.maps.Marker({
    map: map,
    position: gaspar,
    title: 'PEV Samae',
    icon: icon
  }); 

    var pev28 = new google.maps.Marker({
    map: map,
    position: guaramirimcdl,
    title: 'PEV CDL Guaramirim',
    icon: icon
  });

   var pev29 = new google.maps.Marker({
    map: map,
    position: guaramirimcaz,
    title: 'PEV Colégio Alfredo Zimmermann',
    icon: icon
  }); 

   var pev30 = new google.maps.Marker({
    map: map,
    position: guaramirimfameg,
    title: 'PEV Fameg',
    icon: icon
  }); 

   var pev31 = new google.maps.Marker({
    map: map,
    position: guaramirimradio,
    title: 'PEV Radio 105 FM',
    icon: icon
  }); 

   var pev32 = new google.maps.Marker({
    map: map,
    position: guaramirimweg,
    title: 'PEV WEG Tintas',
    icon: icon
  }); 

   var pev33 = new google.maps.Marker({
    map: map,
    position: icara,
    title: 'PEV Fundação de Meio Ambiente',
    icon: icon
  });  

   var pev34 = new google.maps.Marker({
    map: map,
    position: itajai,
    title: 'PEV WEG/CDL',
    icon: icon
  });

   var pev35 = new google.maps.Marker({
    map: map,
    position: jaraguacarinhoso,
    title: 'PEV Carinhoso',
    icon: icon
  });
   var pev36 = new google.maps.Marker({
    map: map,
    position: jaraguacdl,
    title: 'PEV CDL Central',
    icon: icon
  });
   var pev37 = new google.maps.Marker({
    map: map,
    position: jaraguamalwee,
    title: 'PEV Prefeitura',
    icon: icon
  });

   var pev38 = new google.maps.Marker({
    map: map,
    position: jaraguaprefeitura,
    title: 'PEV Prefeitura',
    icon: icon
  });

   var pev39 = new google.maps.Marker({
    map: map,
    position: jaraguaradio,
    title: 'PEV Rádio FM',
    icon: icon
  });

   var pev40 = new google.maps.Marker({
    map: map,
    position: jaraguauc,
    title: 'PEV Universidade Católica',
    icon: icon
  });

   var pev41 = new google.maps.Marker({
    map: map,
    position: jaraguaxbramar,
    title: 'PEV XBRAMAR',
    icon: icon
  });
   var pev42 = new google.maps.Marker({
    map: map,
    position: joinvillebubi,
    title: 'PEV BUBI',
    icon: icon
  }); 
   
   var pev43 = new google.maps.Marker({
    map: map,
    position: joinvillecc,
    title: 'PEV Casa e Construção',
    icon: icon
  }); 
  
   var pev44 = new google.maps.Marker({
    map: map,
    position: joinvillecf,
    title: 'PEV Casa Feliz',
    icon: icon
  });  

   var pev45 = new google.maps.Marker({
    map: map,
    position: joinvillecm,
    title: 'PEV Casa Mil',
    icon: icon
  });

   var pev46 = new google.maps.Marker({
    map: map,
    position: joinvilleconstroi,
    title: 'PEV Constrói',
    icon: icon
  });
  
   var pev47 = new google.maps.Marker({
    map: map,
    position: joinvilleilumina,
    title: 'PEV Ilumina',
    icon: icon
  });

   var pev48 = new google.maps.Marker({
    map: map,
    position: joinvillegil,
    title: 'PEV Gil',
    icon: icon
  });

   var pev49 = new google.maps.Marker({
    map: map,
    position: joinvillemessias1,
    title: 'PEV Messias',
    icon: icon
  });


   var pev50 = new google.maps.Marker({
    map: map,
    position: joinvillemessias2,
    title: 'PEV Messias',
    icon: icon
  });

   var pev51 = new google.maps.Marker({
    map: map,
    position: joinvillenardell,
    title: 'PEV Nardell',
    icon: icon
  });

   var pev52 = new google.maps.Marker({
    map: map,
    position: joinvillepj,
    title: 'PEV PJ',
    icon: icon
  });

   var pev53 = new google.maps.Marker({
    map: map,
    position: joinvillerocha,
    title: 'PEV Rocha',
    icon: icon
  });

   var pev54 = new google.maps.Marker({
    map: map,
    position: joinvillesantosdumont,
    title: 'PEV Santos Dumont',
    icon: icon
  }); 

   var pev55 = new google.maps.Marker({
    map: map,
    position: palhocaacip,
    title: 'PEV ACIP',
    icon: icon
  });
   var pev56 = new google.maps.Marker({
    map: map,
    position: palhocacaixa,
    title: 'PEV Caixa Econômica',
    icon: icon
  });

   var pev57 = new google.maps.Marker({
    map: map,
    position: palhocacartorio,
    title: 'PEV Cartório Margarida',
    icon: icon
  });

   var pev58 = new google.maps.Marker({
    map: map,
    position: palhocafatenp,
    title: 'PEV FATENP',
    icon: icon
  });

   var pev59 = new google.maps.Marker({
    map: map,
    position: palhocaviacatarina,
    title: 'PEV Shopping Via Catarina',
    icon: icon
  });

   var pev60 = new google.maps.Marker({
    map: map,
    position: palhocainaitec,
    title: 'PEV Instituo de Apoio à Inovação, Incubação e Tecnologia',
    icon: icon
  });
   var pev61 = new google.maps.Marker({
    map: map,
    position: palhocayazigi,
    title: 'PEV Yázigi',
    icon: icon
  }); 
   
   var pev62 = new google.maps.Marker({
    map: map,
    position: palhocaoab,
    title: 'PEV OAB',
    icon: icon
  }); 
  
   var pev63 = new google.maps.Marker({
    map: map,
    position: palhocamaisinternet,
    title: 'PEV Mais Internet',
    icon: icon
  });  

   var pev64 = new google.maps.Marker({
    map: map,
    position: paulopopes,
    title: 'PEV Cerpaulo',
    icon: icon
  });

   var pev65 = new google.maps.Marker({
    map: map,
    position: saojoseunivali,
    title: 'PEV Univali',
    icon: icon
  });
  
   var pev66 = new google.maps.Marker({
    map: map,
    position: saojoseaemflo,
    title: 'PEV AEMFLO-SJ',
    icon: icon
  });

   var pev67 = new google.maps.Marker({
    map: map,
    position: tijucas,
    title: 'PEV Pedrita',
    icon: icon
  });


}
