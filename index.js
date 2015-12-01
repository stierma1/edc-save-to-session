"use strict"

var Worker = require("basic-distributed-computation").Worker;

class SaveToSession extends Worker {
  constructor(parent){
    super("save-to-session", parent);
  }

  work(req, inputKey, outputKey){
    var inputVal = req.body;
    if(inputKey){
        inputVal = req.body[inputKey];
    }

    var search = this.saveToSession(req, images);
    
    if(outputKey){
      req.body[outputKey] = search;
    } else {
      req.body = search;
    }
    req.next();
  }
}

module.exports = SaveToSession;
