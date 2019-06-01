(function () {
  const audioLoader = new THREE.AudioLoader();
  const listener = new THREE.AudioListener();
  app.camera.add(listener);


  app.playThrowSound = function () {
    const throwSound = new THREE.PositionalAudio(listener);
    audioLoader.load('sound/bowling-sound.mp3', function (buffer) {
      throwSound.setBuffer(buffer);
      throwSound.setRefDistance(20);
      throwSound.play();
    });
    app.scene.add(throwSound);
  }

})();
