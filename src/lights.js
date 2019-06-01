(function() {

    //Ambient Light
    var light = new THREE.AmbientLight(0x333333); // soft white light
    app.scene.add(light);

    // Directional Light
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 ,1000,1000);
    directionalLight.position.set( 0, 200, -200 );
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.right = 5000;
    directionalLight.shadow.camera.left = -5000;
    directionalLight.shadow.camera.top = 5000;
    directionalLight.shadow.camera.bottom = -5000;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    app.scene.add( directionalLight );

        //Light Helper
/*    var directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
    app.scene.add(directionalLightHelper);*/

    // Point Light
/*    var spotLight = new THREE.SpotLight(0xcccccc);
    spotLight.position.y = 550;
    spotLight.position.x = 200;
    spotLight.position.z = 200;
    spotLight.castShadow = true;
    spotLight.shadowDarkness = 0.4;
    spotLight.shadowCameraNear = 400;
    spotLight.shadowCameraFar = 800;
    spotLight.angle = Math.PI / 2;
    spotLight.shadowCameraVisible = false;
    spotLight.shadowCameraFov = 60;
    app.scene.add(spotLight);*/

    //Light Helper
/*    var pointLightHelper = new THREE.PointLightHelper(spotLight, 10);
    app.scene.add(pointLightHelper);*/


    // Light Move
    var lightMove = 0;
    function moveLight() {
        lightMove += 0.01;
        if (lightMove > 360) {
            lightMove = 0;
        }
        spotLight.position.x = Math.sin(lightMove) * 200;
        //requestAnimationFrame(moveLight);
    }
    //moveLight();

})();
