import Image from 'next/image';
import React from 'react';

export default function Message(props: any) {
  const isMe = props.senderId === props.account_id;
  return isMe ? (
    <div className="w-full justify-end items-end flex mt-3 mb-1">
      <div className="flex-row items-end flex">
        <div className="mr-1">{props.time}</div>
        <div className={`mt-3`}>
          <div className="flex-row flex items-center">
            <div className="bg-blue-500 py-1 px-3 rounded max-w-[230px]">
              <div>{props.message}</div>
            </div>
            {isMe ? (
              <div className="border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-blue-500"></div>
            ) : null}
          </div>
        </div>
        <div className="h-full flex-1 flex-col justify-start">
          <Image
            className="rounded-full h-10 w-10 mx-2 items-center"
            src={props.img_url}
            alt="profile_logo"
            width={30}
            height={30}
            quality={100}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full justify-start items-end flex mt-3 mb-1">
      <div className="flex- flex items-center">
        <Image
          className="rounded-full h-10 w-10 mx-2 items-center"
          src={props.img_url}
          alt="profile_logo"
          width={30}
          height={30}
          quality={100}
        />
        <div className="flex-row flex items-end justify-start">
          <div className={`mt-3`}>
            <div className="flex-row flex  items-center">
              <div className="border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-blue-500 "></div>
              <div className="bg-blue-500 py-1 px-3 rounded max-w-[230px]">
                <div>{props.message}</div>
              </div>
            </div>
          </div>
          <div className="ml-1">{props.time}</div>
        </div>
      </div>
    </div>
  );
}
