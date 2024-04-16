import classNames from 'classnames/bind';
import styles from './Personal.module.scss';

import { Details } from './Details';
import { Card } from './Card';
import { Button } from '../../Button';

const cx = classNames.bind(styles);

function Personal() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('header')}>Personal Infos</h3>
            <div className={cx('contains')}>
                <div data-aos="fade-up-right" className={cx('info')}>
                    <div className={cx('detail')}>
                        <div className={cx('detail_1')}>
                            <Details title={'First Name'} value={'Lam'} />
                            <Details title={'Last Name'} value={'Dev'} />
                            <Details title={'Birthday'} value={'22 Years'} />
                            <Details title={'Sex'} value={'Male'} />
                            <Details title={'Nationality'} value={'VietNamese'} />
                            <Details title={'Address'} value={'Ho Chi Minh City'} />
                            <Details title={'Phone'} value={'0763xxx861'} />
                            <Details title={'Facebook'} value={'facebook.com/l2md3v'} />
                            <Details title={'Language'} value={'Vietnamese, English'} />
                            <Details title={'Email'} value={'contact.l2md3v@gmail.com'} />
                        </div>
                    </div>
                    <Button hoverClass={'personal-btn'} name="CV" link="#" />
                </div>
                

                {/* card */}
                <div data-aos="fade-up-left" className={cx('card')}>
                    <Card count={'0'} value={'Year(s) Experience'} />
                    <Card count={'4'} value={'Completed Project(s)'} />
                </div>
            </div>
        </div>
    );
}

export default Personal;
