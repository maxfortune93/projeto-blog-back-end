module.exports = app =>{
    app.route('/users')
       .post(app.api.user.saveNewUserData)
       .get(app.api.user.getUser)

    app.route('/users/:id')
       .put(app.api.user.saveNewUserData)
       .get(app.api.user.getUserById)
}