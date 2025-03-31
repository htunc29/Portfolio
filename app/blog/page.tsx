import { title } from "@/components/primitives";
import {Card,CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Button} from "@heroui/button";
import {Alert} from "@heroui/alert";

export default function BlogPage() {
  return (
    <div>
        <h1 className={title()}>Bloglar</h1>
        <div className={"mt-8"}>
        <Alert color={"primary"} title={"Çok yakında buradayız"}/>
        </div>

    </div>
  );
}
