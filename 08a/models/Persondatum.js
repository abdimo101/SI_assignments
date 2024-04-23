const { Model } = require('objection');

class Persondatum extends Model {

    static get tableName() {
        return 'persondata';
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
                first_name: { type: 'string' },
                last_name: { type: 'string' },
                contact_number: { type: 'number' },
                cpr: { type: 'string' },
                address: { type: 'string' },
            
            }
        };
    }
    
}

module.exports = Persondatum;
