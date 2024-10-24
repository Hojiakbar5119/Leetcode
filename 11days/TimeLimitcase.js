// var TimeLimitedCache = function () {
//   this.cache = new Map();
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function (key, value, duration) {
//   const currentTime = Date.now();
//   const existing = this.cache.has(key);
//   if (existing && existing.expiration > currentTime) {
//     this.cache.set(key, { value, expiration: currentTime + duration });
//     return true;
//   }
//   this.cache.set(key, { value, expiration: currentTime + duration });

//   setTimeout(() => {
//     if (this.cache.get(key) && this.cache.get(key).expiration <= Date.now()) {
//       this.cache.delete(key);
//     }
//   }, duration);
//   return false;
// };

// /**
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function (key) {
//   const currentTime = Date.now();
//   const entry = this.cache.get(key);
//   if (entry && entry.expiration > currentTime) {
//     return entry.value;
//   }
//   this.cache.delete(key)
//   return -1;
// };

// /**
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function () {
//     const currentTime = Date.now();
//     let count = 0;
//     for (const entry of this.cache.values()) {
//       if (entry.expiration > currentTime) {
//         count++;
//       }
//     }
//     return count;
// };

// /**
//  * const timeLimitedCache = new TimeLimitedCache()
//  * timeLimitedCache.set(1, 42, 1000); // false
//  * timeLimitedCache.get(1) // 42
//  * timeLimitedCache.count() // 1
//  */


class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    /** 
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const currentTime = Date.now();
        let isExisting = false;

        // Check if the key already exists
        if (this.cache.has(key)) {
            const entry = this.cache.get(key);
            // If it is still valid, mark it as existing
            if (entry.expiration > currentTime) {
                isExisting = true;
            }
        }

        // Update the cache with the new value and expiration time
        this.cache.set(key, {
            value: value,
            expiration: currentTime + duration
        });

        return isExisting; // Return true if the key existed and was not expired, otherwise false
    }

    /** 
     * @param {number} key
     * @return {number} value associated with key or -1 if expired
     */
    get(key) {
        const currentTime = Date.now();
        const entry = this.cache.get(key);

        // Check if the key exists and hasn't expired
        if (entry && entry.expiration > currentTime) {
            return entry.value; // Return the value if not expired
        }

        return -1; // Return -1 if the key is expired or doesn't exist
    }

    /** 
     * @return {number} count of non-expired keys
     */
    count() {
        const currentTime = Date.now();
        let count = 0;

        // Count the number of valid keys
        for (const [key, entry] of this.cache.entries()) {
            if (entry.expiration > currentTime) {
                count++; // Increment count if key is still valid
            }
        }

        return count;
    }
}


//  Usage example:
 const timeLimitedCache = new TimeLimitedCache();
 console.log(timeLimitedCache.set(1, 42, 1000)); // Output: false (new key)
 console.log(timeLimitedCache.get(1)); // Output: 42 (before expiration)
 console.log(timeLimitedCache.count()); // Output: 1 (1 key)
 setTimeout(() => {
     console.log(timeLimitedCache.get(1)); // Output: -1 (after expiration)
 }, 1100);
 console.log(timeLimitedCache.count()); // Output: 0 (after expiration)

