import React from 'react';

function HorizontalCard() {
  return (
    <>
      <div className="container-fluid p-3 my-3">
            <h2 className='text-center'>Best Flight Booking Offers</h2>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://images.ixigo.com/image/upload/f_auto/a/f9779a166bcec19d521134d1a0450b92-shydk.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://images.ixigo.com/image/upload/f_auto/q/6184b29bde18accaae09873dafc92fe5-vjptq.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://images.ixigo.com/image/upload/f_auto/a/987408e10d9467b47a7d766351f6cfe9-kguir.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ borderColor:"steelblue", borderRadius: '30px', cursor: 'pointer' }} >
              <img
                src="https://images.ixigo.com/image/upload/f_auto/a/e418b28ea94bf053a0de1c045f2a5c03-jhecz.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px'  }}
              />
            </div>
          </div>

          {/* Add similar code for the other cards */}
        </div>
      </div>

      <div className="container-fluid p-3 my-3 bg-info">
        <div className="row mt-3 justify-content-center">
          <div className="col-md-3">
            <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
              <img
                src="https://images.ixigo.com/image/upload/f_auto/b92c9f70ed60f51f5483f60666347809-pmlea.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
              <img
                src="https://images.ixigo.com/image/upload/f_auto/a/f307be07cd117f9a2871a80582e94f8c-uhzbh.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
              <img
                src="https://images.ixigo.com/image/upload/f_auto/covid/b89367c584b384b35d8d2b36dbef2902-cukya.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center" style={{ border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
              <img
                src="https://images.ixigo.com/image/upload/f_auto/Intl/d434f68d4107ffa0251fd69f3cb082bd-nqchi.png"
                className="card-img-top"
                alt="Card"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }}
              />
            </div>
          </div>

          {/* Add similar code for the other cards */}
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
