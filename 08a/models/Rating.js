const { Model } = require('objection');
const Account = require('./Account.js');

class Rating extends Model {

    static get tableName() {
        return 'rating';
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
                account_id: { type: 'string' },
                username_getting_rated: { type: 'string' },
                title: { type: 'string' },
                text: { type: 'string' },
                score: { type: 'number' },
            
            }
        };
    }
    static get relationMappings() {
      
        return {
          account: {
                    relation: Model.ManyToManyRelation,
                    modelClass: Account,
                    join: {
                        from: 'rating.account_id',
                        to: 'accounts.username'
                    }
                }
        };
    }
}

module.exports = Rating;
