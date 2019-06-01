
(function(){

	var textureLoader = new THREE.TextureLoader();
	ballTexture = textureLoader.load('texture/ball_texture.jpg');
	ballTexture.wrapS = THREE.RepeatWrapping;
	ballTexture.wrapT = THREE.RepeatWrapping;

	var color = 0x61cbe3,
		radius = 15,
		segments = 24,
		rings = 24;
		mass = 10;

	// Sphere
	var sphereMaterial = Physijs.createMaterial(new THREE.MeshPhongMaterial({color: color,map:ballTexture, side: THREE.FrontSide}), 1, 1);
	var sphereGeometry = new THREE.SphereGeometry(radius, segments, rings)
	
	var sphere = new Physijs.SphereMesh(sphereGeometry, sphereMaterial, mass);
	sphere.setLinearFactor(new THREE.Vector3( 0, 0, 0 )); // only move on X and Z axis

	sphere.position.y = 30;
	sphere.position.z = -200;
	sphere.position.x = 0;
	sphere.castShadow = true;
	//sphere.setDamping(1, 1);
	
	app.character = sphere;
	app.scene.add(sphere);



	//character move
	var preventJump = false;
	var movePlayer = function() {
	    if(sphere.position.y < -50){
	    	sphere.position.y = 20;
	    	sphere.position.x = 0;
	    	sphere.position.z = 200;
	    	sphere.setLinearVelocity(new THREE.Vector3(0,0,0));
	    	sphere.setAngularVelocity(new THREE.Vector3(0,0,0));
	    	sphere.__dirtyPosition = true;
	    }

	};
	movePlayer();



})();