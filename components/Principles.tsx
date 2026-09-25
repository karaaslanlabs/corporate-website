const principles = [
  ["01", "Kanıtlamadan ölçeklemeyiz", "Büyümeyi heyecana değil, gerçek kullanım ve iş sonuçlarına dayandırmayı tercih ederiz."],
  ["02", "Yalnızca gerektiği kadar karmaşık", "İhtiyaç duyulmayan sistemi, özelliği veya altyapıyı sırf mümkün olduğu için eklemeyiz."],
  ["03", "Güvenilirlik tasarımın parçasıdır", "Güvenlik, gizlilik, açıklık ve tutarlılığı ürün ve sistem kararlarının tasarım girdisi olarak ele alırız."],
  ["04", "Her döngüde daha yetenekli", "Gerçek işlerde kanıtlanan bilgi, altyapı ve çalışma kabiliyetlerini sonraki işleri daha iyi yapmak için biriktiririz."],
];

export function Principles() {
  return (
    <section className="principles-next" aria-labelledby="principles-next-title">
      <div className="section-shell">
        <div className="principles-next__head">
          <p className="section-code">05 / ÇALIŞMA PRENSİPLERİ</p>
          <h2 id="principles-next-title">Güç, iddiadan önce <span>disiplinden gelir.</span></h2>
        </div>

        <div className="principles-next__list">
          {principles.map(([number, title, body]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="principles-next__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
