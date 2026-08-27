const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "David",
    email: "david@example.com"
  }
];

export const getUsers = (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
};

export const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.json({
    success: true,
    data: user
  });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  const user = {
    id: users.length + 1,
    name,
    email
  };

  users.push(user);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user
  });
};