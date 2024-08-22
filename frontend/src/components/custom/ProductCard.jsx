import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Share } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <img
          src={image}
          className="aspect-square object-contain"
          loading="lazy"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          className="aspect-square h-full w-auto"
        >
          <Share size={14} />
        </Button>
        <Button className="w-full">Add ${price}</Button>
      </CardFooter>
    </Card>
  );
};

export const ProductCardSkelton = () => {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader>
        <Skeleton className={"w-full aspect-square"} />
      </CardHeader>
      <CardContent>
        <CardTitle className="line-clamp-2">
          <Skeleton className={"w-1/2 h-4"} />
        </CardTitle>
        <CardDescription className="line-clamp-3 mt-3">
          <Skeleton className={"w-full h-4"} />
          <Skeleton className={"w-full h-4 mt-1"} />
          <Skeleton className={"w-full h-4 mt-1"} />
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-2">
        <Skeleton className={"w-8 h-8"} />

        <Skeleton className={"w-full h-8"} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
