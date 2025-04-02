import { title } from "@/components/primitives";
import { CodeBlock } from "@/components/ui/code-block";

export default function BlogPage() {
  const data = [
    { type: "int", desc: "Tamsayı", example: "int yas = 25;" },
    { type: "bool", desc: "Doğru/Yanlış", example: "bool devamEt = true;" },
    { type: "char", desc: "Tek bir karakter", example: "char harf = 'A';" },
    { type: "double", desc: "Ondalıklı sayı", example: "double pi = 3.14;" },
    { type: "string", desc: "Metin verisi", example: "string ad = \"Mehmet\";" },
    { type: "object", desc: "Her türlü veri saklanabilir", example: "object veri = 4;" },
    { type: "array", desc: "Diziler", example: "int[] sayilar = {1, 2, 3};" }
  ];
  
  const code = `string isim = "Ahmet";\ndouble pi = 3.14;`;
  const code2 = `string mesaj = "Merhaba dünya!";\nobject rastgele = 42;\nint[] numaralar = {10, 20, 30};`;
  const code3 = `int 1sayi = 10; //sayı ile başlayamaz !\nstring ad soyad = "Ali"; // boşluk olamaz`;
  const code4 = `int yas = 30;\nstring adSoyad = "Ali Veli";`;

  return (
    <div className="container mx-auto px-4">
      <h1 className={title()}>
        🎯 C# Değişkenler: Türler, Kullanım Alanları ve Örnekler
      </h1>
      <p className="mt-8 text-lg">
        Kanka, C#&apos;ta program yazarken bir şeyleri saklaman, değiştirmen
        veya işlemen gerekiyor, değil mi? İşte burada devreye değişkenler
        giriyor. Değişkenleri, bilgisayarın RAM&apos;inde tuttuğun post-it
        notları gibi düşünebilirsin. Hangi türde bilgi saklayacağını
        belirtiyorsun, sonra da onu kullanıyorsun.
      </p>
      <p className="mt-4 text-lg">
        Hadi şimdi, C# değişkenlerini detaylıca bir inceleyelim.
      </p>
      <div className="my-8 flex flex-col gap-y-6">
        <h2 className="text-3xl font-bold">1. Değişken Nedir?</h2>
        <p>
          Kanka, değişken dediğin şey aslında bir veriyi tutan kutu gibi
          düşünebilirsin. Örneğin, yaşını bir değişkende tutabilirsin:
        </p>
        <CodeBlock filename="Program.cs" language="cs" code="int yas=25;" />
        <p>Burada:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>int → Bunun bir tamsayı olduğunu söylüyor.</li>
          <li>yas → Değişkenin adı, yani senin ona verdiğin isim.</li>
          <li>25 → İçine koyduğun veri, yani değişkenin değeri.</li>
        </ul>
        <p>Başka bir örnek verelim:</p>
        <CodeBlock filename="Program.cs" language="cs" code={code} />

        <ul className="list-disc pl-6 space-y-2">
          <li>string: Metin saklamak için kullanılıyor (yani kelime, cümle vs.).</li>
          <li>double: Ondalıklı sayılar için kullanılıyor.</li>
        </ul>
      </div>
      <div className="my-8 flex flex-col gap-y-6">
        <h2 className="text-3xl font-bold">2. Değişken Türleri</h2>
        <p>
          Şimdi C# değişkenlerini biraz daha yakından tanıyalım. C#&apos;ta
          değişkenler değer türleri ve referans türleri olmak üzere ikiye
          ayrılıyor.
        </p>
        <h3 className="text-2xl font-bold">A) Değer Türleri (Value Types)</h3>
        <p>
          Bunlar direkt ramin belirli bir bölgesinde saklanıyor ve değeri direkt
          tutuyorlar. Yani içine ne koyarsan, hafızada o veri duruyor.
        </p>
        <div className="flex flex-col gap-y-4">
          <table className="text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Veri Türü</th>
                <th className="border border-gray-300 p-2">Açıklama</th>
                <th className="border border-gray-300 p-2">Örnek</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 4).map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{item.type}</td>
                  <td className="border border-gray-300 p-2">{item.desc}</td>
                  <td className="border border-gray-300 p-2 font-mono">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold">B) Referans Türleri (Reference Types)</h3>
        <p>Bu arkadaşlar ise, değerin kendisini değil, bellekteki yerini saklıyor. Yani veriyi hafızanın başka bir yerine koyuyor, değişken ise o verinin adresini tutuyor.</p>
        <div className="flex flex-col gap-y-4">
          <table className="text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Veri Türü</th>
                <th className="border border-gray-300 p-2">Açıklama</th>
                <th className="border border-gray-300 p-2">Örnek</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(4).map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{item.type}</td>
                  <td className="border border-gray-300 p-2">{item.desc}</td>
                  <td className="border border-gray-300 p-2 font-mono">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-bold">Örnek Kullanım:</p>
        <CodeBlock filename="Program.cs" language="cs" code={code2} />
        <p>
          💡 Not: string, referans türü olmasına rağmen biraz özel bir muamele görüyor. Çünkü değiştirildiğinde aslında yeni bir string oluşturuluyor.
        </p>
      </div>
      <div className="flex flex-col gap-y-6 my-8">
        <h3 className="text-2xl font-bold">3. Değişken Tanımlama Kuralları</h3>
        <p>C#&apos;ta değişken tanımlarken bazı kurallar var:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Harf, rakam ve _ (alt çizgi) içerebilir ama sayıyla başlayamaz.</li>
          <li>✅ Büyük-küçük harf duyarlıdır (isim ve Isim farklı değişkenlerdir).</li>
          <li>✅ Türkçe karakter kullanma, başın ağrımasın.</li>
          <li>✅ Anlamlı isimler ver, int x = 5; yerine int yas = 5; yaz.</li>
        </ul>
        <p className="font-bold">Yanlış:</p>
        <CodeBlock filename="Program.cs" language="cs" code={code3} />
        <p className="font-bold">Doğru:</p>
        <CodeBlock filename="Program.cs" language="cs" code={code4} />
        <h2 className="text-3xl font-bold mt-8">Sonuç:</h2>
        <p>
          Kanka, değişkenler C#&apos;ta veriyi saklama ve işleme için temel
          taşlardan biri. Hangi tür değişkeni nerede kullanacağını bilmek, kod
          yazarken işini çok kolaylaştırır.
        </p>
        <p>Özetle:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Değer türleri: int, double, bool, char vs.</li>
          <li>Referans türleri: string, object, array vs.</li>
          <li>Dönüştürme işlemleri: implicit, explicit, Convert vs.</li>
          <li>var ve dynamic ile esnek değişkenler</li>
        </ul>
        <p>
          Artık değişkenleri iyi anladın! Şimdi bunları bol bol kullanarak kodlarını daha sağlam hale getir! 🚀
        </p>
      </div>
    </div>
  );
}
