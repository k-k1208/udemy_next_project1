import fetch, {Response} from 'node-fetch'

const apiUrl:string= "https://jsonplaceholder.typicode.com/posts";
/*
//以下の自作の型をconst posts= await res.json(); に適用したかったができずに断念
//fetchAPIの使用上仕方ないのだと　https://qiita.com/markey/items/62f08105ae98139e731f
*/

type jsonType = {
    userId:number;
    id:number;
    title:string;
    body:string
}

export type jsonArrType = jsonType[]

export const getAllPostsData= async ():Promise<jsonArrType> => { 
    // const url:URL = new URL(apiUrl); //URL型をfetchに渡せなかったので削除
    /*
    fetch()はPromiseオブジェクトをreturn
    resolve関数には引数としてResponseオブジェクトが渡される　
    https://qiita.com/tomoyukilabs/items/9b464c53450acc0b9574
    */
    const res:Response= await fetch(apiUrl);
    /*
    .json()もPromiseオブジェクトを返却 
    https://developer.mozilla.org/ja/docs/Web/API/Response/json
    */
    
    // 型アサーションで型推論された型Promise<unknown>をjsonArrType型に変更：型アサーションを使うのは適切ではない
    const posts= (await res.json()) as jsonArrType; 
    return posts;
}
