// Cursor.js
// @IdeasNeverCease
// ========================================================
$(function () {

  // Set up cursor
  cursor = "";

  cursor += '<svg id="cursor" width="8px" height="8px" viewBox="0 0 16 16">';
  cursor += '<g id="cursor-02" fill="#191919">';
  cursor += '<path d="M8,16 C12.4182782,16 16,12.4182782 16,8 C16,3.58172178 12.4182782,0 8,0 C3.58172178,0 0,3.58172178 0,8 C0,12.4182782 3.58172178,16 8,16 L8,16 Z M8,14 C11.3137087,14 14,11.3137087 14,8 C14,4.68629134 11.3137087,2 8,2 C4.68629134,2 2,4.68629134 2,8 C2,11.3137087 4.68629134,14 8,14 L8,14 Z"></path>';
  cursor += '<circle cx="8" cy="8" r="6"></circle>';
  cursor += "</g>";
  cursor += "</svg>";

  $("html").append(cursor); // gif causes slowness on login, will change later
  // $("body").append(cursor); // this causes issues



  // Link Behavior
  $(document).on("mouseover", "a", function () {
    $("#cursor-02 circle").css("fill", "#50bebf");
  });

  $(document).on("mouseout", "a", function () {
    $("#cursor-02 circle").css("fill", "#191919");
  });

  // Text Field Behavior
  $(document).on("mouseover", "input[type=text], input[type=password]", function () {
    $("#cursor-02 circle").css("fill", "#ffde00");
  });

  $(document).on("mouseout", "input[type=text], input[type=password]", function () {
    $("#cursor-02 circle").css("fill", "#191919");
  });

  // Submit Button Behavior
  $(document).on("mouseover", "input[type=submit]", function () {
    $("#cursor-02 circle").css("fill", "#00ff00");
  });

  $(document).on("mouseout", "input[type=submit]", function () {
    $("#cursor-02 circle").css("fill", "#191919");
  });



  // Make cursor functional

  var ElementCursor = {
    cursorElement: "",
    setCursor: function (cursorId) {
      ElementCursor.cursorElement = cursorId;
      ElementCursor.updateCursor();
    },

    removeCursor: function () {
      $("html").css("cursor", "");
      ElementCursor.cursorElement = "";
    },

    updateCursor: function () {
      $(document).mousemove(function (e) {
        $("#" + ElementCursor.cursorElement).css({
          "top": e.pageY + 2 + "px",
          "left": e.pageX + 2 + "px",
          "position": "fixed"
        });
      });
    }

  };

  ElementCursor.setCursor("cursor");



  // Center cursor on load
  // Put this code on `index.html`?

  jQuery.fn.center = function() {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
  };

  $("#cursor").center();

});