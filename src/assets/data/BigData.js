import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import java from '../img/java.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import sass from '../img/sass.png';
import tailwindcss from '../img/tailwindcss.png';
import typescript from '../img/typescript.png';
import vue from '../img/vue.png';
import cpp from '../img/cpp.png';
import csharp from '../img/c-sharp.png';

import searchtheme1 from '../img/projects/searchtheme1.png';
import CV1 from '../img/projects/CV1.png';
import web1 from '../img/projects/web1.png';
import web2 from '../img/projects/web2.png';
import web3 from '../img/projects/web3.png';
import web4 from '../img/projects/web4.png';
import profile1 from '../img/projects/profile1.png';
import profile2 from '../img/projects/profile2.png';
import profile3 from '../img/projects/profile3.png';
import profile4 from '../img/projects/profile4.png';

const MyProject = [
    {
        id: 1,
        name: 'blog',
        bgImage: web1,
        type: 'html',
        img: [web1, web2, web3, web4],
        app: 'Blog Web',
        desc: 'Sản phẩm đầu tiên, trang web blog cá nhân sử dụng HTML, CSS và JS. Web về thông tin cá nhân bản thân, các sở thích và mục tiêu tương lai!',
        created: '2022',
        role: 'Frontend',
        lib: 'null',
        frontend: 'HTML, CSS, JS',
        backend: 'null',
        demo: 'https://kentjuno7z.github.io/Web-Pho-Nguoi-Viet-Part2/phonguoiviet.html',
    },
    {
        id: 2,
        name: 'chrome themes',
        bgImage: searchtheme1,
        type: 'html',
        img: [searchtheme1],
        app: 'Chrome Themes App',
        desc: 'Trang Web giúp trình duyệt bạn đẹp hơn được viết bằng HTML, CSS và JS. ',
        created: '2022',
        role: 'Frontend',
        lib: 'null',
        frontend: 'HTML, CSS, JS',
        backend: 'null',
        demo: 'https://github.com/l2md3v/Demo-Search',
    },
    {
        id: 3,
        name: 'card profile',
        bgImage: CV1,
        type: 'lib',
        img: [CV1],
        app: 'CARD',
        desc: 'Trang web card profile đc viết bằng lib astro',
        created: '2022',
        frontend: 'null',
        role: 'FrontEnd',
        backend: 'null',
        lib: 'Astro',
        demo: 'https://github.com/l2md3v/card-profile-discord',
    },
    {
        id: 4,
        name: 'profile',
        bgImage: profile1,
        type: 'react',
        img: [profile1, profile2, profile3, profile4],
        app: 'Profile React',
        desc: 'Trang web profile được làm chỉnh chu viết bằng ReactJS, sau hơn tháng tìm tòi và code nên',
        created: '2022',
        role: 'Frontend',
        lib: 'ReactJs Scss',
        frontend: 'ReactJS',
        backend: 'null',
        demo: 'chx có',
    },
];

const SkillData = [
    {
        id: 1,
        logo: html,
        skillName: 'html',
    },
    {
        id: 2,
        logo: css,
        skillName: 'css',
    },
    {
        id: 3,
        logo: js,
        skillName: 'js',
    },
    {
        id: 4,
        logo: java,
        skillName: 'java',
    },
    {
        id: 5,
        logo: react,
        skillName: 'react',
    },
    {
        id: 7,
        logo: tailwindcss,
        skillName: 'tailwind css',
    },
    {
        id: 6,
        logo: bootstrap,
        skillName: 'bootstrap',
    },
    {
        id: 7,
        logo: sass,
        skillName: 'sass',
    },
    {
        id: 8,
        logo: typescript,
        skillName: 'typescript',
    },
    {
        id: 9,
        logo: csharp,
        skillName: 'c sharp',
    },
    {
        id: 10,
        logo: vue,
        skillName: 'vue',
    },
    {
        id: 11,
        logo: cpp,
        skillName: 'cpp',
    },
];

const EduData = [
    {
        id: 1,
        time: '2017-2020',
        title: 'Tinh Gia 1 High School',
        desc: 'Một ngôi trường với bao cuộc vui và kỷ niệm khó quên',
    },
    {
        id: 2,
        time: '2020-2025',
        title: 'Hanoi University of Mining and Geology',
        desc: 'Một nơi mà tôi đang học để trở thành một kỹ sư CNTT',
    },
    {
        id: 3,
        time: '2020-',
        title: 'F8 - Fullstack',
        desc: 'Nơi đào tạo lập trình viên Web Fullstack',
    },
];

export { MyProject, SkillData, EduData };
