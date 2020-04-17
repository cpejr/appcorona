const jwt = require('jsonwebtoken');

module.exports = {

  async login(request, response) {
    try {

      // Autenticate user
      const password = request.params.password;

      if (password !== process.env.PASSWORD) {
        return response.status(400).json({ error: 'Invalid password' });
      }

      const accessToken = jwt.sign({}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });

      return response.json({ accessToken: accessToken });
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: 'Fatal error while validating login' })
    }
  },

  async authenticateToken(request, response, next) {
    const authHeader = request.headers['authorization']
    const [scheme, token] = authHeader && authHeader.split(' ');

    if (token === null) return response.status(401).json({ error: 'No token provided' });

    if (!/^Bearer$/i.test(scheme))
      return response.status(401).json({ error: 'Token badformatted' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) return response.status(403).json({ error: 'Invalid authorization token' });

      next();
    });
  }
}
