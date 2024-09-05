import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('sessions.db')

export const init = () => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL,email TEXT NOT NULL,idToken TEXT NOT NULL)',
                [],
                (__,result)=> resolve(result),
                (__,error)=> reject(error),

            )
        })
    })
    return promise
}

export const insertSession = ( {localId,email,idToken}) => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                'INSERT INTO sessionUser (localId,email,idToken) VALUES (?,?,?) ',
                [localId,email,idToken],
                (__,result)=> resolve(result),
                (__,error)=> reject(error),

            )
        })
    })
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                'SELECT * FROM sessionUser',
                [],
                (__,result)=> resolve(result),
                (__,error)=> reject(error),

            )
        })
    })
    return promise
}


export const deleteSession = () => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction(tx=>{
            tx.executeSql(
                'DELETE FROM sessionUser',
                [],
                (__,result)=> resolve(result),
                (__,error)=> reject(error),

            )
        })
    })
    return promise
}