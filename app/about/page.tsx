import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function AboutPage() {

  return (
    <BackgroundBeamsWithCollision className="bg-white dark:bg-black flex flex-col p-4">
      <h1 className={title()}>Hakkımda</h1>
        <Card className={"mt-4"}>
          <CardHeader className="flex gap-3">
          <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="image.jpg"
              width={40}
          />
            <div className="flex flex-col">
              <p className="text-md">Hüseyin Tunç</p>
              <p className="text-small text-default-500">.Net Developer</p>
            </div>
        </CardHeader>
          <CardBody>
            <p>Ben Hüseyin Tunç, full-stack yazılım geliştiricisiyim. .NET, React, PHP, Python ve C# gibi teknolojilerle masaüstü, web ve mobil platformlar için yenilikçi çözümler üretiyorum. Yazılım geliştirme sürecinde performans, güvenlik ve kullanıcı deneyimi gibi kritik unsurlara odaklanarak projelerimi en iyi hale getirmeyi hedefliyorum.

              Özellikle kurumsal yazılımlar, entegrasyon sistemleri ve büyük ölçekli projeler konusunda deneyim sahibiyim. Vekaletim gibi projelerle hukuk ve teknoloji alanında yenilikçi çözümler sunarken, aynı zamanda  e-ticaret ve sosyal medya gibi farklı alanlarda da çalışmalar yapıyorum.

              Yazılım dünyasında sürekli gelişimin ve öğrenmenin önemine inanıyor, yeni teknolojileri yakından takip ederek güncel ve verimli yazılım çözümleri üretmeye devam ediyorum..</p>
          </CardBody>
        </Card>


    </BackgroundBeamsWithCollision>
  );
}
