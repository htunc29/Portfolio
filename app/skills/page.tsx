import { title } from "@/components/primitives";
import {Progress} from "@heroui/progress";
import {siteConfig} from "@/config/site";

export default function DocsPage() {

  return (
    <div>
      <h1 className={title()}>Yeteneklerim</h1>
        <div className={"grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-3 mt-8"}>
          {
            siteConfig.mySkills.map((skill, i) => (
                <div key={i}>
                  <h3 className={"mb-3 flex justify-between items-center"}>{skill.name} <b>{skill.value}%</b></h3>
                  <Progress color={skill.color as "primary" | "secondary" | "warning" | "danger" | "success" | "default"} value={skill.value}/>
                </div>
            ))
          }

        </div>
    </div>
  );
}
