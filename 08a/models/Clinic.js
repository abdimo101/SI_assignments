const { Model } = require('objection');
const Department = require('./Department.js');

class Clinic extends Model {

    static get tableName() {
        return 'clinic';
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
                department_id: { type: 'number' },
                name: { type: 'string' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          department: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Department,
                    join: {
                        from: 'clinic.department_id',
                        to: 'department.id'
                    }
                }
        };
    }
}

module.exports = Clinic;
