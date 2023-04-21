/* global $ */
/* exported Open */

function Open() {
  // message
  let msg = $("#-container-generating-link")
  msg.off("click")
  msg.css("color", "orange")
  msg.html("&nbsp;Loading...&nbsp;")
  msg.css("visibility", "visible")

  //
  setTimeout(function () {
    // message
    msg.css("color", "lime")
    msg.html(`&nbsp;Never Gonna Give You Up!&nbsp;`)
  }, 800)
}
