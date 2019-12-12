function importAll(map, r) {
  r.keys().forEach(key => {
    map[key] = r(key);
  });
}

export {
  importAll
}
