const { Model } = require('objection');
const Doctor = require('./Doctor.js');

const Persondatum = require('./Persondatum.js');

class Journal extends Model {

    static get tableName() {
        return 'journal';
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
                doctor_id: { type: 'number' },
                journalnotes: { type: 'string' },
                created_on: { type: 'string' },
                modified_on: { type: 'string' },
                cpr: { type: 'string' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          doctor: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Doctor,
                    join: {
                        from: 'journal.doctor_id',
                        to: 'doctor.id'
                    }
                },persondatum: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Persondatum,
                    join: {
                        from: 'journal.cpr',
                        to: 'persondata.cpr'
                    }
                }
        };
    }
}

module.exports = Journal;
