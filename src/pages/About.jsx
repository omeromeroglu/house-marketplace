import React from "react"
import { Link } from "react-router-dom"


const About = () => {
  return (
    <>
      <img
        src="https://i.remax.com.tr/photos/employee/77/ac592057108c41e2b4123744a3dae4f1.webp"
        alt="personal photo"
        //make this image a square
        style={{
          width: "20rem",
          height: "24rem",
          borderRadius: "50%",
          margin: "14px auto",
          display: "block",
          padding: "5px"  ,
        }}
      />
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          margin: "0 auto",
          padding: "0",
          marginBottom: "20px",
        }}
      >Emre Ömeroğlu</h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "0 auto",
          padding: "0",
          marginBottom: "20px",
        }}
      >Emre ÖMEROĞLU İle Mülkünüz Güvenilir Ellerde... </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          margin: "0 auto",
          padding: "0",
          marginBottom: "20px",
        }}
      >Merhaba Ben Emre ÖMEROĞLU.</p>
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          margin: "0 auto",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        2001 yılında Samsun/Atakum ilçesinde doğdum. 1 yaşımda ailemin iş sebebi
        ile İzmir/Çeşme ilçesinde yaşamaya başlayıp eğitim öğretim hayatıma da
        burada başladım.
      </p>
      <p style={{
          textAlign: "center",
          fontSize: "1rem",
          margin: "0 auto",
          padding: "15px",
          marginBottom: "20px",
        }}>
        2018 yılında Çeşme Ulusoy Denizcilik Lisesi'nden mezun oldum. Okul
        süresince denizcilik ile uğraştım. 3000GRT a kadar 3. vardiya kaptanlığı
        (zabitliği) ve gerekli sertifikalarımı aldım. Küçüklüğümden beri
        hayatımın bir parçası olan denizcilik ve spor, aldığım eğitimler
        neticesinde bu alanda gelişmemi sağladı. Spor hayatımda da birçok yerde
        çalıştım, eğitim ve sertifikalar aldım. 2019 yılında Antalya'ya
        üniversite okumak için geldim ve yerleştim. Aynı zamanda spor
        eğitmenliği yapmak için Mars Sportif A.Ş MacFit spor klübünde kişisel
        eğitmen olarak çalışmaya başladım. Hayatımın her alanında birçok şey
        öğrenmek ve öğrendiklerimi insanlara aktarmak benim için bir tutku!
        İnsanlar ile olan iletişimim, ticarete olan merakım, fayda sağlamak,
        memnun edebilmek beni çok mutlu ediyor. Gayrimenkul sektörüne
        küçüklüğümden itibaren duyduğum ilgi ve merakım, aldığım eğitimler ve
        sertifikalardan sonra çok daha arttı. 2021 Yılının ikinci yarısından
        itibaren Remax Queen' de muhteşem bir ekip ile hizmet vermeye başladım.{" "}
      </p>
      <p style={{
          textAlign: "center",
          fontSize: "1rem",
          margin: "0 auto",
          padding: "10px",
          marginBottom: "20px",
        }}>
        İNSANLARIN HAYATLARINA DOKUNMAK VE BİR NEBZEDE OLSA UZUN UĞRAŞLARLA
        YAPTIKLARI BİRİKİMLERLE HAYALLERİNDEKİ YERE YADA YATIRIMLARA
        ULAŞMALARINI SAĞLAMAK İÇİN HER ZAMAN BURADA, SİZLERE BİR TELEFON KADAR
        YAKIN OLDUĞUMU BİLDİRMEK İSTERİM.
      </p>

      { (
          <a href="tel:+905063995943"
          
          
            className="primaryButton"
            style={{ marginBottom: "10rem",
            
          }}
          >
            Ara
          </a>
        )}



       
    </>
  )
}

export default About
