import Link from "next/link";
import { jsonType } from "../lib/posts";
// id一個分を表示するコンポーネント
/*
{post}:jsonTypeとしてエラーになっていた
https://awesome-linus.com/2019/11/19/typescript-curly-bracket-type-any-error/
*/
const Post = ({post}:{post:jsonType}) => {

    return(
        <>
            <span>{post.id}</span>
            {" : "}
            <Link href={`/posts/${post.id}`}>
                <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
                    {post.title}
                </span>
            </Link>
            <br></br>
        </>
    );
}


export default Post;