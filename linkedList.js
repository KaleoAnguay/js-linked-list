/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;

  return {

    getHead: function() {
      return head;
    },

    getTail: function() {
      return tail;
    },

    add: function(value) {
      var newNode = {
        value: value,
        next: null
      };
      head = newNode;
      tail = newNode;
      return newNode;

      if(head.next === null) {
        return tail;
      }
    },

    remove: function(number) {

    },

    get: function(number) {

    },

    insert: function(value,number) {

    }
  };
}
