import "./Intro.css";

export default function Intro() {
  return (
    <div className="pt-130 overflow-hidden bg-black2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="section-title mb-45">
              <h2 className="title style2">Introducing  Ecrox Swap</h2>
              <p className="sec-text">True wealth in the world of virtual currencies</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-4">
            <div className="intro-wrap mt-xl-4">
              <h6 className="intro-wrap-title">Who We Are</h6>
              <p className="intro-wrap-text">
                Ecrox Swap is the official decentralized exchange of the Ecrox Chain, offering users a
                state-of-the-art platform for swapping, staking, and providing liquidity for a wide range of
                digital assets.
              </p>
            </div>
            <div className="intro-wrap">
              <h6 className="intro-wrap-title">Key Features of Ecrox Swap</h6>
              <p className="intro-wrap-text text-justify">
                Ecrox Swap allows users to swap various cryptocurrencies and tokens with minimal fees and
                slippage, thanks to its automated market-making (AMM) mechanism.The platform provides ample
                liquidity for a wide range of assets, ensuring that traders can execute their transactions
                swiftly and with minimal price impact
              </p>
            </div>
            <div className="intro-wrap">
              <h6 className="intro-wrap-title">User-Friendly</h6>
              <p className="intro-wrap-text text-justify">
                User-Friendly Interface: Ecrox Swap boasts an intuitive and user-friendly interface, making it
                accessible to both experienced and novice traders.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="intro-thumb1 alltuchtopdown">
              <img src="/assets/img/update/normal/intro_1-1.png" alt="img" />
            </div>
            <div className="intro-wrap mt-50">
              <h6 className="intro-wrap-title">Our Mission & Vission</h6>
              <p className="intro-wrap-text text-justify">
                Ecrox Swap aims to democratize access to financial services by providing a decentralized
                exchange where users can trade digital assets without relying on traditional intermediaries.
              </p>
              <p className="intro-wrap-text text-justify mt-40">
                By offering low fees and a user-friendly interface, Ecrox Swap seeks to make decentralized
                finance accessible to a broader audience, including those who may not have had access to
                traditional financial services.
              </p>
              <p className="intro-wrap-text text-justify mt-40">
                Ecrox Swap envisions a future where decentralized finance is seamlessly integrated into the
                broader financial landscape, offering users efficient and secure solutions for managing their
                digital assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
