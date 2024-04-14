import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
  completedLevels: {
    type: [String],
    default: [],
  },
});

/*UserSchema.post("findOne", async function (doc, next) {
  console.log("Post findOne hook called.");
  if (doc && !doc.completedLevels) {
    console.log("Initializing completedLevels.");
    doc.completedLevels = []; // Inicializace completedLevels
    try {
      await doc.save(); // Uložení změn
      console.log("Document saved.");
      next(); // Pokračování v middleware chain
    } catch (err) {
      console.error("Error saving document:", err);
      next(err); // Předání chyby, pokud něco selže
    }
  } else {
    if (doc) {
      console.log("completedLevels already initialized.");
    }
    next(); // Pokračování, pokud není potřeba žádná aktualizace
  }
});
*/
export const User = mongoose.model("User", UserSchema);
