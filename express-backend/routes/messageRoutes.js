const routes = (app) => {
    app.all("/", (req, res) => {
        res.send("Bot is running!")
    })
    // app.use((req, res) => {
    //     res.send("Hello world")
    // })
}

module.exports = routes