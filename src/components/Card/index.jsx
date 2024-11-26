import './index.scss'

export default function Card() {
    return (
        <div className='card'>
            <header>
                <div>card标题</div>
                <div>副标题</div>
            </header>
            <main>
                <div className='content1'>内容区域1永</div>
                <div className='content2'>内容区域2永</div>
                <div className='content3'>内容区域3永</div>
            </main>
            <footer>
                 <button>确认</button>
                 <button>取消</button>
            </footer>
        </div>
    )
}
