const { Model } = require('objection');

class Account extends Model {

    static get tableName() {
        return 'accounts';
    }

    static get idColumn() {
        return 'username';
    }


    static get jsonSchema() {
        return {
            type: 'object',
            required: [],

            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
                role: { type: 'string' },
            
            }
        };
    }
    
}

module.exports = Account;
