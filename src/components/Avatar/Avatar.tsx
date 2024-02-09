import React from 'react'

interface Props {
  picture: string,
  nickname: string
}

export default function Avatar({ picture, nickname } : Props) {
  return (
    <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 ml-2 rounded-full"
            src={
              picture
                ? picture
                : 'https://via.placeholder.com/150'
            }
            alt={nickname}
          />
          <div className="font-medium  text-gray-500">
            <div>{nickname}</div>
          </div>
        </div>
  )
}
