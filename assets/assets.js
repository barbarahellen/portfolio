import icon from './img/icon.png';
import profile from './img/profile.jpg';

import moon from './icons/moon.svg';
import sun from './icons/sun.svg';
import arrow_black from './icons/arrow_black.svg';
import menu_black from './icons/menu_black.svg';
import close_black from './icons/close_black.svg';
import download_icon from './icons/download_icon.svg';
import hand_icon from './icons/hand_icon.svg';
import right_arrow_white from './icons/right_arrow_white.svg';
import right_arrow from './icons/right_arrow.svg';

import projects from './icons/projects.svg';
import education from './icons/education.svg';
import languages from './icons/languages.svg';

import vscode from './icons/tools/vscode.svg';
import git from './icons/tools/git.svg';
import github from './icons/tools/github.svg';
import trello from './icons/tools/trello.svg';
import figma from './icons/tools/figma.svg';
import mysql from './icons/tools/mysql.svg';
import nextjs from './icons/tools/nextjs.svg';
import tailwindcss from './icons/tools/tailwindcss.svg';
import javascript from './icons/tools/javascript.svg';
import typescript from './icons/tools/typescript.svg';
import linkedin from './icons/tools/linkedin.svg';


import frontend from './icons/frontend.svg';
import ux from './icons/ux.svg';
import world from './icons/world.svg';
import send_icon from './icons/send_icon.svg';
import email from './icons/email.svg';
import header_bg_color from './img/header-bg-color.png';

export const assets = {
    icon, moon, arrow_black, menu_black, close_black,
    download_icon, hand_icon, right_arrow_white, 
    right_arrow, profile, projects, education, languages, 
    vscode, git, github, trello, figma, mysql, frontend, 
    nextjs, tailwindcss, javascript, typescript, linkedin,
    ux, world, send_icon, ux, email, sun, header_bg_color

}

export const workData = [
    {
        title: 'Enetrix', 
        description: 'Digital platform that catalogs and analyzes Brazil’s bilateral/multilateral energy agreements. (Undergraduate Research Project)', 
        bgImage: '/enetrix.png', 
        link: 'https://enetrix.ufpb.br/',
    },
    {
        title: 'SciWiki', 
        description: 'A Marketplace for Open Science Projects. (Hackathon project)', 
        bgImage: '/sciwiki.png',
        link:  'https://github.com/barbarahellen/SciWiki',

    },   
    {
        title: 'Expert notes', 
        description: 'Automatic audio-to-text converter with React.', 
        bgImage: '/expert_notes.png',
        link:  'https://nlw-expert-react.vercel.app/',

    },
    {
        title: 'i-Eco', 
        description: 'UX design of an app that simplifies recycling and trading of used electronics. (Hackathon project)', 
        bgImage: '/ieco.png',        
        link:  'https://www.figma.com/proto/2iLE2uiCHT5AZAV4ORs4FG/i-Eco?node-id=0-627&p=f&t=567yUC2KRxy9Qoop-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A627',

    },  
    {
        title: 'Notify', 
        description: 'UX design of an app that streamlines internship applications for students. (Group project)', 
        bgImage: '/notify.png',        
        link:  'https://www.figma.com/proto/oqRFMO70o1b8dohOIn5EB1/Notify?node-id=2-518&t=8z3jlG8qHxrYzbSN-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A494',

    }, 
    {
        title: 'Laboratory of Interaction and Media (UFPB)', 
        description: 'UX and development of the lab website.', 
        bgImage: '/lim.png',        
        link:  'https://lim.tec.br/',

    }, 
    
];


export const serviceData = [
    // {
    //     icon: assets.world, 
    //     title: 'Web design', 
    //     description: 'The process of creating the visual appearance, layout, and user experience (UX) of a website.', 
    //     link: ''
    // },
    {
        icon: assets.ux, 
        title: 'UX/UI design', 
        description: 'The process of creating products (websites, apps, physical products) that are meaningful, intuitive, and enjoyable for users.', 
        link: ''
    },
    {
        icon: assets.frontend, 
        title: 'Frontend development', 
        description: 'The practice of building the visible, interactive parts of a website or web application that users see and interact with directly.', 
        link: ''
    },
   
]

export const infoList = [
    {
        icon: assets.languages, 
        iconDark: assets.languages, 
        title: 'Languages', 
        description: 'Javascript, Typescript, React, Next.JS, Tailwind CSS, Python'
    },
    {
        icon: assets.education, 
        iconDark: assets.education, 
        title: 'Education', 
        description: 'B.S. in Computer Science'
    },
    {
        icon: assets.projects, 
        iconDark: assets.icon, 
        title: 'Projects', 
        description: 'Built more than 5 projects'
    }
];

export const toolsData = [
    assets.figma, 
    assets.vscode, 
    assets.javascript,
    assets.typescript,
    assets.nextjs,
    assets.tailwindcss,
    assets.git,
    assets.github,
    assets.mysql,
    assets.trello, 
];