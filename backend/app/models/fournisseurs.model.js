module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        adresse: String,
        matfisc: String,
        tel: Number,
        responsable:String,
        email: String,
        
      },
      { timestamps: true }
    ); 
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Fournisseurs = mongoose.model("fournisseurs", schema);
    return Fournisseurs;
  };