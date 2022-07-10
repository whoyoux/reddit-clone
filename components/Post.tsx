import Link from "next/link";
import { FC } from "react";

import { BsShareFill } from "react-icons/bs";

type PostType = {
  id: string;
  username: string;
  imageUrl: string;
};

const Post: FC<PostType> = ({ id, username, imageUrl }) => {
  return (
    <div className="w-full flex flex-col md:flex-row my-5 bg-white justify-between rounded-2xl max-w-[300px] mx-auto md:w-full md:max-w-none md:h-72">
      <div className="h-56 overflow-hidden md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="w-full rounded-t-xl md:hidden " />
      </div>

      <div className="flex flex-col mx-10 mb-10 my-10  md:h-[calc(100%-80px)] md:justify-between">
        <div>
          <div className="flex justify-between">
            <div>u/{username}</div>
            <div className="flex items-center">
              <BsShareFill />
            </div>
          </div>
          <Link href={id}>
            <h1 className="text-xl my-2 truncate md:overflow-auto md:text-clip md:whitespace-normal md:mt-10 md:line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </Link>
        </div>

        <div className="flex items-center justify-between text-sm text-black/80">
          <div>208 comments</div>
          <div className="text-xl">{">"}</div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt=""
        className="rounded-r-xl hidden md:block w-[40%]"
      />
    </div>
  );
};

export default Post;
