(function () {

    var textureLoader = new THREE.TextureLoader();
    groundTexture = textureLoader.load('texture/ground_texture.jpg');
    brickTexture = textureLoader.load('texture/brick_texture.jpg');


    // Ground
    var groundColor = 0xFFFFFF,
        sizeX = 200,
        sizeZ = 600;
    sizeY = 10;
    var planeMaterial = Physijs.createMaterial(new THREE.MeshLambertMaterial({
        color: groundColor,
        flatShading: THREE.SmoothShading,
        map: groundTexture,
        side: THREE.FrontSide
    }), 1, 0.5);

    var planeGeometry = new THREE.BoxGeometry(sizeX, sizeY, sizeZ, 1, 1, 1);

    var plane = new Physijs.BoxMesh(planeGeometry, planeMaterial, 0);
    plane.position.y = -5;
    plane.position.x = 0;
    plane.receiveShadow = true;
    plane.castShadow = true;

    app.ground = plane;
    app.scene.add(plane);
    //app.scene.add(plane2);
    // app.scene.add(plane3);


    var makeBorder = function (x, z, w, h, v) {
        var border = new Physijs.BoxMesh(
            new THREE.CubeGeometry(w, 100, h),
            Physijs.createMaterial(
                new THREE.MeshBasicMaterial({map: groundTexture,}), 0.2, 1.0
            ),
            0
        );
        border.position.set(x, 2, z);
        border.visible = v;

        return border;
    };

    app.scene.add(makeBorder(-105, 0, 10, 600, true));
    app.scene.add(makeBorder(105, 0, 10, 600, true));
    app.scene.add(makeBorder(0, 305, 200, 10, true));
    app.scene.add(makeBorder(0, -305, 200, 10, false));


    // Boxes
    var boxColor = 0xffffff,
        numberOfBoxes = 6,
        boxWidth = 20,
        boxHeight = 60,
        boxDepth = 20;
    offsetX = 0;
    offsetZ = 180;
    var boxes = [];

    var boxMaterial = new THREE.MeshLambertMaterial({color: boxColor,map: brickTexture, side: THREE.FrontSide});
    var boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, 1, 1, 1);

    for (var i = 0; i < numberOfBoxes; i++) {
        var box = new Physijs.BoxMesh(boxGeometry, boxMaterial, 5);
        box.castShadow = true;
        box.receiveShadow = true;
        box.position.set(0, boxHeight * i + (boxHeight / 2), 0);
        boxes.push(box);
    }

    boxes[0].position.set(0 + offsetX, boxHeight / 2, (boxWidth / 2) * 7 + offsetZ);
    boxes[1].position.set(-30 + offsetX, boxHeight / 2, (boxWidth / 2) * 7 + offsetZ);
    boxes[2].position.set(30 + offsetX, boxHeight / 2, (boxWidth / 2) * 7 + offsetZ);
    boxes[3].position.set(-15 + offsetX, boxHeight / 2, (boxWidth / 2) * 4 + offsetZ);
    boxes[4].position.set(15 + offsetX, boxHeight / 2, (boxWidth / 2) * 4 + offsetZ);
    boxes[5].position.set(0 + offsetX, boxHeight / 2, (boxWidth / 2) + offsetZ);

    boxes.forEach(function (box) {
        app.scene.add(box);
    });


})();
