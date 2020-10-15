
db.createUser(
    {
        user: "NotRootUser",
        pwd:"NotRootPass",
        roles:[
            {
                role:"readWrite",
                db:"admin"
            },
            {
                role:"readWrite",
                db:"NotAdminData"
            }
        ]
    }
)

db.createUser(
    {
        user: "ApplicationUser",
        pwd: "SuperDuperLongPassword",
        roles: [{ role: "readWrite", db:"NotAdminData"}]
    }
)

var NotAdminData = db.getSiblingDB('NotAdminData')
NotAdminData.createCollection('NotAdminCollection')
