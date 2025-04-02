import { title } from "@/components/primitives";
import {Card,CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Button} from "@heroui/button";
import {Alert} from "@heroui/alert";
import { CodeBlock } from "@/components/ui/code-block";
import { Code } from "@heroui/code";
import { Snippet } from "@heroui/snippet";
export default function BlogPage() {
    const data=[
        {
            type:"int",
            desc:"TamSayı",
            example:"int yas = 25;"
        }
    ]
    const code=`string isim = "Ahmet";\ndouble pi = 3.14;`
    const code2=`string mesaj = "Merhaba dünya!";\nobject rastgele = 42;\nint[] numaralar = {10, 20, 30};`
    const code3=`int 1sayi = 10; //sayı ile başlayamaz !\nstring ad soyad = "Ali"; // boşluk olamaz`;
    const code4=`int yas = 30;\nstring adSoyad = "Ali Veli";`;
    `
`
  return (
    <div>
      <h1 className={title()}>🎯 C# Değişkenler: Türler, Kullanım Alanları ve Örnekler</h1>
      <p className="mt-8 text-lg ">
      Kanka, C#’ta program yazarken bir şeyleri saklaman, değiştirmen veya işlemen gerekiyor, değil mi? İşte burada devreye değişkenler giriyor. Değişkenleri, bilgisayarın RAM'inde tuttuğun post-it notları gibi düşünebilirsin. Hangi türde bilgi saklayacağını belirtiyorsun, sonra da onu kullanıyorsun.

Hadi şimdi, C# değişkenlerini detaylıca bir inceleyelim.
      </p>
      <div className="my-4 flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold">1. Değişken Nedir?</h2>
        <p>Kanka, değişken dediğin şey aslında bir veriyi tutan kutu gibi düşünebilirsin. Örneğin, yaşını bir değişkende tutabilirsin:</p>
        <CodeBlock filename="Program.cs" language="cs" code="int yas=25;"    highlightLines={[9, 13, 14, 18]}/>
        <p>Burada:</p>
        <ul>
            <li>int → Bunun bir tamsayı olduğunu söylüyor.</li>
            <li>yas → Değişkenin adı, yani senin ona verdiğin isim.</li>
            <li>25 → İçine koyduğun veri, yani değişkenin değeri.</li>
        </ul>
        <p>Başka bir örnek verelim:</p>
        <CodeBlock filename="Program.cs" language="cs"   highlightLines={[9, 13, 14, 18]} code={code}/>
            
        
        <ul>
            <li>string: Metin saklamak için kullanılıyor (yani kelime, cümle vs.).</li>
            <li>double: Ondalıklı sayılar için kullanılıyor.</li>
        </ul>
      </div>
      <div className="my-4 flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold">2. Değişken Türleri </h2>
      <p>Şimdi C# değişkenlerini biraz daha yakından tanıyalım. C#’ta değişkenler değer türleri ve referans türleri olmak üzere ikiye ayrılıyor.</p>
      <h3 className="text-2xl font-bold">A) Değer Türleri (Value Types)</h3>
      <p>Bunlar direkt RAM’in belirli bir bölgesinde saklanıyor ve değeri direkt tutuyorlar. Yani içine ne koyarsan, hafızada o veri duruyor.</p>
      <table className="text-center">
        <thead>
        <tr>
          <th>Veri Türü</th>
          <th>Açıklama</th>
          <th>Örnek</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>int</td>
          <td>Tamsayı</td>
          <td>int yas=25;</td>
        </tr>
        <tr>
          <td>int</td>
          <td>Tamsayı</td>
          <td>int yas=25;</td>
        </tr>
        <tr>
          <td>bool</td>
          <td>Doğru/Yanlış</td>
          <td>bool devamEt = true;</td>
        </tr>
        <tr>
          <td>char</td>
          <td>Tek bir karakter</td>
          <td>char harf = 'A';</td>
        </tr>
        </tbody>
      </table>
      
      <h3 className="text-2xl font-bold">B) Referans Türleri (Reference Types)</h3>
      <p>Bu arkadaşlar ise, değerin kendisini değil, bellekteki yerini saklıyor. Yani veriyi hafızanın başka bir yerine koyuyor, değişken ise o verinin adresini tutuyor.</p>
      <table className="text-center ">
       <thead>
       <tr>
          <th>Veri Türü</th>
          <th>Açıklama</th>
          <th>Örnek</th>
        </tr>
       </thead>
       <tbody>
       <tr>
          <td>string</td>
          <td>Metin verisi</td>
          <td>string ad = "Mehmet";</td>
        </tr>
        <tr>
          <td>object</td>
          <td>Her türlü veri saklanabilir</td>
          <td>object veri = 4;</td>
        </tr>
        <tr>
          <td>array</td>
          <td>Diziler</td>
          <td>int[] sayilar = {1, 2, 3};</td>
        </tr>
        <tr>
          <td>char</td>
          <td>Tek bir karakter</td>
          <td>char harf = 'A';</td>
        </tr>
       </tbody>
      </table>
      <p className="font-bold">Örnek Kullanım:</p>
      <CodeBlock filename="Program.cs" language="cs" code={code2}   highlightLines={[9, 13, 14, 18]}/>
      <p>💡 Not: string, referans türü olmasına rağmen biraz özel bir muamele görüyor. Çünkü değiştirildiğinde aslında yeni bir string oluşturuluyor.</p>
      </div>
      <div className="flex flex-col gap-y-4  my-4">
      <h3 className="text-2xl font-bold my-4">3. Değişken Tanımlama Kuralları (Casting)</h3>
      <p>C#’ta değişken tanımlarken bazı kurallar var:</p>
      <ul>
        <li>✅ Harf, rakam ve _ (alt çizgi) içerebilir ama sayıyla başlayamaz.</li>
        <li>✅ Büyük-küçük harf duyarlıdır (isim ve Isim farklı değişkenlerdir).</li>
        <li>✅ Türkçe karakter kullanma, başın ağrımasın.</li>
        <li>✅ Anlamlı isimler ver, int x = 5; yerine int yas = 5; yaz.</li>
        
      </ul>
      <p className="font-bold">Yanlış:</p>
      <CodeBlock filename="Program.cs" language="cs" code={code3}   highlightLines={[9, 13, 14, 18]}/>
      <p className="font-bold">Doğru:</p>
      <CodeBlock filename="Program.cs" language="cs" code={code4}   highlightLines={[9, 13, 14, 18]}/>
      <h2 className="text-2xl font-bold">Sonuç:</h2>
      <p>Kanka, değişkenler C#’ta veriyi saklama ve işleme için temel taşlardan biri. Hangi tür değişkeni nerede kullanacağını bilmek, kod yazarken işini çok kolaylaştırır.

Özetle:

Değer türleri: int, double, bool, char vs.

Referans türleri: string, object, array vs.

Dönüştürme işlemleri: implicit, explicit, Convert vs.

var ve dynamic ile esnek değişkenler

Artık değişkenleri iyi anladın! Şimdi bunları bol bol kullanarak kodlarını daha sağlam hale getir! 🚀</p>
      </div>
    </div>
  );
}
