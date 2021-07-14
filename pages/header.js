import Logo from '../public/image/logo.png'
import Hengam from '../public/image/Hengam.png'

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="top-header">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                        <img src={Hengam} alt="logo-hengam" />
                    </div>
                    <div className="text-header">
                        <span>راهنمای استفاده و معرفی سرویس های هنگام</span>
                    </div>
                    <div className="btn">
                        <button>
                            ثبت نام
                        </button>
                        <button>
                            ورود به هنگام
                        </button>
                    </div>
                </div>
                <div>
                    <input type="search" id="search" name="search" placeholder="جستجو در مقالات..." />
                </div>
            </div>
            <style jsx>{`
                .header{
                    width:100%;
                    height:160px;
                    margin: 0 0 24px;
                    padding:10px 20px;
                    // opacity:0.15;
                    background-color:#DAF6E8;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                  }
          
                  .top-header{
                    display:flex;
                    align-items:center;
                    width:59.5%;
                    height:40%;
                    justify-content:space-between;
                  }

                  
        img{
            width:50px;
          }
  
          .logo{
            height:50%;
            margin-bottom: 22px;
          }
  
          .logo img:last-child{
            padding-bottom: 16px;
          }

          .text-header span{
            font-size:16px;
            color:#3d8cc7;
            font-family: IRANYekanRd;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            margin: 14px 0px 14px 165px;
          }
          
        .btn Button{
            background-color: #0bbf65;
            width: 80px;
            height: 30px;
            margin: 8px 16px 8px 0;
            border-radius: 8px;
            color:#ffffff;
            border:1px solid #0bbf65;
          }
  
          .btn Button:first-child{
            background-color:#DAF6E8 ;
            border:1px solid #0bbf65;
            color:#0bbf65;
          }

          
        input[type=search]{
            width: 781px !important;
            height: 36px;
            border-radius: 11px;
            background-color:#ECFAF3;
            border:1px solid #ECFAF3;
            direction: rtl;
            margin: 30px 0 0 0;
            padding: 0 10px 0 0;
          }
  
          input[type=search]:onclick{
            border:1px solid #ECFAF3;
          }
  
`}</style>
        </div>
    )
}