(function () {
  "use strict";

  jQuery(document).ready(function () {
    "use strict";

    window.parent.$('.popup-form-btn').click(function() {    
      window.parent.$('#popup-form-iframe').css('display', 'block');
        $('#eternitech-lp--popup').modal();
    });

    $('#eternitech-lp--popup').on('hidden.bs.modal', function() {
        window.parent.$('#popup-form-iframe').css('display', 'none');
    })

    // Popup Form 'Book a meeting' btn
    $("#book-meeting-btn").click(function () {
      event.preventDefault();
      $("#popup-form-section-1").addClass("hidden");
      $("#popup-form-section-2").removeClass("hidden");
      $("#book-meeting-submit").removeClass("hidden");
    });

    // Popup Form 'Chat with a sales rep.' btn
    $("#chat-sales-btn").click(function () {
      event.preventDefault();
      $("#popup-form-section-1").addClass("hidden");
      $("#popup-form-section-2").removeClass("hidden");
      $("#chat-sales-submit").removeClass("hidden");
    });

    // Popup Form 'Get back to me' btn
    $("#get-back-btn").click(function () {
      event.preventDefault();
      $("#popup-form-section-1").addClass("hidden");
      $("#popup-form-section-2").removeClass("hidden");
      $("#get-back-submit").removeClass("hidden");
    });

    // Popup Form 'Back' btn
    $("#popup-form-back").click(function () {
      event.preventDefault();
      $("#popup-form-section-1").removeClass("hidden");
      $("#popup-form-section-2").addClass("hidden");
      $("#book-meeting-submit").addClass("hidden");
      $("#chat-sales-submit").addClass("hidden");
      $("#get-back-submit").addClass("hidden");
    });

    // Popup close btn
    $("#popup-close").click(function () {
      $("#popup-form").trigger("reset");
      $("#popup-form-section-1").removeClass("hidden");
      $("#popup-form-section-2").addClass("hidden");
      $("#book-meeting-submit").addClass("hidden");
      $("#chat-sales-submit").addClass("hidden");
      $("#get-back-submit").addClass("hidden");
    });
  });
})();
