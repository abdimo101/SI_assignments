const { Model } = require('objection');
const Hospital = require('./Hospital.js');

class Department extends Model {

    static get tableName() {
        return 'department';
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
                hospital_id: { type: 'number' },
                name: { type: 'string' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          hospital: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Hospital,
                    join: {
                        from: 'department.hospital_id',
                        to: 'hospital.id'
                    }
                }
        };
    }
}

module.exports = Department;
