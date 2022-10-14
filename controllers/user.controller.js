const getUsers = (req, res) => {
  const person = {
    name: 'Sergio',
    lastname: 'Manrique',
    age: 32,
  }

  res.status(200).json({
    name: person.name,
    lastname: person.lastname,
    age: person.age,
    msg: 'get API - controller',
  })
}

const createUser = (req, res) => {
  res.status(201).json({
    msg: 'post API - controller',
  })
}

const updateUser = (req, res) => {
  res.json({
    msg: 'put API - controller',
  })
}

const deleteUser = (req, res) => {
  res.json({
    msg: 'delete API - Controller',
  })
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
