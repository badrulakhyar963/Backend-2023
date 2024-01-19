// import database
const db = require("../config/database");
// membuat class News
class News {
  // buat fungsi

  //Method all untuk menampilkan semua data
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM news`;
      db.query(query, (err, results) => {
        return resolve(results);
      });
    });
  }

  // Metohd create untuk menambahkan/insert data
  static async create(data) {
    // melakukan penambahan/insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = `INSERT INTO news SET ?`;
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // menampilkan data yang baru saja ditambahkan/diinsert
    const news = this.find(id);
    return news;
  }

  // Method update untuk mengupdate data yang ada berdasarkan id
  static async update(id, data) {
    // melakukan update data ke database
    await new Promise((resolve, reject) => {
      const sql = `UPDATE news SET ? WHERE id = ?`;
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // menampilkan data yang baru saja diupdate
    const news = await this.find(id);
    return news;
  }

  // Method delete untuk menghapus data yg dipilih berdasrkan id
  static delete(id) {
    // Melakukan mengapus data yg dipilih
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM news WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // method find untuk mencari data yg dipilih berdasarkan id
  static find(id) {
    // Melakukan pencarian data yg dipilih berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM news WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        const [news] = results;
        resolve(news);
      });
    });
  }

  // Method search untuk mencari data berdasarkan title
  static search(title) {
    // Melakukan pencarian data yg dipilih berdasrkan title
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM news WHERE title LIKE ?`;
      db.query(query, [`%${title}%`], (err, results) => {
        resolve(results);
      });
    });
  }

  // Method findByCategory untuk mencari data berdasarkan category yang dipilih
  static findByCategory(category) {
    // Melakukan pencarian data yg dipilih berdasrkan category
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM news WHERE category = ?`;
      db.query(query, [category], (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class News
module.exports = News;
