

import { Card } from "flowbite-react";

export function CarouselComponent() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://www.instyle.com/thmb/7U5NLLZsAIcY24dTzN64ZN7MRMI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kendall-edd181f0f3704ed5b9cd56bbd99bb3ae.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    
  );
}
