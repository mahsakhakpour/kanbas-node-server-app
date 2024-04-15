import * as dao from "./dao.js";
// let currentUser = null;
// export default function UserRoutes(app) {
  function UserRoutes(app) {

  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);

  const deleteUser = async (req, res) => { 
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const { role } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
    return;
  };
  app.get("/api/users", findAllUsers);
  const findUserById = async (req, res) => { 
    const user = await dao.findUserById(req.params.userId);
    res.json(user);

  };
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    const currentUser = await dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(status);

   };
  
   const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);

    req.session["currentUser"] = currentUser;
    
    res.json(currentUser);  };
  app.post("/api/users/signup", signup);

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser; 
      // console.log("Signed In"+ req.session["currentUser"] )
   
    res.json(currentUser);
  } else {
    res.sendStatus(401);
  }
   };

   const signout = (req, res) => {
    // currentUser = null;
    req.session.destroy();
    res.sendStatus(200);
  };
  app.post("/api/users/signout", signout);
  
  const profile = async (req, res) => {
    console.log("Profile"+ req.session.currentUser )
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      console.log("Not logged in")
      return;
    }
    console.log("check if profile fetched"+currentUser)
    res.json(currentUser);

   };
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}

export default UserRoutes;