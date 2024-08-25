const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    deadline: { type: Date, required: true },
    teamLeader: { type: String, required: true },
    category: { type: String },
    fileAttachments: [String] // Assuming file URLs or paths
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
