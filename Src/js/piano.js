/* Aquí empiezan los estilos JS del teclado */
//aquí empiezan los estilos de js del piano
document.addEventListener('DOMContentLoaded', function () {
  let whiteKeys = document.querySelectorAll('.white-key');

   whiteKeys.forEach(function (key) {
       key.addEventListener('click', function () {
           // Cambia la imagen al hacer clic
           key.src = "/Public/keys/white-key-pressed.svg";
       });
   });
});


document.addEventListener('DOMContentLoaded', function () {
   let whiteKeys = document.querySelectorAll('.white-key');

    whiteKeys.forEach(function (key) {
        key.addEventListener('mouseout', function () {
            // Cambia la imagen al hacer clic
            key.src = "/Public/keys/white-key.svg";
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  let blackKeys = document.querySelectorAll('.black-key');

   blackKeys.forEach(function (key) {
       key.addEventListener('click', function () {
           // Cambia la imagen al hacer clic
           key.src = "/Public/keys/black-key-pressed.svg";
       });
   });
});


document.addEventListener('DOMContentLoaded', function () {
   let blackKeys = document.querySelectorAll('.black-key');

    blackKeys.forEach(function (key) {
        key.addEventListener('mouseout', function () {
            // Cambia la imagen al hacer clic
            key.src = "/Public/keys/black-key.svg";
        });
    });
});
//-----SONIDO-------//

// 3. Función de reproducción de audio
function playAudio(id) {
// Pausar el audio después de 500 milisegundos (0.5 segundos)
setTimeout(function() {
 audio.pause();
 // Reiniciar el audio para la próxima reproducción
 audio.currentTime = 0;
}, 500);
let audio = document.getElementById(id);
audio.play();
}
// 4. Código JavaScript
const whiteKeyDo = document.getElementById("dowhite-key")
whiteKeyDo.addEventListener("click",function(){
  return playAudio("audiodo")
});
//RE
const whiteKeyRe = document.getElementById("rewhite-key")
whiteKeyRe.addEventListener("click",function(){
  return playAudio("audiore")
});
const whiteKeyMi = document.getElementById("miwhite-key")
whiteKeyMi.addEventListener("click",function(){
  return playAudio("audiomi")
});
const whiteKeyFa = document.getElementById("fawhite-key")
whiteKeyFa.addEventListener("click",function(){
  return playAudio("audiofa")
});
const whiteKeySol = document.getElementById("solwhite-key")
whiteKeySol.addEventListener("click",function(){
  return playAudio("audiosol")
});
const whiteKeyLa = document.getElementById("lawhite-key")
whiteKeyLa.addEventListener("click",function(){
  return playAudio("audiola")
});
const whiteKeySi = document.getElementById("siwhite-key")
whiteKeySi.addEventListener("click",function(){
  return playAudio("audiosi")
});
//teclas negras
const blackKeysDoSos = document.getElementById("dosos")
blackKeysDoSos.addEventListener("click",function(){
  return playAudio("audiodosos")
});
const blackKeyReSos = document.getElementById("resos")
blackKeyReSos.addEventListener("click",function(){
  return playAudio("audioresos")
});
const blackKeyFaSos = document.getElementById("fasos")
blackKeyFaSos.addEventListener("click",function(){
  return playAudio("audiofasos")
});
const blackKeySolSos = document.getElementById("solsos")
blackKeySolSos.addEventListener("click",function(){
  return playAudio("audiosolsos")
});
const blackKeyLaSos = document.getElementById("lasos")
blackKeyLaSos.addEventListener("click",function(){
  return playAudio("audiolasos")
});

//TOCAR EL PIANO CON EL TECLADO
document.addEventListener('DOMContentLoaded', function () {
let whiteKeys = document.querySelectorAll('.white-key');

whiteKeys.forEach(function (key) {
    key.addEventListener('click', function () {
        useClick(key);
    });
});
});

document.addEventListener('DOMContentLoaded', function () {
let blackKeys = document.querySelectorAll('.black-key');

blackKeys.forEach(function (key) {
    key.addEventListener('click', function () {
        useClick(key);
    });
});
});

document.addEventListener('DOMContentLoaded', function () {
document.addEventListener('keydown', function (e) {
   useKey(e);
});
});

function useClick(key) {
const idSound = getIdSound(key);
playAudio(idSound);
changeImage(key);
}
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keydown', function (e) {
      useKey(e);
  });

  function useKey(e) {
      const idSoundWhite = getIdSoundByWhiteKey(e.code);
      const idSoundBlack = getIdSoundByBlackKey(e.code);

      if (idSoundWhite) {
          playAudio(idSoundWhite);
          const whiteKey = document.getElementById(`${idSoundWhite.replace("audio", "")}white-key`);
          changeImage(whiteKey);
      } else if (idSoundBlack) {
          playAudio(idSoundBlack);
          const blackKey = document.getElementById(`${idSoundBlack.replace("audio", "")}black-key`);
          changeImage(blackKey);
      }
  }

  function getIdSoundByWhiteKey(codeKey) {
      const mappingWhiteKeys = {
          KeyA: "audiodo",
          KeyS: "audiore",
          KeyD: "audiomi",
          KeyF: "audiofa",
          KeyG: "audiosol",
          KeyH: "audiola",
          KeyJ: "audiosi",
      };

      return mappingWhiteKeys[codeKey];
  }

  function getIdSoundByBlackKey(codeKey) {
      const mappingBlackKeys = {
          KeyW: "audiodosos",
          KeyE: "audioresos",
          KeyR: "audiofasos",
          KeyT: "audiosolsos",
          KeyY: "audiolasos",
      };

      return mappingBlackKeys[codeKey];
  }

  function changeImage(key) {
      if (key) {
          key.src = `/Public/keys/${key.classList.contains('black-key') ? 'black-key' : 'white-key'}-pressed.svg`;

          setTimeout(function () {
              key.src = `/Public/keys/${key.classList.contains('black-key') ? 'black-key' : 'white-key'}.svg`;
          }, 500);
      }
  }
});