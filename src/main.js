import mOrm from "./mOrm";
import Student from "./entities/student";

(async () => {
    const orm = new mOrm();
    try {
        await orm.createConnection({
                "type": "postgres",
                "host": "localhost",
                "port": 5432,
                "username": "ibrahima",
                "password": "ibrahima",
                "database": "iLovePragmatic",
                synchronize: false,
            },
            // "uri": "postgres://20171115:20171115@localhost:5432/mOrm.js"
            {
                entities: [Student]
            });

        let student = {
            firstname: 'ibra',
            lastname: 'hima'
        }

        const studentEntity = orm.getEntity('Student')
        // orm.dbInstance.dump();

        // SAVE
        const saved = await studentEntity.save(student)
        console.log(`New student ${student.firstname}`)

        // COUNT
        const count = await studentEntity.count()
        console.log(`There are ${count} student(s)`);

        // FINDBYPK
        // const stud = await studentEntity.findByPk(2);
        // console.log(stud);

        // FINDALL
        // const everyone = await studentEntity.findAll();
        // console.log(everyone);

        // REMOVE
        // const toDelete = await studentEntity.remove(2);
        // console.log(toDelete);

        //OK FINDONE
        // const findOne = await studentEntity.findOne();
        // const findOne = await studentEntity.findOne({
        //     attributes: ['firstname', 'lastname'],
        //     where: {
        //         id: 1
        //     }
        // });
        // console.log(findOne);

        //OK UPDATE
        // const update = await studentEntity.update({
        //     attributes: {
        //         firstname: 'Ibra',
        //         lastname: 'hima'
        //     },
        //     where: {
        //         id: 1
        //     }
        // });
        // console.log(update);

    } catch (err) {
        // console.log(err);
        process.exit(-1);
    }
})();