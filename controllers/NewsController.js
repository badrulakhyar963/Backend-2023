// import Model News
const News = require("../models/News");

// buat class NewsController
class NewsController {
  // buat fungsi
  // menambahkan keyword async memberitahu proses asynchronous

  /// INDEX ///
  // membuat metohod index untuk mendapatkan semau resource
  async index(req, res) {
    // memanggil method static all dengan async await
    const news = await News.all();

    if (news.length > 0) {
      const data = {
        message: "Get All Resource",
        //  data : menampilkan seluruh resource
        data: news,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Data is empty",
    };

    return res.status(200).json(data);
  }

    /// STORE ///
  // membuat metohod store untuk menambahkan resource
  async store(req, res) {
    const { title, author, content, url, url_image, category } = req.body;

    // menambahkan validasi data
    if (!title || !author || !content || !url || !url_image || !category) {
      const data = {
        message: "All fileds must be filled correctly",
      };

      return res.status(422).json(data);
    }
// memanggil method static create dengan async await
    const news = await News.create(req.body);

    const data = {
      message: `Resource is added succesfully`,
      // data : menampilkan resource yang berhasil ditambahkan
      data: news,
    };

    return res.status(201).json(data);
  }


  /// UPDATE ///
  // membuat metohod update untuk mengedit resource yang dipilih berdasrkan id
  async update(req, res) {
    const { id } = req.params;
    // memanggil method static find id dengan async await
    const news = await News.find(id);

    if (news) {
      const news = await News.update(id, req.body);
      const data = {
        message: `Resource is update succesfully`,
        // data : menampilkan single resource yang di-update
        data: news,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

    /// DESTROY ///
  // membuat metohod destroy untuk menghapus resource yang dipilih berdasrkan id
  async destroy(req, res) {
    const { id } = req.params;
    // memanggil method static find id dengan async await
    const news = await News.find(id);

    if (news) {
      await News.delete(id);
      const data = {
        message: `Resource is delete successfully`,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

    /// show ///
  // membuat metohod show untuk nemapilkan resource yang dipilih berdasrkan id
  async show(req, res) {
    const { id } = req.params;
    // memanggil method static find id dengan async await
    const news = await News.find(id);

    if (news) {
      const data = {
        message: "Get Detail Resource",
        // data : menampilkan single resource
        data: news,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  /// SEARCH ///
  // membuat metode search untuk menampilkan resource yang dipilih berdasarkan pencarian title
  async search(req, res) {
    const { title } = req.query;
    
    // memanggil method static search dengan async await
    const news = await News.search(title);

    if (news.length > 0) {
      const data = {
        message: "Get Searched Resource",
        // data: menampilkan semua resource yang berhasil dicari
        data: news,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  /// SPORT ///
  // membuat metode sport untuk menampilkan resource yang dipilih berdasarkan pencarian category sport
  async sport(req, res) {
    // memanggil method static findByCategory dengan async await
    const news = await News.findByCategory("sport");

    const data = {
      message: "Get Sport Resource",
      // total: menampilkan total resource sport
      data: news,
    };

    return res.status(200).json(data);
  }

  /// FINANCE ///
  // membuat metode finance untuk menampilkan resource yang dipilih berdasarkan pencarian category finance
  async finance(req, res) {
    // memanggil method static findByCategory dengan async await
    const news = await News.findByCategory("finance");

    const data = {
      message: "Get Finance Resource",
      // data menampilkan semua resource finance
      data: news,
    };

    return res.status(200).json(data);
  }

  /// AUTOMOTIVE ///
  // membuat metode automotive untuk menampilkan resource yang dipilih berdasarkan pencarian category automotive
  async automotive(req, res) {
    // memanggil method static findByCategory dengan async await
    const news = await News.findByCategory("automotive");

    const data = {
      message: "Get Automotive Resource",
      // data menampilkan semua resource automotive
      data: news,
    };

    return res.status(200).json(data);
  }
}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;
