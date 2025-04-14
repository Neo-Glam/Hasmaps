class HashMap {
  constructor() {
    this.table = new Array(16);
    this.size = 16;
    this.loadFactor = 0.75;
    this.length = 0;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = Math.floor(
        (primeNumber * hashCode + key.charCodeAt(i)) % this.size
      );
    }
    return Math.floor(hashCode % this.size);
  }
  checkLoadLevel() {
    const loadLevel = this.length / this.size;
    if (loadLevel > this.loadFactor) {
      const tableBackup = this.table;
      this.clear();
      this.size *= 2;
      this.table.length = this.size;
      for (let i = 0; i < tableBackup.length; i++) {
        if (tableBackup[i]) {
          tableBackup[i].forEach((element) => {
            this.set(element[0], element[1]);
          });
        }
      }
    }
    return loadLevel;
  }
  length() {
    return this.length;
  }
  clear() {
    this.table = new Array(this.size);
    this.length = 0;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
        return;
      } else bucket.push([key, value]);
    }
    this.length++;
    this.checkLoadLevel();
  }
  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return true;
    }
    return false;
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return null;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) bucket.splice(bucket.indexOf(sameKeyItem, 1));
      this.length--;
      return true;
    }
    return false;
  }
  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++)
      if (this.table[i]) {
        this.table[i].forEach((element) => {
          keys.push(element[0]);
        });
      }
    return keys;
  }
  values() {
    const values = [];
    for (let i = 0; i < this.table.length; i++)
      if (this.table[i]) {
        this.table[i].forEach((element) => {
          values.push(element[1]);
        });
      }
    return values;
  }
  entries() {
    const entries = [];
    for (let i = 0; i < this.table.length; i++)
      if (this.table[i]) entries.push(this.table[i]);
    return entries;
  }
}

const test = new HashMap();
