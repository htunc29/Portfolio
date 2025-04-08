import { Card,CardHeader,CardBody,CardFooter } from "@heroui/card"
import { Link } from "@heroui/link"
import { Image } from "@heroui/image"


export default function page() {
  return (
    <div className="grid grid-cols-4">
<Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="newfavicon.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Dijital Oyun Programlama</p>
          <p className="text-small text-default-500">Vize Proje</p>
        </div>
      </CardHeader>
      
      <CardBody>
        <p>Unity kullanarak geliştirilen topun engelleri aşıp coin topladığı bir oyun.</p>
      </CardBody>
      
      <CardFooter>
        <Link  showAnchorIcon href="projects/dijital-oyun-programlama-vize-proje">
          Detaylar
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
