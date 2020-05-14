## Installation

### Backend
- BE is based on [this](https://github.com/davidcsejtei/express-sql-boilerplate) boilerplate
- so the setup is pretty much same as for the boilerplate :)
- npm install
- modify config/config.json for your DB config
- .\node_modules\.bin\sequelize db:create OR
- modify package.json line 8 and remove .\node_modules\.bin\sequelize db:drop && part from it
- npm run setupdb
- npm run start

### Frontend
- FE is based on create-react-app, so shouldn't be hard to start
- npm install
- modify apiRoot url(s) in src/config.js
- npm run start