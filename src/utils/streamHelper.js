const stream = weex.requireModule('stream');

export default {
  fetch(options, hasProgress = false) {
    const promises = [];

    return new Promise((resolve) => {
      stream.fetch(options, (ret) => {
        promises.push(new Promise((resolve2, reject2) => {
          if (!ret.ok) {
            resolve2(ret);
          } else {
            reject2(ret);
          }
        }));

        resolve(Promise.all(promises));
      }, (response) => {
        if (hasProgress) {
          promises.push(new Promise((resolve1) => {
            resolve1(response);
          }));
        }
      });
    });
  },
};
