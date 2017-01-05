function(doc, req){
    var o=JSON.parse(req.body);
    o._id = req.id || req.uuid;
    o.timestamp=new Date().toISOString().spilt['T'][0];
    return [o,"not modified"];
}
