"use client";

import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";

const portfolioList = [
  {
    name: "Portfolio - 1",
    url: "portfolio-1",
  },
  {
    name: "Portfolio - 2",
    url: "portfolio-2",
  },
  {
    name: "Portfolio - 3",
    url: "portfolio-3",
  },
];

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between mb-2">
        <Heading smallHead="Portfolios" />
        <Button onClick={() => router.push("/mgt/portfolios/create")}>
          Create
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        {portfolioList?.map((ele, i) => {
          const { name, url } = ele;
          return (
            <div className="" key={i}>
              <Card className="w-[350px]">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-lg">{name}</CardTitle>
                      <CardDescription className="text-base">
                        Portfolio Description
                      </CardDescription>
                    </div>
                    <Switch id="show-hide" />
                  </div>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">Delete</Button>
                  <Button>Update</Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
