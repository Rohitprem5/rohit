const dropzoneBox = document.
getElementsByClassName ("dropzone-box")[0];

const inputFiles = document.
querySelectorAll(
    "-dropzone-area input [type=' file']");

const inputElement = inputFiles [0];

const dropZoneElement = inputElement.
closest (" dropzone-area");

inputElement. addEventListener ("change",
(e) => {
  if (inputElement. files. length) {
     updateDropzoneFileList
    (dropZoneElement, inputElement. files[0]);
}
});

dropZoneElement.addEventListener
("dragover", (e) => {
  e.preventDefault();
  dropZoneElement.classList.add
  ("dropzone--over");
});

["dragleave", "dragend"]. forEach((type) =>
     { dropZoneElement.addEventListener(type,
 (e) => {
    dropZoneElement.classList. remove
    ("dropzone--over");
  });
});