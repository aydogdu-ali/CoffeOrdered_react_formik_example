import React from 'react'
import Kahve from "../assets/kahvepicture.jpg"

const Home = () => {
  return (
    <div className='home'>
      <h1>Kahvenin Tarihi</h1>
      <img src={Kahve} alt="kahvepicture" />
      <p>
        Kahvenin ilk kullanımına dair çeşitli efsaneler bulunmaktadır.
        Bunlardan en meşhuru, Kaldi yahut Halid adındaki Etiyopyalı bir keçi
        çobanı hakkındadır. Bu efsane, batı edebiyatında fazlaca ilgi gördüğü
        için son derece popülerdir. Söz konusu hikâye miladi 800 yılına kadar
        uzanmaktadır. Rivayet edildiğine göre, Kaldi yahut Halid adındaki bu
        keçi çobanı, meçhul bir bitkinin meyvelerini tüketen keçilerinde bir
        takım uyarıcı tesirlerin meydana geldiğini ve keçilerin son derece
        enerjik olduğunu gözlemlemiştir. Kendisi de bu meyveleri denediğinde,
        aynı durumu yaşamıştır. Durumu bölgesindeki bir din adamına bildirmiş ve
        söz konusu meçhul meyveler hususundaki birkaç denemeden sonra bugünkü
        kahve içeceği keşfedilmiştir.
      </p>
      <br />
      <p>
        Etiyopyalı bir Arap olan Şeyh Şazili 14. yüzyıl sonlarında yaşamış
        olması muhtemel bir Sufi Şeyhi’dir. Kahveyi ilk içtiği rivayet edilen
        kişilerden biridir. Gece ibadetinde dinç ve uyanık kalabilmek için
        özellikle geceleri kahve içtiği, ve kahveyi ilk kullanan sufilerden biri
        olduğu belirtilmiştir. 16. yüzyılın Arap yazarı Ceziri’ye göre kahveyi
        ilk içen kişi ez-Zebhani olarak bilinen Yemenli Cemalleddin Ebu Abdullah
        Muhammed İbn Said’dir. Bir olay yüzünden Aden’i terk ederek Etiyopya’ya
        giden Zebhani orada kahve içen insanlarla karşılaşmış; Aden’e döndüğünde
        hastalanmış ve aklına kahve içmek gelmiş. Kahve onu iyileştirmiş.
        Kahve’nin yorgunluk ve uyuşukluk giderme, canlılık ve dinçlik kazandırma
        özelliklerini keşfetmiş.
      </p>
    </div>
  );
}

export default Home