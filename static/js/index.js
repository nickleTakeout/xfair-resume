// $("#hide").click(function(){
//     $("p").hide();
// });
// $("#drop-resume-box").hide();


$(document).ready(function() {
  $("#drop-resume-box").hide();

  $("#drop-btn").click(function(){
    $(".reg-btn").hide();
    $("#drop-btn").hide();
    $("#drop-resume-box").show();
  });

  Dropzone.options.resumeDropzone = {
    paramName: "resume",
    maxFilesize: 8,
    parallelUploads: 1,
    dictDefaultMessage: "Drag your resume here or click to select a file. (8 MB Max, PDF only!)",
    createImageThumbnails: false,
    acceptedFiles: ".pdf,application/pdf", // Yes you can upload arbitrary files
                                                    // No it's not worth the time policing you.
    complete: function(file) {
      if (file.xhr) {
        window.location = file.xhr.responseText;
      }
    },
    sending: function() {
      $('.dz-message span').text("Uploading...");
    },
    error: function(file, message) {
      if (message == "You can't upload files of this type.") {
        message = "You may only upload PDF files.";
      }
      swal('Uh oh.', message, 'error');
    }
  };
});
