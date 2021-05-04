const dbManager = require('./db_manager');

module.exports.enqueue = function () {
    return dbManager.enqueue().then((customerId) => ({ customer_id: customerId })); // store the id as customer_id in an object
};

module.exports.dequeue = function () {
    return dbManager.dequeue().then((customerId) => ({ dequeued_id: customerId }));
};