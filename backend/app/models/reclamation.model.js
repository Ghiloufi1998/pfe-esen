module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
        bureau: String,
        materiels: String,
        etat: Boolean,
        rap:Boolean,
        methode: String,
        region: String,
        repara: Boolean,
        idbur: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Reclamation = mongoose.model("reclamation", schema);
    return Reclamation;
  };