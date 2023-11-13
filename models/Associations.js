const Users=require('./User');
const User_profiles=require('./User_profiles');

Users.hasOne(User_profiles);
User_profiles.belongsTo(Users);

module.exports={Users,User_profiles}