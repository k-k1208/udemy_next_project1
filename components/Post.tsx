import Link from "next/link";
// id一個分を表示するコンポーネント
const Post = ({post}:any) => {
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