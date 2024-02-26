import React from 'react';

interface Props {
  picture?: string | null;
  nickname: string | undefined;
}

export default function Avatar({ picture, nickname }: Props) {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-10 h-10 rounded-full"
        src={picture ? picture : 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'}
        alt={nickname}
      />
      <div className="font-medium  text-gray-500">
        <div>{nickname}</div>
      </div>
    </div>
  );
}
