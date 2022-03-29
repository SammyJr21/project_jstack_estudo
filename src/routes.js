const UserControllers = require("./controllers/UserControllers");

module.exports = [
  {
    endpoint: '/users',
    method:'GET',
    handler: UserControllers.listUsers,
  },
  {
    endpoint: '/users/:id',
    method:'GET',
    handler: UserControllers.getUsersById,
  },
  {
    endpoint: '/users',
    method:'POST',
    handler: UserControllers.createUser,
  },
  {
    endpoint: '/users:id',
    method:'PUT',
    handler: UserControllers.updateUser,
  },
  {
    endpoint: '/users:id',
    method:'DELETE',
    handler: UserControllers.deleteUser,
  },
];
