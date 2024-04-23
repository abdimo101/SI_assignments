const { Model } = require('objection');

class AppointmentAudit extends Model {

    static get tableName() {
        return 'appointment_audit';
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
                action_type: { type: 'string' },
                appointment_id: { type: 'number' },
                deleted_appointment_date: { type: 'string' },
                action_timestamp: { type: 'string' },
            
            }
        };
    }
    
}

module.exports = AppointmentAudit;
