/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(
        resolve => {
            if (millis > 0) {
                setTimeout(() => resolve(), millis);
                return;
            }
            resolve();
        }
    );
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */