export const testPostController  = (req, res) => {
    const {name} = req.body
    res.status(200).send(`u name is 4{name}`)

}
