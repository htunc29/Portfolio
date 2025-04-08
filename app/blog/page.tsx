import { title } from "@/components/primitives";
import {Card,CardFooter} from "@heroui/card";
import Image from "next/image";
import {Button} from "@heroui/button";
import {Alert} from "@heroui/alert";
import { CardBody,CardContainer,CardItem } from "@/components/ui/3d-card";
import ColourfulText from "@/components/ui/colourful-text";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";

export default function BlogPage() {

  return (
    <div>
      <h1 className={title()}>
        Bloglar
      </h1>
        <div className={"mt-8"}>
          <div className="grid  grid-cols-1 md:grid-cols-4 gap-4">
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          🎯 C# Değişkenler: Türler, Kullanım Alanları ve Örnekler
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
            <Image
                alt="thumbnail"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                height="1000"
                src={"https://miro.medium.com/v2/resize:fit:1024/1*uhSX5djhrWiguXoWsW_lEw.png"}
                width="1000"
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/blog/csharp-variables"
            className="px-4 py-2 rounded-xl text-xs font-normal "
          >
            Şimdi Oku →
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer>
          </div>

        </div>

    </div>
  );
}
