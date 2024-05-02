import express from 'express';
import dbClient from '../database/config.js'
const app = express();
const port = 3000;

import userRepository  from '../database/repositories/UserRepository.js';

function addLinks(user) {
  return {
    ...user,
    links: [
      { rel: 'self', href: `/users/${user?.id || '{userId}'}` },
      { rel: 'update', href: `/users/${user?.id || '{userId}'}`, method: 'PUT' },
      { rel: 'delete', href: `/users/${user?.id || '{userId}'}`, method: 'DELETE' }
    ]
  };
}

await dbClient.connect();

app.use(express.json());

app.get('/users', async (req, res) => {
  try {

    const users = await userRepository.getAllUsers();

    return res.json({
      users,
      links: addLinks(),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await userRepository.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(addLinks(user));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body.name);
    res.status(201).json(addLinks(user));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const user = await userRepository.updateUser(req.params.id, req.body.name);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(addLinks(user));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    await userRepository.deleteUser(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
