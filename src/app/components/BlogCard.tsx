import { Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react'

export interface BlogType {
    id: number,
    title: string,
    body: string
}

export default function BlogCard({ id, title, body }: BlogType) {
  return (
    <Link href={`/blog/${id}`}>
      <Card
        className="max-w-sm cursor-pointer"
        imgAlt="Blog Image"
        imgSrc="https://www.instyle.com/thmb/7U5NLLZsAIcY24dTzN64ZN7MRMI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kendall-edd181f0f3704ed5b9cd56bbd99bb3ae.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Title: {title}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
      </Card>
    </Link>
  )
}