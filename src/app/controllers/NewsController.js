class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        res.send('thong tin mới');
    }
}

module.exports = new NewsController();
