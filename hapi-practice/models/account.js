'use strict';

module.exports = (sequelize, DataType) => {
    const Account = sequelize.define('account', {
        id: { type: DataType.INTEGER, autoIncrement: true, primaryKey: true},
        user_id: DataType.STRING,
        password: DataType.STRING
    });

    return Account;
};