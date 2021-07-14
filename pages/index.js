import Head from 'next/head'

import { Row, Col } from 'antd';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import Link from 'next/link'
import Header from './header';
import Footer from './footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col span={12} offset={6}>
          <main>
            <Header/>
            <div className="grid">
              <span className="title">دسته بندی مقالات</span>
              <Link href="/hengam">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>هنگام چیست؟</span>
                        <span className="low-opacity">تعداد مقالات</span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">خلاصه ای از اهداف هنگام و معرفی سرویس ها</span>
                        <span>5عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/activity">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>زمان سنج و ثبت فعالیت ها</span>
                        <span className="low-opacity">تعداد مقالات</span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">توضیحات ابتدایی درباره  نحوه استفاده زمان سنج و ثبت فعالیت ها</span>
                        <span>8عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/shop">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>خرید اشتراک و قیمت ها</span>
                        <span className="low-opacity">تعداد مقالات  </span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">درباره سرویس های پولی هنگام</span>
                        <span>7عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/analysis">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>آنالیز فعالیت ها و گزارشات</span>
                        <span className="low-opacity">تعداد مقالات</span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">مشاهده فعالیت های ثبت شده توسط کارمندان و به اشتراک گذاری گزارشات</span>
                        <span>16عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/team">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>مدیریت تیم ها</span>
                        <span className="low-opacity">تعداد مقالات </span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">آموزش مشاهده روند کاری اعضای تیم، مدیریت دستی آنها و اضافه وحذف کردن اعضا</span>
                        <span>12عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/project">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>مدیریت پروژه ها</span>
                        <span className="low-opacity">تعداد مقالات</span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">مشاهده روند پیشرفت و مدیریت بودجه و هزینه ها</span>
                        <span>10عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/backup">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>وارد کردن و پشتیبان گیری اطلاعات</span>
                        <span className="low-opacity">تعداد مقالات</span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">راهکارهایی برای خروجی گرفتن از داده های هنگام و بازگردانی اطلاعات</span>
                        <span>7عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/question">
                <a className="card">
                  <div className="content-card">
                    <div className="box"></div>
                    <div className="text-card">
                      <div className="desc">
                        <span>سوالات متداول</span>
                        <span className="low-opacity">تعداد مقالات </span>
                      </div>
                      <div className="desc">
                        <span className="low-opacity">پاسخ هایی به رایج ترین سوالاتی که درباره استفاده از هنگام پرسیده می شود</span>
                        <span>14عدد</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </main>

        <Footer/>
          
        </Col>
      </Row>

      <style jsx>{`
        span{
          color: black;
        }

        .grid {
          display: flex;
          flex-direction:column;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .title{
          direction:rtl;
          margin-left:47%;
        }

        .card {
          width:58%;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          direction:rtl;
        }

        .desc{
          display: flex;
          justify-content: space-between;
          width:100%;
        }

        .box{
          width: 96px;
          height: 96px;
          margin: 0 0 0 16px;
          border-radius: 8px;
          background-color: #f2f4f8;
        }

        .content-card{
          display:flex;
          flex-direction:row;
          font-size:13px;
          line-height:2em;
        }

        .text-card{
          width:100%;
          align-self: center;
        }

        .low-opacity{
          opacity:0.4;
        }

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
  )
}
