const storage = weex.requireModule('storage');

export default {

  setItem(key, value) {
    return new Promise((resolve, reject) => {
      storage.setItem(key, value, (e) => {
        if (e.result === 'success') {
          resolve(e);
        } else {
          reject(e);
        }
      });
    });
  },

  getItem(key) {
    return new Promise((resolve, reject) => {
      storage.getItem(key, (e) => {
        if (e.result === 'success') {
          resolve(e);
        } else {
          reject(e);
        }
      });
    });
  },

  removeItem(key) {
    return new Promise((resolve, reject) => {
      storage.removeItem(key, (e) => {
        if (e.result === 'success') {
          resolve(e);
        } else {
          reject(e);
        }
      });
    });
  },

  length() {
    return new Promise((resolve, reject) => {
      storage.length((e) => {
        if (e.result === 'success') {
          resolve(e);
        } else {
          reject(e);
        }
      });
    });
  },

  getAllKeys() {
    return new Promise((resolve, reject) => {
      storage.getAllKeys((e) => {
        if (e.result === 'success') {
          resolve(e);
        } else {
          reject(e);
        }
      });
    });
  },

};
