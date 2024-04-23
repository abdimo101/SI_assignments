const { Model } = require('objection');

class Doctor extends Model {

    static get tableName() {
        return 'doctor';
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
                Persondata_id: { type: 'number' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          
        };
    }
}

module.exports = Doctor;
