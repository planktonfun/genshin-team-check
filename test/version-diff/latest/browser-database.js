class BrowserDatabase {
  constructor(dbName, objectStoreName) {
    this.dbName = dbName;
    this.objectStoreName = objectStoreName;
    this.db = null;
  }

  deleteDatabase() {
    return new Promise((resolve, reject) => {
      const DBDeleteRequest = window.indexedDB.deleteDatabase(this.dbName);

      DBDeleteRequest.onerror = (event) => {
        reject("Error deleting database.", this.dbName);
      };

      resolve("Database deleted successfully", this.dbName);
    });
  }

  openConnection() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(this.objectStoreName, { keyPath: "id", autoIncrement: true });
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  setDataById(key, data) {
    return new Promise((resolve, reject) => {

      const transaction = this.db.transaction([this.objectStoreName], "readwrite");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const addRequest = objectStore.put({ id: key, data });

      addRequest.onsuccess = (event) => {
        resolve();
      };

      addRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  insertRow(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], "readwrite");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const addRequest = objectStore.add(data);

      addRequest.onsuccess = (event) => {
        resolve();
      };

      addRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  getDataById(recordId) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], "readonly");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const getRequest = objectStore.get(recordId);

      getRequest.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
          resolve(data);
        } else {
          resolve(null);
        }
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  deleteByKey(recordId) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], "readwrite");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const getRequest = objectStore.delete(recordId);

      getRequest.onsuccess = (event) => {
        const data = event.type;
        if (data == "success") {
          resolve(data);
        } else {
          reject("Record not found.");
        }
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  async deleteAllData() {
    const keys = await this.getAllKeys();
    keys.forEach(
      async (key)=> await this.deleteByKey(key)
    );
  }

  getAllKeys() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], "readonly");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const getRequest = objectStore.getAllKeys();

      getRequest.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
          resolve(data);
        } else {
          reject("Record not found.");
        }
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  getAllData() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], "readonly");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const getRequest = objectStore.getAll();

      getRequest.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
          resolve(data);
        } else {
          reject("Record not found.");
        }
      };

      getRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }
}