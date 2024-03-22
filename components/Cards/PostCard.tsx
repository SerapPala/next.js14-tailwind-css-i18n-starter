import React from "react";
import Image from "next/image";
import Link from "next/link";


//#region type

export interface PostItemModel {
  id: number;
  title?: string;
  image?: string;
  price?: number;
  noButton?: boolean;
  link?: string;
}

//#endregion

const PostCard: React.FC<{ post: PostItemModel }> = ({ post }) => {
  return (
      <div className="rounded-3xl h-full min-h-[348px] group slider-item">
        <Link href={"/products"}>
          <div className="relative">
            <Image
                width={249}
                height={268}
                src={post?.image || " "}
                alt="product-image"
                style={{ width: "100%" }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 w-full h-0 flex flex-col justify-center
       items-center bg-white-700 opacity-0
      group-hover:h-full group-hover:opacity-90 duration-500 z-10"
            ></div>
            <div
                className="absolute bottom-0 left-0 right-0 w-full h-0 flex flex-col justify-center
       items-center opacity-0
      group-hover:h-full group-hover:opacity-100 duration-500 z-20"
            >
              <div className="bttn__detail flex flex-shrink-0 items-center p-3.5 w-[3.25rem] h-[3.25rem] rounded-full bg-whitw-950 border-2 border-[#CB8FFF] ">
          kkn
              </div>
            </div>
          </div>
          <div className="pt-4 text-grey-950 title-xs font-franie text-center">
            {post.title}
          </div>
        </Link>
      </div>
  );
};

export default PostCard;
