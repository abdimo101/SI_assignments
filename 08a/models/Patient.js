const { Model } = require('objection');
const Clinic = require('./Clinic.js');

class Patient extends Model {

    static get tableName() {
        return 'patient';
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
                clinic_id: { type: 'number' },
                persondata_id: { type: 'number' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          clinic: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Clinic,
                    join: {
                        from: 'patient.clinic_id',
                        to: 'clinic.id'
                    }
                }
        };
    }
}

module.exports = Patient;
