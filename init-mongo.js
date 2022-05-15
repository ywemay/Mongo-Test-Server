var rootUser = _getEnv('MONGO_INITDB_ROOT_USERNAME');
var rootPassword = _getEnv('MONGO_INITDB_ROOT_PASSWORD');

var database = _getEnv('MONGO_DATABASE');
var user = _getEnv('MONGO_USERNAME');
var passwd = _getEnv('MONGO_PASSWORD');

var admin = db.getSiblingDB('admin');

admin.auth(rootUser, rootPassword);

db.createUser({
  user: user,
  pwd: passwd,
  roles: [
    {
      role: "readWrite",
      db: database
    }
  ]
});
