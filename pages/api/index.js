export default function handler(req, res) {
    res.status(500).json({type: "500", message: "Sorry you can't fetch information from this route. try adding /new /album /popular"})
}