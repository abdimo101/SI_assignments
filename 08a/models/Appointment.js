const { Model } = require('objection');
const Patient = require('./Patient.js');

const Clinic = require('./Clinic.js');

const Doctor = require('./Doctor.js');

const Department = require('./Department.js');

const Hospital = require('./Hospital.js');

class Appointment extends Model {

    static get tableName() {
        return 'appointment';
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
                clinic_id: { type: 'number' },
                doctor_id: { type: 'number' },
                department_id: { type: 'number' },
                hospital_id: { type: 'number' },
                appointment_date: { type: 'string' },
                appointment_date_end: { type: 'string' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          patient: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Patient,
                    join: {
                        from: 'appointment.patient_id',
                        to: 'patient.id'
                    }
                },clinic: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Clinic,
                    join: {
                        from: 'appointment.clinic_id',
                        to: 'clinic.id'
                    }
                },doctor: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Doctor,
                    join: {
                        from: 'appointment.doctor_id',
                        to: 'doctor.id'
                    }
                },department: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Department,
                    join: {
                        from: 'appointment.department_id',
                        to: 'department.id'
                    }
                },hospital: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Hospital,
                    join: {
                        from: 'appointment.hospital_id',
                        to: 'hospital.id'
                    }
                }
        };
    }
}

module.exports = Appointment;
