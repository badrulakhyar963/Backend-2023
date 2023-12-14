/**
 * Function to display download results
 * @param {string} result - Downloaded file name
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`);
}

/**
* Fungsi untuk download file
* @param {function} callback - Function callback show
*/
const download = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          const result = "windows-10.exe";
          resolve(result);
      }, 3000);
  });
}

// Async function to initiate the download process using async/await
const main = async () => {
  try {
      const result = await download();
      showDownload(result);
  } catch (error) {
      console.error("Error during download:", error);
  }
};

main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
