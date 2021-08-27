function loadTexture(file) {
	var textureL = new THREE.TextureLoader();
	var texture = textureL.load(file);
	return texture;
}

var textureDrago = loadTexture( "textures/pelle3.jpg" );
var textureCollo = loadTexture( "textures/pelle4.jpg" );
var textureAli = loadTexture( "textures/ali1.jpg" );
var textureGuglie = loadTexture( "textures/osso1.jpg" );

//<-------------------------------------------------------------------------------------------------------------------------->//
//--------------------------------------------------------CASTELLO-----------------------------------------------------------//
function creaCastello(posX, posY, posZ){

	var castello= new THREE.Object3D();
	var muri = new THREE.Object3D();
	var guglieMuriA = new THREE.Object3D();
	var guglieMuriD = new THREE.Object3D();
	var guglieMuriDx = new THREE.Object3D();
	var guglieMuriSx = new THREE.Object3D();
	var casaCentrale = new THREE.Object3D();
	var guglieCasaA = new THREE.Object3D();
	var guglieCasaD = new THREE.Object3D();
	var guglieCasaDx = new THREE.Object3D();
	var guglieCasaSx = new THREE.Object3D();
	var torreC = new THREE.Object3D();
	var guglieAnelloA = new THREE.Object3D();
	var guglieAnelloD = new THREE.Object3D();
	var guglieAnelloDx = new THREE.Object3D();
	var guglieAnelloSx = new THREE.Object3D();

	//pavimento castello
	var geometriaPavimento=new THREE.BoxGeometry(6.5,0.05,6.5);
	var materialPavimento=new THREE.MeshBasicMaterial({color:0x404040});
	var meshPavimento=new THREE.Mesh(geometriaPavimento, materialPavimento);
	meshPavimento.position.set(0,-1,0);
	castello.add(meshPavimento);

	//muro avanti 
	muri.add(creaMuro(0, 0, 3.5, 6, 2, 0.5));
	//guglie muro avanti
	for(i=0; i<4; i++) {
		muri.add(guglieMuriA.add(creaGuglie(i, 0, 0.5, 0.35, 0.5, 3/2, 1.18)));
		guglieMuriA.position.x=-2.3;
		guglieMuriA.position.z=+3.5;
	}
	
	//muro dietro
	muri.add(creaMuro(0, 0, -3.5, 6, 2, 0.5));
	//guglie muro dietro
	for(i=0; i<4; i++) {
		muri.add(guglieMuriD.add(creaGuglie(i, 0, 0.5, 0.35, 0.5, 3/2, 1.18)));
		guglieMuriD.position.x=-2.3;
		guglieMuriD.position.z=-3.5;
	}

	//muro lato destro
	muri.add(creaMuro(3.5, 0, 0, 0.5, 2, 6));
	//guglie muro destro
	for(i=0; i<4; i++) {
		muri.add(guglieMuriDx.add(creaGuglie(i, 1, 0.5, 0.35, 0.5, 3/2, 1.18)));
		guglieMuriDx.position.z=-2.3;
		guglieMuriDx.position.x=+3.5;
	}

	//muro lato sinistro
	muri.add(creaMuro(-3.5, 0, 0, 0.5, 2, 6));
	//guglie muro sinistro
	for(i=0; i<4; i++) {
		muri.add(guglieMuriSx.add(creaGuglie(i, 1, 0.5, 0.35, 0.5, 3/2, 1.18)));
		guglieMuriSx.position.z=-2.3;
		guglieMuriSx.position.x=-3.5;
	}

	castello.add(muri); //aggiungo muri a castello

   //<-------------------------------CASA CENTRALE------------------------------>//
	var geometriaCasa=new THREE.BoxGeometry(4,2,2.5);
	var materialCasa=new THREE.MeshBasicMaterial({color:0x707070});
	var meshCasa=new THREE.Mesh(geometriaCasa, materialCasa);
	casaCentrale.add(meshCasa);
	castello.add(casaCentrale);

	//guglie casa avanti
	for (i=0; i<4; i++) {
		casaCentrale.add(guglieCasaA.add(creaGuglie(i, 0, 0.35, 0.3, 0.2, 1.17, 1.18)));
		guglieCasaA.position.x=-1.75;
		guglieCasaA.position.z=+1.05;
	}

	//guglie casa dietro
	for (i=0; i<4; i++) {
		casaCentrale.add(guglieCasaD.add(creaGuglie(i, 0, 0.35, 0.3, 0.2, 1.17, 1.18)));
		guglieCasaD.position.x=-1.75;
		guglieCasaD.position.z=-1.05;
	}

	//guglia lato destro
	var geometriaGugliaCdx=new THREE.BoxGeometry(0.2, 0.3, 0.35);
	var materialGugliaCdx=new THREE.MeshBasicMaterial({color: 0x505050});
	var meshGugliaCdx=new THREE.Mesh(geometriaGugliaCdx, materialGugliaCdx);
	guglieCasaDx.add(meshGugliaCdx);
	guglieCasaDx.position.set(1.85,1.18,0);
	casaCentrale.add(guglieCasaDx);

	//guglia lato destro
	var geometriaGugliaCsx=new THREE.BoxGeometry(0.2, 0.3, 0.35);
	var materialGugliaCsx=new THREE.MeshBasicMaterial({color: 0x505050});
	var meshGugliaCsx=new THREE.Mesh(geometriaGugliaCsx, materialGugliaCsx);
	guglieCasaSx.add(meshGugliaCsx);
	guglieCasaSx.position.set(-1.85,1.18,0);
	casaCentrale.add(guglieCasaSx);

	//Torre centrale primo pezzo
	var geometriaTorreC=new THREE.BoxGeometry(1.5,2,1.5);
	var materialTorreC=new THREE.MeshBasicMaterial({color:0x606060});
	var meshTorreC=new THREE.Mesh(geometriaTorreC, materialTorreC);
	torreC.add(meshTorreC);
	torreC.position.set(0,2,0);
	casaCentrale.add(torreC);

	//anello torre centrale
	var geometriaAnello=new THREE.BoxGeometry(2,0.5,2);
	var materialAnello=new THREE.MeshBasicMaterial({color: 0x808080});
	var meshAnello=new THREE.Mesh(geometriaAnello, materialAnello);
	torreC.add(meshAnello);
	meshAnello.position.set(0,1.2,0);

	//guglie anello avanti
	for (i=0; i<4; i++) {
		torreC.add(guglieAnelloA.add(creaGuglie(i, 0, 0.2, 0.15, 0.2, 7/12, 1.5)));
		guglieAnelloA.position.x=-0.87;
		guglieAnelloA.position.z=0.87;
	}

	//guglie anello dietro
	for (i=0; i<4; i++) {
		torreC.add(guglieAnelloD.add(creaGuglie(i, 0, 0.2, 0.15, 0.2, 7/12, 1.5)));
		guglieAnelloD.position.x=-0.87;
		guglieAnelloD.position.z=-0.87;
	}

	//guglie anello destra
	for (i=0; i<4; i++) {
		torreC.add(guglieAnelloDx.add(creaGuglie(i, 1, 0.2, 0.15, 0.2, 7/12, 1.5)));
		guglieAnelloDx.position.x=0.87;
		guglieAnelloDx.position.z=-0.87;
	}

	//guglie anello sinistra
	for (i=0; i<4; i++) {
		torreC.add(guglieAnelloSx.add(creaGuglie(i, 1, 0.2, 0.15, 0.2, 7/12, 1.5)));
		guglieAnelloSx.position.x=-0.87;
		guglieAnelloSx.position.z=-0.87;
	}

	//torre centrale secondo pezzo
	var geometriaTorreCasa=new THREE.BoxGeometry(1,1.2,1);
	var materialTorreCasa=new THREE.MeshBasicMaterial({color:0x606060});
	var meshTorreCasa=new THREE.Mesh(geometriaTorreCasa, materialTorreCasa);
	torreC.add(meshTorreCasa);
	meshTorreCasa.position.set(0,2,0);

	//copertura torre centrale
	for(i=0; i<7; i++){
		var decremento=0.2;
		var geometriaTettoC=new THREE.BoxGeometry(1.4 -(i * decremento),0.1,1.4 -(i * decremento));
		var materialTettoC=new THREE.MeshBasicMaterial({color:0xff0000});
		var meshTettoC=new THREE.Mesh(geometriaTettoC,materialTettoC);
		meshTettoC.position.y +=2.6+i* 0.1;
		torreC.add(meshTettoC);
	}

	castello.add(creaTorre(3.5,0.5,3.5)); //torre destra avanti
	castello.add(creaTorre(-3.5,0.5,3.5)); //torre sinistra avanti
	castello.add(creaTorre(-3.5,0.5,-3.5)); //torre destra dietro
	castello.add(creaTorre(3.5,0.5,-3.5)); //torre sinistra dietro

	castello.position.set(posX, posY, posZ);
	castello.scale.set(2.5,2.5,2.5);

	return castello;
}

function creaMuro(traslX, traslY, traslZ, valX, valY, valZ) {

	var geometriaMuro=new THREE.BoxGeometry(valX, valY, valZ);
	var materialMuro=new THREE.MeshBasicMaterial({color:0x808080});
	var meshMuro=new THREE.Mesh(geometriaMuro, materialMuro);
	meshMuro.position.set(traslX, traslY, traslZ);
	return meshMuro;
}

function creaGuglie(i, controllo, valX, valY, valZ, pos, posY){
	
	var geometriaGuglia=new THREE.BoxGeometry(valX, valY, valZ);
	var materialGuglia=new THREE.MeshBasicMaterial({color:0x505050});
	var meshGuglia=new THREE.Mesh(geometriaGuglia, materialGuglia);
	if(controllo==0){
		meshGuglia.position.x +=pos*i; 
	}
	else {
		meshGuglia.position.z +=pos*i; 
	}
	meshGuglia.position.y +=posY;

	return meshGuglia;
}

function creaTorre(traslX, traslY, traslZ){

	var torre = new THREE.Object3D();

	var geometriaTorre=new THREE.BoxGeometry(1,3,1);
	var materialTorre=new THREE.MeshBasicMaterial({color:0x606060});
	var meshTorre=new THREE.Mesh(geometriaTorre, materialTorre);
	torre.add(meshTorre);
	torre.position.set(traslX,traslY,traslZ);

	//copertura torre
	for(i=0; i<7; i++){
		var decremento=0.2;
		var geometriaTetto=new THREE.BoxGeometry(1.4 -(i * decremento),0.15,1.4 -(i * decremento));
		var materialTetto=new THREE.MeshBasicMaterial({color:0xff0000});
		var meshTetto=new THREE.Mesh(geometriaTetto,materialTetto);
		meshTetto.position.y +=1.55+i* 0.15;
		torre.add(meshTetto);
	}

	//asta della bandiera
	var geometriaAsta=new THREE.BoxGeometry(0.01,1.3, 0.01);
	var materialAsta=new THREE.MeshBasicMaterial({color:0x800000});
	var meshAsta=new THREE.Mesh(geometriaAsta,materialAsta);
	meshAsta.position.set(0,2.55,0);
	torre.add(meshAsta);

	//bandiera
	var geometriaBandiera=new THREE.BoxGeometry(0.5, 0.23, 0.01);
	var materialBandiera=new THREE.MeshBasicMaterial({color:0x006400});
	var meshBandiera=new THREE.Mesh(geometriaBandiera,materialBandiera);
	meshBandiera.position.set(0.25,3,0);
	torre.add(meshBandiera);

	return torre;
}


//<-------------------------------------------------------------------------------------------------------------------->//
//<----------------------------------------------------DRAGO----------------------------------------------------------->//
//Definite fuori dalla funzione così da riuscire a manipolarle nel file index.html
var alaDx = new THREE.Object3D();
var alaSx = new THREE.Object3D();
var drago = new THREE.Object3D();

function creaDrago(posX, posY, posZ){

	var corpo = new THREE.Object3D();
	var guglieCorpo = new THREE.Object3D();
	var coda = new THREE.Object3D();
	var guglieCoda = new THREE.Object3D();
	var collo = new THREE.Object3D();
	var guglieCollo = new THREE.Object3D();
	var testa = new THREE.Object3D();
	var zampaDx = new THREE.Object3D();
	var zampaSx = new THREE.Object3D();
	var zampaADx = new THREE.Object3D();
	var zampaASx = new THREE.Object3D();
	var alaSx1 = new THREE.Object3D();
	var alaDx1 = new THREE.Object3D();

	//Corpo
	var geometriaCorpo = new THREE.BoxGeometry(2, 1, 1);
	var materialCorpo = new THREE.MeshBasicMaterial({ map: textureDrago });
	var meshCorpo = new THREE.Mesh(geometriaCorpo, materialCorpo);
	corpo.add(meshCorpo);
	drago.add(corpo);

	//guglie corpo
	for(i=0; i<3; i++){
		corpo.add(guglieCorpo.add(guglieDrago(i, 0.3, 0.2, 0.1, 2/3, 0.6)));
		guglieCorpo.position.x = -0.65;
	}

	//coda
	var geomeriaCoda = new THREE.BoxGeometry(4, 0.4, 0.4);
	var materialCoda = new THREE.MeshBasicMaterial ({map: textureCollo});
	var meshCoda = new THREE.Mesh(geomeriaCoda, materialCoda);
	coda.add(meshCoda);
	coda.position.set(2.9, -0.05, 0);
	coda.rotation.z = -10 * Math.PI/180;
	drago.add(coda);

	//guglie coda
	for(i=0; i<8; i++){
		coda.add(guglieCoda.add(guglieDrago(i, 0.2, 0.2, 0.1, 0.5, 0.3)));
		guglieCoda.position.x = -1.7;
	}

	//collo
	var geomeriaCollo = new THREE.BoxGeometry(1.5, 0.3, 0.5);
	var materialCollo = new THREE.MeshBasicMaterial ({map: textureCollo});
	var meshCollo = new THREE.Mesh(geomeriaCollo, materialCollo);
	meshCollo.rotation.z = -30 * Math.PI/180;
	collo.add(meshCollo);
	collo.position.set(-1.5, 0.5, 0);
	drago.add(collo);

	//guglie collo
	for(i=0; i<3; i++){
		meshCollo.add(guglieCollo.add(guglieDrago(i, 0.2, 0.2, 0.1, 0.4, 0.25)));
		guglieCollo.position.x = -0.6;
	}

	//testa
	var geometriaTesta = new THREE.BoxGeometry(0.6,0.6,0.6);
	var materialTesta = new THREE.MeshBasicMaterial({map: textureDrago});
	var meshTesta = new THREE.Mesh(geometriaTesta, materialTesta);
	testa.position.set(-0.9, 0.4, 0);
	testa.add(meshTesta);
	collo.add(testa);

	//muso superiore
	var geometriaMusoS = new THREE.BoxGeometry(0.62, 0.125,0.5);
	var materialMusoS = new THREE.MeshBasicMaterial({map: textureCollo});
	var meshMusoS = new THREE.Mesh(geometriaMusoS, materialMusoS);
	meshMusoS.position.set(-0.58, -0.07, 0);
	meshMusoS.rotation.z= -10*Math.PI/180;
	testa.add(meshMusoS);

	//muso inferiore
	var geometriaMusoI = new THREE.BoxGeometry(0.6, 0.125,0.5);
	var materialMusoI = new THREE.MeshBasicMaterial({map: textureCollo});
	var meshMusoI = new THREE.Mesh(geometriaMusoI, materialMusoI);
	meshMusoI.position.set(-0.6, -0.23, 0);
	testa.add(meshMusoI);

	//Orecchia destra
	testa.add(connotatiTestaDrago(0.2, 0.2, 0.1, 0, 0.4, 0.15, textureAli, true));
	//Orecchia sinistra
	testa.add(connotatiTestaDrago(0.2, 0.2, 0.1, 0, 0.4, -0.15, textureAli, true));

	//Narice destro
	meshMusoS.add(connotatiTestaDrago(0.1, 0.1, 0.1, -0.2, 0.1, 0.15, textureAli, true));
	//Narice sinistra
	meshMusoS.add(connotatiTestaDrago(0.1, 0.1, 0.1, -0.2, 0.1, -0.15, textureAli, true));

	//Occhio destro
	testa.add(connotatiTestaDrago(0.15, 0.2, 0.15, -0.3, 0.1, 0.15, 0x8f00ff, false));
	//Occhio sinistro
	testa.add(connotatiTestaDrago(0.15, 0.2, 0.15, -0.3, 0.1, -0.15, 0x8f00ff, false));

	//zampa posteriore sinistra
	drago.add(zampaSx.add(creaZampeDrago(1, 0.5, 0.5, 1, 0.3, 0.3, 0.7, 0.15, 0.4, -50, 0.6, -0.55, 0, -30, 1, -1, 0, 60)));
	zampaSx.position.set(0.7, -0.4, 0.75);
	//zampa posteriore destra
	drago.add(zampaDx.add(creaZampeDrago(1, 0.5, 0.5, 1, 0.3, 0.3, 0.7, 0.15, 0.4, -50, 0.6, -0.55, 0, -30, 1, -1, 0, 60)));
	zampaDx.position.set(0.7, -0.4, -0.75);
	//zampa anteriore sinista
	drago.add(zampaASx.add(creaZampeDrago(0.8, 0.3, 0.3, 0.7, 0.2, 0.2, 0.5, 0.15, 0.3, -30, 0.45, -0.55, 0, -70, 0.45, -1, 0, 20)));
	zampaASx.position.set(-0.4, -0.5, 0.65);
	//zampa anteriore destra
	drago.add(zampaADx.add(creaZampeDrago(0.8, 0.3, 0.3, 0.7, 0.2, 0.2, 0.5, 0.15, 0.3, -30, 0.45, -0.55, 0, -70, 0.45, -1, 0, 20)));
	zampaADx.position.set(-0.4, -0.5, -0.65);

	//ala sinistra
	for(i=0; i<2; i++){
		var geometriaCubiInizialeS = new THREE.BoxGeometry(1.95, 0.1, 0.4);
		var materialCubiInizialeS = new THREE.MeshBasicMaterial({map: textureAli});
		var meshCubiInizialeS = new THREE.Mesh(geometriaCubiInizialeS, materialCubiInizialeS);	
		meshCubiInizialeS.position.z -= 0.4 * i; 
		//meshCubiIniziale.position.x -=i/2;
		alaSx.add(meshCubiInizialeS);
	}

	for(i=0; i<7; i++){
		var decremento = 0.3;
		var geometriaCubi = new THREE.BoxGeometry( 1.93- decremento * i, 0.1, 0.4);
		var materialCubi = new THREE.MeshBasicMaterial({map: textureAli});
		var meshCubi = new THREE.Mesh(geometriaCubi, materialCubi);
		meshCubi.position.z -= 0.8 + 0.4 * i;
		meshCubi.position.x -=decremento*i/2;
		alaSx1.add(meshCubi);
	}

	alaSx1.position.set(0,0.15,0);
	alaSx1.rotation.x = -15*Math.PI/180;
	alaSx.position.set(0,0.3,-0.65);
	//alaSx.rotation.x = 15*Math.PI/180;
	alaSx.add(alaSx1);
	drago.add(alaSx);

	//ala destra
	for(i=0; i<2; i++){
		var geometriaCubiIniziale = new THREE.BoxGeometry(1.95, 0.1, 0.4);
		var materialCubiIniziale = new THREE.MeshBasicMaterial({map:textureAli});
		var meshCubiIniziale = new THREE.Mesh(geometriaCubiIniziale, materialCubiIniziale);	
		meshCubiIniziale.position.z += 0.4 * i; 
		//meshCubiIniziale.position.x -=i/2;
		alaDx.add(meshCubiIniziale);
	}

	for(i=0; i<7; i++){
		var decremento = 0.3;
		var geometriaCubi = new THREE.BoxGeometry(1.93- decremento * i, 0.1, 0.4);
		var materialCubi = new THREE.MeshBasicMaterial({map:textureAli});
		var meshCubi = new THREE.Mesh(geometriaCubi, materialCubi);	
		meshCubi.position.z += 0.8 + 0.4 * i; 
		meshCubi.position.x -=decremento*i/2;
		alaDx1.add(meshCubi);
	}

	alaDx1.position.set(0,0.15,0);
	alaDx1.rotation.x = 15*Math.PI/180;
	alaDx.position.set(0,0.3,0.65);
	//alaDx.rotation.x = -15*Math.PI/180;
	alaDx.add(alaDx1);
	drago.add(alaDx);

	drago.position.set(posX, posY, posZ);
	drago.scale.set(1.5, 1.5, 1.5);
	
	return drago;

}

function guglieDrago(i, valX, valY, valZ, posX, posY) {

	var geometriaGuglieCorpo = new THREE.BoxGeometry(valX, valY, valZ);
	var materialGuglieCorpo = new THREE.MeshBasicMaterial({map: textureGuglie});
	var meshGuglieCorpo = new THREE.Mesh(geometriaGuglieCorpo, materialGuglieCorpo);	
	meshGuglieCorpo.position.x += posX* i; 
	meshGuglieCorpo.position.y += posY;

	return meshGuglieCorpo;
}

function connotatiTestaDrago(valX, valY, valZ, posX, posY, posZ, colore, bool){

	var geometriaConnotati = new THREE.BoxGeometry(valX, valY, valZ);
	if (bool) {
		var materialConnotati = new THREE.MeshBasicMaterial({map: colore});
	} else {
		var materialConnotati = new THREE.MeshBasicMaterial({color: colore});
	}
	var meshConnotati = new THREE.Mesh(geometriaConnotati, materialConnotati);
	meshConnotati.position.set(posX, posY, posZ);

	return meshConnotati;
}

function creaZampeDrago(xCoscia, yCoscia, zCoscia, xPolpaccio, yPolpaccio, zPolpaccio, xPiede, yPiede, zPiede,
 zRotCoscia, posXPolp, posYPolp, posZPolp, zRotPolp, posXPie, posYPie, posZPie, zRotPie){

	var zampa = new THREE.Object3D();
	//coscia
	var geometriaCoscia = new THREE.BoxGeometry(xCoscia, yCoscia, zCoscia);
	var materialCoscia = new THREE.MeshBasicMaterial({map: textureDrago});
	var meshCoscia = new THREE.Mesh(geometriaCoscia, materialCoscia);
	meshCoscia.rotation.z = zRotCoscia * Math.PI/180;
	zampa.add(meshCoscia);

	//polpaccio
	var geometriaPolpaccio = new THREE.BoxGeometry(xPolpaccio, yPolpaccio, zPolpaccio);
	var materialPolpaccio = new THREE.MeshBasicMaterial( {map:textureCollo});
	var meshPolpaccio = new THREE.Mesh(geometriaPolpaccio, materialPolpaccio);
	meshPolpaccio.position.set(posXPolp, posYPolp, posZPolp);
	meshPolpaccio.rotation.z = zRotPolp * Math.PI/180;
	zampa.add(meshPolpaccio);

	//piede
	var geometriaPiede = new THREE.BoxGeometry(xPiede, yPiede, zPiede);
	var materialPiede = new THREE.MeshBasicMaterial({map:textureAli});
	var meshPiede = new THREE.Mesh(geometriaPiede, materialPiede);
	meshPiede.position.set(posXPie, posYPie, posZPie);
	meshPiede.rotation.z = zRotPie * Math.PI/180;
	zampa.add(meshPiede);

	return zampa;
}

function creaAli (i, controllo){

	var decremento = 0.3;
	var geometriaCubi = new THREE.BoxGeometry(0.2, 0.1, 4- decremento * i);
	var materialCubi = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var meshCubi = new THREE.Mesh(geometriaCubi, materialCubi);	
	meshCubi.position.x += 0.2 * i; 
	if(controllo==0){
		meshCubi.position.z +=decremento*i/2;
	}
	else {
		meshCubi.position.z -=decremento*i/2;
	}
	
	return meshCubi;
}

//<-------------------------------------------------------------------------------------------------------------------->//
//<----------------------------------------------------PINO------------------------------------------------------------>//

function creaPino (posX, posY, posZ){

	var pino = new THREE.Object3D();
	var foglie = new THREE.Object3D();
			
	//tronco
	var x = 1;
	var y = 8;
	var z = 1;
	var geometriaTronco = new THREE.BoxGeometry(x,y,z);
	var materialTronco = new THREE.MeshBasicMaterial({color: 0x654321});
	var meshTronco = new THREE.Mesh(geometriaTronco, materialTronco);
	pino.add(meshTronco);
		    
	//foglie
	for(var i=0; i < 5; i++){
		var decremento = 2;
		var geometriaFoglie = new THREE.BoxGeometry((x *3) - (i/decremento), 2 ,(z *3) - (i/decremento));
		var materialFoglie = new THREE.MeshBasicMaterial({color: 0x008000});
		var meshFoglie = new THREE.Mesh(geometriaFoglie, materialFoglie);	
		meshFoglie.name = "foglie";	
		meshFoglie.position.y += i; 
		pino.add(meshFoglie);
	}	

	pino.position.set(posX,posY,posZ);
	//pino.scale.set(1/4, 1/4, 1/4);

	return pino;
}