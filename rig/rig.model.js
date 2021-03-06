const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rigSchema = Schema({
    rigName: { type: String, index: true, unique: true },
    ip: String,
    mac: { type: String, default: '' },
    os: { type: String, default: 'windows' },
    psuSlots: { type: Number, default: 1 },
    gpuSlots: { type: Number, default: 1 }
}, { collection: 'rigs' });

const RigModel = mongoose.model('RigModel', rigSchema);

module.exports = RigModel;
