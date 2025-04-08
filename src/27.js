// Node.js code to create a student grade system
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema for student data
var StudentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: Number, default: 0 }
});

// Create the 'Student' model using the defined schema
var Student = mongoose.model('Student', StudentSchema);

// Example usage:
var student1 = new Student({ name: 'John Doe', age: 18, grade: 9 });
student1.save(function(err) {
  if (err) throw err;
  console.log("Student 1 created");
});
