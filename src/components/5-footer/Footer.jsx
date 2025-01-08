import './footer.css';
export default function Footer() {
    return (
        <footer className='flex'>
            <div>
                <ul className='flex'>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Uses</a></li>
                </ul>
            </div>
            <div className=''>
                <p>© 2024 Hassan Sayed. All rights reserved.</p>
            </div>
        </footer>
    )
}
