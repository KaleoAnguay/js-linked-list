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
      if(head === null && tail === null) {
        head = newNode;
        tail = newNode;
          return newNode;
      }
      tail.next = newNode;
      tail = newNode;
    },

    get: function(number) {
      var nodeGet = head;
      for(var i = 0; i < number; i++) {
        if(nodeGet.next === null) {
          return false;
        }
        nodeGet = nodeGet.next;
      }
      return nodeGet;
    },


    remove: function(number) {
      var backNode = this.get(number - 1);
      var firstNode = this.get(number + 1);
      var targetNode = this.get(number);
      // console.log(backNode);
      // console.log(firstNode);
      console.log(targetNode);
      if(targetNode === false) {
        return false;
      }
      if(targetNode === tail) {
        tail = backNode;
      }

      if(targetNode === head) {
        head = firstNode;

      } else {
      backNode.next = firstNode;

      }
    },

    insert: function(value,number) {
      var insertedNode = {
        value: value,
        next: null
      };
      var backNode = this.get(number - 1);
      var firstNode = this.get(number + 1);
      var targetNode = this.get(number);
      if(number === 0 ) {
        insertedNode.next = head;
        head = insertedNode;
      }
      else if(number < 0 || this.get(number) === false) {
        return false;

      } else {
        insertedNode.next  = this.get(number);
        backNode.next = insertedNode;
      }
    }
  };
}