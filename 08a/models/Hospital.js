const { Model } = require('objection');

class Hospital extends Model {

    static get tableName() {
        return 'hospital';
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
                name: { type: 'string' },
            
            }
        };
    }
    
}

module.exports = Hospital;
