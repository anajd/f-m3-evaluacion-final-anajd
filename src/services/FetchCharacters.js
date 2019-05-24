const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const FetchCharacters = () => fetch(ENDPOINT).then(res => res.json());

export { FetchCharacters };
