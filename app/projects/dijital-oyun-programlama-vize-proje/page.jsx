import React from 'react'
import { CodeBlock } from '@/components/ui/code-block'
import Video from '../../components/video'

export default function page() {
  const code=`using System;
using System.Collections;
using System.IO;
using System.Threading;
using UnityEditor.SearchService;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour
{
    public float moveForce = 10f;
    private Rigidbody rb;
    public GameObject zemin;
    public Text WinLoseText;
    public Text scoreText;
    private int score = 0;
    public AudioSource audioSource;
    public AudioClip coinSound;
    public AudioClip wallSound;
    public AudioClip winSound;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        WinLoseText.gameObject.SetActive(false);


    }
    void FixedUpdate()
    {
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        Vector3 force = new Vector3(horizontalInput, 0f, verticalInput) * moveForce;

        rb.AddForce(force);
        if (rb.position.y < 0f)
        {
            WinLoseText.gameObject.SetActive(true);
            WinLoseText.color = Color.red;
            WinLoseText.text = "Kaybettin!";
            audioSource.PlayOneShot(wallSound);
            Time.timeScale = 0;
        }

    }
    void Update()
    {

    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Engel"))
        {
            Debug.Log("Engel ile çarpıştım");
            audioSource.PlayOneShot(wallSound);
            WinLoseText.gameObject.SetActive(true);
            WinLoseText.color = Color.red;
            WinLoseText.text = "Kaybettin!";
            Time.timeScale = 0;

        }
        if (collision.gameObject.CompareTag("Finish"))
        {
            WinLoseText.gameObject.SetActive(true);
            audioSource.PlayOneShot(winSound);
            WinLoseText.color = Color.green;
            WinLoseText.text = "Kazandın!";
            Time.timeScale = 0;
        }
    }


    void OnTriggerEnter(Collider other)
    {

        if (other.gameObject.CompareTag("Coin"))
        {
            audioSource.PlayOneShot(coinSound);
            score += 1;
            scoreText.text = "Skor: " + score.ToString();
            Destroy(other.gameObject);
        }
    }

}
`
const code2=`using UnityEngine;

public class CameraController : MonoBehaviour
{

    public GameObject player;
    public Vector3 offset;
    void Start()
    {
        offset=transform.position-player.transform.position; 
    }


    void Update()
    {
        transform.position=player.transform.position+offset;
    }
}
`
const code3=`using UnityEngine;

public class CoinController : MonoBehaviour
{
    void Start()
    {
        
    }
    void Update()
    {
        transform.Rotate(0, 100 * Time.deltaTime, 0);
    }
   
}
`
const code4=`using System.Collections;
using UnityEngine;

public class ObstacleAction : MonoBehaviour
{
    public float   hiz,hareketLimit,kapanisBeklemeSuresi,acilisBeklemeSuresi;
    private Vector3 baslangic,bitis;
    public Yonler yon;
    bool hareket=true;
    string durum="kapanıyor";
    
    void Start()
    {
        baslangic=transform.position;   // hareketin başlangıç noktası nesneyi koyduğumuz yer
        if(yon==Yonler.dikey)        // hareketin yönüne göre bitiş noktası belirlenir
            bitis=baslangic+new Vector3(0,hareketLimit,0);
        else if(yon==Yonler.yatay)
            bitis=baslangic+new Vector3(hareketLimit,0,0);
        else if(yon==Yonler.derinlik)
            bitis=baslangic+new Vector3(0,0,hareketLimit);
        
    }

    void Update()
    {
        if(hareket)     // hareket true ise hareket devam eder
        {
            if(yon==Yonler.yatay)   // hareketin yönüne göre hareket devam eder
            {
                transform.position=Vector3.MoveTowards(transform.position,bitis,hiz*Time.deltaTime);
            }                       //MoveTowards iki nokta arasında hareket etmeyi sağlar. Normalde manuel kontrol etmekten daha kolay.
            else if(yon==Yonler.dikey)
            {  
                transform.position=Vector3.MoveTowards(transform.position,bitis,hiz*Time.deltaTime);
            }
            else if(yon==Yonler.derinlik)
            {  
                transform.position=Vector3.MoveTowards(transform.position,bitis,hiz*Time.deltaTime);
            }
            
            
        }
        
        if(transform.position==bitis)   // nesne bitiş noktasına ulaştığında hareket durur ve durum değişir
        {    
            hareket=false;
            bitis=baslangic;    // bitiş noktası başlangıç noktası olur
            baslangic=transform.position;   // başlangıç noktası nesnenin bulunduğu yer olur
            
            if(durum=="kapanıyor")  // durum kapanıyorsa açılır duruma geçer ve bekleme süresi kadar bekler
            {
                durum="aciliyor";
                StartCoroutine(bekle(kapanisBeklemeSuresi));
            }
            else if(durum=="aciliyor")  // durum açılıyorsa kapanır duruma geçer ve bekleme süresi kadar bekler
            {
                durum="kapanıyor";
                StartCoroutine(bekle(acilisBeklemeSuresi));
            }
            
        }
        
    }
    //IEnumerator fonksiyonları belirli bir süre beklemek için kullanılır
    IEnumerator bekle(float sure){  // bekleme süresi kadar bekler ve hareketi true yapar
        yield return new WaitForSeconds(sure);  // sure kadar bekler
        hareket=true;   // hareketi true yapar, başlatır.
    }

}
public enum Yonler{ // hareketin yönlerini tanımlamak için enum (değerlerin listesi) kullandık
        yatay,
        dikey,
        derinlik
    }`
    const code5=`
using UnityEngine;

public class Rotator : MonoBehaviour
{
	public float speed = 3f;


    // Update is called once per frame
    void Update()
    {
		transform.Rotate(0f, 0f, speed * Time.deltaTime / 0.01f, Space.Self);
	}
}
`

  return (
    <div>
        <h1 className="text-3xl mb-3">Dijital Oyun Programlama Vize Projesi</h1>
        <p className="text-2xl mb-3">Proje İçeriği</p>
        <p className="text-lg mb-3">Unity ile 3D bir oyun geliştirilmiştir. Oyun, bir karakterin engellerden kaçınarak hedefe ulaşmaya çalıştığı bir yapıya sahiptir. Oyuncu, karakteri yönlendirmek için klavye kontrollerini kullanır ve hedefe ulaşmak için engellerden kaçınmalıdır.</p>
        <p className="text-lg mb-3">Proje, Unity oyun motoru kullanılarak geliştirilmiştir. Oyunun temel özellikleri şunlardır:</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Karakter Kontrolü: Oyuncu, karakteri yönlendirmek için klavye kontrollerini kullanır.</li>
            <li>Engeller: Oyuncunun kaçınması gereken engeller bulunmaktadır.</li>
            <li>Hedef: Oyuncunun ulaşması gereken bir hedef bulunmaktadır.</li>
            <li>Ses Efektleri: Oyun sırasında ses efektleri eklenmiştir.</li>
        </ul>
        <h3  className='text-2xl my-3'>Oyuncu Kontrolü</h3>
        <CodeBlock  language='csharp' code={code} filename='PlayerController.cs' />
        <h3  className='text-2xl my-3'>Kamera Kontrolü</h3>
        <CodeBlock  language='csharp' code={code2} filename='CameraController.cs' />
       <h3  className='text-2xl my-3'>Skor (Coin) Kontrolü</h3>
        <CodeBlock  language='csharp' code={code3} filename='CoinController.cs' />
        <h3  className='text-2xl my-3'>Hareketli Engel Kontrolü</h3>
        <CodeBlock  language='csharp' code={code4} filename='ObstacleAction.cs' />
        <h3  className='text-2xl my-3'>Pendulum ve Dönme Dolap Kontrolü</h3>
        <CodeBlock  language='csharp' code={code5} filename='Rotator.cs' />
        <h3 className='text-3xl my-8'>Oyun Videosu</h3>
        <Video/>
    </div>
  )
}
