import Header from "./header";
import Link from 'next/link'

export default function Question() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="grid">
                    <span> دسته بندی مقالات  سوالات متداول</span>
                    <a className="card">
                        <div className="content-card">
                            <div className="box"></div>
                            <div className="text-card">
                                <div className="desc">
                                    <span>سوالات متداول</span>
                                    <span className="low-opacity">پاسخ هایی به رایج ترین سوالاتی که درباره استفاده از هنگام پرسیده می شود</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <span>حساب کاربری و محیط کار</span>
                    <Link href="/activity">
                        <div className="question-box">
                            <strong>چرا هر بار که میخواهم وارد برنامه شوم، باید رمز عبور را دوباره تعیین کنم؟</strong>
                            <span>این مقاله بیشترین علت بروز این مسئله را در محیط های اداری هنگام اتصال کاربران به شبکه هاییکه از پروکسی استفاده میکند را توضیح میدهد.</span>
                        </div>
                    </Link>
                    <Link href="/question/change-password">
                        <div className="question-box">
                            <strong>چگونه میتوانم رمز عبور خودم را عوض کنم؟</strong>
                            <span>آموزش درباره اینکه اگر رمز عبورتان را فراموش کردید باید چه کاری انجام دهید. این مقاله همچنین مشکلات پیرامون ورود با حساب گوگل را نیز پوشش میدهد.</span>
                        </div>
                    </Link>
                    <Link href="/activity">
                        <div className="question-box">
                            <strong>چگونه با حساب کاربری گوگل وارد هنگام شوم؟</strong>
                            <span>راهنمای ورود به هنگام با حساب کاربری گوگل و همچنین مراحل عیب یابی برای مشکلات ورود با حساب گوگل</span>
                        </div>
                    </Link>
                </div>
            </div>

            <style jsx>{`
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
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    direction:rtl;
                    background-color:#daf6e8;;
                    margin:20px 0;
                  }

                  .content-card{
                    display:flex;
                    flex-direction:row;
                    font-size:13px;
                    line-height:2em;
                  }

                  .box{
                    width: 96px;
                    height: 96px;
                    margin: 0 0 0 16px;
                    border-radius: 8px;
                    background-color: white;
                  }

                  .text-card{
                    width:100%;
                    align-self: center;
                  }

                  .desc{
                    display: flex;
                    flex-direction:column;
                    align-items:start;
                    width:100%;
                    color:#018a25;
                  }

                  .question-box{
                    width: 100%;
                    height:110px;
                    padding:15px 15px 15px 23px;
                    border-radius: 8px;
                    border: solid 1px #dcdce4;
                    background-color: #ffffff;
                    margin:20px 0;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    font-size:12px;
                    line-height:2em;
                  }
                  .question-box:hover{
                    cursor:pointer;
                  }

                  .question-box span{
                      opacity:0.7;
                  }
                  
             `}</style>

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