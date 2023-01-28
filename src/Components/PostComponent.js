import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setShowPosts } from '../Store/show';

export default function PostComponent({posts}) {
    const dispatch = useDispatch();
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    const showFunction = (object) => {
        dispatch(setShowPosts(object))
    }

    posts.map((post, i) => {
        return (
            <div key={i} className="sm:grid grid-cols-2 gap-20 w-4/5 my-8 mx-auto py-15  border-b border-gray-200 ">
                <div className="h-72" >
                    <img src={post.image_path_api} width="700" alt={post.title} />
                </div>
                <div>
                    <h2 className="text-gray-700 font-bold text-5xl pb-4 ">
                        {post.title}
                    </h2>
                    <span className="text-gray-700">
                        By <span className="font-bold italic text-gray-800">
                            {post.user_id}
                        </span>, Created on {formatter.format(Date.parse(post.updated_at))}
                    </span>
                    <br />
                    <small className="mt-8 font-bold text-yellow-800">Contact me on <a className="italic" href="tel:+234{{$post->social_link}}">
                        +234{post.social_link}
                    </a> </small>
                    <p className="text-xl pt-8 pb-10 text-gray-700 leading-8 font-light ">
                        {post.body.slice(0, 25) + '...'}
                    </p>
                    <Link to='/blog/posts/show'
                        onClick={() => showFunction(post)}
                        className="uppercase hover:bg-green-700 bg-green-500 text-gray-100 text-sm font-extrabold py-3 px-8 rounded-3xl "
                    >
                        Keep Reading
                    </Link>
                </div>
            </div>
        )
    })
}
