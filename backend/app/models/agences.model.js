module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        responsable: String,
        region: String,
        tel: Number,
        adresse: String,
        email: String,     
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Agences = mongoose.model("agences", schema);
    return Agences;
  };