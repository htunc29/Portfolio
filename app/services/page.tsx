import { title } from "@/components/primitives";
import { Card,CardHeader,CardBody,CardFooter } from "@heroui/card";
import {Image} from "@heroui/image";
export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Hizmetler</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny font-bold">KURUMSAL WEB SİTELERİ</p>
        <small className="text-default-500">Her Firmaya Uygun</small>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://ninjasites.com/images/blog/webpage-creation.png?v=1684153977260389102"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny font-bold">KURUMSAL MASAÜSTÜ UYGULAMALARI</p>
        <small className="text-default-500">Aklınızıa gelen tüm uygulamalar</small>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://experionglobal.com/wp-content/uploads/2024/10/What-is-Desktop-Application-Development.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny font-bold">BOT SİSTEMLERİ</p>
        <small className="text-default-500">Aradığınız her türlü bot</small>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpR36-Ivj1BY7VvyyoSyXToSZwN7NNkOfRg&s"
          width={270}
        />
      </CardBody>
    </Card>
      </div>
    </div>
  );
}
