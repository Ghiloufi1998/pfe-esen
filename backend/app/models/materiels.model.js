module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        caracteristiques : String,
        marque: String,
        serial: String,
        type: String,
        bureau: String,
        region: String,
        active: Boolean,
        idbur: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Materiels = mongoose.model("materiels", schema);
    return Materiels;
  };