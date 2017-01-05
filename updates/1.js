function(doc, req){
    var o=JSON.parse(req.body);
  
    o.timestamp = new Date().toISOString().spilt('T')[0];
    return [o,"Timestamped at" +o.timestamp];
}
