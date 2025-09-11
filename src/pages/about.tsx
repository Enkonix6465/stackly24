import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import FadeIn from '../components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';
export default function About() {
  const { t } = useLanguage();

//  data for the about page
const teamMembers = [
  {
    id: 1,
    name: t('about.team.sarah'),
    role: t('about.team.sarahRole'),
    image: "/images/image8.jpg",
    bio: t('about.team.sarahBio'),
    social: { linkedin: "#", twitter: "#", email: "sarah@shophub.com" }
  },
  {
    id: 2,
    name: t('about.team.michael'),
    role: t('about.team.michaelRole'),
    image: "/images/image9.jpg",
    bio: t('about.team.michaelBio'),
    social: { linkedin: "#", twitter: "#", email: "michael@shophub.com" }
  },
  {
    id: 3,
    name: t('about.team.emily'),
    role: t('about.team.emilyRole'),
    image: "/images/image10.jpg",
    bio: t('about.team.emilyBio'),
    social: { linkedin: "#", twitter: "#", email: "emily@shophub.com" }
  },
  {
    id: 4,
    name: t('about.team.david'),
    role: t('about.team.davidRole'),
    image: "/images/image11.jpg",
    bio: t('about.team.davidBio'),
    social: { linkedin: "#", twitter: "#", email: "david@shophub.com" }
  }
];

const milestones = [
  { year: "2018", title: t('about.milestones.founded'), description: t('about.milestones.foundedDesc') },
  { year: "2019", title: t('about.milestones.firstCustomers'), description: t('about.milestones.firstCustomersDesc') },
  { year: "2020", title: t('about.milestones.funding'), description: t('about.milestones.fundingDesc') },
  { year: "2021", title: t('about.milestones.international'), description: t('about.milestones.internationalDesc') },
  { year: "2022", title: t('about.milestones.products'), description: t('about.milestones.productsDesc') },
  { year: "2023", title: t('about.milestones.marketLeader'), description: t('about.milestones.marketLeaderDesc') }
];

const values = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none"><path fill="#66e1ff" d="M10.326 22.999c-1.472-2.76-5.38-2.892-7.036-.237a4 4 0 0 0-.136.237z"></path><path fill="#66e1ff" d="M18.934 23c0-3.681-3.985-5.982-7.173-4.141a4.78 4.78 0 0 0-2.39 4.14"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M18.934 23c0-3.681-3.985-5.982-7.173-4.141a4.78 4.78 0 0 0-2.39 4.14" strokeWidth={1}></path><path fill="#ffdda1" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M17.496 13.433c0 2.576-2.79 4.187-5.021 2.898a3.35 3.35 0 0 1-1.674-2.898a3.28 3.28 0 0 1 .68-2.009a5.45 5.45 0 0 0 3.672 1.53a6.5 6.5 0 0 0 2.228-.363q.114.413.115.842M6.74 19.629c2.191 0 3.56-2.371 2.465-4.268a2.85 2.85 0 0 0-2.464-1.423c-2.19 0-3.56 2.372-2.464 4.268a2.85 2.85 0 0 0 2.464 1.423" strokeWidth={1}></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M14.152 21.177v1.345" strokeWidth={1}></path><path fill="#c77f67" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M17.38 12.591a6.5 6.5 0 0 1-2.228.364a5.45 5.45 0 0 1-3.672-1.53c1.534-2.057 4.719-1.682 5.733.674q.104.24.168.492" strokeWidth={1}></path><path fill="#66e1ff" d="M6.74 20.848c-1.5 0-2.88.828-3.586 2.152Z"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M6.74 20.848c-1.5 0-2.88.828-3.586 2.152m5.262-1.792a4.05 4.05 0 0 0-1.675-.36" strokeWidth={1}></path><path fill="#c77f67" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M7.69 16.783c.638 0 1.271-.13 1.857-.383c-.28-2.158-2.791-3.204-4.52-1.882a2.8 2.8 0 0 0-.73.83a4.72 4.72 0 0 0 3.392 1.435" strokeWidth={1}></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M20.847 23V1.004" strokeWidth={1}></path><path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M16.06 5.782v.956a.947.947 0 0 1-.956.957H7.932l2.39-2.391l-2.39-2.391h6.216v1.912c0 .529.428.957.956.957z" strokeWidth={1}></path><path fill="#ffbfc5" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.104 1a.956.956 0 0 0-.956.956v2.87c0 .528.428.956.956.956h5.738V1z" strokeWidth={1}></path></g></svg>,
    title: t('about.customerFirst'),
    description: t('about.customerFirstDesc')
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 36 36"><path fill="#a0041e" d="m1 17l8-7l16 1l1 16l-7 8s.001-5.999-6-12s-12-6-12-6"></path><path fill="#ffac33" d="M.973 35s-.036-7.979 2.985-11S15 21.187 15 21.187S14.999 29 11.999 32S.973 35 .973 35"></path><circle cx={8.999} cy={27} r={4} fill="#ffcc4d"></circle><path fill="#55acee" d="M35.999 0s-10 0-22 10c-6 5-6 14-4 16s11 2 16-4c10-12 10-22 10-22"></path><path d="M26.999 5a4 4 0 0 0-3.641 2.36A4 4 0 0 1 24.999 7a4 4 0 0 1 4 4c0 .586-.133 1.139-.359 1.64A3.99 3.99 0 0 0 30.999 9a4 4 0 0 0-4-4"></path><path fill="#a0041e" d="M8 28s0-4 1-5s13.001-10.999 14-10s-9.001 13-10.001 14S8 28 8 28"></path></svg>,
    title: t('about.innovation'),
    description: t('about.innovationDesc')
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 32 32"><g fill="none"><path fill="#ffc83d" d="M11.406 6.156c-5.275-.65-7.156 2-8.062 3.219c-2.469 3.64-.985 7.64.812 9.563c0 0 10.094 9.828 10.375 10.093s.946 1.172 2.547.914c1.398-.225 1.797-1.914 1.797-1.914s1.032.842 2.516 0c1.156-.656 1.109-1.968 1.109-1.968s1.238.62 2.563-.5c1.192-1.01.453-2.782.453-2.782s1.07.176 1.828-.656c1.025-1.125.672-2.547 0-3.187L19.625 10.5l-.594-3.125z"></path><path fill="#d67d00" d="m26.707 22.593l-2.226-2.257a.5.5 0 1 0-.712.703l1.764 1.788l-.017-.046s.582.096 1.191-.188m-2.729 3.557l-2.31-2.563a.5.5 0 0 0-.743.67l1.66 1.841c.199.076.73.232 1.393.053m-3.402 2.2l-1.806-1.913a.5.5 0 1 0-.727.687l.904.957c.199.13.795.45 1.629.269m-2.173.703c-.759.202-2.167.265-3.137-.773l-.776.71l.041.04q.044.042.1.1c.328.34 1.01 1.046 2.447.814c.622-.1 1.046-.49 1.325-.892"></path><path fill="#f59f00" d="M6.375 6.813c-1.687 2.166-4.287 7.775.313 11.625L5.24 19.993l-1.084-1.055C2.36 17.016.875 13.016 3.344 9.375l.04-.055c.525-.706 1.366-1.839 2.95-2.567z"></path><path fill="#d67d00" d="M17.25 23.688c1.203 1.39-.3 3.162-1 3.906L5.669 16.584c1.974-2.002 3.278-2.203 4.16-1.334c.88.869.468 1.484.468 1.484s1.194-.678 2.453.563c1.26 1.241.39 2.187.39 2.187s1.3-.234 2.22.797c1.03 1.157.374 2.5.374 2.5s.79.068 1.516.907"></path><path fill="#ffc83d" d="M12.438 8c3.234-1.297 8.14-1.953 10.39-1.984c1.531 0 3.481.37 5.547 2.797c3.3 3.874.828 8.296-1.125 10.093V17.5s-7.506-6.536-7.75-6.766c-.45-.425-2.302-.296-2.5-.234c-.604.188-1.65.5-3 1c-1.098.407-1.969.078-2.328-.766c-.36-.843-.842-2.09.765-2.734"></path><path fill="#d67d00" d="M28.31 17.71a8.4 8.4 0 0 1-1.06 1.196c-2.76-2.406-8.378-7.325-8.828-7.75s-.974-.406-1.172-.344A79 79 0 0 0 13.75 12c-1.098.407-2.203-.422-2.562-1.266c-.33-.771-.356-1.879.87-2.556l.632-.277l.05-.019c-1.953 1.468-.228 3.262 1.385 3.056c.567-.073 1.5-.266 2.406-.5c.36-.094.713-.259 1.046-.414c.625-.293 1.18-.552 1.58-.243c1.5 1.165 5.976 4.968 9.154 7.929"></path><path fill="#ffc83d" d="M8.82 16.879a2.203 2.203 0 0 0-3.09-.398L3.812 18.1c-.883.735-1.112 2.11-.467 3.002c.584.808 1.48 1.142 2.303.908c-.365.835-.334 1.903.367 2.49c.655.547 1.464.922 2.275.669c-.078.535.08 1.121.63 1.705c.52.551 1.276.826 2.087.643c-.107.572.074 1.208.743 1.853c.819.79 2.08.858 3.265-.23l.772-.9c.62-.78 1.478-2.136.196-3.288c-.443-.398-.952-.619-1.481-.62c.287-.7.282-1.558-.55-2.38c-.52-.513-1.157-.736-1.86-.568c.38-.808.371-1.633-.39-2.385c-.691-.683-1.543-1.007-2.643-.39c.194-.596.148-1.228-.24-1.731"></path><path fill="#d67d00" d="M9.034 17.242L4.31 21.907c.418.186.873.229 1.31.112l3.469-3.426l-.029.016c.15-.459.156-.94-.026-1.367m3.212 2.584L6.96 25.085c.425.171.878.226 1.332.085l3.807-3.786l-.005.001c.245-.52.328-1.048.153-1.559m2.326 3.071l-4.918 4.498c.404.177.865.231 1.345.125l3.513-3.213c.17-.427.23-.912.06-1.41"></path></g></svg>,
    title: t('about.integrity'),
    description: t('about.integrityDesc')
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 20 20"><g fill="none"><path fill="url(#SVGM9XbKBKW)" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></path><path fill="url(#SVGmM6Sne9t)" fillRule="evenodd" d="M7.853 2.291a7 7 0 0 0-.816 1.51c-.368.906-.65 1.995-.826 3.199H2.58q-.195.485-.33 1h3.84a22 22 0 0 0 .001 4h-3.84q.135.515.33 1h3.63c.176 1.204.458 2.293.826 3.199a7 7 0 0 0 .816 1.51A8 8 0 0 0 10 18a8 8 0 0 0 2.147-.291a7 7 0 0 0 .816-1.51c.368-.906.65-1.995.826-3.199h3.63q.195-.485.329-1h-3.84a21.6 21.6 0 0 0 0-4h3.84a8 8 0 0 0-.33-1H13.79c-.176-1.204-.458-2.293-.826-3.199a7 7 0 0 0-.816-1.51A8 8 0 0 0 10 2a8 8 0 0 0-2.147.291M7.223 7c.166-1.076.42-2.035.74-2.822c.298-.733.642-1.292 1.003-1.66C9.324 2.153 9.672 2 10 2s.676.153 1.034.518c.36.368.705.927 1.003 1.66c.32.787.574 1.746.74 2.822zM10 18c.328 0 .676-.153 1.034-.518c.36-.368.705-.927 1.003-1.66c.32-.787.574-1.746.74-2.822H7.223c.167 1.076.421 2.035.741 2.822c.298.733.642 1.292 1.003 1.66c.358.365.706.518 1.034.518m-3-8c0 .692.033 1.362.096 2h5.808A21 21 0 0 0 13 10c0-.692-.033-1.362-.096-2H7.096A21 21 0 0 0 7 10" clipRule="evenodd"></path><defs><radialGradient id="SVGmM6Sne9t" cx={0} cy={0} r={1} gradientTransform="rotate(-135 10.4 3.895)scale(12.7313)" gradientUnits="userSpaceOnUse"><stop stopColor="#25a2f0"></stop><stop offset={0.974} stopColor="#3bd5ff"></stop></radialGradient><linearGradient id="SVGM9XbKBKW" x1={5.556} x2={17.111} y1={4.667} y2={15.333} gradientUnits="userSpaceOnUse"><stop stopColor="#29c3ff"></stop><stop offset={1} stopColor="#2052cb"></stop></linearGradient></defs></g></svg>,
    title: t('about.sustainability'),
    description: t('about.sustainabilityDesc')
  }
];

const achievements = [
  { number: "50K+", label: t('about.achievements.happyCustomers'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"></path><path fill="#fff9bf" d="M12 4.826a11.8 11.8 0 0 1 10.994 7.517c0-.114.006-.228.006-.343a11 11 0 1 0-21.994.343A11.8 11.8 0 0 1 12 4.826"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" strokeWidth={1}></path><path stroke="#191919" d="M6.739 10.326a.24.24 0 0 1 0-.478m.001.478a.24.24 0 0 0 0-.478m10.52.478a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478" strokeWidth={1}></path><path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.705 15.348a.957.957 0 0 1 .927 1.194a4.782 4.782 0 0 1-9.264 0a.956.956 0 0 1 .927-1.194z" strokeWidth={1}></path></g></svg> },
  { number: "100K+", label: t('about.achievements.productsSold'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><path fill="none" d="m15.73 105.38l13.1-26.6V41.2l-13.1 26.61z"></path><path fill="#513118" d="M31.4 32.91h-1.95L12.81 66.77c-.1.21-.16.44-.16.68V112a1.53 1.53 0 0 0 1.54 1.54c.58 0 1.12-.33 1.38-.86l15.82-32.14h87.47V32.91zm-2.57 45.87l-13.1 26.61V67.81l13.1-26.61z"></path><path fill="#513118" d="m14.58 69.12l16.17-32.87V80.8l-16.17 32.87z"></path><path fill="#904427" d="M106.58 39.01H87.41c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c0-1.03-.83-1.86-1.86-1.86"></path><path fill="#ffd393" d="M32.95 45.79h75.49v44.55H32.95z"></path><path fill="#64758b" d="M84.29 43.99H65.11c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.02-.82-1.86-1.85-1.86"></path><path fill="#ffd393" d="M29.03 51.24h75.49v44.55H29.03z"></path><path fill="#eeba73" d="M104.08 67.26s0-1.97-.01-4.93c0-1.48-.01-3.2-.01-5.05v-1.41c-.01-.47.02-.98-.06-1.36c-.15-.82-.64-1.61-1.33-2.11c-.35-.25-.74-.44-1.15-.54c-.42-.11-.8-.12-1.32-.11c-.97.01-1.93.02-2.85.04c-1.85.04-3.57.03-5.05 0s-2.71-.02-3.57-.06c-.86-.03-1.36-.05-1.36-.05a.45.45 0 0 1-.43-.47c.01-.24.2-.42.43-.43c0 0 .49-.02 1.36-.05c.86-.04 2.09-.04 3.57-.06c1.48-.03 3.2-.04 5.05 0c.92.01 1.88.02 2.85.04c.45 0 1.06.01 1.59.16c.54.15 1.05.4 1.49.74c.89.67 1.5 1.68 1.68 2.78c.09.57.05 1.04.06 1.51v1.41c0 1.85-.01 3.57-.01 5.05c-.01 2.96-.01 4.93-.01 4.93c0 .25-.2.45-.45.45s-.47-.23-.47-.48M39.4 51.66s-.37.04-.94.08c-.56.04-1.31.06-2.06.06s-1.5-.02-2.06-.06s-.94-.09-.94-.09a.46.46 0 0 1-.4-.51c.03-.21.19-.37.4-.4c0 0 .37-.05.94-.09c.56-.04 1.31-.06 2.06-.06c.75.01 1.5.03 2.06.06c.56.04.94.08.94.08c.25.03.43.25.4.5c-.02.25-.19.41-.4.43"></path><path fill="#855731" d="M62.62 48.83H43.44c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.03-.82-1.86-1.85-1.86"></path><path fill="#ffd393" d="M25.28 56.54h75.49v44.55H25.28z"></path><path fill="#eeba73" d="M41.57 56.98s-.73.06-1.83.1c-1.1.05-2.56.07-4.02.08c-1.46-.01-2.93-.02-4.02-.08c-1.1-.04-1.83-.11-1.83-.11a.576.576 0 0 1-.52-.61c.02-.28.25-.49.52-.52c0 0 .73-.06 1.83-.11s2.56-.07 4.02-.08c1.46.01 2.93.03 4.02.08c1.1.05 1.83.1 1.83.1c.31.02.55.3.52.61a.57.57 0 0 1-.52.54m59.04 16.25s-.01-3.15-.02-7.87c0-1.18 0-2.46-.01-3.81c-.02-.66.04-1.42-.09-1.97c-.14-.6-.45-1.18-.91-1.64c-.45-.46-1.04-.79-1.69-.92c-.6-.13-1.41-.06-2.18-.07c-1.55.01-3.12.02-4.7.02c-3.15.01-6.29.05-9.24.03s-5.7-.03-8.06-.05c-2.36-.01-4.33-.03-5.7-.06c-1.38-.02-2.16-.04-2.16-.04c-.25 0-.45-.21-.44-.46c0-.24.2-.44.44-.44c0 0 .79-.01 2.16-.04c1.38-.03 3.34-.05 5.7-.06s5.11-.03 8.06-.05s6.1.02 9.24.03c1.57.01 3.15.02 4.7.02c.39 0 .77 0 1.16.01c.36-.01.85.02 1.25.11c.84.2 1.6.64 2.18 1.24s.97 1.35 1.13 2.14c.16.85.07 1.49.09 2.18c0 1.35-.01 2.63-.01 3.81c-.01 4.72-.02 7.87-.02 7.87c0 .25-.2.45-.45.45c-.22.02-.43-.18-.43-.43"></path><path fill="#dc7f27" d="M41.44 54.69H22.26c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.03-.83-1.86-1.85-1.86"></path><path fill="#ffd393" d="M20.4 62.96h75.49v44.55H20.4z"></path><path fill="#eeba73" d="M95.83 69.66s-.01-.89-.02-2.44c0-.4-.01-.79-.11-1.17a3.39 3.39 0 0 0-3.27-2.57c-5.33.02-12.43.04-19.54.07c-7.11-.02-14.21-.04-19.54-.06c-5.33-.05-8.88-.08-8.88-.08c-.25 0-.45-.21-.45-.46s.2-.45.45-.45c0 0 3.55-.03 8.88-.08c5.33-.02 12.44-.04 19.54-.06c7.11.02 14.22.05 19.55.07c1.54.02 2.82.86 3.51 1.85c.73.97.85 2.18.81 2.94c-.01 1.55-.02 2.44-.02 2.44c0 .25-.21.45-.46.45s-.45-.2-.45-.45"></path><path fill="#855731" d="M102.12 67.2H12.65v46.48c0 1.06.86 1.93 1.93 1.93h88.75c.73 0 1.4-.42 1.73-1.08l13.82-28.46V32.79z"></path><path fill="#513118" d="M104.29 70.72s.04.65.1 1.78c.04 1.13.15 2.75.2 4.68c.05 1.94.14 4.2.17 6.62c.05 2.42.05 5.01.06 7.59c-.01 2.58-.02 5.17-.06 7.59c-.03 2.42-.12 4.68-.17 6.62s-.15 3.55-.19 4.68c-.07 1.13-.1 1.78-.1 1.78c-.03.54-.49.94-1.03.91a.963.963 0 0 1-.91-.91s-.04-.65-.1-1.78c-.04-1.13-.15-2.75-.19-4.68c-.05-1.94-.13-4.2-.17-6.62s-.05-5.01-.06-7.59c.01-2.58.02-5.17.06-7.59c.03-2.42.12-4.68.17-6.62s.15-3.55.2-4.68c.07-1.13.1-1.78.1-1.78c.03-.54.49-.94 1.03-.91c.47.03.86.43.89.91"></path><path fill="#fff2d4" d="M41.83 85.51h28.83v16.07H41.83z"></path><path fill="#f7b618" d="M66.76 85.51v12.38H45.73V85.51h-3.9v16.07h28.83V85.51z"></path><path fill="#513118" d="M29.18 20.91H119v12.52H29.18z"></path><path fill="#6e451d" d="m118.99 33.42l-16.75-5.58V15.32l16.75 5.59zm-89.62 0l-16.69-5.58V15.32l16.69 5.59z"></path><path fill="#855731" d="M12.42 15.32h89.82v12.52H12.42z"></path><path fill="#f7b618" d="M56.25 23.73a4.11 4.11 0 0 0-4.11 4.11h8.22a4.11 4.11 0 0 0-4.11-4.11m0 47.6a4.11 4.11 0 0 0 4.11-4.11h-8.22a4.11 4.11 0 0 0 4.11 4.11"></path><path fill="#60371a" d="m115.01 34.65l-13 .2c-3.9.03-8.45.07-13.33.11c-4.88.01-10.08.03-15.28.05c-5.2-.02-10.4-.03-15.28-.05c-4.88-.04-9.43-.08-13.33-.11l-13-.2a.655.655 0 0 1-.64-.66c.01-.35.29-.63.64-.64l13-.2c3.9-.03 8.45-.07 13.33-.11c4.88 0 10.09-.02 15.29-.04c5.2.02 10.4.03 15.28.05c4.88.04 9.43.08 13.33.11l13 .2c.36.01.64.3.64.66c-.02.34-.3.62-.65.63"></path></svg> },
  { number: "24/7", label: t('about.achievements.supportAvailable'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path stroke="#306cfe" d="M29.167 37.5H18.75a12.5 12.5 0 0 1-7.208-22.687m9.291-2.313H31.25a12.5 12.5 0 0 1 7.208 22.688"></path><path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></path></g></svg> },
  { number: "99.9%", label: t('about.achievements.uptime'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.684 3.603c.521-.659.03-1.603-.836-1.603h-6.716a1.06 1.06 0 0 0-.909.502l-5.082 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.849z"></path></svg> },
  { number: "15+", label: t('about.achievements.countries'), icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 20 20"><g fill="none"><path fill="url(#SVGM9XbKBKW)" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></path><path fill="url(#SVGmM6Sne9t)" fillRule="evenodd" d="M7.853 2.291a7 7 0 0 0-.816 1.51c-.368.906-.65 1.995-.826 3.199H2.58q-.195.485-.33 1h3.84a22 22 0 0 0 .001 4h-3.84q.135.515.33 1h3.63c.176 1.204.458 2.293.826 3.199a7 7 0 0 0 .816 1.51A8 8 0 0 0 10 18a8 8 0 0 0 2.147-.291a7 7 0 0 0 .816-1.51c.368-.906.65-1.995.826-3.199h3.63q.195-.485.329-1h-3.84a21.6 21.6 0 0 0 0-4h3.84a8 8 0 0 0-.33-1H13.79c-.176-1.204-.458-2.293-.826-3.199a7 7 0 0 0-.816-1.51A8 8 0 0 0 10 2a8 8 0 0 0-2.147.291M7.223 7c.166-1.076.42-2.035.74-2.822c.298-.733.642-1.292 1.003-1.66C9.324 2.153 9.672 2 10 2s.676.153 1.034.518c.36.368.705.927 1.003 1.66c.32.787.574 1.746.74 2.822zM10 18c.328 0 .676-.153 1.034-.518c.36-.368.705-.927 1.003-1.66c.32-.787.574-1.746.74-2.822H7.223c.167 1.076.421 2.035.741 2.822c.298.733.642 1.292 1.003 1.66c.358.365.706.518 1.034.518m-3-8c0 .692.033 1.362.096 2h5.808A21 21 0 0 0 13 10c0-.692-.033-1.362-.096-2H7.096A21 21 0 0 0 7 10" clipRule="evenodd"></path><defs><radialGradient id="SVGmM6Sne9t" cx={0} cy={0} r={1} gradientTransform="rotate(-135 10.4 3.895)scale(12.7313)" gradientUnits="userSpaceOnUse"><stop stopColor="#25a2f0"></stop><stop offset={0.974} stopColor="#3bd5ff"></stop></radialGradient><linearGradient id="SVGM9XbKBKW" x1={5.556} x2={17.111} y1={4.667} y2={15.333} gradientUnits="userSpaceOnUse"><stop stopColor="#29c3ff"></stop><stop offset={1} stopColor="#2052cb"></stop></linearGradient></defs></g></svg> },
  { number: "200+", label: t('about.achievements.teamMembers'), icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 512 512"><path fill="#000" d="m462.541 316.3l-64.344-42.1l24.774-45.418A79.1 79.1 0 0 0 432.093 192v-72a103.941 103.941 0 0 0-174.609-76.477L279.232 67a71.989 71.989 0 0 1 120.861 53v72a46.8 46.8 0 0 1-5.215 21.452L355.962 284.8l89.058 58.274a42.16 42.16 0 0 1 19.073 35.421V432h-72v32h104v-85.506a74.06 74.06 0 0 0-33.552-62.194"></path><path fill="#000" d="m318.541 348.3l-64.343-42.1l24.773-45.418A79.1 79.1 0 0 0 288.093 224v-72A104.21 104.21 0 0 0 184.04 47.866C126.723 47.866 80.093 94.581 80.093 152v72a78 78 0 0 0 9.015 36.775l24.908 45.664L50.047 348.3A74.02 74.02 0 0 0 16.5 410.4L16 496h336.093v-85.506a74.06 74.06 0 0 0-33.552-62.194m1.552 115.7H48.186l.31-53.506a42.16 42.16 0 0 1 19.073-35.421l88.682-58.029l-39.051-71.592A46.84 46.84 0 0 1 112.093 224v-72a72 72 0 1 1 144 0v72a46.8 46.8 0 0 1-5.215 21.452L211.962 316.8l89.058 58.274a42.16 42.16 0 0 1 19.073 35.421Z"></path></svg> }
];

const testimonials = [
  {
    name: t('about.testimonials.alex'),
    role: t('about.testimonials.alexRole'),
    content: t('about.testimonials.alexContent'),
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    name: t('about.testimonials.maria'),
    role: t('about.testimonials.mariaRole'),
    content: t('about.testimonials.mariaContent'),
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    name: t('about.testimonials.james'),
    role: t('about.testimonials.jamesRole'),
    content: t('about.testimonials.jamesContent'),
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5
  }
];


  


  return (
    <>
      <Head>
        <title>About Us - Stackly</title>
        <meta name="description" content="Learn about Stackly's mission, values, and commitment to e-commerce excellence" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        {/* Main content with top margin for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio2.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <FadeIn direction="up" delay={0.3} duration={1.2}>
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    {t('about.title')}
                  </h1>
                  <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-8">
                    {t('about.description')}
                  </p>
                  <div className="flex justify-center">
                    <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg text-center">
                      Connect With Us
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Mission & Vision Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Mission */}
                <FadeIn direction="left" delay={0.2} duration={0.8}>
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('about.mission')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t('about.missionText')}
                    </p>
                  </div>
                </FadeIn>
                
                {/* Vision */}
                <FadeIn direction="right" delay={0.4} duration={0.8}>
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('about.vision')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t('about.visionText')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('about.values')}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('about.valuesSubtitle')}
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <FadeIn key={index} direction="up" delay={0.3 + (index * 0.1)} duration={0.8}>
                    <div className="text-center group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                        <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('about.achievements')}
                  </h2>
                  <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                    {t('about.achievementsSubtitle')}
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-200 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-indigo-100 font-medium text-sm">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('about.team')}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('about.teamSubtitle')}
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
                      <div className="relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                          {member.name}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {member.bio}
                        </p>
                        <div className="flex space-x-3">
                          <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.885v1.233h.041c.402-.762 1.384-1.566 2.849-1.566 3.046 0 3.607 2.006 3.607 4.617v4.716z"/>
                            </svg>
                          </a>
                          <a href={member.social.twitter} className="text-gray-400 hover:text-indigo-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
                            </svg>
                          </a>
                          <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-indigo-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Milestones Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('about.journey')}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('about.journeySubtitle')}
                  </p>
                </div>
              </FadeIn>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-indigo-200 dark:bg-indigo-800 h-full"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                      
                      {/* Content */}
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 text-white overflow-hidden">
            {/* Background Image with Black Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
              style={{ backgroundImage: 'url(/images/CTA1.jpg)' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('about.cta.title')}
                </h2>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                  {t('about.cta.subtitle')}
                </p>
                <div className="flex justify-center">
                  <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                    {t('about.cta.getStarted')}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
