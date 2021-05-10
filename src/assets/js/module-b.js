/* A file called module-b.js that contains a javascript module that makes use of the JQuery library (JQuery must be imported via webpack not manually)
 */
export function jq() {
  $('#app').append('<p>jquery message</p>');
}
