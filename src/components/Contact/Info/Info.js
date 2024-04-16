import { faLocationDot, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import classNames from 'classnames/bind';
import styles from './Info.module.scss';

import { ContactLink } from '../ContactLink';
import { ContactItem } from '../ContactList';
const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('header')}>Don't be shy !</h3>
            <p className={cx('desc')}>
                Mọi thông tin liên hệ của mình ở bên dưới nhé, bạn có thể mail cho mình nếu thích &gt;&lt;
            </p>
            <ContactItem icon={faLocationDot} title={'address'} value={'VietNam'} />
            <ContactItem icon={faEnvelopeOpen} title={'Email'} value={'contact.l2md3v@gmail.com'} />
            <ContactItem icon={faPhone} title={'Phone'} value={'03260xxxx1'} />
            <div className={cx('link')}>
                <ContactLink icon={faFacebook} link={'https://www.facebook.com/l2md3v'} />
                <ContactLink icon={faInstagram} link={'https://www.instagram.com/l2md3v/'} />
                <ContactLink icon={faGithub} link={'https://github.com/l2md3v'} />
            </div>
        </div>
    );
}

export default Info;
