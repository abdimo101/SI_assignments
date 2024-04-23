const { Model } = require('objection');
const Patient = require('./Patient.js');

const Doctor = require('./Doctor.js');

class Prescription extends Model {

    static get tableName() {
        return 'prescription';
    }

    static get idColumn() {
        return 'id';
    }


    static get jsonSchema() {
        return {
            type: 'object',
            required: [],

            properties: {
                id: { type: 'number' },
                patient_id: { type: 'number' },
                doctor_id: { type: 'number' },
                dosage: { type: 'string' },
                instructions: { type: 'string' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          patient: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Patient,
                    join: {
                        from: 'prescription.patient_id',
                        to: 'patient.id'
                    }
                },doctor: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Doctor,
                    join: {
                        from: 'prescription.doctor_id',
                        to: 'doctor.id'
                    }
                }
        };
    }
}

module.exports = Prescription;
