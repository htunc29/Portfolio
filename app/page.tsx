import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image } from "@heroui/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex justify-center items-center">
        <Image src="newfavicon.png" alt="Logo" isBlurred isZoomed  width={100} height={100} />
        </div>
        <span className={title()}>Hüseyin&nbsp;</span>
        <span className={title({ color: "violet" })}>Tunç&nbsp;</span>
        <br />
        <span className={title()}>
          .NET DEVELOPER
        </span>
        <div className={subtitle({ class: "mt-4" })}>
         Güzel,hızlı ve modern uygulamalarınızı inşa edelim
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Özgeçmiş (CV)
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Uygulamalarda  <br/> <Code color="primary">.NET,Flutter,React Native,Next JS,React JS</Code><br/>
              gibi son teknolojiler kullanılmaktadır
          </span>
        </Snippet>
      </div>
    </section>
  );
}
