/*
  A file called "module-b.js" that contains a javascript module that makes use of the jQuery library (jQuery must be imported via webpack not manually).
*/
export function jQueryAction() {
  $('main div').last().css('border', '1px solid black')
}