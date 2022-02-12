import fetch, {Response} from 'node-fetch'

const apiUrl:string= "https://jsonplaceholder.typicode.com/posts";


// データ所得部分
export type jsonType = {
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

// データ所得部分(ダイナミックルーティングに必要なidのみ)
export const getAllPostIds = async () => {
    const res:Response = await fetch(apiUrl);
    const posts = (await res.json()) as jsonArrType;
    return posts.map((post) => {
      return {
        params: {
          id: String(post.id),
        },
      };
    });
  }

// idに対応したブログ一件を所得
export const getPostData = async(id:string):Promise<jsonType> => {
    const path = apiUrl + '/' + id
    const res = await fetch(path);
    const post = (await res.json()) as jsonType;
    return post;
}