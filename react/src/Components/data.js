import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
    name: 'test',
    location: './test.db',
},
() => {},
error => {console.log(error)}
);

