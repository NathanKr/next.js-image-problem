import Link from "next/link";
import styles from '@/styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href='/image-with-file'>ImageWithFile</Link>
            <Link href='/image-with-data'>ImageWithData</Link>
        </div>
    );
};

export default Navbar;