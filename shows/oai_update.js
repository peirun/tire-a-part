function(doc, req){
    var o=JSON.parse(req.body);
    o._id = req.id || req.uuid;
    return [o,"not modified"];
}
