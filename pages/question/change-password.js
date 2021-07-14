import Header from "../header";
import Footer from "../footer";
import Thumbup from '../../public/image/icon-Thumbup.svg'
import Thumbdown from '../../public/image/icon-Thumbdown.svg'

export default function change_pass() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid">
          <span> دسته بندی مقالات  سوالات متداول</span>
          <a className="card">
            <div className="desc">
              <span>چگونه میتوانم رمز عبور خودم را عوض کنم؟</span>
              <span>آموزش درباره اینکه اگر رمز عبورتان را فراموش کرده اید، باید چه کاری انجام دهید.این مقاله همچنین مشکلات پیرامون ورود به حساب گوگل را نیز پوشش میدهد.</span>
            </div>
          </a>
          <div className="forget-pass-box">
            <div className="warning">
              <span>کادر اخطار - بستن حساب عملی است که<b> قابل برگشت نیست</b></span>
              <span>پس از بسته شدن ، آدرس ایمیل آزاد می شود و میتواند برای ایجاد یک حساب هنگام جدید استفاده شود.البته، داده های قبلیبه هیچ وجه با حساب جدید مرتبط نخواهد بود.</span>
            </div>
            <h1>مراحل بازنشانی رمز عبور در صورت فراموشی</h1>
            <ol >
              <li>صفحه ی فراموشی رمز عبور را باز کنید</li>
              <li>آدرس ایمیلی که با آن در هنگام ثبت نام کرده اید را وارد کنید</li>
              <li>دکمه ی تایید را بزنید</li>
              <li>صندوق دریافت ایمیل خود را باز کنید.باید ایمیلی از طرف پشتیبانی هنگام با عنوان "فراموشی رمز عبور" برای شما ارسال شده باشد بر روی دکمه ی بازنشانی رمزعبور کلیک کنید</li>
              <li>اکنون رمز عبور جدید خود را در دو کادر موجود وارد کنید</li>
            </ol>

            <h1>مراحل ویرایش رمز عبور</h1>
            <ol>
              <li>صفحه تنظیمات را باز کنید</li>
              <li>وارد بخش "مدیریت حساب" شوید</li>
              <li>در قسمت "اطلاعات حساب" بر روی دکمه ی "ویرایش رمز عبور" کلیک کنید</li>
              <li>رمز عبور فعلی و رمز عبور جدید را وارد کرده و بر روی دکمه ی تایید کلیک کنید.</li>
            </ol>
            
            <div></div>

            <h1>هنوز قادر به ویرایش رمز عبور خود نیستید؟</h1>
            <span>اگر ایمیل بازنشانی رمز عبور را دریافت نکردید، یا قادر به بازنشانی رمز عبور خود نیستید یا نمیتوانید وارد سیستم شوید، لطفا از طریق ایمیل با تیم پشتیبانی ما تماس بگیرید و ما تمام تلاش خود را برای کمک به شما انجام خواهید داد. </span>
          </div>
          <div className="Survey">
            <span>آیا این مقاله برای شما مفید بود؟</span>
            <div className="box-like">
              <div className="thumbup-down">بله<img src={Thumbup} alt="like"/></div>
              <div className="thumbup-down">خیر<img src={Thumbdown} alt="unlike"/></div>
            </div>
          </div>

        </div>

      </div>
      <Footer />
      <style jsx>
        {`
              .container{
                display:flex;
                justify-content:center;
                align-items:center;
                direction:rtl;
            }

            .grid {
                display: flex;
                flex-direction:column;
                width:786px;
                height:100%; 
            }

            .card {
                width:100%;
                flex-basis: 45%;
                padding: 20px 20px 20px 60px;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                direction:rtl;
                background-color:#daf6e8;;
                margin:20px 0;
              }

              .desc{
                display: flex;
                flex-direction:column;
                align-items:start;
                width:100%;
                color:#018a25;
                text-align: justify;
                font-size:13px;
              }

              .forget-pass-box{
                  border:1px solid #dcdce4;
                  padding:20px;
                  border-radius:8px;
                  margin:20px 0;
                  font-size:13px;
              }

              h1{
                font-size: inherit !important;
              }

              .warning{
                width:100%;
                height:135px;
                border-radius: 8px;
                background-color: #faecec;
                display:flex;
                flex-direction:column;
                justify-content:center;
                font-size:13px;
                padding:20px;
                line-height: 1.5em;
              }

              .Survey{
                width: 100%;
                height: 126px;
                border-radius: 8px;
                background-color:#DAF6E8;
                margin-bottom:40px;
                color:#0063ba;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                padding:20px;
              }

              .box-like{
                width:120px;
                display:flex;
                justify-content:space-between;
                align-items:center;
              }

              .thumbup-down{
                width:60px;
                height:40px;
                border-radius:8px;
                justify-content:center;
                align-items:center;
              }
              .thumbup-down:hover{
                background-color:#C4E1FF;
              }
              `}
      </style>
      <style jsx global>{`
        html,
        body {
          direction:rtl;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}