import logoFooter from '../public/image/Hengam-logo.png'

export default function Footer() {
    return (
        <div>
            <footer>
            <a
              href="https://app.hengamapp.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoFooter} alt="Hengam" className="logo-footer" />
            </a>
          </footer>
           
            <style jsx>{`
             footer {
                width: 100%;
                height: 168px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color:#f6f8fa;
              }
      
              .logo-footer{
                width:120px;
              }
`}</style>
        </div>
    )
}