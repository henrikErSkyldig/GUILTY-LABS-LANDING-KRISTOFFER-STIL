"use client";

import Balancer from "react-wrap-balancer";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Button } from "./button";

export function HeroVideoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Watch Video</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h2 className="text-2xl font-semibold mb-4">
          <Balancer>Hero Video Title</Balancer>
        </h2>
      </DialogContent>
    </Dialog>
  );
}
