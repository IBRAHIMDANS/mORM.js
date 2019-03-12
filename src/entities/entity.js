export default class Entity {
    constructor(dbInstance, tableName) {
        this.dbInstance = dbInstance;
        this.tableName = tableName;
    }

    async count() {
        return this.dbInstance.count(this.tableName);
    }

    async save(data) {
        return this.dbInstance.save(data, this.tableName);
    }

    async findByPk(id) {
        return this.dbInstance.findByPk(id, this.tableName)
    }

    async findAll() {
        return this.dbInstance.findAll(this.tableName)
    }

    async remove(id) {
        return this.dbInstance.remove(id, this.tableName)
    }

    async findOne(data) {
        return this.dbInstance.findOne(this.tableName, data)
    }

    async update(data) {
        return this.dbInstance.update(this.tableName, data)
    }
}