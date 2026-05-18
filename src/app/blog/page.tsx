

import React from 'react'
import BlogComponent from '../components/BlogComponent';
import { blogType } from '../lib/blog/blog-type';
import { profile } from 'console';
import { posix } from 'path';

export default function BlogPage() {
    const blogs:blogType[] = [
    {
        profile : 'https://m.media-amazon.com/images/I/8118PNJv1XL._AC_UF894,1000_QL80_.jpg',
        name: "Justin", 
        position : "Singer"
    } ,
    {
        profile : 'https://m.media-amazon.com/images/I/8118PNJv1XL._AC_UF894,1000_QL80_.jpg',
        name: "Justin", 
        position : "Singer"
    } ,
    {
        profile : 'https://m.media-amazon.com/images/I/8118PNJv1XL._AC_UF894,1000_QL80_.jpg',
        name: "Justin", 
        position : "Singer"
    } ,
    {
        profile : 'https://m.media-amazon.com/images/I/8118PNJv1XL._AC_UF894,1000_QL80_.jpg',
        name: "Justin", 
        position : "Singer"
    } 

    ]
    
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-8 ">
        {
            blogs?.map(({profile, name, position}, _) => (
                <BlogComponent 
                key={_}
                profile={profile}
                name={name}
                position={position}/>
            ))
        }
    </div>
  )
}
