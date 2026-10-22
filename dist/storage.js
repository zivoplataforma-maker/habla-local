/* Estado y copias locales. Sin acceso a red. */
(function (root) {
  'use strict';
  const C = typeof module !== 'undefined' ? require('./core.js') : root.HablaCore;
  const KEY = 'habla-v1';
  const KINDS = ['Pronunciación', 'Escritura', 'Escucha de pares', 'Caligrafía', 'Sílabas'];
  const empty = () => ({ favorites: [], custom: [], history: [] });
  function validate(input, now = Date.now()) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw Error('La copia no contiene un registro válido.');
    if (input.version !== undefined && ![1, 2].includes(input.version)) throw Error('Versión de copia no compatible.');
    const state = empty();
    for (const key of ['favorites', 'custom']) {
      if (!Array.isArray(input[key]) || input[key].length > 50000 || !input[key].every(C.validWord)) throw Error(`Lista inválida: ${key}.`);
      state[key] = [...new Set(input[key].map(C.normalize))];
    }
    if (!Array.isArray(input.history) || input.history.length > 1000) throw Error('Historial inválido o demasiado extenso.');
    state.history = input.history.map(item => {
      if (!item || typeof item.word !== 'string' || !item.word.trim() || item.word.length > 100 || /[\u0000-\u001f]/.test(item.word) || !KINDS.includes(item.kind) || !Number.isSafeInteger(item.at) || item.at < 0 || item.at > now + 86400000) throw Error('La copia contiene una actividad inválida.');
      return { word: item.word.trim(), kind: item.kind, at: item.at };
    });
    return state;
  }
  function parse(text) {
    if (typeof text !== 'string' || text.length > 8 * 1024 * 1024) throw Error('La copia supera el tamaño permitido.');
    let data;
    try { data = JSON.parse(text); } catch { throw Error('El archivo no contiene JSON válido.'); }
    return validate(data);
  }
  function merge(current, incoming) {
    const a = validate(current), b = validate(incoming);
    const history = new Map([...a.history, ...b.history].map(x => [JSON.stringify([x.word, x.kind, x.at]), x]));
    const favorites = [...new Set([...a.favorites, ...b.favorites])];
    const custom = [...new Set([...a.custom, ...b.custom])];
    if (favorites.length > 50000 || custom.length > 50000) throw Error('La combinación supera 50.000 palabras. No se aplicó la restauración.');
    const rows = [...history.values()].sort((x, y) => x.at - y.at);
    return { state: { favorites, custom, history: rows.slice(-1000) }, omitted: Math.max(0, rows.length - 1000) };
  }
  function read(storage) {
    let raw = null;
    try {
      raw = storage.getItem(KEY);
      return { state: raw === null ? empty() : parse(raw), locked: false, raw, error: '' };
    } catch (e) { return { state: empty(), locked: true, raw, error: e.message || 'No se puede leer el almacenamiento.' }; }
  }
  function write(storage, state, locked = false) {
    if (locked) throw Error('Se preservó el registro anterior. Exportá tu práctica actual o restaurá una copia válida.');
    const checked = validate(state);
    storage.setItem(KEY, JSON.stringify({ version: 2, ...checked }));
    return checked;
  }
  function serialize(state) { return JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), ...validate(state) }, null, 2); }
  const api = { KEY, KINDS, empty, validate, parse, merge, read, write, serialize };
  if (typeof module !== 'undefined') module.exports = api; else root.HablaStorage = api;
})(typeof window !== 'undefined' ? window : this);
