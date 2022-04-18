import minimongo from "minimongo";

/**
 * This function is used for the indexdb connection of the browser to store the data
 * @param {String} dbName The DbName used for the minimongo
 * @returns the db instance
 */
function HomePageMinimongo(dbName = "HomePageCreator") {
  const IndexedDb = minimongo.IndexedDb;

  const userHomepage = {};

  userHomepage.getPage = function (query = {}) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "pages",
            function () {
              db.pages.find(query).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  userHomepage.createPage = function (newPage) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "pages",
            async function () {
              db.pages.upsert(newPage, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  userHomepage.removePage = function (removePage = {}) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "pages",
            function () {
              db.pages.remove(removePage, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  return userHomepage;
}

export default HomePageMinimongo;
