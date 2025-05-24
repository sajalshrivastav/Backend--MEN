# Express.js Project Setup Notes

## Project Initialization & Setup
1. **Project Creation**
   - Created new directory `Basics`
   - Initialized Node.js project with `npm init`
   - Created initial `package.json`

2. **Dependencies**
   - Installed Express.js framework
   ```bash
   npm install express
   ```
   - Added Nodemon for development
   ```bash
   npm install --save-dev nodemon
   ```

3. **Project Structure**
   ```
   Basics/
   ├── package.json
   ├── package-lock.json
   ├── server.js
   └── NOTES.md
   ```

4. **Server Setup** (server.js)
   ```javascript
   const express = require('express');
   const app = express();
   const PORT = 8383;

   app.listen(PORT, ()=>{
       console.log(`Server is running on port ${PORT}`);
   })
   ```

## Running the Server
- Development mode (with auto-reload):
  ```bash
  npm run dev
  ```
- Regular mode:
  ```bash
  node server.js
  ```

## Next Steps
- [ ] Add routes
- [ ] Configure middleware
- [ ] Set up error handling
- [ ] Add database connection
- [ ] Implement API endpoints

## Notes
- Server running on port 8383
- Using Express.js version 5.1.0
- Nodemon configured for development